const main = () => {
    const root = document.getElementById('root');

    const gameOverPage = () => {
        root.innerHTML = `
            <h1>Game Over</h1>
            <button id="restart-button" class="vir-class">Restart</button>
        `;
        document.getElementById('restart-button').addEventListener('click', createGamePage);
    }

    const createGamePage = () => {
        root.innerHTML = `
            <canvas id="game-canvas" width="${CANVAS_SQUERE}" height="${CANVAS_SQUERE}">
        `;

        const canvas = document.getElementById('game-canvas');
        
        const game = new Game(canvas, gameOverPage);

        game.start();
    }

    const createSpawnPage = () => {
        const spawnPage = document.createElement('div');
        spawnPage.id = 'spawn-page';
        spawnPage.innerHTML = `
            <h1>Spawn Page</h1>
            <button id="spawn-button">Spawn</button>
        `;
        root.appendChild(spawnPage);
        document.getElementById('spawn-button').addEventListener('click', createGamePage);
    }




    
    createSpawnPage()
}

document.addEventListener('DOMContentLoaded', main);
