const express = require('express')
const next = require('next')
const siteMapsandRobots = require('./siteMapsandRobots')

const dev = process.env.NODE_ENV !== 'production'

const port = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

// Nextjs's server prepared
app.prepare().then(() => {
  const server = express()

  siteMapsandRobots({ server })

  server.get('*', (req, res) => handle(req, res))

  // starting express server
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on ${port}`) // eslint-disable-line no-console
  })
})