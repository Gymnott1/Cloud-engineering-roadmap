// Get all the list items with the id "myList"
const listItems = document.querySelectorAll('#myList');

// Function to add checkboxes to each list item
function addCheckboxesToListItems() {
    listItems.forEach(item => {
        // Create a checkbox element
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Insert the checkbox before the text of the list item
        item.insertBefore(checkbox, item.firstChild);
    });
}

// Call the function to add checkboxes to the list items
addCheckboxesToListItems();
