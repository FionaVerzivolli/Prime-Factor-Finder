function factorization(num) {
    const factors = [];
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    if (num > 1) {
        factors.push(num);
    }
    return factors;
}

function generateFactorTree() {
    const input = document.getElementById('inputNumber');
    const number = parseInt(input.value);
    const factorTreeContainer = document.getElementById('factorTree');
    factorTreeContainer.innerHTML = '';

    if (isNaN(number) || input.value.length > 15 || number < 1) {
        alert('Please enter a valid number!');
    } else {
        let factors = factorization(number);
        let num = number;
        factorTreeContainer.innerHTML += `<p>${num}</p>`;
        for (let i = 0; i < factors.length; i++) {
            num /= factors[i];
            if (num > 1) {
            factorTreeContainer.innerHTML += `&darr;</br> ${num} x ${factors[i]}</p> `;
            } else {
                break;
            }
        }
    }
    factorTreeContainer.innerHTML += `We can see that the prime factors are the right-most numbers. <br></br> Verify this by clicking 'Generate!'`
}

function generateFactors() {
    const input = document.getElementById('inputNumber');
    const number = parseInt(input.value);

    if (isNaN(number) || input.value.length > 15 || number < 1) {
        alert('Please enter a valid number!');
        input.value = '';
        return;
    }

    const factors = factorization(number);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Prime factor(s): ${factors.join(', ')}`;
}
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.querySelector('button[onclick="generateFactors()"]');
    const visualizeBtn = document.querySelector('button[onclick="generateFactorTree()"]');

    generateBtn.addEventListener('click', generateFactors);
    visualizeBtn.addEventListener('click', generateFactorTree);
});



