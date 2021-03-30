
const datum = (req, res) => res.send ("Danas je " + new Date() );
let prognoza = ["suncano", "kisovito", "oblacno"]
let vrijeme =  (req, res) => res.send ( "Vrijeme je " + prognoza[Math.floor(Math.random()*prognoza.length)] );
  


var randomBroj = Math.floor(Math.random()*100);

var lista = [];

lista.push(randomBroj)




let dodaj = (req, res) => res.send("U listu je dodan broj " + randomBroj)
 
let dohvati = (req, res) => res.send ("Broj u listi " + lista)







export default {
    datum, vrijeme, dodaj, dohvati,
}

