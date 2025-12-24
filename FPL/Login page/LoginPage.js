
// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Form toggle functionality
function setupFormToggle() {
    const signupToggle = document.getElementById('signupToggle');
    const signinToggle = document.getElementById('signinToggle');
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');
    const formTitle = document.getElementById('formTitle');

    signupToggle.addEventListener('click', () => {
        signupToggle.classList.add('active');
        signinToggle.classList.remove('active');
        signupForm.style.display = 'block';
        signinForm.style.display = 'none';
        formTitle.textContent = 'Join the Game';
        hideMessage();
    });

    signinToggle.addEventListener('click', () => {
        signinToggle.classList.add('active');
        signupToggle.classList.remove('active');
        signinForm.style.display = 'block';
        signupForm.style.display = 'none';
        formTitle.textContent = 'Welcome Back';
        hideMessage();
    });
}

// Password strength checker
function setupPasswordStrength() {
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('strengthBar');

    passwordInput.addEventListener('input', (e) => {
        const password = e.target.value;
        const strength = calculatePasswordStrength(password);
        
        strengthBar.style.width = strength.percentage + '%';
        strengthBar.style.background = strength.color;
    });
}

function calculatePasswordStrength(password) {
    let score = 0;
    if (password.length >= 8) score += 25;
    if (password.match(/[a-z]/)) score += 25;
    if (password.match(/[A-Z]/)) score += 25;
    if (password.match(/[0-9]/)) score += 12.5;
    if (password.match(/[^a-zA-Z0-9]/)) score += 12.5;

    let color;
    if (score < 50) color = '#ff3366';
    else if (score < 75) color = '#ffaa00';
    else color = '#00ff88';

    return { percentage: score, color };
}

// Form validation and submission
function setupFormHandling() {
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');

    signupForm.addEventListener('submit', handleSignup);
    signinForm.addEventListener('submit', handleSignin);

    // Password confirmation validation
    const confirmPassword = document.getElementById('confirmPassword');
    const password = document.getElementById('password');

    confirmPassword.addEventListener('input', () => {
        if (confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }
    });
}

function handleSignup(e) {
    e.preventDefault();
    const loading = document.getElementById('signupLoading');
    const button = e.target.querySelector('.submit-btn span');
    
    showLoading(loading, button);
    
    // Simulate API call
    setTimeout(() => {
        hideLoading(loading, button);
        showMessage('Account created successfully! Welcome to Fantasy Bullseye!', 'success');
        // Here you would typically redirect or show next steps
    }, 2000);
}

function handleSignin(e) {
    e.preventDefault();
    const loading = document.getElementById('signinLoading');
    const button = e.target.querySelector('.submit-btn span');
    
    showLoading(loading, button);
    
    // Simulate API call
    setTimeout(() => {
        hideLoading(loading, button);
        showMessage('Welcome back, Champion! Redirecting to your dashboard...', 'success');
        // Here you would typically redirect to the main app
    }, 1500);
}

function showLoading(loadingElement, buttonText) {
    loadingElement.style.display = 'inline-block';
    buttonText.style.opacity = '0.7';
}

function hideLoading(loadingElement, buttonText) {
    loadingElement.style.display = 'none';
    buttonText.style.opacity = '1';
}

function showMessage(text, type) {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = text;
    messageBox.className = `message ${type}`;
    messageBox.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(hideMessage, 5000);
}

function hideMessage() {
    const messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'none';
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupFormToggle();
    setupPasswordStrength();
    setupFormHandling();
});

// Add some keyboard shortcuts for better UX
document.addEventListener('keydown', (e) => {
    // Switch forms with Ctrl + Tab
    if (e.ctrlKey && e.key === 'Tab') {
        e.preventDefault();
        const signupToggle = document.getElementById('signupToggle');
        const signinToggle = document.getElementById('signinToggle');
        
        if (signupToggle.classList.contains('active')) {
            signinToggle.click();
        } else {
            signupToggle.click();
        }
    }
});