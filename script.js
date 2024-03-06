document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const userInput = document.getElementById('number')
    const output = document.getElementById('output');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const MIN = {
            value: 1,
            text: 'greater',
        };
        const MAX = {
            value: 3999,
            text: 'lesser',
        };

        const userInputValue = parseInt(userInput.value);
        if (userInputValue < MIN.value || userInputValue > MAX.value) {
            output.innerText = userInputValue < MIN.value ? 
            `Please enter a number ${MIN.text} than or equal to ${MIN.value}.` :
            `Please enter a number ${MAX.text} than or equal to ${MAX.value}.`;
            output.classList.add('error');
            return;
        }
    })
});