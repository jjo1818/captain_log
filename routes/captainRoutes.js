const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const captainController = require('../controllers/captainController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for captains, attach it to router along with the controller logic
router.get('/', captainController.index)

// Setup a "new" route for creating captain
router.get('/new', captainController.new)

// Setup a "delete" route for removing a specific captain
router.delete('/:name', captainController.delete)

// Setup a "update" route for updating a specific captain
router.put('/:name', captainController.update)

// Setup a "create" route for adding captain data
router.post('/', captainController.create)

// Setup a "edit" route for editing a captain
router.get('/:name/edit', captainController.edit)

// Setup an "show" route for captains, attach it to router along with the controller logic
router.get('/:index', captainController.show)


module.exports = router