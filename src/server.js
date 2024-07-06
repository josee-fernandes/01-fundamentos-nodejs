import http from 'node:http'
import { randomUUID } from 'node:crypto'
import { json } from './middlewares/json.js'
import { Database } from './database.js'

// - Criar usuários
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//   - Método HTTP
//   - URL

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end 
// DELETE => Deletar um recurso do back-end

// Stateful => Guarda os dados de forma local na memória
// Stateless => Guarda dados em um banco de dados, arquivos etc

// Cabeçalhos (Requisição/resposta) => Metadados

// HTTP Status Codes
// 1xx Informação
// 2xx Sucesso
// 3xx Redirecionamento
// 4xx Erro do cliente
// 5xx Erro do servidor

const database = new Database()

const server = http.createServer(async (request, response) => {
  const { method, url } = request

  await json(request, response)

  if (method === 'GET' && url === '/users') {
    const users = database.select('users')

    return response.end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = request.body

    const user = {
      id: randomUUID(),
      name,
      email,
    }

    database.insert('users', user)

    return response.writeHead(201).end()
  }

  return response.writeHead(404).end()
})

server.listen(3333)