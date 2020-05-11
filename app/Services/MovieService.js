'use strict'
const Movie = use('App/Models/Movie')
const Genre = use('App/Models/Genre')
const Logger = use('Logger')
const Database = use('Database')
class MovieService {
  static async all() {
    try {
      return await Movie.all()
    } catch (error) {
      Logger.error(error)
    }
  }

  static async store(request) {
    const trx = await Database.beginTransaction()
    try {
      const movie =  await Movie.create(request.only(["name", "title", "description", "year", "image"]), trx)
      const genre = await Genre.find('397be5e2-6aa7-48a3-9a58-75f5accbcb41')
      const genreToMovie = await movie.genres().sync([genre.id], null, trx)
      await trx.commit()
      console.log(movie.loadMany(['genres']))
      return await movie;
    } catch (error) {
      console.log(error)
      await trx.rollback()
      Logger.error(error)
      return error;
    }
  }

  static async show(id) {
    try {
      return await Movie.findOrFail(id)
    } catch (error) {
      Logger.error(error)
    }
  }

  static async update(id, request) {
    try {
      const movie = await Movie.findOrFail(id)
      movie.merge(request.only(["name", "title", "description", "year", "image"]))
      return movie.save()
    } catch (error) {
      console.log(error)
      Logger.error(error)
    }
  }

  static async destroy(id) {
    try {
      const movie = await Movie.findOrFail(id)
      return await movie.delete()
    } catch (error) {
      Logger.error(error)
    }
  }
}

module.exports = MovieService
