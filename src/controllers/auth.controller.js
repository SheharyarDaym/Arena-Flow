const bcrypt = require("bcrypt")
const User = require("../models/User.model")

const {generateAccessToken, generateRefreshToken} = require("../utils/jwt")


// Register User
const register = async (req,res) => {
    try{
        const {fullName, email, password} = req.body
        const existingUser = await User.findOne({ email })
        if(existingUser){
            return res.status(400).json({message: "User already exist"})
        }

        const hashPassword = await bcrypt.hash(password, 12)

        const user = await User.create({
            fullName,
            email,
            password: hashPassword
        })

        return res.status(200).json({message: "User registered successfully"})
    }

    catch(error){
        return res.status(500).json({ error: error.message })
    }
}


// Login
const login = async (req,res) => {
    try{
        const {email, password} = req.body 

        const user = await User.findOne({ email }).select("+password")
        if(!user){
            return res.status(400).json({message: "User doesn't exits"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message: "Wrong password"})
        }

        const payload = {
            userId: user._id,
            role: user.role,
            organization: user.organization
        }

        const accessToken = generateAccessToken(payload)
        const refreshToken = generateRefreshToken(payload)

        return res.status(200).json({accessToken, refreshToken})
    }

    catch(error){
        return res.status(500).json({ error: error.message })
    }
}


module.exports = {register, login}