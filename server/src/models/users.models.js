import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET_ACCESS_EXPIRATION, SECRET_ACCESS_TOKEN, SECRET_REFRESH_EXPIRATION } from '../config/env.config';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
    },
}, { timestamps: true })

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        // Hash password logic here
        this.password = await bcrypt.hash(this.password, 10);
        return next();
    }
    next();
})

userSchema.methods.isPasswordCurrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.getAccesToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        SECRET_ACCESS_TOKEN,
        SECRET_ACCESS_EXPIRATION
    )
}

userSchema.methods.getRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        SECRET_REFRESH_TOKEN,
        SECRET_REFRESH_EXPIRATION
    )
}

const User = mongoose.model("User", userSchema);

export default User;