const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/private/tasks/get');
xhr.send();
xhr.onload = () => {
    const tasks = JSON.parse(xhr.response)?.tasks;

    tasks.forEach(el => {
        const collection = document.querySelector('.collection');
        const link = document.createElement('a');
        const li = document.createElement('li');

        console.log(`/task?id=${el.id}`)

        li.classList.add('collection-item');
        link.innerHTML = el.value;
        link.href = `/task?id=${el.id}`;
        li.appendChild(link);
        collection.appendChild(li);
    });
    
}