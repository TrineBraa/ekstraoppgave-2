let Num1 = '';
let Num2 = '';

function getAnswer1() {
    Num1 = 5
    Num2 = 7
    let result1 = Num1 += Num2
    document.getElementById("resultBox1").innerHTML = `${result1}`;
}

function getAnswer2(a, b) {
    let result2 = a *= b
    document.getElementById('resultBox2').innerHTML = `${result2}`;
    console.log(getAnswer2);
}

function getAnswer3(Num1, Num2) {
    let result3 = Num1 /= Num2
    document.getElementById('resultBox3').innerHTML = `${result3}`;
}

function getAnswer4(Num1, Num2) {
    let result4 = Num1 -= Num2
    document.getElementById('resultBox4').innerHTML = `${result4}`;
}

function getAnswer5(Num1, Num2) {
    let result5 = Num1 += Num2
    document.getElementById('resultBox5').innerHTML = `${result5}`;
}

