import mongoose, { trusted } from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique
    },
    pasword: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: required
    },
    lastlogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,


}, { timestamps: true });


const User = mongoose.model('User', userSchema);
export default User;

//createdAt and updatedAt fields will be automitaclly added to the document
