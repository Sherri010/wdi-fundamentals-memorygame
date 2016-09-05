
var card=['queen','queen','king','king'];
var cardsInPlay=[];

// if(cardOne === cardTwo) alert("match");
// else alert("no match");

// for(var)


// // First up, let's create a new list item and store it in a variable.
// var newListItem = document.createElement('li');

// // Alright! Now let's update the text content of that list item.
// newListItem.textContent = 'Feed the cat';

// // And Finally...let's add that list item as a child of the ul.
// document.getElementsByTagName('ul')[0].appendChild(newListItem);

function isMatch(cardsInPlay){
  if(cardsInPlay[0] === cardsInPlay[1]) {alert("match");}	
   else 
   	alert("no match");
}

function isTwoCards(){
	if(this.getAttribute('data-card') == 'king')
	this.innerHTML="<img src='king.png'class='cover' alt='king'>";
  else 
  	this.innerHTML="<img src='queen.png' class='cover'  alt='king'>";

	cardsInPlay.push(this.getAttribute('data-card'));
	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay=[];
	}
}

function createBoard(){
	var board=document.getElementById('game-board');

for(var i=0; i< card.length; i++){
	var el=document.createElement('div');
	el.className='card';
	el.setAttribute('data-card',card[i]);
	el.addEventListener('click',isTwoCards);
	 document.getElementsByClassName('board')[0].appendChild(el);

   }

}


createBoard();