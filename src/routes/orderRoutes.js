const express = require('express');
const { getUserOrders,createOrder, getOrder, updateOrderStatus, deleteOrder ,getOrdersByStatus,getAllOrders} = require('../controllers/orderController');
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware"); // Import middleware
const checkAdmin = require('../middleware/adminMiddleware'); // ✅ Thêm middleware admin
router.get('/user/:user_id', getUserOrders);
router.post('/', createOrder); // Tạo đơn hàng
router.get('/:id', getOrder); // Lấy chi tiết đơn hàng
router.put('/:id', updateOrderStatus); // Cập nhật trạng thái đơn hàng
router.delete('/:id', deleteOrder); // Xóa đơn hàng chưa xác nhận
router.get("/user/orders/:status", authenticateToken, getOrdersByStatus);
// Admin xem toàn bộ đơn hàng
router.get("/admin/orders", authenticateToken, checkAdmin, getAllOrders);
module.exports = router;