document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const userInput = document.getElementById('number')
    const output = document.getElementById('output');

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (userInput.value < 1) { // Return error message
            output.innerText = 'Please enter a number greater than or equal to 1.';
            output.classList.add('error');
            return;
        }
    })
});