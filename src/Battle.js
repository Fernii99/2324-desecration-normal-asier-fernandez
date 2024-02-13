
 /*******************************************
       FUNTION THAT CALCULATES WHO IS GOING TO START
********************************************/
function Start(junkpile, superhero){

    const junkpileInitiative = junkpile.INT + junkpile.COM;
    const superheroInitiative = superhero.INT + superhero.COM;
    if(junkpileInitiative > superheroInitiative ){
        return junkpile;
    }else{
        return superhero;
    }
}


 /*******************************************
       FUNTION THAT CHECKS IF THE ATTACK IS SUCCESSFUL OR NOT
********************************************/

function SuccessfullAttack(attacker){
    const randomNumber = Math.floor(Math.random() * 100 - 0) + 0;
    
    if(randomNumber <= attacker.COM ){
        return true;
    }else{
        console.log("--------------------------------");
        console.log("El golpe de:  "+ attacker.name + " rsNo ha sido exitoso, cambio de turno")
        return false;
    }
}
 /*******************************************
       FUNTION THAT REDCALCULATES THE DAMAGE THAT THE ATTACKER IS GOING TO BE DEALT TO THE DEFENDER 
********************************************/
function Attack(attacker) {
    const dice = Math.floor(Math.random() * 20 - 1) + 1;
    if(dice < 3){
        console.log("la tirada de dado de:  " + attacker.name + " Ha sido una pifia");
        return Fumble(attacker.SPE, dice);
    }else if(dice > 2 && dice < 18){
        console.log("la tirada de dado de: " + attacker.name + " Ha sido normal");
        return Normal(attacker.POW, attacker.STR, dice );
    }else{
        console.log("la tirada de dado de: " + attacker.name + " Ha sido Critico!");
        return Critic(attacker.INT, attacker.DUR, dice);
    }
}


 /*******************************************
       FUNTION THAT REDUCES THE HP OF THE DEFENDER HERO WITH THE VALUE OF THE ATTACKERS DAMAGE
********************************************/
function Damage(defender, damage) {
    console.log("La vida de " + defender.name + " ha bajado " + damage + " puntos " );
    defender.HP -= damage;
    return defender;
    
}

 /*******************************************
       IN CASE THE DICE THROW FOR THE ATTACK IS FUMBLE
********************************************/
function Fumble(spe, dice){
    
    let resultofdices = 0;
    if(dice = 2){
        for(let i = 1; i <= 4; i++ ){
            resultofdices = resultofdices + Math.floor((Math.random() * 4 - 1) + 1);
        }
        
        console.log("-----------------------------------");
        console.log("Se ha herido a si mismo por un total de: " + (spe / resultofdices).toFixed(0))

        return (spe / resultofdices).toFixed(0);
    }
        return Math.floor( spe / Math.floor(Math.random() * 4 - 1) + 1);
}

 /*******************************************
    FUNCTION OF THE DICE THROW FOR ATACK IS NORMAL
    ********************************************/
function Normal(pow, str, dice){
    return Math.floor((pow + str) * dice / 100); 
}

 /*******************************************
       IN CASE THE DICE THROW FOR THE ATTACK IS CRITIC
********************************************/
function Critic(int, dur, dice){
    let resultofdices = 0;
    if(dice === 18){
        return  Math.floor((int * dur) / 100) * Math.floor(Math.random() * 3 - 1) + 1;
    }else if(dice === 19){
            for(let i = 1; i <= 2; i++ ){
               resultofdices += Math.floor(Math.random() * 3 - 1) + 1;
            }
            return Math.floor((int * dur) / 100) * resultofdices;
    }else{
        for(let i = 1; i <= 2; i++ ){
            resultofdices += Math.floor(Math.random() * 3 - 1) + 1;
        }
         return Math.floor((int * dur) / 100) * resultofdices;
    }
}

module.exports = {
    Start,
    SuccessfullAttack,
    Attack,
    Damage
}