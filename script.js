const hero = document.getElementById("hero");
const reveal = document.getElementById("reveal");

int mouseX = 0;
int mouseY = 0;

let x = 0;
let y = 0;

let radius = 120;
let pulseDir = 1;

hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

hero.addEventListener("mouseleave"() => {
    reveal.style.clipPath = "circle(0px at 0 0)";
});

function animate() {
    x += (mouseX - x) * 0.07;
    y += (mouseY - y) * 0.07;

    radius += pulseDir * 0.35;
    if(radius > 135 || radius < 120)
        pulseDir *= -1;
    reveal.style.clipPath = `circle($ {radius}px at ${x}px ${y}px)`;

    requestAnimateFrame(animate);
}

animate();
