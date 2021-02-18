const { clear } = require('console');
const { appendFileSync } = require('fs');
const car = require('./controllers/carController');

class Storage {

    

   constructor(){
       this.state=[];
       console.log('se ha  creado una estancia de dataBase...');
   }


 async set(object){
      this.state.push(object);
       return this.store.length;
 
 }

async get(){
return this.state.slice(-10);
}
async findById(id){  // PROMISE OF INSTACE
  const instance = this.state[id-1];
  if(!instance) {
      throw new Error('Id not found');
  }
  return instance
}
 async updateById(id,object){
      let element = this.findById(id);
      if(element){
           element = object;
      }
    return element;
 } 
}






module.exports = Storage;