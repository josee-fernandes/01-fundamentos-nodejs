import http from 'node:http'

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

const server = http.createServer((request, response) => {
  const { method, url } = request

  if (method === 'GET' && url === '/users') {
    return response.end('Listagem de usuários')
  }

  if (method === 'POST' && url === '/users') {
    return response.end('Criação de usuário')
  }

  return response.end('Hello World!')
})

server.listen(3333)