const express = require('express');
const { register, login, getUserProfile, updateUserProfile, deleteUserAccount,updatePasswordByUserId,verifyAuthToken ,refreshToken   } = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware');
const checkAdmin = require('../middleware/adminMiddleware'); // ✅ Thêm middleware admin

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticateToken, getUserProfile);
router.put('/profile', authenticateToken, updateUserProfile);
router.delete('/profile', authenticateToken, deleteUserAccount);
router.put('/update-password/:id', updatePasswordByUserId);

// ✅ Làm mới token (không cần authenticateToken)
router.post('/refresh_token', refreshToken);

// ✅ Xác minh token nếu cần
router.get('/auth_token', authenticateToken, verifyAuthToken);


// 🛑 Route chỉ admin mới có quyền truy cập
router.get('/admin/users', authenticateToken, checkAdmin, (req, res) => {
    // Admin lấy danh sách tất cả user
    db.query("SELECT user_id, username, email, role FROM users", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ users: results });
    });
});

module.exports = router;