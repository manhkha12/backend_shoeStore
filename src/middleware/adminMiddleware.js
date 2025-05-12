module.exports = function checkAdmin(req, res, next) {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Bạn không có quyền truy cập!" });
    }
    next();
};

