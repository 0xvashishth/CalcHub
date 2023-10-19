document.addEventListener('DOMContentLoaded', function () {
    const calculator = document.getElementById('calculator');
    const unitSelect = document.getElementById('unit');
    const timeInput = document.getElementById('time');
    const dateInput = document.getElementById('date');
    const calculateButton = document.getElementById('calculate');
    const timeRemaining = document.getElementById('time-remaining');
    const mode = document.getElementById('mode');
    const modeToggle = document.getElementById('mode-toggle');
    const direction = document.getElementById('direction');
    const currentDateDisplay = document.getElementById('current-date-display');
    const currentTimeDisplay = document.getElementById('current-time-display');

    // Function to update the current date and time
    function updateCurrentDateTime() {
        const currentTime = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentTime.toLocaleString("en-UK", options);
        const formattedTime = currentTime.toLocaleTimeString('en-US', {
            hour12: false,
        });

        currentDateDisplay.textContent = formattedDate;
        currentTimeDisplay.textContent = formattedTime;

        const currentDate = new Date();
    }

    // Update the current date and time initially
    updateCurrentDateTime();

    // Set up a timer to update the current date and time every second
    setInterval(updateCurrentDateTime, 1000);

    // Function to toggle the visibility of the time input based on the selected unit
    function toggleTimeInputVisibility() {
        const selectedUnit = unitSelect.value;
        const dateInput = document.getElementById('dateInput');
        const timeInput = document.getElementById('timeInput');
        if (selectedUnit === 'hours') {
            timeInput.style.display = 'block';
            dateInput.style.display = 'none';
        } else {
            timeInput.style.display = 'none';
            dateInput.style.display = 'block';
        }
    }

    // Initial call to set the initial state
    toggleTimeInputVisibility();

    // Add an event listener to the unit select to update the visibility when the selection changes
    unitSelect.addEventListener('change', toggleTimeInputVisibility);

    function calculateTimeRemaining() {
        const selectedUnit = unitSelect.value;
        const currentDateTime = new Date();

        let inputDateTime;

        if (selectedUnit === 'hours') {
            const timeParts = timeInput.value.split(':');
            inputDateTime = new Date(currentDateTime);
            inputDateTime.setHours(parseInt(timeParts[0]));
            inputDateTime.setMinutes(parseInt(timeParts[1]));
        } else {
            inputDateTime = new Date(dateInput.value);
        }

        const timeDifference = inputDateTime - currentDateTime;

        timeDifference < 0
            ? (direction.textContent = 'Passed')
            : (direction.textContent = 'Remaining');

        absTimeDifference = Math.abs(timeDifference);

        if (selectedUnit === 'hours') {
            const hours = Math.floor(absTimeDifference / (1000 * 60 * 60));
            const minutes = Math.floor((absTimeDifference / (1000 * 60)) % 60);
            timeRemaining.textContent = `${hours} hours and ${minutes} minutes`;
        } else if (selectedUnit === 'days') {
            const days = Math.floor(absTimeDifference / (1000 * 60 * 60 * 24));
            timeRemaining.textContent = `${days} days`;
        } else {
            const years = Math.floor(
                absTimeDifference / (1000 * 60 * 60 * 24 * 365)
            );
            const remainingTimeInMonths = Math.floor(
                ((absTimeDifference / (1000 * 60 * 60 * 24)) % 365) / 30
            );
            const remainingTimeInDays = Math.floor(
                (absTimeDifference / (1000 * 60 * 60 * 24)) % 30
            );
            timeRemaining.textContent = `${years} years and ${remainingTimeInMonths} months and ${remainingTimeInDays} days`;
        }
    }

    // Add an event listener to the calculate button
    calculateButton.addEventListener('click', calculateTimeRemaining);

    timeInput.addEventListener('input', hideCalendar);
    dateInput.addEventListener('input', hideCalendar);

    function hideCalendar() {
        if (timeInput.value || dateInput.value) {
            timeInput.blur();
            dateInput.blur();
        }
    }

    modeToggle.addEventListener('change', () => {
        document.body.classList.toggle('light-mode');
        calculator.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            mode.innerText = 'Dark';
        } else {
            mode.innerText = 'Light';
        }
    });
});
