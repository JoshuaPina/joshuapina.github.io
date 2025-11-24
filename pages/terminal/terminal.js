// Command history and current state
const commandHistory = [];
let historyIndex = -1;

// User data - customize this!
const userData = {
    name: "Joshua Piña",
    title: "Husband | Dad | Data Scientist | Program Manager | Army Veteran",
    email: "joshuadariuspina@gmail.com",
    github: "https://github.com/JoshuaPina",
    githubOrg: "https://github.com/gsu-ds",
    linkedin: "https://linkedin.com/in/joshuadpina",
    website: "https://joshuapina.github.io",
    visualPortfolio: "https://joshuapina.github.io/pages/home.html",
    skills: ["Python", "Machine Learning", "GeoSpatial", "PostgreSQL", "Computer Vision", "Git"],
    about: "The world is a giant graph, and I'm just a guy, traversing node by node, and learning along the way..."
};

// State management
let awaitingChoice = true;
let commandsEnabled = false;

// Available commands
const commands = {
    help: () => {
        return `
Available commands:

  <span class="info">about</span>      - Learn more about me
  <span class="info">skills</span>     - View my technical skills
  <span class="info">contact</span>    - Get my contact information
  <span class="info">projects</span>   - See my projects
  <span class="info">social</span>     - View my social media links
  <span class="info">gui</span>        - Switch to visual portfolio
  <span class="info">clear</span>      - Clear the terminal
  <span class="info">help</span>       - Show this help message
  <span class="info">echo</span>       - Echo back the text
  <span class="info">date</span>       - Show current date and time
        `.trim();
    },

    gui: () => {
        printOutput('<span class="info">Redirecting to visual portfolio...</span>');
        setTimeout(() => {
            window.location.href = userData.visualPortfolio;
        }, 1000);
        return null;
    },

    about: () => {
        return `
<span class="success">About Me</span>
────────────────────────────────────────
Name:  ${userData.name}
Role:  ${userData.title}

${userData.about}
        `.trim();
    },

    skills: () => {
        const skillsList = userData.skills.map(skill => `  • ${skill}`).join('\n');
        return `
<span class="success">Technical Skills</span>
────────────────────────────────────────
${skillsList}
        `.trim();
    },

    contact: () => {
        return `
<span class="success">Contact Information</span>
────────────────────────────────────────
Email:    ${userData.email}
Website:  <a href="${userData.website}" target="_blank">${userData.website}</a>

Feel free to reach out!
        `.trim();
    },

    social: () => {
        return `
<span class="success">Social Links</span>
────────────────────────────────────────
GitHub:        <a href="${userData.github}" target="_blank">${userData.github}</a>
GitHub Org:    <a href="${userData.githubOrg}" target="_blank">${userData.githubOrg}</a>
LinkedIn:      <a href="${userData.linkedin}" target="_blank">${userData.linkedin}</a>
        `.trim();
    },

    projects: () => {
        return `
<span class="success">Featured Projects</span>
────────────────────────────────────────
1. [Fall 2025] Data Science Capstone
   A senior group project tasked with forecasting larceny-related 
   risks across Atlanta's 25 Neighborhood Planning Units.
   Tech: PyTorch, TensorFlow, Scikit-Learn, GeoPandas, W&B, Streamlit

2. [Fall 2025] The Living Library
   A resource-stacked database charged with assisted future Data 
   Science students with learning the field. This project leverages 
   sentence-transformers for semantic searching.
   Tech: Python, Hugging Face, PostgreSQL, FastAPI

3. [Summer 2025] ML study on HNSCC Tumors
   An interdisciplinary ML project aimed at studying labeled and 
   unlabled cross-sectional axial ct scans in a multi-modal effort 
   to improve RT treatment.
   Tech: PyTorch, XGBoost, Scikit-Learn, MATLAB

<span class="info">Visit my GitHub for more projects!</span>
        `.trim();
    },

    clear: () => {
        document.getElementById('terminal').innerHTML = '';
        return null;
    },

    echo: (args) => {
        return args.join(' ') || '';
    },

    date: () => {
        return new Date().toString();
    }
};

// Print output to terminal
function printOutput(output, className = '') {
    const terminal = document.getElementById('terminal');
    const line = document.createElement('div');
    line.className = `terminal-line command-output ${className}`;
    line.innerHTML = output;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
}

// Process command
function processCommand(input) {
    const terminal = document.getElementById('terminal');
    
    // Echo the command
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line';
    commandLine.innerHTML = `<span class="prompt">guest@portfolio:~$</span> ${input}`;
    terminal.appendChild(commandLine);

    // Handle initial choice
    if (awaitingChoice) {
        const choice = input.trim().toLowerCase();
        if (choice === '1' || choice === 'terminal') {
            awaitingChoice = false;
            commandsEnabled = true;
            printOutput('<span class="success">Terminal mode activated!</span> Type <span class="info">\'help\'</span> to see available commands.\n');
        } else if (choice === '2' || choice === 'gui' || choice === 'visual') {
            printOutput('<span class="info">Redirecting to visual portfolio...</span>');
            setTimeout(() => {
                window.location.href = userData.visualPortfolio;
            }, 1000);
            return;
        } else {
            printOutput('<span class="error">Invalid choice.</span> Please type <span class="info">1</span> for terminal or <span class="info">2</span> for visual portfolio.');
            const emptyLine = document.createElement('div');
            emptyLine.className = 'terminal-line';
            terminal.appendChild(emptyLine);
            terminal.scrollTop = terminal.scrollHeight;
            return;
        }
        
        const emptyLine = document.createElement('div');
        emptyLine.className = 'terminal-line';
        terminal.appendChild(emptyLine);
        terminal.scrollTop = terminal.scrollHeight;
        return;
    }

    // Parse command and arguments
    const parts = input.trim().split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Execute command
    if (cmd === '') {
        // Empty command, do nothing
    } else if (commands[cmd]) {
        const output = commands[cmd](args);
        if (output !== null) {
            printOutput(output);
        }
    } else {
        printOutput(`<span class="error">Command not found: ${cmd}</span>\nType <span class="info">'help'</span> for available commands.`, 'error');
    }

    // Add empty line
    const emptyLine = document.createElement('div');
    emptyLine.className = 'terminal-line';
    terminal.appendChild(emptyLine);

    terminal.scrollTop = terminal.scrollHeight;
}

// Handle input
function createInputLine() {
    const terminal = document.getElementById('terminal');
    const inputLine = document.createElement('div');
    inputLine.className = 'input-line';
    inputLine.innerHTML = `
        <span class="prompt">guest@portfolio:~$</span>
        <input type="text" class="terminal-input" id="commandInput" autocomplete="off" autofocus>
        <span class="cursor"></span>
    `;
    terminal.appendChild(inputLine);

    const input = document.getElementById('commandInput');
    input.focus();

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value;
            if (command.trim()) {
                commandHistory.unshift(command);
                historyIndex = -1;
            }
            
            inputLine.remove();
            processCommand(command);
            createInputLine();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            } else if (historyIndex === 0) {
                historyIndex = -1;
                input.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const partial = input.value.toLowerCase();
            const matches = Object.keys(commands).filter(cmd => cmd.startsWith(partial));
            if (matches.length === 1) {
                input.value = matches[0];
            }
        }
    });

    terminal.scrollTop = terminal.scrollHeight;
}

// Keep focus on input
document.addEventListener('click', () => {
    const input = document.getElementById('commandInput');
    if (input) input.focus();
});

// Terminal button functionality
let terminalState = 'normal';

// Red button - Matrix rain then show resources
document.querySelector('.btn-close').addEventListener('click', (e) => {
    e.stopPropagation();
    startMatrixRain();
});

// Yellow button - Minimize (placeholder for future snake game)
document.querySelector('.btn-minimize').addEventListener('click', (e) => {
    e.stopPropagation();
    alert('Yellow button: Coming soon - Mystery Box & Snake Game! 🎮');
});

// Green button - Maximize terminal
document.querySelector('.btn-maximize').addEventListener('click', (e) => {
    e.stopPropagation();
    const terminal = document.querySelector('.terminal');
    
    if (terminalState === 'maximized') {
        terminal.classList.remove('maximized');
        terminalState = 'normal';
    } else {
        terminal.classList.add('maximized');
        terminalState = 'maximized';
    }
});

// Matrix Rain Effect
function startMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.display = 'block';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    
    let frameCount = 0;
    const maxFrames = 120; // ~2 seconds at 60fps
    
    function draw() {
        // Fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            // Random binary digit
            const text = Math.random() > 0.5 ? '1' : '0';
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            // Reset drop to top randomly
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        
        frameCount++;
        
        if (frameCount < maxFrames) {
            requestAnimationFrame(draw);
        } else {
            // Fade out and show modal
            canvas.style.transition = 'opacity 0.5s';
            canvas.style.opacity = '0';
            setTimeout(() => {
                canvas.style.display = 'none';
                canvas.style.opacity = '1';
                showResourcesModal();
            }, 500);
        }
    }
    
    draw();
}

// Show/Hide Resources Modal
function showResourcesModal() {
    document.getElementById('resourcesModal').style.display = 'block';
}

function hideResourcesModal() {
    document.getElementById('resourcesModal').style.display = 'none';
}

// Modal close button
document.querySelector('.modal-close').addEventListener('click', hideResourcesModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('resourcesModal');
    if (e.target === modal) {
        hideResourcesModal();
    }
});

// Initialize
createInputLine();