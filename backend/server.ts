import * as express from 'express'
import * as path from 'path'

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '../dist-frontend')))

app.get('/card', (request, response) => {
	response.sendFile('card.html', { root: path.join(__dirname, '../dist-frontend') })
})

app.get('*', (request, response) => {
	response.sendFile('index.html', { root: path.join(__dirname, '../dist-frontend') })
})

app.listen(3000, function () {
	console.log(`Listening on port ${port}...`)
})