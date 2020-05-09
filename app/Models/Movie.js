'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Movie extends Model {
  genres () {
    return this
      .belongsToMany('App/Models/Genreadonis repladonis repl')
      .pivotTable('genre_movie')
  }
}

module.exports = Movie
