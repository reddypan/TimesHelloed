let express = require('express')
let app = express()
let url = require('url')
//require('@google-cloud/debug-agent').start();

let timesHelloed = 0

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('myview.ejs', { timesHelloed: timesHelloed })
})

app.get('/timesHelloed', (req, res) => {
    res.render('myview.ejs', { timesHelloed: timesHelloed })
})

app.get('/hello', (req, res) => {
    timesHelloed++;
    res.render('increment.ejs')
})

app.get('/resetTimesHelloed', (req, res) => {
    timesHelloed = 0;
    res.render('reset.ejs')
})

let port = process.env.PORT || 8090
app.listen(port, () => console.log(`Example app listening on port ${port}!`))