document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('uploadEventForm');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch('/upload-event', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to upload event');
            }

            const result = await response.json();
            alert(result.message); // Display success message
            form.reset(); // Clear the form after successful upload

            // Optional: Fetch latest events and update events page
            fetchEventsAndUpdatePage();
        } catch (error) {
            console.error('Error uploading event:', error.message);
            alert('Failed to upload event. Please try again.');
        }
    });

    // Function to fetch events and update events page
    async function fetchEventsAndUpdatePage() {
        try {
            const response = await fetch('/events');
            const events = await response.json();
            
            // Update events page with new data (if needed)
            console.log('Latest Events:', events);
        } catch (error) {
            console.error('Error fetching events:', error.message);
        }
    }
});
