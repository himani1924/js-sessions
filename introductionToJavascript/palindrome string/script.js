function checkPalindrome() {
    const input = document.getElementById('inputString').value;
    // const input = 'string'
    if(input.trim() == ""){
        document.getElementById('result').innerHTML = "<p style=color:red>Please enter a string.</p>";
        return;
    }
    cleanInput = input.split('').filter((ch)=>ch!==' ').join().lowerCase()
    let x=0, y=cleanInput.length-1;
    while(x<y){
        if(cleanInput[x]!==cleanInput[y]){
            document.getElementById("result").innerHTML = "The string is not palindrome";
            return;
        }
        x++;
        y--;
    }
    document.getElementById('result').innerHTML = "The string is palindrome";
    // const reversed = input.split('').reverse().join('');
    // const isPalindrome = input === reversed;

    // if (isPalindrome) {
    //     document.getElementById('result').innerHTML = "The string is palindrome";
    // }
    // else {
    //     document.getElementById("result").innerHTML = "The string is not palindrome";
    // }
}