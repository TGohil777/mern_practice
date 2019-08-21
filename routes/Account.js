const express = require('express')
const router = express.Router();
const models = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.route('/register').post(async (req , res ) => {
    const {FirstName , LastName , UserName , Email , City , Password } = req.body;
    try {
        const account = await models.Account.findOne({ where: { Email: Email } });
    
        if (account) {
            errors.Email = "Email already exists";
            return res.status(400).json(errors);
          }
          
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password , salt);

            if(hashedPassword) {
                const created = await models.Account.create({
                    FirstName,
                    LastName,
                    UserName,
                    Email,
                    City,
                    Password: hashedPassword
                });

                if(created) {
                    return res.status(200).json({
                        success: true ,
                        message: 'Successfully created a new account'
                    })
                }
            }
        } catch (error) {
            return res.status(400).json({
                message: error.message
              });
    }
})

router.route("/login").post(async(req, res) => {
    const {UserName, Password} = req.body;
    try {
        const user = await models.Account.findOne({
            where: {
                UserName: UserName
            }
        });
        if(!user){
            errors.UserName = "UserName not found";
            return res.status(404).json(errors)
        }
        const authenticatedUser = await bcrypt.compare(Password, user.Password);
        if (authenticatedUser) {
            const token = await jwt.sign(authenticatedUser, "TWINKLE", {expiresIn: 36000});
            res.status(200).json({
                msg: "Successfully logged in",
                token: `Bearer ${token}`
            })
        } else {
            res.status(404).json({
                msg: "Incorrect password"
            })
        }
    } catch(err) {
        return res.status(400).json({
            msg: error.message
        });
    }

});

module.exports = router;