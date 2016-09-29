'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', function * (request, response) {
  response.cookie('rememberMe', { id: 1, token: '10201002020202' })
  response.send('cookie set')
})


Route.get('/clear', function * (request, response) {
  const cookieValue = request.cookie('rememberMe')
  response.clearCookie('rememberMe')
  response.send(cookieValue)
})
