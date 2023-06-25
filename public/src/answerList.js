const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/private/answers/get');
xhr.send();
xhr.onload = () => {
    const answers = JSON.parse(xhr.response)?.answers;

    answers.forEach(el => {
        if(el.mark === "Не оценено.") { 
            const collection = document.querySelector('.collection');
            const link = document.createElement('a');
            const li = document.createElement('li');

            console.log(`/answer?id=${el.id}`)

            li.classList.add('collection-item');
            link.innerHTML = el.value;
            link.href = `/answer?id=${el.id}`;
            li.appendChild(link);
            collection.appendChild(li);
        }
    });
    
}