import express from 'express';
import cors from 'cors';
import connectDB from './Config/connectToDatabase.js';
import routes from './Routes/userProfileRoute.js';
import dotenv from 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/profile-picture', express.static("profilePics"));
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use('/',routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));