const SERVER_IP = "play.spacetown-rp.com:7777";

const cursorGlow = document.querySelector(".cursor-glow");
const toast = document.getElementById("toast");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const copyButtons = [
  document.getElementById("copyIpBtn"),
  document.getElementById("copyIpBtnBottom"),
];

// ตั้งค่า IP จากจุดเดียว
const ipTexts = [
  document.getElementById("serverIp"),
  document.getElementById("serverIpBottom"),
];
ipTexts.forEach((el) => {
  if (el) el.textContent = SERVER_IP;
});

// เมนูมือถือ
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});

// แสงตามเมาส์
window.addEventListener("mousemove", (e) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

// คัดลอก IP
function showToast(text = "คัดลอก IP แล้ว") {
  toast.textContent = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

async function copyServerIp() {
  try {
    await navigator.clipboard.writeText(SERVER_IP);
    showToast("คัดลอก IP แล้ว");
  } catch (error) {
    showToast(SERVER_IP);
  }
}

copyButtons.forEach((button) => {
  if (button) button.addEventListener("click", copyServerIp);
});

// เลขผู้เล่นออนไลน์แบบจำลอง
const onlinePlayers = document.getElementById("onlinePlayers");
setInterval(() => {
  if (!onlinePlayers) return;
  const randomOnline = Math.floor(Math.random() * 45) + 95;
  onlinePlayers.textContent = randomOnline;
}, 3500);

// Reveal animation ตอนเลื่อนหน้า
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

// เอฟเฟกต์แสงบนการ์ด
const glowCards = document.querySelectorAll(".about-card, .feature-card, .job-card");
glowCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  });
});
