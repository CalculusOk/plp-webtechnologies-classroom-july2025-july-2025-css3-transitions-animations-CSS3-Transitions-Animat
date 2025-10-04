<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mood Changer</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>🌈 Mood Changer 🌈</h1>
        <p>Click the button below to change the page’s vibe!</p>
        <button id="moodBtn">Change Mood</button>
        <div id="emoji" class="emoji">😊</div>
    </div>

    <script src="script.js"></script>
</body>
</html>


//style.css
/* ===== Basic Page Styling ===== */
body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #a2d2ff;
    margin: 0;
    transition: background-color 1s ease; /* Smooth transition */
}

.container {
    text-align: center;
}

/* ===== Button Styling ===== */
button {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    background-color: #0077b6;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

button:hover {
    background-color: #023e8a;
    transform: scale(1.1); /* Hover transition */
}

/* ===== Emoji Animation ===== */
.emoji {
    font-size: 80px;
    margin-top: 30px;
    opacity: 0;
}

/* Define keyframe animation for emoji pop effect */
@keyframes pop {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1.3);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* When triggered, this class will animate the emoji */
.show {
    animation: pop 0.6s ease forwards;
}



// script.js

// ===== Demonstrates Scope, Parameters, Return Values, and Animation Triggers =====

// Global variable to store possible moods
const moods = [
    { color: "#a2d2ff", emoji: "😊" },
    { color: "#ffc8dd", emoji: "😍" },
    { color: "#bde0fe", emoji: "🤩" },
    { color: "#caffbf", emoji: "😎" },
    { color: "#ffd6a5", emoji: "🤗" }
];

// Get references to DOM elements
const body = document.body;
const moodBtn = document.getElementById("moodBtn");
const emoji = document.getElementById("emoji");

// ===== Function demonstrating parameters and return values =====
function getRandomMood(array) {
    // Scope: 'array' exists only inside this function
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]; // Return a random mood object
}

// ===== Function to change mood and trigger animation =====
function changeMood() {
    const mood = getRandomMood(moods); // Call function and get mood object
    body.style.backgroundColor = mood.color; // Apply new color

    // Update emoji and trigger CSS animation
    emoji.textContent = mood.emoji;
    emoji.classList.remove("show"); // reset animation
    void emoji.offsetWidth; // trick to restart CSS animation
    emoji.classList.add("show");
}

// ===== Event Listener =====
moodBtn.addEventListener("click", changeMood);
