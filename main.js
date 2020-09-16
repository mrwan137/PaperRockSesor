let userScore = 0 ;
let compScore = 0 ;
const shwUser = document.getElementById("shwUser");
const shwComp = document.getElementById("shwComp");
const p = document.getElementById("p");
const r = document.getElementById("r");
const s = document.getElementById("s");
const shwStatu = document.getElementById("statuOfWin");

function changeUser() {
    userScore += 1
    shwUser.innerHTML = userScore;
}

function changeComp() {
    compScore += 1
    shwComp.innerHTML = compScore;
}

function changeResulte(resulte){
    shwStatu.innerHTML = resulte
}

function compRaund(){
    const choises = ['p', 'r', 's']   
    var raund = Math.floor(Math.random()*3)
    return choises[raund]
}

function game(userChoice){
    const compChoise = compRaund()

    switch (userChoice + compChoise) {
        case 'pr':
        case 'sp':
        case 'rs':        
            changeUser();
            shwStatu.innerHTML = "user win";
            break;

        case 'rp':
        case 'ps':
        case 'sr':        
            changeComp();
            shwStatu.innerHTML = "user lose";
            break;

        case 'pp':
        case 'ss':
        case 'rr':        
            shwStatu.innerHTML = "drow";
            break;   
    }

}

function main(){
    p.addEventListener('click', function(){game('p')})
    r.addEventListener('click', function(){game('r')})
    s.addEventListener('click', function(){game('s')})
}

main()