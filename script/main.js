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


//add hide fanctional

const handleHideBooks = event => {
    const { target } = event;
    // if (target.checked) {
    //     ulList.style.display = 'none'
    // } else {
    //     ulList.style.display = 'block'
    // }

    ulList.style.display = target.checked ? 'none' : 'block';
}

hideBox.addEventListener('input', handleHideBooks);


// add search fanctional

const handleSearch = element => {
    let currentValue = element.target.value.toLowerCase();
    let autors = document.querySelectorAll('ul, li');
    autors.forEach(autor => {
        autor.style.display = (autor.textContent.toLowerCase().includes(currentValue)) ? 'block' : 'none';
    })
 }
 
 searchInput.addEventListener('keyup', handleSearch);

