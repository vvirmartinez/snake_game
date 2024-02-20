const main = () => {
    const root = document.getElementById('root');

    const createSpawnPage = () => {
        const spawnPage = document.createElement('div');
        spawnPage.id = 'spawn-page';
        spawnPage.innerHTML = `
            <h1>Spawn Page</h1>
            <button id="spawn-button">Spawn</button>
        `;
        root.appendChild(spawnPage);
    }

    
    createSpawnPage()
}

document.addEventListener('DOMContentLoaded', main);