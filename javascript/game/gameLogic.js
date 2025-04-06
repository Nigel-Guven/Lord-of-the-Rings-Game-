const gameState = require('./gameState');
const gameEvents = require('./events/gameEvents'); // Import events from gameEvents.js

// Function to handle player actions and events
function handleEvent(action, gameState) {
    let eventMessage = '';
    let nextChoices = [];

    // Handle the action if it exists
    if (gameEvents[action]) {
        const event = gameEvents[action];
        eventMessage = event.eventMessage;
        nextChoices = event.nextChoices;
    } else {
        eventMessage = "Invalid choice!";
        nextChoices = [];
    }

    // Check if the action is to quit the game
    if (action === 'QuitGame') {
        quitGame(gameState); // End the game and set game state to game over
    }

    // Add the event to the event history
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

// Function to handle quitting the game
function quitGame(gameState) {
    gameState.gameOver = true;  // Set game state to game over
    console.log('You quit the game. Goodbye!');
}

// You could also export the game logic to be used in the rest of your game system
module.exports = { handleEvent };
