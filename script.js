// ไฟเมาส์เรืองแสง
const light = document.querySelector(".cursor-light");

document.addEventListener("mousemove", (e) => {
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
});

// เอฟเฟกต์แสงบนการ์ด
const hoverItems = document.querySelectorAll(".card, .project, .profile-card");

hoverItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const rect = item.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    item.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(0, 245, 255, 0.16),
        rgba(255, 255, 255, 0.08) 45%
      )
    `;
  });

  item.addEventListener("mouseleave", () => {
    item.style.background = "";
  });
});
