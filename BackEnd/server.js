const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//allow the bodypurser to intercept from the http 
//allows to use everytime 
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

//Connection string to connect to database
const myConnectionString = ' mongodb+srv://admin:admin@cluster0.f0b07.mongodb.net/matches?retryWrites=true&w=majority'
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//Schema of the database on what type of database it will be stored
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

//This will allow interaction with database
    MatchModel.find((err, data) => {
        res.json(data);
    })


    // res.status(200).json({
    //     message: "Matches played",
    //     matches: mymatches
    //});
})

//Get request find the id in the database and use it
app.get('/api/matches/:id',(req,res)=>{
    console.log(req.params.id);
    //this will return a match if found with that id
    MatchModel.findById(req.params.id, (err,data)=>{
          res.json(data);
    })
})

//Put methord
app.put('/api/matches/:id', (req, res)=>{
    console.log("Update match: "+req.params.id);
    console.log(req.body);
    
//find the record with an id and update it
    MatchModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})
//delete function will listen to http request 
app.delete('/api/matches/:id',(req, res)=>{
    console.log("Delete Match: "+req.params.id);
    //Allow to match the id and delete and send back data once deleted
    MatchModel.findByIdAndDelete(req.params.id,(err,data)=>{
        res.send(data);
    })
})

app.post('/api/matches', (req, res) => {
    console.log('Matches won!');
    console.log(req.body.player);
    console.log(req.body.venue);
    console.log(req.body.team);

    //Allows interaction with from our database
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