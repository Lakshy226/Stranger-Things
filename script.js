const hero = document.getElementById("hero");
const reveal = document.getElementById("reveal");

let targetX = 0;
let targetY = 0;
let x = 0;
let y = 0;

let radius = 0;
let baseRadius = 0;
let pulseDir = 1;

// Pointer enters (mouse OR touch)
hero.addEventListener("pointerenter", (e) => {
  const rect = hero.getBoundingClientRect();
  targetX = e.clientX - rect.left;
  targetY = e.clientY - rect.top;

  x = targetX;
  y = targetY;

  baseRadius = rect.width * 0.28;
  radius = baseRadius;
});

// Pointer moves (mouse + touch)
hero.addEventListener("pointermove", (e) => {
  const rect = hero.getBoundingClientRect();
  targetX = e.clientX - rect.left;
  targetY = e.clientY - rect.top;
});

// Pointer leaves
hero.addEventListener("pointerleave", () => {
  radius = 0;
});

function animate() {
  // Smooth follow
  x += (targetX - x) * 0.08;
  y += (targetY - y) * 0.08;

  // Subtle pulse
  radius += pulseDir * 0.3;
  if (radius > baseRadius + 12 || radius < baseRadius - 8) {
    pulseDir *= -1;
  }

  reveal.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;

  requestAnimationFrame(animate);
}

animate();
