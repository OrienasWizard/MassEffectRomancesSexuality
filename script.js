function openTab(event, tabName) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');

    // Remove the 'active' class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show the current tab content and add 'active' class to the corresponding button
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Show the first tab by default
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-button').click();
});