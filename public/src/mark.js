const xhr = new XMLHttpRequest();

xhr.open('GET', `/api/private/answers/get?id=${window.location.href.split('id=')[1]}`);
xhr.send();
xhr.onload = () => {
    const answerValue = document.querySelector('#answerValue');
    const answerId = document.querySelector('#answerId');
    const answer = JSON.parse(xhr.response).answers[0].value;
    const answer_Id = JSON.parse(xhr.response).answers[0].id;
    const task_id = JSON.parse(xhr.response).answers[0].task_id;
    
    const xhr2 = new XMLHttpRequest();

    xhr2.open('get', `api/private/tasks/get?id=${task_id}`);
    xhr2.send();
    xhr2.onload = () => {
        const taskValue = document.querySelector('#taskValue');
        const task = JSON.parse(xhr2.response).tasks[0].value;

        taskValue.value = task; 
    }
    answerId.innerHTML = answer_Id;
    answerValue.value = answer;
}

const btn = document.querySelector('#setMarkBtn');
btn.onclick = () => {
    const value = document.querySelector('#mark').value;
    const xhr3 = new XMLHttpRequest();
    xhr3.open('POST', `/api/private/answer/set-mark`);
    xhr3.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr3.send(JSON.stringify({
        "answer_id": document.querySelector('#answerId').innerHTML,
        "mark": `${value}`
    }));
    xhr3.onload = () => {
    }
    window.location.href='http://localhost:5000/home';
};