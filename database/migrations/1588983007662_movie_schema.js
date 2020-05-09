'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.uuid('id').primary()
      table.string('name', 150).notNullable()
      table.string('title', 150).notNullable()
      table.text('description').notNullable()
      table.integer('year', 4).notNullable()
      table.string('image', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MovieSchema
