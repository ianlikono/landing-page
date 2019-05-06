const path = require('path')

const options = {
  root: path.join(__dirname, '/static'),
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  }
};

const setup = ({ server }) => {
  server.get('/sitemap.xml', (req, res) => {
    res.status(200).sendFile('sitemap.xml', options)
  })

  server.get('/robots.txt', (req, res) => {
    res.status(200).sendFile('robots.txt', options)
  })
  }

module.exports = setup