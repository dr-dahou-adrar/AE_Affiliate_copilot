// DB user schema

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min : 3,
        max : 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    phone: {
        type: String,
        // required: true,
    },
    address: {
        type: String,
        // required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        // required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
        // required: true,
    },
}, {
    timestamps: true,
});

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min : 0,
    },
    img: {
        type: String,
    },
    stock: {
        type: Number,
        required: true,
        min : 0,
    },
    color: {
        type: String,
        // required: true,
    },
    size: {
        type: String,
        // required: true,
    },
}, {
    timestamps: true,
});

// check if User table exists, if not create it
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);