const { appendFileSync } = require('fs');
const Storage = require('../Storage');


class Car{
    storage;
    constructor(){

        this.storage= new Storage();


    }

 async indexAll(){
      return;
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