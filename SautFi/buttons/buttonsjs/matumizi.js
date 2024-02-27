// Get the select element
const selectYear = document.getElementById('select-year');

// Get the h3 element
const selectedYear = document.getElementById('selected-year');

// Function to update the selected year
function updateSelectedYear() {
    const year = selectYear.value;
    selectedYear.textContent = "Selected Year: " + year;
}

// Populate years (adjust as needed)
const currentYear = new Date().getFullYear();
for (let year = currentYear - 100; year <= currentYear + 100; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    selectYear.appendChild(option);
}

// Update selected year when the user changes the selection
selectYear.addEventListener('change', updateSelectedYear);

// Initially update the selected year based on the default value
updateSelectedYear();