const { Router } = require('express')
const router = Router()
const fetch = require('isomorphic-unfetch')

router.get('/search/:query', (req, res) => {
  const { query } = req.params

  fetch(`https://images-api.nasa.gov/search?q=${query}&page=1`)
    .then((res) => res.json())
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(500).json({ error: 'Bad Request' }))
})

module.exports = router
