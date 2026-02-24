### Manual Lock w/ JS File instructions:
// ===================================
// --- YOUR MANUAL LOCK CONTROLS ---
// ===================================

// Add the filenames of pages you want to "lock" into this array.
// For example: 'projects.html', 'blog.html', 'contact.html'
// To lock your homepage, add 'index.html'

const lockedPages = [
    'projects.html',
    'contact.html'
];

// ===================================
// --- THE LOCK SCRIPT (Don't Edit) ---
// ===================================

// Get the filename of the current page (e.g., "projects.html" or "index.html")
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// Check if the current page is in your locked list
const isLocked = lockedPages.includes(currentPage);

// Check that we aren't *already* on the construction page (to prevent a redirect loop)
const isConstructionPage = (currentPage === 'under-construction.html');

// If the page is locked AND we are not on the construction page, redirect.
if (isLocked && !isConstructionPage) {
    // Redirects the user to your "under construction" page
    window.location.replace('under-construction.html');
}


### Add this to head of every html file:
<head>
    <meta charset="UTF-8">
    <title>My Portfolio</title>
    
 --->   <script src="lock.js" defer></script>
    
    <link rel="stylesheet" href="style.css">
</head>

--------------

1. Create Your "Under Construction" Page
First, make a new HTML file in your project's root directory. Let's call it under-construction.html.

This page can be as simple as you want. Here's a basic template:

under-construction.html:

HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Under Construction</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            padding: 50px; 
            background-color: #f4f4f4;
        }
        h1 { color: #333; }
        p { color: #666; }
        .icon { font-size: 50px; }
    </style>
</head>
<body>
    <div class="icon">🚧</div>
    <h1>Page Under Construction</h1>
    <p>Sorry, this part of the portfolio is currently being updated.</p>
    <p><a href="index.html">Back to Home</a></p>
</body>
</html>
2. Create the "Manual Lock" JavaScript File
Next, create a new JavaScript file. Let's call it lock.js. This file will contain your "master list" of locked pages.

lock.js:

JavaScript

// ===================================
// --- YOUR MANUAL LOCK CONTROLS ---
// ===================================

// Add the filenames of pages you want to "lock" into this array.
// For example: 'projects.html', 'blog.html', 'contact.html'
// To lock your homepage, add 'index.html'

const lockedPages = [
    'projects.html',
    'contact.html'
];

// ===================================
// --- THE LOCK SCRIPT (Don't Edit) ---
// ===================================

// Get the filename of the current page (e.g., "projects.html" or "index.html")
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// Check if the current page is in your locked list
const isLocked = lockedPages.includes(currentPage);

// Check that we aren't *already* on the construction page (to prevent a redirect loop)
const isConstructionPage = (currentPage === 'under-construction.html');

// If the page is locked AND we are not on the construction page, redirect.
if (isLocked && !isConstructionPage) {
    // Redirects the user to your "under construction" page
    window.location.replace('under-construction.html');
}
3. Link the Script to All Your Pages
Now, you just need to add one line of code to every HTML page on your site (including index.html, projects.html, contact.html, and even under-construction.html).

Add the following line inside the <head> section of each page. It's important to put it in the <head> so it runs before the rest of your page content loads.

HTML

<head>
    <meta charset="UTF-8">
    <title>My Portfolio</title>
    
    <script src="lock.js" defer></script>
    
    <link rel="stylesheet" href="style.css">
</head>
(The defer attribute is good practice and ensures it runs after the HTML is parsed but before the page is fully rendered, which is perfect for this.)

How to Use Your Manual Lock
You're all set! Now, managing your "locked" pages is incredibly easy:

To LOCK a page: Open your lock.js file, add the page's filename (e.g., 'blog.html') to the lockedPages array, and push the change to GitHub.

To UNLOCK a page: Open lock.js, remove the filename from the lockedPages array, and push the change.