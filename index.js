
// ----------------------------
// JavaScript for calculating and displaying age
document.addEventListener("DOMContentLoaded", function () {
    const birthDate = new Date("2006-11-24");
    const today = new Date();

    // Set the timezone to Bangladesh (Asia/Dhaka)
    const options = { timeZone: 'Asia/Dhaka' };

    

    // Calculate the difference between the two dates in milliseconds
    const diff = today.getTime() - birthDate.getTime();

    // Convert the difference to a date object
    const age = new Date(diff);

    // Get the year, month and day from the date object
    const years = age.getUTCFullYear() - 1970;
    const months = age.getUTCMonth();
    const days = age.getUTCDate() - 1;

     // Calculate the total days, hours and seconds from the difference
     const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
     const totalHours = Math.floor(diff / (1000 * 60 * 60));
     const totalSeconds = Math.floor(diff / 1000);

    const ageContainer = document.getElementById('age');
    ageContainer.innerHTML = `<div id="ymd">${years} years, ${months} months, ${days} days</div>
                           `;

    // Update the clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call to set the clock immediately

    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', options);
        

        const clockContainer = document.querySelector('.clock-time');
        clockContainer.textContent = `${timeString}`;
        
    }

     // Create heart-shaped bubble on click
     document.addEventListener('click', function (event) {
        const heartBubble = document.createElement('div');
        heartBubble.classList.add('heart-bubble');
        heartBubble.style.left = `${event.clientX}px`;
        heartBubble.style.top = `${event.clientY}px`;
        document.body.appendChild(heartBubble);

        // Remove the heart bubble after animation
        heartBubble.addEventListener('animationend', function () {
            heartBubble.remove();
        });
    });


    // Custom Cursor
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });





    document.addEventListener('mousemove', function (event) {
        const swirl = document.createElement('div');
        swirl.classList.add('swirl');
        swirl.style.left = `${event.clientX}px`;
        swirl.style.top = `${event.clientY}px`;
        document.body.appendChild(swirl);

        // Remove the swirl after animation
        setTimeout(() => {
            swirl.remove();
        }, 1000);
    });

    
});

// Play the audio on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('backgroundAudio').play();
});



// Play Button Click Event
document.getElementById('playButton').addEventListener('click', function () {
    // Show the audio element
    document.getElementById('backgroundAudio').style.display = 'block';
    // Play the audio
    document.getElementById('backgroundAudio').play();
    // Hide the play button
    this.style.display = 'none';
    // Show the pause button
    document.getElementById('pauseButton').style.display = 'block';
});

// Pause Button Click Event
document.getElementById('pauseButton').addEventListener('click', function () {
    // Pause the audio
    document.getElementById('backgroundAudio').pause();
    // Hide the pause button
    this.style.display = 'none';
    // Show the play button
    document.getElementById('playButton').style.display = 'block';
});







