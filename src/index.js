import express, { json } from 'express';
import routes from "./routes.js"


const app = express()  // instanciranje aplikacije
const port = 3000  // port na kojem će web server slušati



app.get( '/', routes.datum)
app.get('/vrijeme', routes.vrijeme)

app.get('/dodaj', routes.dodaj)
app.get('/dohvati', routes.dohvati)



let studenti =   [{

    JMBAG : 1234567890, 
    ime : "Tomislav",
    prezime: "Troha",
    godina_studija : 2

}, {
    JMBAG : 1122334455,
    ime : "Mario",
    prezime: "Marković",
    godina_studija : 3

}, {
    JMBAG : 3322556677,
    ime : "Ivica",
    prezime: "Markač",
    godina_studija : 2

}, {
    JMBAG : 7799115566,
    ime : "Ante",
    prezime: "Gotovina",
    godina_studija : 5

},{
    JMBAG : 4411227755,
    ime : "Janko",
    prezime: "Bobetko",
    godina_studija : 4

}];


app.get('/studenti', (req, res) => res.send(JSON.stringify(studenti)))

app.get('/studenti/first', (req, res) => res.send(JSON.stringify(studenti[0])))

app.get('/studenti/last', (req, res) => res.send(JSON.stringify(studenti[4]))) // pokusao sam sa -1 al ne radi




app.listen(port, () => console.log(`Slušam na portu ${port}!`))
