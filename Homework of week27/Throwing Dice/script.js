let diceNumber = Math.trunc(Math.random()*6)+1;

let doThrowDice = function(){
    
    document.querySelector('.dice').textContent = diceNumber;
}
document.querySelector('.throw').addEventListener('click', doThrowDice)