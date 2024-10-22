const bookListName = document.querySelector("#book-list > ul")
console.log(bookListName)

 // Deleting a book from the list
bookListName.addEventListener('click',(event)=>{
    const deleteBtn = event.target.className
    if(deleteBtn == "delete"){
        const listTag = event.target.parentNode;
        bookListName.removeChild(listTag)
        console.log(listTag)
    }
})

//add books
const addNewBook = document.forms['add-book'];
addNewBook.addEventListener('submit', function(newBook){
    newBook.preventDefault();
    const value = addNewBook.querySelector('input[type="text"]').value;
    console.log(value);

    //checking for empty value
    if(value == ''){
        alert("Field cannot enter an empty string, please fill this!")
        return false;
    }

    //create elements
    const listAdd = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteListBtn = document.createElement('span')

    //add book name and details
    deleteListBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteListBtn.classList.add('delete');


    //append to DOM
    listAdd.appendChild(bookName);
    listAdd.appendChild(deleteListBtn);
    bookListName.appendChild(listAdd);

    //clear entry tray
    this.querySelector('input[type="text"]').value = '';


});

// Search for books by names
const searchBookNames = document.forms['search-books'];
const searchBookNameEntry = searchBookNames.querySelector('input');
const bookList = document.getElementById('book-list'); 

searchBookNameEntry.addEventListener('keyup', function(event) {
  const searchWord = event.target.value.trim().toLowerCase();
  const books = bookList.getElementsByTagName('li');
  Array.from(books).forEach(function(book) {
    const title = book.firstElementChild.textContent.toLowerCase();
    if(title.indexOf(searchWord) != -1){
        book.style.display = 'block';
    }
    else{
        book.style.display = 'none';
    }
  });
});



 