import express from 'express'

const app = express()

app.use(express.json())

const tracks = [
  {
    title: 'Gerente de Produto',
    to: { name: 'track' }
  },
  {
    title: 'Designer de Produto',
    to: { name: 'track' }
  },
  {
    title: 'Tech Lead',
    to: { name: 'track' }
  },
  {
    title: 'Desenvolvedor(a)',
    to: { name: 'track' }
  },
  {
    title: 'DevOps',
    to: { name: 'track' }
  },
  {
    title: 'Quality Assurance',
    to: { name: 'track' }
  }
]

app.get('/tracks', function (req, res) {
  res.json(tracks)
})

module.exports = app
