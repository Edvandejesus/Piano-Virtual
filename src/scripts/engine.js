const pianoKeys = document.querySelectorAll(".piano-keys .key");
let audio = new Audio();

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => {
        const keyData = key.dataset.key;
        console.log(keyData);
        playTune(keyData);

        key.classList.add("active");
        setTimeout(() => {
            key.classList.remove("active");
        }, 150);
    });
});

document.addEventListener("keydown", (e) => {
    const key = e.key;
    console.log(key);
    playTune(key);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    if (clickedKey) {
        clickedKey.classList.add("active");
        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    }
});
