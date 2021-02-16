const { appendFileSync } = require('fs');
const Storage = require('../Storage');


class Car{
    storage;
    constructor(){

        this.storage= new Storage();


    }

 async indexAll(){

      this.storage.get();
};


 async store(){
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

console.log(this.indexAll);