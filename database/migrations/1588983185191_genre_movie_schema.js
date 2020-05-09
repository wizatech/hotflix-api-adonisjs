'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenreMovieSchema extends Schema {
  up () {
    this.create('genre_movie', (table) => {
      table.uuid('genre_id').references('id').inTable('genres')
      table.uuid('movie_id').references('id').inTable('movies')
      table.primary(['genre_id', 'movie_id'])
    })
  }

  down () {
    this.drop('genre_movie')
  }
}

module.exports = GenreMovieSchema
