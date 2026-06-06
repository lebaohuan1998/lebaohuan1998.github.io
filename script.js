// ===== RSVP Form =====
document.getElementById("rsvpForm").addEventListener("submit", function (event) {
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

// ===== Album Animation =====
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

// ===== Back To Top Button =====
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    btn.style.opacity = window.scrollY > 300 ? "1" : "0";
  });

  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// ===== Hearts Animation =====
document.addEventListener("DOMContentLoaded", function () {
  const heartsContainer = document.querySelector(".hearts");
  const emojis = ["❤️", "💖"];

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.animationDelay = `${Math.random() * 6}s`;
    heart.style.fontSize = `${Math.random() * 2 + 1}em`;

    heartsContainer.appendChild(heart);
  }
});

// ===== Play Music Button =====
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("playMusic");
  const music = document.getElementById("bgMusic");

  // Khi click nút phát nhạc
  btn.addEventListener("click", function () {
    if (music.paused || music.muted) {
      music.muted = false;
      music.play().then(() => {
        btn.innerHTML = "<i class='fa fa-volume-up'></i>"; // icon bật tiếng
      }).catch(err => console.log("Không thể phát:", err));
    } else {
      music.pause();
      btn.innerHTML = "<i class='fas fa-volume-mute'></i>"; // icon tắt tiếng
    }
  });

  // Khi click lần đầu vào bất kỳ chỗ nào trên trang
  document.addEventListener("click", function firstClick() {
    if (music.paused || music.muted) {
      music.muted = false;
      music.play().then(() => {
        btn.innerHTML = "<i class='fa fa-volume-up'></i>";
      }).catch(err => console.log("Không thể phát:", err));
    }
    // Sau khi phát nhạc thì bỏ listener để không gọi lại nhiều lần
    document.removeEventListener("click", firstClick);
  });
});

