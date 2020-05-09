'use strict'

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class GenreSeeder {
  static async run () {
    await Factory.model('App/Models/Genre').createMany(10)
  }
}

module.exports = GenreSeeder
