
const Storage = require('../Storage');


class Car{
    storage;
    constructor(){

        this.storage= new Storage();


    }

 async indexAll(){

      this.storage.get();
};


 async store(car){
    this.storage.set(car);
    return;
 };

 async update(){
    return;
 };

 async destroy(){
    return;
 };


}


let carController = new Car();
module.exports = carController;

console.log(this.store);