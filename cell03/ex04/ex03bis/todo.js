$(document).ready(function() {
    loadToDos();

    $('#newBtn').click(function() {
        const text = prompt('Enter a new TO DO:');
        if (text && $.trim(text) !== '') {
            createToDo($.trim(text));
            saveToDos();
        }
    });

    function createToDo(text) {
        const $todo = $('<div></div>').addClass('todo-item').text(text);

        $todo.click(function() {
            if (confirm('Do you want to remove this TO DO?')) {
                $(this).remove();
                saveToDos();
            }
        });

        $('#ft_list').prepend($todo);
    }

    function saveToDos() {
        const todos = [];
        $('.todo-item').each(function() {
            todos.push($(this).text());
        });
        const jsonString = encodeURIComponent(JSON.stringify(todos));
        document.cookie = `ft_todo=${jsonString};path=/;max-age=31536000`;
    }

    function loadToDos() {
        const cookies = document.cookie.split('; ');
        const todoCookie = cookies.find(row => row.startsWith('ft_todo='));

        if (todoCookie) {
            try {
                const jsonString = decodeURIComponent(todoCookie.split('=')[1]);
                const todos = JSON.parse(jsonString);
                for (let i = todos.length - 1; i >= 0; i--) {
                    createToDo(todos[i]);
                }
            } catch (e) {
                console.error('Error parsing cookie', e);
            }
        }
    }
});