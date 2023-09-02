document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    const outputDiv = document.getElementById('output');
    const expectedKeyword = "112233"; // Change this to your expected keyword
    const outputText = "Tree"; // The text you want to display when the keyword is correct

    submitButton.addEventListener('click', function () {
        const userInput = document.getElementById('userInput').value;
        
        if (userInput === expectedKeyword) {
            outputDiv.innerHTML = `<p>Correct keyword entered: <strong>${outputText}</strong></p>`;
        } else {
            outputDiv.innerHTML = `<p>Incorrect keyword. Please try again.</p>`;
        }
    });
});
