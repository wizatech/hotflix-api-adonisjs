'use strict'

const { test, trait } = use('Test/Suite')('Genre Store')
trait('DatabaseTransactions')
trait('Test/ApiClient')
trait('Auth/Client')

const User = use('App/Models/User')
const Factory = use('Factory')


test('get genres', async ({ client }) => {
  const user = await User.find(1)
  const genre = await Factory.model('App/Models/Genre').create()
  const response = await client.get('/api/v1/genres').loginVia(user).end()
  response.assertStatus(200)
  response.assertJSONSubset([{
    name: genre.name,
    description: genre.description
  }])
})
