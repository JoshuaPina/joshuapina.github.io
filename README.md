# Joshua Piña's Portfolio

Welcome to the Dojo! This is the personal portfolio website of **Joshua Piña**, a Data Scientist, Program Manager, and Army Veteran. The site features a Matrix-themed landing page and an interactive terminal interface, showcasing technical skills, projects, and professional background.

## Features

*   **Matrix Landing Page**: An immersive entry experience with the iconic digital rain effect.
*   **Interactive Terminal**: A command-line interface that allows visitors to explore the portfolio using shell-like commands.
*   **Visual Portfolio**: A traditional graphical user interface (GUI) version of the portfolio for those who prefer standard navigation.
*   **Resume & Resources**: Easy access to resume and other professional resources.
*   **Responsive Design**: Works on desktop and mobile devices.

## Project Structure

*   `index.html`: The main entry point featuring the Matrix landing page.
*   `script.js`: Handles the Matrix rain animation and entry logic.
*   `styles.css`: Main styles for the landing page.
*   `pages/`: Contains HTML files for various sections of the portfolio.
    *   `terminal/`: The interactive terminal implementation.
        *   `terminal_home.html`: The HTML structure for the terminal.
        *   `terminal.js`: Logic for the terminal commands and interaction.
        *   `terminal.css`: Styling for the terminal interface.
    *   `home.html`, `aboutme.html`, `projects.html`, etc.: Pages for the visual portfolio.
*   `data/`: Stores downloadable resources like resumes (PDFs).
*   `images/`: Contains images used throughout the site.

## Setup & Usage

### Running Locally

To run this project locally, you can serve the files using a simple HTTP server.

**Using Python:**

1.  Open your terminal or command prompt.
2.  Navigate to the project's root directory.
3.  Run the following command:

    ```bash
    python3 -m http.server
    ```

4.  Open your browser and visit `http://localhost:8000`.

**Using VS Code Live Server:**

1.  Open the project folder in VS Code.
2.  Install the "Live Server" extension.
3.  Right-click on `index.html` and select "Open with Live Server".

### Navigating the Terminal

Once you enter the Matrix, you will be presented with a terminal interface. Use the keyboard to type commands.

**Available Commands:**

*   `help`: Show the list of available commands.
*   `about`: Learn more about Joshua Piña.
*   `skills`: View technical skills.
*   `projects`: Browse featured projects.
*   `contact`: Display contact information.
*   `social`: View social media links.
*   `gui`: Switch to the visual portfolio (GUI mode).
*   `clear`: Clear the terminal screen.
*   `date`: Show the current date and time.
*   `echo [text]`: Echo back the provided text.

**Tips:**

*   Use `Tab` for command autocompletion.
*   Use `Arrow Up` and `Arrow Down` to navigate through command history.
