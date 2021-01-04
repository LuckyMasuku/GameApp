const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyParser.urlencoded({ extended: false }))

//bodyparser application
app.use(bodyParser.json())

const myConnectionString = ' mongodb+srv://admin:admin@cluster0.f0b07.mongodb.net/matches?retryWrites=true&w=majority'
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//schema 
const Schema = mongoose.Schema;
//telling the schema what data will be stored
var matchSchema = new Schema({
    player: String,
    venue: String,
    team: String
});
//This will allow to write data to the database
var MatchModel = mongoose.model("match", matchSchema);


app.get('/api/matches', (req, res) => {

    // const mymatches = [
    //     {
    //         "Player": "Hakkim",
    //         "Venue": "2018",
    //         "imdbID": "tt4154756",
    //         "Type": "match",
    //         "Team": "https://cdn.footballtransfertavern.com/wp-content/uploads/2020/09/Thiago-Alcantara-in-action-for-Liverpool.jpg"
    //         },
    //         {

    //         "Player": "Ben",
    //         "Venue": "2016",
    //         "imdbID": "tt3498820",
    //         "Type": "match",
    //         "Team": "https://i2-prod.dailystar.co.uk/incoming/article19445534.ece/ALTERNATES/s1227b/0_httpscdnimagesdailystarcoukdynamic122photos804000900x738862804"
    //         },
    //         {

    //             "Player": "Reece",
    //             "Venue": "2016",
    //             "imdbID": "tt3498820",
    //             "Type": "match",
    //             "Team": "https://i2-prod.football.london/incoming/article19228145.ece/ALTERNATES/s1200b/1_GettyImages-1229473615.jpg"
    //             },
    //         {
    //         "Player": "Thiago",
    //         "Venue": "2007",
    //         "imdbID": "tt0472062",
    //         "Type": "match",
    //         "Team": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Hakim_Ziyech_2020.jpg"
    //         }

    // ]


    MatchModel.find((err, data) => {
        res.json(data);
    })


    // res.status(200).json({
    //     message: "Matches played",
    //     matches: mymatches
    //});
})

//get request
app.get('/api/matches/:id',(req,res)=>{
    console.log(req.params.id);
    //this will return a match if found with that id
    MatchModel.findById(req.params.id, (err,data)=>{
          res.json(data);
    })
})

app.post('/api/matches', (req, res) => {
    console.log('Matches won!');
    console.log(req.body.player);
    console.log(req.body.venue);
    console.log(req.body.team);

    MatchModel.create({
        player: req.body.player,
        venue: req.body.venue,
        team: req.body.team
    })

    res.send('Item Added');

})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})