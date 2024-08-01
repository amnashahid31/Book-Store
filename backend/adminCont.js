const express = require("express");
const { adminModel } = require('./models/admin.js');
const database = require('./database.js');

async function registerAdmin() {
    try {
        // Counts number of admins inside the model
        const totalAdmins = await adminModel.countDocuments();
        if (totalAdmins === 0) {
            const newAdmin = new adminModel({
                username: 'admin',
                password: 'aPass' // Store password as plain text
            });
            await newAdmin.save();
            console.log("Admin account is created successfully.");
        } else {
            console.log("Admin account with these credentials already exists.");
        }
    } catch (err) {
        console.log("Error in admin account creation:", err);
    }
}

registerAdmin();
