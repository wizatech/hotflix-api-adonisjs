'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Genre', (faker) => {
  return {
    name: faker.name(),
    description: faker.last()
  }
})

Factory.blueprint('App/Models/Movie', (faker) => {
  return {
    name: faker.name(),
    title: faker.sentence({ words: 5 }),
    description: faker.last(),
    year: faker.year({ min: 2000, max: 2020 }),
    image: faker.url({extensions: ['gif', 'jpg', 'png']})
  }
})
