const Store = require('../Store');


class Car{
    storage;
    constructor(){

        this.store = new Store();


    }
}


let carController = new Car();
module.exports = carController;