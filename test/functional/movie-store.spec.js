'use strict'

const { test, trait } = use('Test/Suite')('Movie Store')

const User = use('App/Models/User')
const Factory = use('Factory')

trait('DatabaseTransactions')

trait('Test/ApiClient')
trait('Auth/Client')

test('store movies', async ({ client }) => {
  const user = await User.find(1)
  const movie = await Factory.model('App/Models/Movie').make()
  const data = {
    name: movie.name,
    title: movie.title,
    description: movie.description,
    year: movie.year,
    image: movie.image
  }
  const response = await client.post('/api/v1/movies').send(data).loginVia(user).end()
  response.assertStatus(200)
  response.assertJSONSubset({
    name: movie.name,
    title: movie.title,
    description: movie.description,
    year: movie.year,
    image: movie.image
  })
})
