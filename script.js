document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.days li');
    const holidayInfo = document.getElementById('holiday-info');

    days.forEach(day => {
        day.addEventListener('click', function() {
            const dayNumber = this.textContent;
            if (dayNumber) {
                fetchHolidays(dayNumber);
            }
        });
    });

    function fetchHolidays(day) {
        // Example API call to fetch holidays data
        // Replace this with your actual API call
        const holidays = {
            "1": ["Holiday 1", "Holiday 2"],
            "4": ["Holiday 3"],
            "14": ["Holiday 4", "Holiday 5", "Holiday 6"],
            "24": ["Holiday 7"]
        };

        displayHolidays(holidays[day] || []);
    }

    function displayHolidays(holidays) {
        holidayInfo.innerHTML = "";
        if (holidays.length === 0) {
            holidayInfo.innerHTML = "<p>No holidays for this day.</p>";
        } else {
            const ul = document.createElement('ul');
            holidays.forEach(holiday => {
                const li = document.createElement('li');
                li.textContent = holiday;
                ul.appendChild(li);
            });
            holidayInfo.appendChild(ul);
        }
    }
});
