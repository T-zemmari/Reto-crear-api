const Storage = require('../Storage');

 let storage = new Storage();

 
/*
 store.set({name:'tarek',age:40});
 store.set({name:'tarek',age:40});
 store.set({name:'tarek',age:40});
 store.set({name:'tarek',age:40});
 store.set({name:'tarek',age:40});
 store.set({name:'tarek',age:40});
 store.set({name:'tarek',age:40});
 store.set({name:'tarek',age:40});
 store.set({name:'tarek',age:40});
 store.set({name:'tarek',age:40});
 store.set({name:'tarek',age:40});
 store.set({name:'lola',age:25});
 store.set({name:'blanca',age:18});

 store.set({name:'ana',age:33});


 resultado3 =store.get();

 console.log(resultado3);*/
 let resultado3 = store.findByID(1);
 let resultado4 = store.findByID(2);
 console.log(resultado3,resultado4);