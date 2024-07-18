// event.js

document.addEventListener('DOMContentLoaded', function() {
    fetchEvents(); // Fetch events on page load
  });
  
  // Fetch events from the backend
  async function fetchEvents() {
    try {
      const response = await fetch('/events'); // Assuming '/events' endpoint returns JSON array of events
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const events = await response.json();
      displayEvents(events);
    } catch (err) {
      console.error('Error fetching events:', err.message);
    }
  }
  
  // Display events in the DOM
  function displayEvents(events) {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = ''; // Clear existing content
  
    events.forEach(event => {
      const eventSection = document.createElement('section');
      eventSection.classList.add('event-details');
      eventSection.innerHTML = `
        <div class="event-content">
          <h1>${event.title}</h1>
          <div class="photo-gallery">
            <div class="gallery-container">
              <img src="${event.photo1}" alt="Event Photo 1">
              <img src="${event.photo2}" alt="Event Photo 2">
              <img src="${event.photo3}" alt="Event Photo 3">
            </div>
            <button class="prev" onclick="moveGallery(-1)">❮</button>
            <button class="next" onclick="moveGallery(1)">❯</button>
          </div>
          <p class="event-description">${event.description}</p>
          <p class="event-location">Event Location: ${event.location}</p>
          <p class="contact-details">Contact Details: Email: ${event.email}, Phone: ${event.phone}</p>
        </div>
      `;
      eventsContainer.appendChild(eventSection);
    });
  }
  
  // Function for gallery image navigation (if needed)
  function moveGallery(direction) {
    // Implement gallery navigation logic if required
  }
  