
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

// Enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// So that your API is remotely testable by FCC
const cors = require('cors')
app.use(cors({optionSuccessStatus: 200})) // Some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
})


// API endpoints
app.get('/api/whoami', function (req, res) {

    return res.json({
        "ipaddress": req.ip,
        "language": req.header('accept-language'),
        "software": req.header('user-agent')
    })
})


// Listen for requests
const listener = app.listen(PORT, function () {
    console.log(`App is listening on port ${listener.address().port}`)
})
