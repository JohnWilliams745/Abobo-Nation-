// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Modal Controls
const authModal = document.getElementById("auth-modal");
const openAuthModal = document.getElementById("open-auth-modal");
const closeModal = document.querySelector(".close");

openAuthModal.addEventListener("click", () => {
    authModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    authModal.style.display = "none";
});

// Sign Up
document.getElementById("signup-btn").addEventListener("click", () => {
    const email = document.getElementById("auth-email").value;
    const password = document.getElementById("auth-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Sign Up Successful");
            authModal.style.display = "none";
        })
        .catch(error => alert(error.message));
});

// Login
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("auth-email").value;
    const password = document.getElementById("auth-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Login Successful");
            document.getElementById("logout-btn").classList.remove("hidden");
            authModal.style.display = "none";
        })
        .catch(error => alert(error.message));
});

// Logout
document.getElementById("logout-btn").addEventListener("click", () => {
    auth.signOut().then(() => {
        alert("Logged Out");
        document.getElementById("logout-btn").classList.add("hidden");
    });
});

// Email Subscription
document.getElementById("subscribe-btn").addEventListener("click", () => {
    alert("Subscribed Successfully!");
});
// Google Sign-In
document.getElementById("google-signin-btn").addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            alert(`Welcome, ${user.displayName}!`);
            document.getElementById("logout-btn").classList.remove("hidden");
        })
        .catch(error => alert(error.message));
});