const xhr = new XMLHttpRequest();

xhr.open('GET', `/api/private/tasks/get?id=${window.location.href.split('id=')[1]}`);
xhr.send();
xhr.onload = () => {
    const taskId = document.querySelector('.taskId');
    const taskValue = document.querySelector('.taskValue');

    const task = JSON.parse(xhr.response)?.tasks[0];
    taskId.value = task.id;
    taskValue.value = task.value;
}

const btn = document.querySelector('#sendAnswerBtn');
btn.onclick = () => {
    const value = document.querySelector('#taskAnswer').value;
    const xhr2 = new XMLHttpRequest();

    xhr2.open('POST', `/api/private/answer/create`);
    xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr2.send(JSON.stringify({
        "task_id": document.querySelector('.taskId').value,
        "value": value
    }));
    xhr2.onload = () => {
    
    }
};

const a = document.querySelector('.aaa');
a.onclick = () => {{
    const taskId = document.querySelector('.taskId');
    const xhr3 = new XMLHttpRequest();
    xhr3.open('POST', '/api/private/tasks/delete');
    xhr3.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr3.send(JSON.stringify({
        "id": taskId.value
    }))

}}