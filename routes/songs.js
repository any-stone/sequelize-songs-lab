const router = require('express').Router()
const songsCtrl = require('../controllers/songs.js')

router.post('/', songsCtrl.create)
router.get('/', songsCtrl.index)
router.put('/:songId', songsCtrl.update)
router.delete('/:songId', songsCtrl.delete)

module.exports = router