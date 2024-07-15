import express from 'express';
import {  UpdateUser,CreateUser, getUserById, getUsers, Loging } from '../controller/userController.js';


const router=express.Router();

router.route('/').get(getUsers).post(CreateUser)
router.route('/:id').get(getUserById).put(UpdateUser)
router.route('/loging').post(Loging)
export default router
