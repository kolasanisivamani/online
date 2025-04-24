const express = require('express');
const { registerUser, loginUser, getProfile, getAllStudents, updateStudent, updateProfile } = require('../controllers/userController');
const authenticate = require('../middlewares/auth');

const router = express.Router();

// Common routes
router.post('/register', registerUser);
router.post('/login', loginUser);
//profile
router.get('/profile/:id', authenticate(), getProfile);
router.put('/profile/:id', authenticate(), updateProfile);

// Admin routes
router.get('/admin/students', authenticate('admin'), getAllStudents);
router.put('/admin/student/:id', authenticate('admin'), updateStudent);

module.exports = router;
