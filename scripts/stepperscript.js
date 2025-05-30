document.addEventListener('DOMContentLoaded', function() {
    const minusBtn = document.getElementById('minusBtn');
    const plusBtn = document.getElementById('plusBtn');
    const guestInput = document.getElementById('numOfGuests');

    const minGuests = parseInt(guestInput.min) || 1;
    const maxGuests = parseInt(guestInput.max) || 6;

    let pressTimer;
    let intervalTimer;
    const initialDelay = 500;
    const rapidChangeInterval = 100;

    if (!guestInput.value || isNaN(parseInt(guestInput.value))) {
        guestInput.value = minGuests;
    }

    /**
     * Increases the guest count in the input.
     */
    function incrementValue() {
        let currentValue = parseInt(guestInput.value);
        if (isNaN(currentValue)) {
            currentValue = minGuests;
        }

        if (currentValue < maxGuests) {
            guestInput.value = currentValue + 1;
        } else if (currentValue === maxGuests) {
            alert('For more than 6 guests, please contact us by phone to discuss appropriate discounts.');
            stopAutoChange();
        }
    }

    /**
     * Decreases the guest count in the input.
     */
    function decrementValue() {
        let currentValue = parseInt(guestInput.value);
        if (isNaN(currentValue)) {
            currentValue = minGuests;
        }

        if (currentValue > minGuests) {
            guestInput.value = currentValue - 1;
        } else if (currentValue === minGuests) {
            stopAutoChange();
        }
    }

    /**
     * Starts the auto-increment/decrement process after an initial delay.
     * @param {Function} actionFunction - The function to call for incrementing or decrementing.
     */
    function startAutoChange(actionFunction) {
        clearTimeout(pressTimer);
        clearInterval(intervalTimer);

        pressTimer = setTimeout(() => {
            intervalTimer = setInterval(actionFunction, rapidChangeInterval);
        }, initialDelay);
    }

    /**
     * Stops any active auto-increment/decrement timers.
     */
    function stopAutoChange() {
        clearTimeout(pressTimer);
        clearInterval(intervalTimer);
    }

    // Event Listeners for Plus Button
    plusBtn.addEventListener('mousedown', function(e) {
        e.preventDefault();
        incrementValue();
        startAutoChange(incrementValue);
    });
    plusBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        incrementValue();
        startAutoChange(incrementValue);
    }, { passive: false });

    // Event Listeners for Minus Button
    minusBtn.addEventListener('mousedown', function(e) {
        e.preventDefault();
        decrementValue();
        startAutoChange(decrementValue);
    });
    minusBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        decrementValue();
        startAutoChange(decrementValue);
    }, { passive: false });

    // Stop Auto-Change on Mouse/Touch Release or Leave
    document.addEventListener('mouseup', stopAutoChange);
    document.addEventListener('touchend', stopAutoChange);
    document.addEventListener('touchcancel', stopAutoChange);

    plusBtn.addEventListener('mouseleave', stopAutoChange);
    minusBtn.addEventListener('mouseleave', stopAutoChange);

    // Event Listener for Manual Input Changes
    guestInput.addEventListener('input', function() {
        let currentValue = parseInt(this.value);

        if (isNaN(currentValue) || currentValue < minGuests) {
            this.value = minGuests;
        } else if (currentValue > maxGuests) {
            alert('For more than 30 guests, please contact us by phone to discuss appropriate discounts.');
            this.value = maxGuests;
        }
    });
});