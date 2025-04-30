const characters = [
    {
      name: "Hermione Granger",
      clue: "I'm brilliant, brave, and one of Harry Potter's closest friends."
    },
    {
      name: "Christian Grey",
      clue: "I'm a billionaire with a mysterious past and a taste for control."
    },
    {
      name: "Elizabeth Bennet",
      clue: "I'm witty and sharp-tongued, and I fell for a man I once misjudged."
    },
    {
      name: "Katniss Everdeen",
      clue: "I volunteered as tribute and fight for justice with a bow and arrow."
    }
  ];
  
  let currentCharacter = characters[Math.floor(Math.random() * characters.length)];
  document.getElementById("clue").innerText = currentCharacter.clue;
  
  document.getElementById("submit-btn").addEventListener("click", function() {
    const userGuess = document.getElementById("guess-input").value.trim().toLowerCase();
    const actual = currentCharacter.name.toLowerCase();
    const feedback = document.getElementById("feedback");
  
    if (userGuess === actual) {
      feedback.innerText = `Correct! It was ${currentCharacter.name}. `;
    } else {
      feedback.innerText = `Oops! Try again.`;
    }
  });