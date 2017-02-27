let express = require('express')
let app = express()
let port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>')
})

app.get('/contato', (req, res) => {
  res.send(`
    <h1>Contato</h1>

    <form action="/contato" method="POST">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email">

      <label for="mensagem">Mensagem:</label>
      <textarea name="mensagem" id="mensagem"></textarea>

      <input type="submit" value="Enviar">
    </form>
  `)
})

app.post('/contato', (req, res) => {
  res.send('<h1>Precisamos aprender a pegar os valor que usuário digitou!</h1>')
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
