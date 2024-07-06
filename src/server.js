import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

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


const server = http.createServer(async (request, response) => {
  const { method, url } = request

  await json(request, response)

  const route = routes.find(route => route.method === method && route.path === url)

  if (route) {
    return route.handler(request, response)
  }

  return response.writeHead(404).end()
})

server.listen(3333)