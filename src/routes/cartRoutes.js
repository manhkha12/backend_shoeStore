const express = require('express');
const { getCart, addToCart, updateCart, deleteFromCart } = require('../controllers/cartController');
const router = express.Router();

router.get('/:userId', getCart); // Lấy danh sách sản phẩm trong giỏ hàng của user
router.post('/', addToCart); // Thêm sản phẩm vào giỏ
router.put('/:id', updateCart); // Cập nhật số lượng sản phẩm
router.delete('/:id', deleteFromCart); // Xóa sản phẩm khỏi giỏ

module.exports = router;