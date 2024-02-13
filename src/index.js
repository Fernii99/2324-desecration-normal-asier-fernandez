const gameController = require('./gameController');

async function start(){
    try{
        const superheroes = await gameController.StartGame();
        const winner = await gameController.BattleDevelopment(superheroes);

    }catch{

    }
}

start();
