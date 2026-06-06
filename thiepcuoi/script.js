document.getElementById("rsvpForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("guestName").value;
  const attendance = document.getElementById("attendance").value;
  const message = document.getElementById("message").value;

  const confirmationDiv = document.getElementById("confirmation");
  confirmationDiv.innerHTML = `
    Xin cảm ơn <strong>${name}</strong> đã phản hồi.<br>
    Trạng thái tham dự: <strong>${attendance}</strong><br>
    Lời chúc: "${message}"
  `;

  document.getElementById("rsvpForm").reset();
});
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".album-grid img");
  images.forEach((img, index) => {
    img.style.opacity = 0;
    img.style.transform = "translateY(30px)";
    setTimeout(() => {
      img.style.transition = "opacity 1s ease, transform 1s ease";
      img.style.opacity = 1;
      img.style.transform = "translateY(0)";
    }, index * 300); // hiệu ứng lần lượt từng ảnh
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTop");

  // Hiện nút khi cuộn xuống
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.style.opacity = "1";
    } else {
      btn.style.opacity = "0";
    }
  });

  // Cuộn mượt lên đầu trang khi click
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const heartsContainer = document.querySelector(".hearts");
  const emojis = ["❤️","💖"];

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // vị trí ngẫu nhiên
    heart.style.left = `${Math.random() * window.innerWidth}px`;

    // delay ngẫu nhiên để bay so le
    heart.style.animationDelay = `${Math.random() * 6}s`;

    // kích thước ngẫu nhiên
    heart.style.fontSize = `${Math.random() * 2 + 1}em`;

    heartsContainer.appendChild(heart);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("playMusic");
  const music = document.getElementById("bgMusic");

  // phát nhạc khi click nút
  btn.addEventListener("click", function () {
    if (music.paused || music.muted) {
      music.muted = false;
      music.play().then(() => {
        btn.textContent = "🔊"; // icon bật tiếng
      }).catch(err => console.log("Không thể phát:", err));
    } else {
      music.pause();
      btn.textContent = "🔇"; // icon tắt tiếng
    }
  });
});
