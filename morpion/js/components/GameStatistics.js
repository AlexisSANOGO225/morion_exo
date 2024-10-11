export default class GameStatistics extends HTMLElement {

    constructor(){
        //Recupere les proprietées et méthodes de la classe parent (HTMLElement)
        super();
        this.attachShadow({ mode:'open' });
        // this.getDataPlayer = JSON.parse(localStorage.getItem());
    }


    connectedCallback() {
        this.render();
        const buttonOpenGameHome = this.shadowRoot.getElementById('open-game-home');
        buttonOpenGameHome.addEventListener('click', () => { this.backToHome() } );
    }

    backToHome() {
        this.replaceWith(document.createElement('game-home'));
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="css/style.css">
        <br/>
        <div id="game-statistics">
            <button id="open-game-home" class="btn"><i class="fa-solid fa-arrow-left"></i> Retour à l'accueil</button>
            <h1>Les statistiques du jeu Morpion</h1>
            <div id="states-1">
                <div class="row flex">
                    <div class="col">Pseudo</div>
                    <div class="col">Parties jouées</div>
                    <div class="col">Victoires</div>
                    <div class="col">Défaites</div>
                    <div class="col">Match Nuls</div>
                    <div class="col">Pourcentage de Victoires</div>
                    <div class="col">Nombre Moyen de Coups par Partie</div>
                    <div class="col">Temps moyen par coup (sec)</div>
                    <div class="col">Meilleur Temps pour Gagner (sec)</div>
                    <div class="col">Meilleure Séquence de Victoires</div>
                </div>
            </div>
            <div id="states">
                
            </div>
        </div>`;
        this.renderState();
    }

    renderState() {
        const stateLine = this.shadowRoot.getElementById('states');
        stateLine.innerHTML = '';

        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));

            const line = document.createElement('div');
            line.classList.add('flex');

            const colName = document.createElement('div');
            colName.classList.add('col');
            colName.textContent = key;

            const colPartGame = document.createElement('div');
            colPartGame.classList.add('col');
            colPartGame.textContent = value.gamePart;

            const colVictories = document.createElement('div');
            colVictories.classList.add('col');
            colVictories.textContent = value.victories;

            const colDefeats = document.createElement('div');
            colDefeats.classList.add('col');
            colDefeats.textContent = value.defeats;

            const colEquality = document.createElement('div');
            colEquality.classList.add('col');
            colEquality.textContent = value.equality;

            line.appendChild(colName)
            line.appendChild(colPartGame)
            line.appendChild(colVictories)
            line.appendChild(colDefeats)
            line.appendChild(colEquality)

            stateLine.appendChild(line)
        }
    }
}