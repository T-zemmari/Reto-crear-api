const car = require('./controllers/car');

class Store {

    

   constructor(){
       this.state=[];
       console.log('se ha  creado una estancia de dataBase...');
   }


 async set(objeto){
      this.state.push(objeto);
       return this.state.length;
 
 }

async get(){
return this.state.slice(-10)
}



}

module.exports = Store;