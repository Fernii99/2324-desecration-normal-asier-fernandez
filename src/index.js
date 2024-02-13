const gameController = require('./gameController');

async function start(){
    try{
        const superheroes = await gameController.StartGame();
        const fighters = gameController.BattleDevelopment(superheroes);
        gameController.EndGame(fighters);

    }catch{

    }
}

start();
