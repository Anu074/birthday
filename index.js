
// ----------------------------
// JavaScript for calculating and displaying age
document.addEventListener("DOMContentLoaded", function () {
    const birthDate = new Date("2006-11-28");
    const today = new Date();

    // Set the timezone to Bangladesh (Asia/Dhaka)
    const options = { timeZone: 'Asia/Dhaka' };

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = ageInDays / 365;

    const years = Math.floor(ageInYears);
    const months = Math.floor((ageInYears - years) * 12);
    const days = Math.floor((ageInYears * 365) % 365);

    const ageContainer = document.getElementById('age');
    ageContainer.innerHTML = `<div>${years} years, ${months} months, ${days} days</div>
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
});



