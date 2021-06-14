let express = require('express')
let app = express()
let port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/views/index.html')
})

app.get('/sobre', (req, res) => {
 res.sendFile(__dirname+'/views/sobre.html')
}

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
