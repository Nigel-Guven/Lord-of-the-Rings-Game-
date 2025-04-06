const events = {
    "BilbosBirthday": {
        title: "Bilbo's 111th Birthday",  // Human-readable title
        eventMessage: "It is Bilbo's 111th birthday. The party is in full swing, and guests from all over the Shire are celebrating. Suddenly, Bilbo stands up to give his famous speech...",
        backgroundImage: "/images/bilbos_birthday.jpg",  
        nextChoices: [
            { 
                text: "Take a drink and cheer Bilbo on as he rambles...", 
                action: "BilboDisappearsPlayerDrunk" 
            },
            { 
                text: "Perhaps I should take a sample of Longbottom Leaf on the table in front of me...", 
                action: "BilboDisappearsPlayerHigh" 
            },
            { 
                text: "I'll be off the Green Dragon ale tonight!", 
                action: "BilboDisappears" 
            },       
            { 
                text: "Interrupt Bilbo in the middle of his speech.", 
                action: "BilboInterruptedByPlayer" 
            }
        ]
    },
    "BilboDisappearsPlayerDrunk": {
        title: "Bilbo's 111th Birthday",  // Human-readable title
        eventMessage: "Bilbo has disappeared, am I seeing things straight? Perhaps I had too much to drink...",
        backgroundImage: "/images/bilbos_birthday.jpg",  
        nextChoices: [
            { 
                text: "Take a drink and cheer Bilbo on as he rambles...", 
                action: "CheckBagEnd" 
            },
        ]
    },
    "BilboDisappearsPlayerHigh": {
        title: "Bilbo's 111th Birthday",  // Human-readable title
        eventMessage: "Bilbo has disappeared, am I seeing things straight? Perhaps the Longbottom leaf is affecting me...",
        backgroundImage: "/images/bilbos_birthday.jpg",  
        nextChoices: [
            { 
                text: "Take a drink and cheer Bilbo on as he rambles...", 
                action: "CheckBagEnd" 
            },
        ]
    },
    "BilboDisappears": {
        title: "Bilbo's 111th Birthday",  // Human-readable title
        eventMessage: "Bilbo has just disappeared on stage, are my eyes playing tricks with me. What sort of elven magic is this?",
        backgroundImage: "/images/bilbos_birthday.jpg",  
        nextChoices: [
            { 
                text: "Take a drink and cheer Bilbo on as he rambles...", 
                action: "CheckBagEnd" 
            },
        ]
    },
    "BilboInterruptedByPlayer": {
        title: "Bilbo's 111th Birthday",  // Human-readable title
        eventMessage: "",
        backgroundImage: "/images/bilbos_birthday.jpg",  
        nextChoices: [
            { 
                text: "Take a drink and cheer Bilbo on as he rambles...", 
                action: "BilboDisappears" 
            },
            { 
                text: "I'll be off the Green Dragon tonight!", 
                action: "BilboDisappears" 
            },
            { 
                text: "Perhaps I should take a sample of Longbottom Leaf in front of me.", 
                action: "BilboDisappears" 
            }
        ]
    },
    "BalrogBattle": {
        title: "Battle with the Balrog",  // Human-readable title
        eventMessage: "A Balrog appears in the Mines of Moria! It's a fearsome creature from the depths of the earth.",
        backgroundImage: "/images/balrog_battle.jpg",  // Event-specific background image
        nextChoices: [
            { 
                text: "Fight the Balrog!", 
                action: "Fight Balrog" 
            },
            { text: "Try to escape by Khazad Dum!", action: "Gandalf with the Balrog" },
            { text: "Run back to Eriador!", action: "Escape to Eriador" }
        ]
    },
    "GapOfIsengard": {
        title: "Go Through the Gap of Isengard",  // Human-readable title
        eventMessage: "You choose to go through the Gap of Isengard. The path is treacherous, and Saruman's forces are nearby.",
        backgroundImage: "/images/gap_of_isengard.jpg",  // Event-specific background image
        nextChoices: [
            { text: "Fight Saruman's minions!", action: "Fight Minions" },
            { text: "Hide in the shadows!", action: "Hide" }
        ]
    },
    "MinesOfMoria": {
        title: "Go Through the Mines of Moria",  // Human-readable title
        eventMessage: "You have entered the Mines of Moria. The dark, damp tunnels stretch far ahead. You can hear the sound of footsteps in the distance.",
        backgroundImage: "/images/mines_of_moria.jpg",  // Event-specific background image
        nextChoices: [
            { text: "Fight the Orcs!", action: "Fight Orcs" },
            { text: "Run away!", action: "BalrogBattle" }
        ]
    },
    "EscapeToEriador": {
        title: "Escape to Eriador",  // Human-readable title
        eventMessage: "A Balrog appears in the Mines of Moria! It's a fearsome creature from the depths of the earth.",
        backgroundImage: "/images/eriador_escape.jpg",  // Event-specific background image
        nextChoices: [
            { text: "Fight the Balrog!", action: "Fight Balrog" },
            { text: "Try to escape!", action: "Escape" },
            { text: "Try to escape with a stick!", action: "Escape" }
        ]
    },
    "GandalfWithBalrog": {
        title: "Gandalf vs the Balrog",  // Human-readable title
        eventMessage: "Gandalf faces off against the Balrog on the bridge of Khazad-dûm.",
        backgroundImage: "/images/gandalf_balrog.jpg",  // Event-specific background image
        nextChoices: [
            { text: "Fight the Balrog!", action: "Fight Balrog" },
            { text: "Try to escape!", action: "Escape" }
        ]
    },
    "QuitGame": {
        title: "Quit Game",  // Human-readable title
        eventMessage: "You quit the game. Goodbye!",
        backgroundImage: "/images/quit_game.jpg",  // Event-specific background image
        nextChoices: []  // No further choices after quitting
    }
};
