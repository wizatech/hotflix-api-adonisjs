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
      let genres = request.input('genres')
      if(genres) {
        let genres = JSON.parse(request.input('genres'))
        await  movie.genres().sync([Object.values(genres[0])[0]], null, trx)
      }
      await trx.commit()
      await movie.load('genres')
      return await movie;
    } catch (error) {
      console.log(error)
      Logger.error(error)
      await trx.rollback()
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
