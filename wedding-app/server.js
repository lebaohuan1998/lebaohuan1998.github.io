const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // phục vụ file tĩnh

// Route nhận RSVP
app.post("/rsvp", (req, res) => {
  const { guestName, message } = req.body;
  const content = `Tên khách mời: ${guestName}\nLời chúc: ${message}\n\n`;

  fs.appendFile("rsvp.txt", content, (err) => {
    if (err) {
      res.status(500).send("Lỗi khi lưu dữ liệu");
    } else {
      res.send("Mình đã nhận được lời chúc của bạn! Mãi iu!"); // Gửi phản hồi thành công
    }
  });
});

app.listen(3000, () => console.log("Server chạy ở http://localhost:3000"));
// Route hiển thị danh sách lời chúc
app.get("/guestbook", (req, res) => {
  fs.readFile("rsvp.txt", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Lỗi khi đọc dữ liệu");
    } else {
      // Trả về nội dung file dưới dạng HTML đơn giản
      res.send(`<h2>Danh sách lời chúc</h2><pre>${data}</pre>`);
    }
  });
});
