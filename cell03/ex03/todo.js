const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

// โหลดข้อมูล Cookie เมื่อเปิดหน้าเว็บ
window.onload = function() {
    loadToDos();
};

newBtn.addEventListener('click', function() {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
        createToDo(text.trim());
        saveToDos();
    }
});

function createToDo(text) {
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';
    todoDiv.textContent = text;

    todoDiv.addEventListener('click', function() {
        const confirmDelete = confirm('Do you want to remove this TO DO?');
        if (confirmDelete) {
            todoDiv.remove();
            saveToDos();
        }
    });

    // เพิ่มไว้ที่บนสุดของ ft_list
    ftList.insertBefore(todoDiv, ftList.firstChild);
}

function saveToDos() {
    const todos = [];
    const items = ftList.querySelectorAll('.todo-item');
    items.forEach(item => {
        todos.push(item.textContent);
    });
    // แปลงอาร์เรย์เป็น JSON string แล้วบันทึกลง Cookie
    const jsonString = encodeURIComponent(JSON.stringify(todos));
    document.cookie = `ft_todo=${jsonString};path=/;max-age=${31536000}`;
}

function loadToDos() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('ft_todo='));
    
    if (todoCookie) {
        const jsonString = decodeURIComponent(todoCookie.split('=')[1]);
        try {
            const todos = JSON.parse(jsonString);
            // โหลดรายการย้อนกลับเพื่อให้ลำดับคงเดิม
            for (let i = todos.length - 1; i >= 0; i--) {
                createToDo(todos[i]);
            }
        } catch (e) {
            console.error('Error parsing cookie data', e);
        }
    }
}