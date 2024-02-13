

function Start(junkpile, superhero){

    const junkpileInitiative = junkpile.INT + junkpile.COM;
    const superheroInitiative = superhero.INT + superhero.COM;
    if(junkpileInitiative > superheroInitiative ){
        return "junkpile";
    }else{
        return "superhero";
    }
}

function SuccessfullAttack(attacker){
    const randomNumber = Math.floor(Math.random() * 100 - 0)-1;
    
    if(randomNumber <= attacker.COM ){
        return true;
    }else{
        return false;
    }
}

function Attack() {

}

module.exports = {
    Start,
    SuccessfullAttack,
    Attack
}