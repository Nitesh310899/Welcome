const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionSection = document.getElementById('question-section');
const celebrationSection = document.getElementById('celebration-section');
const starsContainer = document.getElementById('starsContainer');
const particlesContainer = document.getElementById('particles-container');

// Create Twinkling Stars (or Rose Stars)
function createStars() {
    const starCount = 50;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create Rose Particles Following Mouse
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.87) {
        createParticle(e.pageX, e.pageY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = '🌹';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.fontSize = Math.random() * 25 + 15 + 'px';
    particle.style.opacity = Math.random() * 0.8 + 0.3;
    
    particlesContainer.appendChild(particle);
    
    // Animate particle
    const randomX = (Math.random() - 0.5) * 150;
    const randomY = (Math.random() - 0.5) * 150 - 50;
    const duration = Math.random() * 1500 + 1000;
    
    particle.animate([
        { transform: 'translate(0, 0)', opacity: 1 },
        { transform: `translate(${randomX}px, ${randomY}px)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    setTimeout(() => particle.remove(), duration);
}

// Yes Button - Show Celebration
yesBtn.addEventListener('click', () => {
    questionSection.style.display = 'none';
    celebrationSection.classList.remove('hidden');
    
    // Create lots of falling roses
    createMultipleFallingRoses();
    
    // Create sparkles with roses
    createRoseSparkles();
    
    // Create background roses
    createBackgroundRoses();
    
    // Play celebration sounds
    playSuccessSound();
});

// No Button - Move Randomly with Funny Effects
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

function moveButton(e) {
    e.preventDefault();
    
    // Add moving class to escape flex container
    noBtn.classList.add('moving');
    
    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Button approximate dimensions
    const btnWidth = 100;
    const btnHeight = 45;
    
    // Leave margin from edges
    const margin = 50;
    
    // Calculate valid range
    const minX = margin;
    const maxX = windowWidth - btnWidth - margin;
    const minY = margin;
    const maxY = windowHeight - btnHeight - margin;
    
    // Generate random position within safe bounds
    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    
    const rotation = (Math.random() - 0.5) * 8;
    
    // Apply styles
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '99999';
    noBtn.style.transform = `rotate(${rotation}deg)`;
    noBtn.style.visibility = 'visible';
    noBtn.style.opacity = '1';
    noBtn.style.display = 'block';
    
    // Bounce animation
    noBtn.style.animation = 'bounce_effect 0.2s ease';
}

// Add bounce effect CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce_effect {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(10deg); }
    }
`;
document.head.appendChild(style);

// Create LOTS of Falling Roses
function createMultipleFallingRoses() {
    const roseVariants = ['🌹', '🌷', '🥀', '💐', '🌸'];
    
    // Create 80+ falling roses
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const rose = document.createElement('div');
            rose.className = 'petal';
            rose.textContent = roseVariants[Math.floor(Math.random() * roseVariants.length)];
            rose.style.left = Math.random() * window.innerWidth + 'px';
            rose.style.top = '-100px';
            rose.style.fontSize = Math.random() * 50 + 30 + 'px';
            rose.style.setProperty('--tx', (Math.random() - 0.5) * 300 + 'px');
            rose.style.setProperty('--ty', window.innerHeight + 200 + 'px');
            
            document.body.appendChild(rose);
            
            const duration = Math.random() * 4000 + 4000;
            setTimeout(() => rose.remove(), duration);
        }, i * 50);
    }
}

// Create Rose Sparkles
function createRoseSparkles() {
    const sparklesContainer = document.querySelector('.sparkles-container');
    
    for (let i = 0; i < 40; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = '🌹';
        
        const tx = (Math.random() - 0.5) * 400;
        const ty = (Math.random() - 0.5) * 400 - 50;
        
        sparkle.style.left = '50%';
        sparkle.style.top = '20px';
        sparkle.style.fontSize = Math.random() * 30 + 15 + 'px';
        sparkle.style.setProperty('--tx', tx + 'px');
        sparkle.style.setProperty('--ty', ty + 'px');
        sparkle.style.animationDelay = Math.random() * 0.8 + 's';
        
        sparklesContainer.appendChild(sparkle);
        
        const duration = Math.random() * 1200 + 1200;
        setTimeout(() => sparkle.remove(), duration);
    }
}

// Create Background Roses (Static/Floating)
function createBackgroundRoses() {
    const roseVariants = ['🌹', '🌷', '🥀'];
    
    for (let i = 0; i < 25; i++) {
        const rose = document.createElement('div');
        rose.style.position = 'fixed';
        rose.style.fontSize = Math.random() * 60 + 40 + 'px';
        rose.style.left = Math.random() * 100 + '%';
        rose.style.top = Math.random() * 100 + '%';
        rose.style.opacity = Math.random() * 0.3 + 0.1;
        rose.style.pointerEvents = 'none';
        rose.style.zIndex = '0';
        rose.textContent = roseVariants[Math.floor(Math.random() * roseVariants.length)];
        
        const duration = Math.random() * 6000 + 4000;
        const delayStart = Math.random() * 1000;
        
        rose.style.animation = `float ${(duration / 1000)}s ease-in-out ${(delayStart / 1000)}s infinite`;
        
        document.body.appendChild(rose);
        
        setTimeout(() => rose.remove(), 25000);
    }
}

// Play Success Sound
function playSuccessSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Rose Day chord - create a romantic melody
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        
        notes.forEach((frequency, index) => {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(audioContext.destination);
            
            osc.frequency.value = frequency;
            osc.type = 'sine';
            
            const startTime = audioContext.currentTime + index * 0.15;
            const duration = 0.2;
            
            gain.setValueAtTime(0.3, startTime);
            gain.exponentialRampToValueAtTime(0.01, startTime + duration);
            
            osc.start(startTime);
            osc.stop(startTime + duration);
        });
    } catch (e) {
        console.log('Audio not supported');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    
    // Add hover effects to Yes button
    yesBtn.addEventListener('mouseenter', () => {
        yesBtn.style.transform = 'scale(1.15)';
    });
    
    yesBtn.addEventListener('mouseleave', () => {
        yesBtn.style.transform = 'scale(1)';
    });
});
