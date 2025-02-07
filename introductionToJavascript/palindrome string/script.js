function checkPalindrome() {
    const input = document.getElementById('inputString').value;
    // const input = 'string'
    if(input.trim() == ""){
        document.getElementById('result').innerHTML = "<p style=color:red>Please enter a string.</p>";
        return;
    }
    const reversed = input.split('').reverse().join('');
    const isPalindrome = input === reversed;

    if (isPalindrome) {
        document.getElementById('result').innerHTML = "The string is palindrome";
    }
    else {
        document.getElementById("result").innerHTML = "The string is not palindrome";
    }
}