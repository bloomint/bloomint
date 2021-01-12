class Player {
    constructor() {
        this.inventory = this.getInventory();
    }

    ensureInventory() {
        storage.ensure("inventory", {});
    }   

    setInventory(inventory) {
        storage.set("inventory", inventory)       
    }

    getInventory() {
        this.ensureInventory();

        return storage.get("inventory");
    }

    addItem(flower, amount) {
        this.ensureItem(flower);
        let currentInventory = this.inventory;
        
        currentInventory[flower].amount += amount;

        this.setInventory(currentInventory);
    }

    ensureItem(item) {
        const currentInventory = this.inventory;

        if(!currentInventory[item]) {
            currentInventory[item] = {
                amount: 0
            }
            console.log(currentInventory)
            this.setInventory(currentInventory)
        }
    }

  }