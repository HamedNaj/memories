import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.js'


export const signin = async (req, res) => {
  const {email, password} = req.body
  try {
    const existingUser = await User.findOne({email})
    if (!existingUser) res.status(404).json({message: 'user does not exist'})
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
    if (!isPasswordCorrect) res.status(404).json({message: 'invalid credentials'})
    const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: '1h'})
    res.status(200).json({result: existingUser, token})
  } catch (e) {
    res.status(500).json({message: 'something went wrong'})
  }
}
export const signup = async (req, res) => {
  const {email, password, firstName, lastName, confirmPassword} = req.body
  try {
    const existingUser = await User.findOne({email})
    if (existingUser) res.status(400).json({message: 'user already exist'})
    if (password !== confirmPassword) res.status(400).json({message: 'passwords do not match'})
    const hashedPassword = await bcrypt.hash(password, 12)
    const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})
    const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: '1h'})
    res.status(200).json({result, token})
  } catch (e) {
    res.status(500).json({message: 'something went wrong'})
  }
}
