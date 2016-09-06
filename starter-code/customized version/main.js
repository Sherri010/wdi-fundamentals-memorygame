
var card=['queen','queen','king','king','joker','joker'];
var cardsInPlay=[];


document.getElementById('reset').addEventListener('click',resetBoard);



function isMatch(cardsInPlay,el){
	var result=document.getElementById('result');
  if(cardsInPlay[0] === cardsInPlay[1]) { result.innerHTML="Match!";

  }	
   else 
    {result.innerHTML="No Match"; setTimeout(function(){el.innerHTML="<img src='back.jpg' class='coverb' alt='back side up'>";},3000);}

}
function isTwoCards(){
	if(this.getAttribute('data-card') == 'king')
	this.innerHTML="<img src='king.png'class='cover' alt='king'>";
  else if(this.getAttribute('data-card') == 'queen') { 
  	this.innerHTML="<img src='queen.png' class='cover'  alt='queen'>";
  }
  else 
  	this.innerHTML="<img src='joker.png' class='cover' alt='joker'>";

	cardsInPlay.push(this.getAttribute('data-card'));
	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay,this);
		cardsInPlay=[];
	}
}

function createBoard(){
	var board=document.getElementById('game-board');
	var btn = document.getElementById('start');
	btn.addEventListener('click',function(){
		 document.getElementsByClassName('board')[0].classList.remove('hide');
	});

	

for(var i=0; i< card.length; i++){
	var el=document.createElement('div');
	el.className='card';
	el.setAttribute('data-card',card[i]);
	el.innerHTML="<img src='back.jpg' class='coverb' alt='back side up'>";
	el.addEventListener('click',isTwoCards);
	 document.getElementsByClassName('board')[0].appendChild(el);

   }

}

function resetBoard(){
   var brd= document.getElementById('game-board');
   brd.innerHTML=" ";
   document.getElementById('result').innerHTML=" ";
   createBoard();
}




createBoard();