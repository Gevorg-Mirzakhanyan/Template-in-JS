const addButton = document.getElementById('add-button');
const addFormInput = document.getElementById('add-form-input');
const ulList = document.querySelector('#book-list > ul');
const hideBox = document.getElementById('hide');
const searchInput = document.getElementById('searchBar');


// add book fanctional  
const handleAddBook = () => {
    //const value = addFormInput.value;
    const { value } = addFormInput;
    if (value.trim()) {
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteButton = document.createElement('span');

        bookName.innerText = value;
        deleteButton.innerText = 'delete';

        bookName.classList.add('name');
        deleteButton.classList.add('delete')
        li.appendChild(bookName);
        li.appendChild(deleteButton);
        ulList.appendChild(li)

        addFormInput.value = '';
    }
}
addButton.addEventListener('click', handleAddBook)


// add delete fanctional

const handleDeleteBook = event => {
        const { target } = event;
        if (target.className === 'delete') {
            const li = target.parentElement;
            ulList.removeChild(li)
            console.log(li);
        }
}

ulList.addEventListener('click', handleDeleteBook)


//--------------------------------------------------------