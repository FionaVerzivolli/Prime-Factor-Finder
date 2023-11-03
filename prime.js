// Function to calculate factors of a number
function factorization(num) {
    const factors = [];
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        while (num % i === 0) {
            factors.push(i); // Push the factor into the factors array
            num /= i; // Reduce the number by dividing it by the factor
        }
    }
    if (num > 1) {
        factors.push(num);
    }
    return factors; // Return the array of factors
}

// Function to generate the factor tree visualization
function generateFactorTree() {
    const input = document.getElementById('inputNumber');
    const number = parseInt(input.value);
    const factorTreeContainer = document.getElementById('factorTree');
    factorTreeContainer.innerHTML = ''; // Clear the factor tree container

    // Check if the input is valid
    if (isNaN(number) || input.value.length > 15 || number < 1) {
        alert('Please enter a valid number!');
    } else {
        let factors = factorization(number); // Get the factors of the number
        let num = number;
        factorTreeContainer.innerHTML += `<p>${num}</p>`; // Display the original number

        // Build the factor tree
        for (let i = 0; i < factors.length; i++) {
            num /= factors[i]; // Divide the number by each factor
            if (num > 1) {
                factorTreeContainer.innerHTML += `&darr;</br> ${num} x ${factors[i]}</p> `; // Display factor tree node
            } else {
                break;
            }
        }
    }
    factorTreeContainer.innerHTML += `We can see that the prime factors are the right-most numbers. <br></br> Verify this by clicking 'Generate!'`;
}

// Function to generate and display the unique prime factors
function generateFactors() {
    const input = document.getElementById('inputNumber');
    const number = parseInt(input.value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear the result container

    // Check if the input is valid
    if (isNaN(number) || input.value.length > 15 || number < 1) {
        alert('Please enter a valid number!');
        input.value = '';
        return;
    }

    const factors = factorization(number); // Get all factors
    const uniqueFactors = Array.from(new Set(factors)); // Get unique factors

    // Display the unique prime factors or indicate if the number is a prime
    if (uniqueFactors.length === 0) {
        resultDiv.innerHTML = `The number ${number} is a prime number`;
    } else {
        resultDiv.innerHTML = `</br></br>Prime factor(s): ${uniqueFactors.join(', ')}`;
    }
}

// Event listener for page load
document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.querySelector('button[onclick="generateFactors()"]');
    const visualizeBtn = document.querySelector('button[onclick="generateFactorTree()"]');

    // Event listeners for 'Generate' and 'Visualize' buttons
    generateBtn.addEventListener('click', function () {
        generateFactors(); // Generate unique prime factors
        document.getElementById('factorTree').innerHTML = ''; // Clear factor tree container
    });

    visualizeBtn.addEventListener('click', function () {
        generateFactorTree(); // Generate the factor tree visualization
        document.getElementById('result').innerHTML = ''; // Clear result container
    });
});
