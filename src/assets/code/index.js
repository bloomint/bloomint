const player = new Player();
const inventoryElement = document.getElementById("inventory");

function flower() {   
    tiers.forEach(tier => {
        tier[1].forEach(flower => {
            if(Math.floor(Math.random() * flower[1]) === 1)
                player.addItem(flower[0], 1)
        })
    })
    updateInventory();
}

function updateInventory() {
    inventoryElement.innerHTML = "";

    Object.entries(player.getInventory()).forEach(e=>{
        const [tier] = tiers.find(([tier, flowers]) => flowers.some(([flower]) => flower === e[0]))
        inventoryElement.innerHTML += `${e[0].charAt(0).toUpperCase() + e[0].slice(1)} x${e[1].amount} <img src="assets/images/${tier}/${e[0]}.png"><br>`
    })
}

updateInventory();
