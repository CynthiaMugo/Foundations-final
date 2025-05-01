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
    },
    {
        name: "Daphne Bridgerton", 
        clue: "The diamond of the season who falls for a duke with a secret." 
    },
    {   name: "Simon Basset", 
        clue: "A duke who swore never to marry... until he met her." 
    },
    {   name: "Eve Dallas", 
        clue: "A tough-as-nails detective with a haunted past." 
    },
    {   name: "Roarke", 
        clue: "A reformed billionaire criminal with a soft spot for justice—and for her." 
    },
    {   name: "Harry Potter", 
        clue: "The boy who lived, with a lightning bolt scar." 
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