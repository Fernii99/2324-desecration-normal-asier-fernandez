const gameController = require('./gameController');

async function start(){
    try{
        const superheroes = await gameController.StartGame();
        gameController.BattleDevelopment(superheroes);

    }catch{

    }
}

start();
