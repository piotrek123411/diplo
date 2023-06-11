const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/private/tasks/get');
xhr.send();
xhr.onload = () => {
    const tasks = JSON.parse(xhr.response)?.tasks;

    tasks.forEach(el => {
        const collection = document.querySelector('.collection');
        const li = document.createElement('li');

        li.classList.add('collection-item');
        li.innerHTML = el.value;
        collection.appendChild(li);
    });
    
}