// Registration form for index.html - welcome user to the group
document.getElementById("join-us").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();

    const user = { name, email, number }
    localStorage.setItem("fictionAddictUser", JSON.stringify(user));

    // return upon success
    alert("Thanks for registering. Welcome to Fiction Addicts!");
    event.target.reset()

});

