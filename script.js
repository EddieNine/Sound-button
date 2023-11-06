let isPlaying = false;

document.getElementById("start-disco").addEventListener("click", function() {
    if (!isPlaying){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("disco-ball").style.display = "block";
        const music = document.getElementById("music");
        music.play();
        const discoBall = document.getElementById("disco-ball");
        discoBall.style.animation = "rotate 5s linear infinite, colorChange 2s alternate infinite";
        discoBall.style.animationTimingFunction = "cubic-bezier(0.2, 0.7, 0.6, 0.9";
        let colorChangeKeyframes = `@keyframes colorChange {
            0% { background: radial-gradient(circle at 50% 50%, red, blue, green); }
            25% { background: radial-gradient(circle at 50% 50%, blue, green, red); }
            50% { background: radial-gradient(circle at 50% 50%, green, red, blue); }
            75% { background: radial-gradient(circle at 50% 50%, red, blue, green); }
            100% { background: radial-gradient(circle at 50% 50%, blue, green, red); }
        }`;
        let styleSheet = document.styleSheets[0];
        styleSheet.insertRule(colorChangeKeyframes, styleSheet.cssRules.length);
        
        isPlaying = true;

        const lyricsContainer = document.getElementById("lyrics-container");
        lyricsContainer.style.animation = "lyricsUp 120s linear infinite";

    } else {
        const music = document.getElementById("music");
        music.pause();

        const discoBall = document.getElementById("disco-ball");
        discoBall.style.animation = "none";

        isPlaying = false;
    }
});

document.getElementById("pause-disco").addEventListener("click", function() {
    if(isPlaying){
        const music = document.getElementById("music");
        music.pause();

        const discoBall = document.getElementById("disco-ball");
        discoBall.style.animation = "none";

        isPlaying = false;

        const lyricsContainer = document.getElementById("lyrics-container");
        lyricsContainer.style.animation = "none";
    }
});