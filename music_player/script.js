const songs = [
    {
        title: "Love Me like You Do",
        artist: "Ellie Goulding",
        src: "song1.mp3",
        cover: "songimg1.jpeg",
        theme: "pink"
    },
    {
        title: "The Cheer thrills",
        artist: "Sean Paul",
        src: "song2.mp3",
        cover: "songimg2.jpg",
        theme: "yellow"
    },
    {
         title: "No Lie",
        artist: "Sean Paul",
        src: "song3.mp3",
        cover: "songimgg3.webp",
        theme: "blue"
    }
];

let index = 0;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const player = document.getElementById("player");

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;

    player.classList.remove("pink", "yellow", "blue");
    player.classList.add(song.theme);
}

function playSong() {
    audio.play();
    playBtn.textContent = "⏸";
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = "▶";
}

playBtn.addEventListener("click", () => {
    audio.paused ? playSong() : pauseSong();
});

document.getElementById("next").onclick = () => {
    index = (index + 1) % songs.length;
    loadSong(songs[index]);
    playSong();
};

document.getElementById("prev").onclick = () => {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(songs[index]);
    playSong();
};

audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
    }
});

progress.addEventListener("input", () => {
    if (audio.duration) {
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
});

audio.addEventListener("ended", () => {
    index = (index + 1) % songs.length;
    loadSong(songs[index]);
    playSong();
});

// Load first song
loadSong(songs[index]);