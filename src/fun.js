document.getElementById("hogwarts-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const dobInput = document.getElementById("birthdate");
    const characterInput = document.getElementById("character");

    const dob = dobInput.value;
    const character = characterInput.value.trim();
    const birthDate = new Date(dob);

    if (!dob) {
      alert("Please enter your date of birth.");
      dobInput.focus();
      return;
    }

    if (!character) {
      alert("Please enter your favorite Harry Potter character.");
      characterInput.focus();
      return;
    }

    // Assign house
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1;
    const houseIndex = (day + month) % 4;
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    const chosenHouse = houses[houseIndex];

    document.getElementById("house-result").innerText =
      ` Your Hogwarts house is: ${chosenHouse}! Favorite Character: ${character}`;
    event.target.reset();
  });
  