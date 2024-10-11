export default class GameHome extends HTMLElement {

    constructor(){
        //Recupere les proprietées et méthodes de la classe parent (HTMLElement)
        super();
        this.attachShadow({ mode:'open' });
    }

    connectedCallback() {
        this.render();
        const buttonOpenGameRules = this.shadowRoot.getElementById('open-game-rules');
        const buttonOpenGameSettings = this.shadowRoot.getElementById('open-game-settings');
        const buttonOpenGameStatistics = this.shadowRoot.getElementById('open-game-statistics');
        buttonOpenGameRules.addEventListener('click', () => { this.openRules() } );
        buttonOpenGameSettings.addEventListener('click', () => { this.openGameSettings() } );
        buttonOpenGameStatistics.addEventListener('click', () => { this.openGameStatistics() } );
    }

    openRules() {
        this.replaceWith(document.createElement('game-rules'));
    }

    openGameSettings() {
        this.replaceWith(document.createElement('game-settings'));
    }

    openGameStatistics() {
        this.replaceWith(document.createElement('game-statistics'));
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="css/style.css">
        <div id="game-home">
            <h1>Morpion en ligne</h1>
            <div class="flex gap20">
                <div class="w25">
                    <img class="full" src="image/morpion.png" alt="" srcset="">
                </div>
                <div  class="w75">
                    <button id="open-game-settings" class="btn full">
                        <i class="fa-solid fa-robot"></i> Jouer contre l'Ordi
                    </button>
                    <button id="open-game-rules" class="btn full">
                        <i class="fa-solid fa-book"></i>
                        Guide de jeu
                    </button>
                    <button id="open-game-statistics" class="btn full">
                         Les statistiques du jeu
                    </button>
                </div>
            </div>
        </div>`;
    }
}