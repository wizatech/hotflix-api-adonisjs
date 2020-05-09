'use strict'
const Genre = use('App/Models/Genre')

class GenreService {
  static async getAllGenre() {
    return await Genre.all()
  }
}

module.exports = GenreService
