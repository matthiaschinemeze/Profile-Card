function updateUserTime() {
  const timeEl = document.getElementById("user-time");
  timeEl.textContent = new Date().toLocaleTimeString();
}

// Initialize time once
updateUserTime();

// Optionally update every second
setInterval(updateUserTime, 1000);

// Avatar upload
const fileInput = document.getElementById("avatar-upload");
const avatarImg = document.getElementById("user-avatar");

// Load saved avatar from localStorage (if exists)
const savedAvatar = localStorage.getItem("profile-avatar");
if (savedAvatar) {
  avatarImg.src = savedAvatar;
}

// Handle new uploads
fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
        const imageDataUrl = e.target.result;
        avatarImg.src = imageDataUrl;

        // Save to localStorage
        localStorage.setItem("profile-avatar", imageDataUrl);
        };
        reader.readAsDataURL(file);
    }
});