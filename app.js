const removeBtns = document.querySelectorAll('li button');
const toDoList = document.getElementById('itemList');

toDoList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI' ){
        e.target.style.textDecoration = "line-through";
    }else if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
})

const form = document.querySelector('#list');
const input = document.querySelector('#to-do');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'X';
    newItem.innerText = input.value;
    newItem.appendChild(removeButton);
    input.value = '';
    toDoList.appendChild(newItem);
})