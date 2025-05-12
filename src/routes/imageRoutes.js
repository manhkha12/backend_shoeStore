const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const  {getProductImage,uploadProductImage}= require("../controllers/imageController");
const verifyToken = require("../middleware/authMiddleware"); // ✅ Thêm middleware xác thực token

// Route upload ảnh
router.post("/upload", verifyToken, upload.single("image"), uploadProductImage);

// Route lấy ảnh
router.get("/:filename", getProductImage);

module.exports = router;
