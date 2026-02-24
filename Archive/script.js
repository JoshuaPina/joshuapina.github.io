/**
 * Flag to track if the matrix animation is currently active.
 * @type {boolean}
 */
let matrixActive = false;

/**
 * Initiates the Matrix entry sequence.
 *
 * This function handles the transition from the landing page to the matrix effect.
 * It hides the initial content, fades to black, starts the matrix rain animation,
 * and then triggers the display of the loading text.
 *
 * @returns {void}
 */
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

        // Start the sequential loading text animation
        displayLoadingText();

    }, 1000);
}

/**
 * Starts the Matrix digital rain animation on the canvas.
 *
 * This function initializes the canvas, sets up the columns and drops,
 * and starts the animation loop that draws the falling characters.
 *
 * @returns {void}
 */
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

    /**
     * Draws a single frame of the matrix rain animation.
     */
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

/**
 * Displays the loading text sequentially with a matrix-style reveal.
 *
 * This function manages the timing of revealing the welcome text,
 * the matrix interface, and the individual loading lines. Finally,
 * it redirects the user to the terminal home page.
 *
 * @returns {void}
 */
function displayLoadingText() {
    const welcomeText = document.getElementById('welcomeText');
    const matrixInterface = document.getElementById('matrixInterface');
    const matrixLines = matrixInterface.querySelectorAll('.matrix-line');

    // Show main welcome text first
    setTimeout(() => {
        welcomeText.style.opacity = '1';
    }, 1000);

    // Show the matrix interface container
    setTimeout(() => {
        matrixInterface.style.opacity = '1';
    }, 2000);

    // Loop through each loading line and reveal it with a delay
    setTimeout(() => {
        for (let i = 0; i < matrixLines.length; i++) {
            setTimeout(() => {
                matrixLines[i].style.opacity = '1';
            }, i * 500); // 500ms delay between each line
        }

        // Redirect to your portfolio after the lines have loaded
        setTimeout(() => {
            window.location.href = 'pages/terminal/terminal_home.html';
        }, 3000 + (matrixLines.length * 500)); // Dynamic delay based on number of lines

    }, 2000);
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