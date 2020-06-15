document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [
      {
        name: "angie",
        img: "images/angie.png",
      },
      {
        name: "angie",
        img: "images/angie.png",
      },
      {
        name: "bean",
        img: "images/bean.png",
      },
      {
        name: "bean",
        img: "images/bean.png",
      },
      {
        name: "chaplin",
        img: "images/chaplin.png",
      },
      {
        name: "chaplin",
        img: "images/chaplin.png",
      },
      {
        name: "clint",
        img: "images/clint.jpg",
      },
      {
        name: "clint",
        img: "images/clint.jpg",
      },
      {
        name: "elvis",
        img: "images/elvis.jpg",
      },
      {
        name: "elvis",
        img: "images/elvis.jpg",
      },
      {
        name: "stewie",
        img: "images/stewie.jpg",
      },
      {
        name: "stewie",
        img: "images/stewie.jpg"
      }
    ];

    cardArray.sort(() => 0.5 - Math.random());
 

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/default.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('you found a match');
            
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen);
            console.log(cardsWon);
            
        } else {
            cards[optionOneId].setAttribute('src', 'images/default.png'); 
            cards[optionTwoId].setAttribute("src", "images/default.png");
            alert('sorry try again');
        }
        
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'congrats! you found all';
        }
    }

    // flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        console.log(cardsChosenId);
        
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            // prevent choosing the same card twice at once
            if (cardsChosenId[0] === cardsChosenId[1]) {
                alert("You clicked a box twice,That's cheating!");
                this.setAttribute("src", "images/default.png");
                cardsChosen = [];
                cardsChosenId = [];
            } else {
                
                setTimeout(checkForMatch, 500);
            }
        }
    }

    createBoard();
})