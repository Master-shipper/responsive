// Get the select element
const selectYear = document.getElementById('select-year');

// Get the h3 element
const selectedYear = document.getElementById('selected-year');

// Function to update the selected year
function updateSelectedYear() {
    const year = selectYear.value;
    selectedYear.innerHTML = "Tazama ripoti wa mwaka wa: <u>" + year + "</u>";
}

// Populate years starting from the current year
const currentYear = new Date().getFullYear();
for (let year = currentYear; year >= currentYear - 17; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    selectYear.appendChild(option);
}

// Update selected year when the user changes the selection
selectYear.addEventListener('change', updateSelectedYear);

// Initially update the selected year based on the default value
updateSelectedYear();
