const decimalToRoman = (num) => {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    
    let result = '';
    for (const numeralInfo of romanNumerals) {
        while (num >= numeralInfo.value) {
            result += numeralInfo.numeral;
            num -= numeralInfo.value;
        }
    }
    
    return result;
}

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

        if(userInput.value === '') {
            output.innerText = 'Please enter a valid number';
            return;
        }

        const userInputValue = parseInt(userInput.value);
        if (userInputValue < MIN.value || userInputValue > MAX.value) {
            output.innerText = userInputValue < MIN.value ? 
            `Please enter a number ${MIN.text} than or equal to ${MIN.value}.` :
            `Please enter a number ${MAX.text} than or equal to ${MAX.value}.`;
            output.classList.add('error');
            return;
        }

        output.classList.remove('error');
        output.innerText = decimalToRoman(userInputValue);
    })
});