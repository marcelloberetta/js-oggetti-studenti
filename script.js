
//CREO UN OGGETTO  CONTENENTE UNO STUDENTE
var studenti = {
   nome: "Franco",
   cognome: "De Ughi",
   età: 38,
};


//STAMPO A SCHERMO IL CONTENUTO DELL'OGGETTO

for (var key in studenti){
   console.log(studenti[key]);
}


console.log("-----------------------------");

//CREO UN ARRAY DI OGGETTI

var students = [
   {
   nome: "Marcello",
   cognome: "Beretta",
   età: 30,
   },

  {
     nome: "Giovanni",
     cognome: "Storti",
     età: 64,
  },

  {
     nome: "Cataldo",
     cognome: "Baglio",
     età: 62,
  },


  {
     nome: "Giacomino",
     cognome: "Poretti",
     età: 64,
  },

  {
     nome: "Eros",
     cognome: "Cecconi",
     età: 75,
  }

];

for(var index in students){
   var a = students[index]
   console.log( a['nome'],a['cognome'] );

}

alert("Ora ti permetterò di inserire i dati di un nuovo studente");

var nuovoNome = prompt("Inserisci il nome dello studente");

var nuovoCognome = prompt("Inserisci il cognome dello studente");

var nuovaEta = parseInt(prompt("Inserisci l'età dello studente"));
 

students.push({
   "nome" : nuovoNome,
   "cognome" : nuovoCognome,
   "età" : nuovaEta,
} );


/* for(var index in students){
   var a = students[index]
   console.log( a['nome'],a['cognome'] );

} */