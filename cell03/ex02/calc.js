const form = document.getElementById('calcForm');
const leftInput = document.getElementById('left');
const operatorSelect = document.getElementById('operator');
const rightInput = document.getElementById('right');

// ฟังก์ชันสำหรับเช็คว่าเป็นจำนวนเต็มบวกหรือศูนย์
function isPositiveInteger(str) {
    return /^\d+$/.test(str.trim());
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const leftVal = leftInput.value;
    const rightVal = rightInput.value;

    // ตรวจสอบความถูกต้องของค่า Input
    if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
        alert('Error :(');
        return;
    }

    const num1 = parseInt(leftVal, 10);
    const num2 = parseInt(rightVal, 10);
    const op = operatorSelect.value;

    // ตรวจสอบการหารหรือมอดุโลด้วย 0
    if ((op === '/' || op === '%') && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
    }

    alert(result);
    console.log(result);
});

// แจ้งเตือน Alert ทุกๆ 30 วินาที
setInterval(function() {
    alert('Please, use me...');
}, 30000);