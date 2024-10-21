// const Wrapper = document.getElementById("wrapper")
// console.log(Wrapper)

// const bookTitle = document.getElementsByClassName("name")
// console.log(bookTitle)

// console.log(Array.isArray(bookTitle))

// console.log((Array.isArray(Array.from(bookTitle))))
// const arrayResult = Array.from(bookTitle)

// arrayResult.forEach(element => {
//     console.log(element.textContent)
// });

// console.log(arrayResult)



// bookTitle.array.forEach(element =>{
//     console.log(element)
// })


//get element by tagName

// const lis = document.getElementsByTagName("li")
// console.log(lis)

//get element by query selector
// const pageBanner = document.querySelector("#page-banner")
// console.log(pageBanner.parentNode)

//get parent
// const title2 = document.querySelector(".title")
// console.log(title2.parentNode)


// const title3 = document.querySelector(".title")
// console.log(title3.nextSibling)

//elementSibling
//QUERYSELECTOR YOU DON'T NEED TO CONVERT TO ARRAY
// const title4 = document.querySelector(".title")
// console.log(title4.nextElementSibling)

//A class that same name and many element, we use querySelectorAll to manipulate my text content
// const bookTtitle = document.querySelectorAll(".name")
// console.log(bookTtitle)
// bookTtitle.forEach(element => {
//     console.log(element.textContent)
//     element.textContent += " text"
// });


// const bookToRead = document.querySelector(".title")
// console.log(bookToRead)



// const title = document.querySelectorAll(".title")
// console.log(title)

// title.forEach(element =>{
//     console.log(element)
// })

//only a parent can take away the child by query
// bubbling to delete an item
const bookList = document.querySelector("#book-list > ul")
console.log(bookList)



//every action you perform on the doc is invest

//adding event listener -  a func that takes two things(the event and the callback func)
bookList.addEventListener('click',(event)=>{
    // console.log(event)
    const deleteBtn = event.target.className
    // console.log(deleteBtn)
    if(deleteBtn == "delete"){
        const listTag = event.target.parentNode;
        // console.log(listTag)
        bookList.removeChild(listTag)
        console.log(listTag)
    }
})

bookList.addEventListener("click",(event)=>{
    const addBtn = event.target.className
    if(addBtn == "Add"){
        const listTag = event.target.parentNode;
        bookList.appendChild(listTag)
        console.log(listTag)
    }
} )
