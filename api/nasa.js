const { Router } = require('express')
const router = Router()
const fetch = require('isomorphic-unfetch')

router.get('/search/:q', (req, res) => {
  const { query } = req.params

  fetch(`https://images-api.nasa.gov/search?q=${query}`)
    .then((res) => res.json())
    .then((data) => res.status(200).json(data.collection.items))
    .catch((e) => res.status(500).json({ error: 'Bad Request' }))
})

module.exports = router
