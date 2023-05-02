// Menentukan pilihan Komputer menggunakan method Math
function Computer(){
    let computerChoice = Math.random();
    if(computerChoice <= 0.37){
        return 'paper';
    } else if(computerChoice >= 0.37 && computerChoice <= 0.67) {
        return 'rock';
    } else {
        return 'scissor';
    }
}



//Mencari hasil
function Result(player, computer){
    if(player == computer){
        return 'DRAW';
    }

    if(player == 'paper'){
        if(computer == 'rock'){
            return 'YOU WIN';
        } else {
            return 'YOU LOSE';
        }
    }

    if(player == 'rock'){
        if(computer == 'scissor'){
            return 'YOU WIN';
        } else {
            return 'YOU LOSE';
        }
    }

    if(player == 'scissor'){
        if(computer == 'paper'){
            return 'YOU WIN';
        } else {
            return 'YOU LOSE';
        }
    }
}


//Menentukan pilihan player
const playerSide = document.querySelector('.playerSide'); 
const playerChoice = playerSide.querySelectorAll('img');
playerChoice.forEach((e)=>{
    e.addEventListener('click', ()=>{
        const computer = Computer();
        const player = e.className;

        const imgComputer = document.querySelector('.computer')
        imgComputer.setAttribute('src', 'img/' + computer + '.jpg');
        console.log(imgComputer);

        const result = document.querySelector('.result');
        result.innerHTML = Result(player, computer);
    })
});