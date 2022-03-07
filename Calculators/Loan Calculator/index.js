

// Submit event listener
document.querySelector('#loan-form').addEventListener('submit', function(e){
    // Hide the results
    document.querySelector('#results').style.display = 'none';
    // Show the loading animation
    document.querySelector('#loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate the results
function calculateResults(){
    // Declare UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    
    // Calculate monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principle * x * calculatedInterest) / (x - 1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);

        // Show results and hide the loader
        document.querySelector('#results').style.display = 'block';
        document.querySelector('#loading').style.display = 'none';
    } else {
        // Show an error message
        showError('Please check your inputs');
    }
}

// Show error on invalid input
function showError(error){
    // Hide the results and loader
    document.querySelector('#results').style.display = 'none';
    document.querySelector('#loading').style.display = 'none';

    // Create a div for the error message
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add a class to the error message div
    errorDiv.className = 'alert alert-danger';
    
    // Create a text nod and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert the error message above the heading
    card.insertBefore(errorDiv, heading);

    // Clear error message after 3 seconds
    setTimeout(clearError, 4000);
}

// Clear the error message
function clearError(){
    document.querySelector('.alert').remove();
}