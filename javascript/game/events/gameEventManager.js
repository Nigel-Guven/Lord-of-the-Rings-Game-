class GameEventManager {
    constructor(eventsByArea) {
        this.eventsByArea = eventsByArea;
    }

    // Retrieve all events from a specific area
    getEventsForArea(area) {
        return this.eventsByArea[area] || {};
    }

    // Retrieve a specific event by its key (e.g., BilbosBirthday)
    getEvent(area, eventKey) {
        if (this.eventsByArea[area] && this.eventsByArea[area][eventKey]) {
            return this.eventsByArea[area][eventKey];
        }
        return null; // Return null if event not found
    }

    // Retrieve the next choices for a specific event
    getNextChoices(area, eventKey) {
        const event = this.getEvent(area, eventKey);
        return event ? event.nextChoices : [];
    }

    // Example: Get all the event titles in a specific area
    getEventTitles(area) {
        const areaEvents = this.getEventsForArea(area);
        return Object.keys(areaEvents).map(eventKey => areaEvents[eventKey].title);
    }

    // Example: Get all events across all areas
    getAllEvents() {
        let allEvents = [];
        for (const area in this.eventsByArea) {
            allEvents = allEvents.concat(Object.values(this.eventsByArea[area]));
        }
        return allEvents;
    }
}

// Instantiate the class with the events
const gameEventManager = new GameEventManager(eventsByArea);

// Example usage:
const shireEvents = gameEventManager.getEventsForArea("TheShire");
const eventTitles = gameEventManager.getEventTitles("TheShire");
console.log(eventTitles);  // Output: ['Bilbo's 111th Birthday', ...]

const bilboBirthdayEvent = gameEventManager.getEvent("TheShire", "BilbosBirthday");
console.log(bilboBirthdayEvent.title);  // Output: 'Bilbo's 111th Birthday'