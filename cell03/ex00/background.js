window.onload = function() {
    const button = document.getElementById('bgBtn');
    
    if (button) {
        button.addEventListener('click', function() {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            document.body.style.backgroundColor = randomColor;
        });
    } else {
        alert('หาปุ่ม id="bgBtn" ไม่พบ!');
    }
};