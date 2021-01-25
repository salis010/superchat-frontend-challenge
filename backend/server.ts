import * as express from 'express'
import * as path from 'path'

const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '../dist-frontend')))

app.get('/card', (request, response) => {
	response.sendFile('card.html', { root: path.join(__dirname, '../dist-frontend') })
})

app.get('*', (request, response) => {
	response.sendFile('index.html', { root: path.join(__dirname, '../dist-frontend') })
})

app.listen(port, function () {
	console.log(`Listening on port ${port}...`)
})