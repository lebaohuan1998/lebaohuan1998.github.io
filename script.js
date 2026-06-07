
// ===== Album Animation =====
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".album-grid img");
  images.forEach((img, index) => {
    img.style.opacity = 0;
    img.style.transform = "translateY(30px)";
    setTimeout(() => {
      img.style.transition = "opacity 2s ease, transform 2s ease";
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

  for (let i = 0; i < 15; i++) {
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
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("playMusic");

  function fadeInAudio(audio, duration = 2000) {
    audio.volume = 0;
    let step = 0.05;
    let interval = duration / (1 / step);
    let fade = setInterval(() => {
      if (audio.volume < 1) {
        audio.volume = Math.min(1, audio.volume + step);
      } else {
        clearInterval(fade);
      }
    }, interval);
  }

  function playMusic() {
    music.muted = false;
    music.play().then(() => {
      fadeInAudio(music, 2000);
      btn.innerHTML = "<i class='fa fa-volume-up'></i>";
    }).catch(err => console.log("Không thể phát:", err));
  }

  // Chỉ cần touchstart lần đầu
  function firstTouch() {
    playMusic();
    document.removeEventListener("touchstart", firstTouch);
  }

  document.addEventListener("touchstart", firstTouch);

  // Nút bật/tắt
  btn.addEventListener("click", function () {
    if (music.paused) {
      playMusic();
    } else {
      music.pause();
      btn.innerHTML = "<i class='fas fa-volume-mute'></i>";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // chỉ chạy 1 lần
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.album-grid img');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // chỉ chạy 1 lần cho mỗi ảnh
      }
    });
  }, { threshold: 0.2 }); // khi 20% ảnh vào viewport thì hiện

  images.forEach((img, index) => {
    // xen kẽ: ảnh chẵn từ trái, ảnh lẻ từ phải
    if (index % 2 === 0) {
      img.classList.add('from-left');
    } else {
      img.classList.add('from-right');
    }
    observer.observe(img);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("luckymoney");
  const popup = document.getElementById("qrPopup");
  const closeBtn = document.getElementById("closePopup");

  btn.addEventListener("click", () => {
    popup.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  // Đóng pop-up khi click ra ngoài
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });
});
// Ngày cưới: 25/07/2026 lúc 10:00
const eventDate = new Date("July 25, 2026 10:00:00").getTime();
const countdownEl = document.getElementById("countdown");

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `
    <h2>Đếm ngược tới ngày cưới</h2>
    <p>${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây</p>
  `;

  if (distance < 0) {
    clearInterval(timer);
    countdownEl.innerHTML = "<h2>Ngày trọng đại đã đến!</h2>";
  }
}, 1000);
