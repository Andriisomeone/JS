const input = document.getElementById('xxx');
const resultDiv = document.getElementById('result');
input.oninput = function () {
    //*2.2

    resultDiv.innerText = +this.value * 2.2;
};