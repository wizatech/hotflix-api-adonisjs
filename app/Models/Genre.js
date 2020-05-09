'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Genre extends Model {
  movies () {
    return this
      .belongsToMany('App/Models/Movie')
      .pivotTable('genre_movie')
  }
}

module.exports = Genre
