function typeWriter(element, text, speed = 50) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);

function setupMusic() {
    const music = document.getElementById("bgMusic");
    if (!music) return;

    music.volume = 0.35;

    const savedTime = sessionStorage.getItem("musicTime");
    if (savedTime) music.currentTime = savedTime;

    music.play().catch(() => {});

    setInterval(() => {
        sessionStorage.setItem("musicTime", music.currentTime);
    }, 1000);
}

function startMusicAndGo(page) {
    const music = document.getElementById("bgMusic");
    music.volume = 0.35;
    music.play();
    sessionStorage.setItem("musicStarted", "true");
    location.href = page;
}

function toggleMute() {
    const music = document.getElementById("bgMusic");
    music.muted = !music.muted;
}
