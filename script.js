
const userInputStr = document.getElementById("input-str");
const userInputK = document.getElementById("input-k");
const resultDiv = document.getElementById("result");

function caesarCipher(text, shift) {
    if(text === ''){
        alert("Please enter a string and K [0-26] !")
        return;
    }

    shift = shift % 26;
    text = text.toUpperCase();
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[A-Z]/)) {
            let code = text.charCodeAt(i);
            code = code + shift;
            if (code > 90) {
                code = code - 26;
            }
            char = String.fromCharCode(code);
        }
        result += char;
    }
    return result;
}

document.getElementById('result-btn').addEventListener('click', function() {
    let inputStr = userInputStr.value;
    let shift = parseInt(userInputK.value);

    let encryptedText = caesarCipher(inputStr, shift);

    resultDiv.innerText = encryptedText;
    resultDiv.classList.remove('hidden');
});

