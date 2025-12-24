function greatUser() {
const name = document.getElementById("fname").value;
alert (`Hello, ${name}! Ready to rock it?`);
}

// Formation configurations
const formations = {
    '3-4-3': { defenders: 3, midfielders: 4, forwards: 3 },
    '3-5-2': { defenders: 3, midfielders: 5, forwards: 2 },
    '4-3-3': { defenders: 4, midfielders: 3, forwards: 3 },
    '4-4-2': { defenders: 4, midfielders: 4, forwards: 2 },
    '4-5-1': { defenders: 4, midfielders: 5, forwards: 1 },
    '5-3-2': { defenders: 5, midfielders: 3, forwards: 2 },
    '5-4-1': { defenders: 5, midfielders: 4, forwards: 1 }
};

let currentFormation = '3-4-3';
let selectedPlayer = null;

// Sample player statistics data
const playerStats = {
    'Haaland': {
        'Goals': 27,
        'Assists': 5,
        'Shots': 89,
        'Shots on Target': 56,
        'Key Passes': 12,
        'Total Points': 272,
        'Goals/90': 0.89,
        'xG': 24.2,
        'xA': 3.8
    },
    'Saka': {
        'Goals': 14,
        'Assists': 11,
        'Shots': 78,
        'Shots on Target': 34,
        'Key Passes': 89,
        'Total Points': 196,
        'Goals/90': 0.41,
        'xG': 12.8,
        'xA': 8.9
    },
    'Alexander-Arnold': {
        'Goals': 1,
        'Assists': 13,
        'Shots': 45,
        'Shots on Target': 12,
        'Key Passes': 156,
        'Total Points': 156,
        'Tackles': 78,
        'Interceptions': 45,
        'Clean Sheets': 10
    }
};

function changeFormation(formation) {
    // Update active button
    document.querySelectorAll('.formation-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    currentFormation = formation;
    const config = formations[formation];
    
    // Update player positions based on formation
    updateFormationDisplay(config);
}

function updateFormationDisplay(config) {
    const defenderRow = document.getElementById('defenderRow');
    const midfielderRow = document.getElementById('midfielderRow');
    const forwardRow = document.getElementById('forwardRow');

    // Clear existing players
    defenderRow.innerHTML = '';
    midfielderRow.innerHTML = '';
    forwardRow.innerHTML = '';

    // Sample players for each position
    const defenders = [
        { name: 'Alexander-Arnold', price: '£7.0m', team: 'LIV', fixture: 3 },
        { name: 'Saliba', price: '£6.0m', team: 'ARS', fixture: 2 },
        { name: 'Dalot', price: '£5.0m', team: 'MUN', fixture: 4 },
        { name: 'Walker', price: '£5.5m', team: 'MCI', fixture: 3 },
        { name: 'Robertson', price: '£6.5m', team: 'LIV', fixture: 3 }
    ];

    const midfielders = [
        { name: 'Saka', price: '£10.0m', team: 'ARS', fixture: 2 },
        { name: 'Palmer', price: '£10.5m', team: 'CHE', fixture: 3 },
        { name: 'Son', price: '£10.0m', team: 'TOT', fixture: 3 },
        { name: 'Ødegaard', price: '£8.5m', team: 'ARS', fixture: 2 },
        { name: 'Salah', price: '£12.5m', team: 'LIV', fixture: 3 }
    ];

    const forwards = [
        { name: 'Haaland', price: '£15.0m', team: 'MCI', fixture: 3 },
        { name: 'Jackson', price: '£8.0m', team: 'CHE', fixture: 4 },
        { name: 'Havertz', price: '£8.0m', team: 'ARS', fixture: 1 }
    ];

    // Add defenders
    for (let i = 0; i < config.defenders; i++) {
        if (defenders[i]) {
            defenderRow.appendChild(createPlayerSlot(defenders[i], 'DEF'));
        }
    }

    // Add midfielders
    for (let i = 0; i < config.midfielders; i++) {
        if (midfielders[i]) {
            midfielderRow.appendChild(createPlayerSlot(midfielders[i], 'MID'));
        }
    }

    // Add forwards
    for (let i = 0; i < config.forwards; i++) {
        if (forwards[i]) {
            forwardRow.appendChild(createPlayerSlot(forwards[i], 'FWD'));
        }
    }
}

function createPlayerSlot(player, position) {
    const slot = document.createElement('div');
    slot.className = 'player-slot';
    slot.setAttribute('data-position', position);
    slot.onclick = function() { selectPlayer(this); };

    const fixtureClass = player.fixture <= 2 ? 'fixture-easy' : 
                        player.fixture === 3 ? 'fixture-medium' : 'fixture-hard';

    slot.innerHTML = `
        <div class="fixture-indicator ${fixtureClass}">${player.fixture}</div>
        <div class="player-name">${player.name}</div>
        <div class="player-price">${player.price}</div>
        <div class="player-team">${player.team}</div>
    `;

    return slot;
}

function selectPlayer(playerElement) {
    // Remove previous selection
    if (selectedPlayer) {
        selectedPlayer.classList.remove('selected');
    }

    // Select new player
    playerElement.classList.add('selected');
    selectedPlayer = playerElement;

    // Update player stats panel
    const playerName = playerElement.querySelector('.player-name').textContent;
    displayPlayerStats(playerName);
}

function displayPlayerStats(playerName) {
    const statsContainer = document.getElementById('playerStatsContent');
    const stats = playerStats[playerName];

    if (stats) {
        let statsHTML = `<h4 style="color: #2d3748; margin-bottom: 15px;">${playerName}</h4>`;
        
        Object.entries(stats).forEach(([key, value]) => {
            statsHTML += `
                <div class="stat-item">
                    <span>${key}</span>
                    <strong>${value}</strong>
                </div>
            `;
        });

        statsContainer.innerHTML = statsHTML;
    } else {
        statsContainer.innerHTML = `
            <h4 style="color: #2d3748; margin-bottom: 15px;">${playerName}</h4>
            <p style="color: #718096; font-style: italic;">Detailed statistics will be loaded from FPL API</p>
        `;
    }
}

function addToTransferQueue(slotElement) {
    if (selectedPlayer && !slotElement.classList.contains('filled')) {
        const playerName = selectedPlayer.querySelector('.player-name').textContent;
        const playerPrice = selectedPlayer.querySelector('.player-price').textContent;
        const playerTeam = selectedPlayer.querySelector('.player-team').textContent;

        slotElement.innerHTML = `
            <div style="text-align: left;">
                <div style="font-weight: bold; color: #2d3748;">${playerName}</div>
                <div style="font-size: 12px; color: #4a5568;">${playerPrice} • ${playerTeam}</div>
            </div>
        `;
        slotElement.classList.add('filled');
    }
}

// Initialize the interface
document.addEventListener('DOMContentLoaded', function() {
    console.log('FPL Companion Tool Loaded');
    // Future: Initialize FPL API connection here
});