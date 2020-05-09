'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenreSchema extends Schema {
  up () {
    this.create('genres', (table) => {
      table.uuid('id').primary()
      table.string('name', 50).unique().notNullable()
      table.string('description', 50).unique().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('genres')
  }
}

module.exports = GenreSchema
