document.addEventListener('DOMContentLoaded', () => {
    const checkinDateInput = document.getElementById('checkin-date');
    const checkoutDateInput = document.getElementById('checkout-date');
    const numberOfDaysDisplay = document.getElementById('numberOfdays'); // Changed to lowercase 'd'

    // Set today's date as minimum for check-in
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    checkinDateInput.setAttribute('min', todayStr);

    // Handle check-in date change
    checkinDateInput.addEventListener('change', () => {
        const checkinValue = checkinDateInput.value;
        
        if (!checkinValue) {
            // If no check-in date, disable check-out
            checkoutDateInput.disabled = true;
            checkoutDateInput.value = '';
            numberOfDaysDisplay.textContent = 'Days: 0';
            return;
        }

        const checkinDate = new Date(checkinValue);
        const todayDate = new Date(todayStr);

        // Check if date is not in the past
        if (checkinDate < todayDate) {
            alert('Check-in date cannot be in the past.');
            checkinDateInput.value = '';
            checkoutDateInput.disabled = true;
            checkoutDateInput.value = '';
            numberOfDaysDisplay.textContent = 'Days: 0';
            return;
        }

        // Enable checkout field and set minimum to day after check-in
        checkoutDateInput.disabled = false;
        const nextDay = new Date(checkinDate);
        nextDay.setDate(checkinDate.getDate() + 1);
        const nextDayStr = nextDay.toISOString().split('T')[0];
        checkoutDateInput.setAttribute('min', nextDayStr);

        // If checkout is already selected, check if it's still valid
        if (checkoutDateInput.value) {
            const checkoutDate = new Date(checkoutDateInput.value);
            if (checkoutDate <= checkinDate) {
                checkoutDateInput.value = '';
                numberOfDaysDisplay.textContent = 'Days: 0';
            } else {
                calculateDays();
            }
        } else {
            numberOfDaysDisplay.textContent = 'Days: 0';
        }
    });

    // Handle check-out date change
    checkoutDateInput.addEventListener('change', () => {
        const checkinValue = checkinDateInput.value;
        const checkoutValue = checkoutDateInput.value;

        if (!checkinValue || !checkoutValue) {
            numberOfDaysDisplay.textContent = 'Days: 0';
            return;
        }

        const checkinDate = new Date(checkinValue);
        const checkoutDate = new Date(checkoutValue);
        const todayDate = new Date(todayStr);

        // Check if checkout is not in the past
        if (checkoutDate < todayDate) {
            alert('Check-out date cannot be in the past.');
            checkoutDateInput.value = '';
            numberOfDaysDisplay.textContent = 'Days: 0';
            return;
        }

        // Check if checkout is after checkin
        if (checkoutDate <= checkinDate) {
            alert('Check-out date must be at least one day after check-in date.');
            checkoutDateInput.value = '';
            numberOfDaysDisplay.textContent = 'Days: 0';
            return;
        }

        calculateDays();
    });

    // Function to calculate number of days
    const calculateDays = () => {
        const checkinValue = checkinDateInput.value;
        const checkoutValue = checkoutDateInput.value;

        if (!checkinValue || !checkoutValue) {
            numberOfDaysDisplay.textContent = 'Days: 0';
            return;
        }

        const checkinDate = new Date(checkinValue);
        const checkoutDate = new Date(checkoutValue);
        
        const timeDifference = checkoutDate.getTime() - checkinDate.getTime();
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        
        numberOfDaysDisplay.textContent = `Days: ${daysDifference}`;
    };

    // Initialization - make sure checkout is disabled at start
    checkoutDateInput.disabled = true;
    numberOfDaysDisplay.textContent = 'Days: 0';
});