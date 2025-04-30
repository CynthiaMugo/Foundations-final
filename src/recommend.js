// Add recommendations to the recommendations page and make use of localStorage
let books = JSON.parse(localStorage.getItem("books")) || [];
let bookForm = document.getElementById("book-form");
let recList = document.getElementById("recommendations-list");
// let recList = [];
console.log(recList);

bookForm.addEventListener("submit", function(){
    event.preventDefault();
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const reason = document.getElementById("reason").value.trim();
    const image = document.getElementById("image").value.trim();
    
    const book = {
        title: title,
        author: author,
        genre: genre,
        reason: reason,
        image: image
    };
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    bookForm.reset();
    displayBooks(books);

    // console.log(name, model, description, image);
})
function displayBooks(data) {
    recList.innerHTML = "";
    data.forEach(book => {
      let div = document.createElement("div");
      div.className = "book";
       div.innerHTML = `
       <img src="${book.image}" alt="${book.title}">
         <h4>${book.title}</h4>
         <p>${book.author}</p>
         <p>${book.genre}</p>
         <p>${book.reason}</p>
         `;
         recList.appendChild(div);

    });
}
displayBooks(books);
// localStorage.removeItem("books");