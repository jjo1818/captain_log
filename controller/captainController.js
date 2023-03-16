const captain = require('../models/captains')

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = (req, res) => {
    // Looks in the views folder for "captains/Index" and passes { captains } data to the view (kind of like a server props object)
    res.render('captains/Index', { captains })
}

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = (req, res) => {
    res.render('captains/Show', { captain: captains[req.params.index] })
}

// GET /captains/new
module.exports.new = (req, res) => {
    res.render('captains/New')
}

// POST /captains
module.exports.create = (req, res) => {
    console.log('POST /captains')
    console.log(req.body)
    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    captains.push(req.body)
    res.redirect('/captains')
}

// DELETE /captains/:name
module.exports.delete = (req, res) => {
    console.log('DELETE /captains/:name')
    let index = captains.findIndex((item) => item.name === req.params.name)
    captains.splice(index, 1)
    res.redirect('/captains')
} 

// GET /captains/:name/edit
module.exports.edit = (req, res) => {
    console.log('GET /captains/:name/edit')
    let index = captains.findIndex((item) => item.name === req.params.name)
    res.render('captains/Edit', { captain: captains[index] })
}

// PUT /captains/:name
module.exports.update = (req, res) => {
    console.log('PUT /captains/:name')
    console.log(req.body)

    if (req.body.readyToEat) {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    let index = captains.findIndex((item) => item.name === req.params.name)

    captains[index] = req.body
    res.redirect('/captains')
}