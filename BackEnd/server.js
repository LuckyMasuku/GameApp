const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Welcome to my soccer fixtures!')
})

app.get('/api/matches', (req, res)=>{

    const mymatches = [
        {
            "Player": "Hakkim",
            "Venue": "2018",
            "imdbID": "tt4154756",
            "Type": "match",
            "Team": "https://cdn.footballtransfertavern.com/wp-content/uploads/2020/09/Thiago-Alcantara-in-action-for-Liverpool.jpg"
            },
            {

            "Player": "Ben",
            "Venue": "2016",
            "imdbID": "tt3498820",
            "Type": "match",
            "Team": "https://i2-prod.dailystar.co.uk/incoming/article19445534.ece/ALTERNATES/s1227b/0_httpscdnimagesdailystarcoukdynamic122photos804000900x738862804"
            },
            {

                "Player": "Reece",
                "Venue": "2016",
                "imdbID": "tt3498820",
                "Type": "match",
                "Team": "https://i2-prod.football.london/incoming/article19228145.ece/ALTERNATES/s1200b/1_GettyImages-1229473615.jpg"
                },
            {
            "Player": "Thiago",
            "Venue": "2007",
            "imdbID": "tt0472062",
            "Type": "match",
            "Team": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Hakim_Ziyech_2020.jpg"
            }

    ]
    res.status(200).json({
        message: "Matches played",
        matches:mymatches
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})