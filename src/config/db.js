// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });

// connection.connect(err => {
//   if (err) {
//     console.error('Lỗi kết nối MySQL: ' + err.message);
//     return;
//   }
//   console.log('Kết nối MySQL thành công!');
// });

// module.exports = connection;

const mysql = require('mysql2/promise'); // Sử dụng phiên bản promise

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(connection => {
    console.log("Kết nối MySQL thành công!");
    connection.release(); // giải phóng connection khi test xong
  })
  .catch(err => {
    console.error("Lỗi kết nối MySQL:", err.message);
  });

module.exports = pool;
