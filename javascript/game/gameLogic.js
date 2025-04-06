const gameState = require('./gameState');
const gameEvents = require('./gameEvents');  // Import events from events.js

function handleEvent(action) {
    let eventMessage = '';
    let nextChoices = [];

    // Check if the action exists in the events object
    if (gameEvents[action]) {
        const event = gameEvents[action];
        eventMessage = event.eventMessage;
        nextChoices = event.nextChoices;
    } else {
        eventMessage = "Invalid choice!";
        nextChoices = [];
    }

    // If the action was to quit the game, call quitGame
    if (action === 'Quit Game') {
        quitGame(); // Set game state to game over
    }

    // Add the event to the history
    gameState.eventHistory.push({ action, message: eventMessage });

    // Check if player health is <= 0
    if (gameState.playerHealth <= 0) {
        gameState.gameOver = true;
        eventMessage = "You have been defeated! Game Over!";
        nextChoices = [];
    }

    return {
        message: eventMessage,
        choices: nextChoices,
    };
}

function quitGame() {
    gameState.gameOver = true;  // End the game
    console.log('You quit the game. Goodbye!');
}

module.exports = { handleEvent };
