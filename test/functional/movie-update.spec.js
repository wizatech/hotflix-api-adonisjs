'use strict'

const { test, trait } = use('Test/Suite')('Movie Update')

const User = use('App/Models/User')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')


test('update movie', async ({ client }) => {
  const user = await User.find(1)
  const movie = await Factory.model('App/Models/Movie').create()
  const data = {
    title: movie.title,
    name: movie.name,
    description: movie.description,
    year: 2040,
    image: movie.image,
    id: movie.id
  }
  const response = await client
    .put(`/api/v1/movies/${movie.id}`)
    .loginVia(user, 'jwt')
    .send(data)
    .end()
  response.assertStatus(200)
})
