const { Song } = require('../models')

const create = async (req, res) => {
  try {
    const song = await Song.create(req.body)
    res.status(200).json(song)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const songs = await Song.findAll()
    res.status(200).json(songs)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const song = await Song.update(
      req.body,
      { where: { id: req.params.songId }, returning: true }
    )
    res.status(200).json(song)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteSong = async (req, res) => {
  try {
    const numberOfRowsRemoved = await Song.destroy(
      { where: { id: req.params.songId } }
    )
    res.status(200).json(numberOfRowsRemoved)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteSong,
}
