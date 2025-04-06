const express = require('express');
const path = require('path');
const gameState = require('./javascript/game/gameState');
const { handleEvent } = require('./javascript/game/gameLogic');

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static('public'));

// Root route - Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start game route - Initialize the game and start interactions
app.get('/start-game', (req, res) => {
    gameState.gameOver = false;
    res.json({ message: `Welcome, Player! Your adventure begins now.` });
});

// Handle player action (Fight, Rest, Quit)
app.post('/game-action', express.json(), (req, res) => {
    const { action } = req.body;  // Get the action from the frontend

    if (!action) {
        return res.status(400).json({ message: 'No action specified!' });
    }

    gameState.playerChoice = action;

    const result = handleEvent(action);  // Use handleEvent to get the result

    res.json(result);
});

// Start the server
app.listen(port, () => {
    console.log(`Game server is running on http://localhost:${port}`);
});