import express from 'express';
import uploadPics from '../Middleware/uploadPhotos.js';
import userModel from '../Models/UserModel.js';

const router = express.Router();

router.get('/getuser/:userEmail', async (req, res) => {
    const { userEmail } = req.params;
    const { password } = req.query; 

    try {
        const user = await userModel.findOne({ email: userEmail, password: password });

        if (!user) {
            return res.status(404).json({ message: 'User not found or invalid credentials' });
        }
        console.log('user ',user)
        res.status(200).json({
            userName: user.username,
            userEmail: user.email,
            profileUrl: `http://localhost:3000/profile-picture/${user.profilePic}`
        });
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

router.post('/signup', uploadPics.single('profilePic'),async (req, res) => {

    try {
        const { username, email, password } = req.body;
        const profilePic = req.file ? req.file.filename : 'default.jpg'; // Handle profile picture

        const newUser = new userModel({
            username,
            email,
            password,
            profilePic, // Store the profile picture
        });

        await newUser.save(); // Save user to the database
        res.status(201).send('User signed up successfully!');
    } catch (error) {
        console.error('Error in saving user:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;