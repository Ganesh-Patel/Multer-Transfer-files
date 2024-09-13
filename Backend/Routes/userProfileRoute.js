import express from 'express';
import sharp from 'sharp';
import userModel from '../Models/UserModel.js';
import multer from 'multer';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv/config';
import streamifier from 'streamifier';
import nodemailer from 'nodemailer';

const router = express.Router();

router.get('/getuser/:userEmail', async (req, res) => {
    const { userEmail } = req.params;
    const { password } = req.query; 

    try {
        const user = await userModel.findOne({ email: userEmail, password: password });

        if (!user) {
            return res.status(404).json({ message: 'User not found or invalid credentials' });
        }
        res.status(200).json({
            userName: user.username,
            userEmail: user.email,
            profileUrl: user.profilePic
        });
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  
  // Multer setup to process files in memory only
  const storage = multer.memoryStorage(); 
  const uploadPicsCloud = multer({ storage });
  
  const uploadToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
        const cld_upload_stream = cloudinary.v2.uploader.upload_stream(
            {
                folder: "Profiles" 
            },
            (error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            }
        );

        streamifier.createReadStream(buffer).pipe(cld_upload_stream);
    });
};

// Signup route
router.post('/signup', uploadPicsCloud.single('profilePic'), async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let profilePicUrl = 'default.jpg'; 
        // Check if a file was uploaded
        if (req.file) {
            console.log('File received, starting Cloudinary upload');
            try {
                const uploadResult = await uploadToCloudinary(req.file.buffer);
                profilePicUrl = uploadResult.secure_url;   
            } catch (uploadError) {
                console.error('Error during Cloudinary upload:', uploadError);
                return res.status(500).send('Error uploading image to Cloudinary');
            }
        }
        // Save user to the database
        const newUser = new userModel({
            username,
            email,
            password,
            profilePic: profilePicUrl, 
        });

        await newUser.save(); 

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to MyApp!',
            text: `Hello ${username},
          
          Thank you for signing up with MyApp! We're thrilled to have you on board.
          
          Your registration is now complete, and you can start exploring all the features we offer. If you have any questions or need assistance, feel free to reach out to us.
          
          Best regards,
          Ganesh Patel
          Admin, MyApp
          
          If you did not sign up for this account, please ignore this email or contact us at support@myapp.com to report any issues.`
          };
          

        await transporter.sendMail(mailOptions);

        console.log('User registered successfully');
        res.status(201).send('User signed up successfully!');
    } catch (error) {
        console.error('Error in saving user:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;