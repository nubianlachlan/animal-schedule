// Get current time and determine if it's day or night
function updateSquirrelSchedule() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    
    // Determine if it's day (6 AM - 8 PM) or night (8 PM - 6 AM)
    const isDay = hours >= 6 && hours < 20;
    
    // Update time display
    const timeDisplay = document.getElementById('time-display');
    const activityDisplay = document.getElementById('activity-display');
    const squirrel = document.getElementById('squirrel');
    const sky = document.getElementById('sky');
    const sleepZzz = document.getElementById('sleep-zzz');
    
    // Format time
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    
    timeDisplay.textContent = `${day} - ${timeString}`;
    
    // Update squirrel activity and scene
    if (isDay) {
        // Day time - squirrel is playing
        activityDisplay.textContent = '🌞 Playing and gathering acorns!';
        squirrel.classList.remove('sleeping');
        squirrel.classList.add('playing');
        sky.classList.remove('night');
        sky.classList.add('day');
        sleepZzz.classList.remove('active');
    } else {
        // Night time - squirrel is sleeping
        activityDisplay.textContent = '🌙 Sleeping peacefully...';
        squirrel.classList.remove('playing');
        squirrel.classList.add('sleeping');
        sky.classList.remove('day');
        sky.classList.add('night');
        sleepZzz.classList.add('active');
    }
}

// Initialize and update every second
updateSquirrelSchedule();
setInterval(updateSquirrelSchedule, 1000);

// Add some console messages for fun
console.log('🐿️ Squirrel Schedule App Loaded!');
console.log('The squirrel plays during the day (6 AM - 8 PM) and sleeps at night (8 PM - 6 AM)');
