let matrixActive = false;

function enterMatrix() {
    if (matrixActive) return;
    matrixActive = true;

    // Fade out initial content
    document.querySelector('.title').classList.add('hidden');
    document.querySelector('.matrix-btn').style.display = 'none';

    // Fade to black
    const overlay = document.querySelector('.fade-overlay');
    overlay.style.opacity = '1';

    setTimeout(() => {
        // Start matrix effect
        const canvas = document.getElementById('matrixCanvas');
        canvas.classList.add('matrix-active');
        startMatrixRain();

        // Remove black overlay
        overlay.style.opacity = '0';

        // Show welcome text after a delay
        setTimeout(() => {
            document.getElementById('welcomeText').style.opacity = '1';
        }, 1000);

        // Show matrix interface
        setTimeout(() => {
            document.getElementById('matrixInterface').style.opacity = '1';
        }, 2000);

        // Redirect to your portfolio after 6 seconds
        setTimeout(() => {
            window.location.href = '../pages/home.html'; 
        }, 6000);

    }, 1000);
}

function startMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    const matrixChars = "0100101001010101001001111001010101010";

    function draw() {
        // Semi-transparent black background for a strong trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Bright green text color
        ctx.fillStyle = '#0f0';
        ctx.font = '14px "Courier New"';

        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    // Start the animation
    setInterval(draw, 33);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (matrixActive) {
        const canvas = document.getElementById('matrixCanvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Get the button element
    const matrixBtn = document.querySelector('.matrix-btn');

    // Add a click event listener
    matrixBtn.addEventListener('click', enterMatrix);

    // Add mouseenter and mouseleave listeners for the glitch effect
    matrixBtn.addEventListener('mouseenter', function() {
        this.style.textShadow = '2px 2px 0 #0f0, -2px -2px 0 #f0f';
    });

    matrixBtn.addEventListener('mouseleave', function() {
        this.style.textShadow = 'none';
    });
});