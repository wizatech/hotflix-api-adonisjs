'use strict'

const Factory = use('Factory')
const Database = use('Database')

class MovieSeeder {
  static async run () {
    const movies = await Factory.model('App/Models/Movie').createMany(3)
    let randomOrderGenres = await Database.table('genres')
    .orderBy(Database.raw('random()')).limit(2).pluck('id')
    movies.forEach( (movie) => {
        movie.genres().attach(randomOrderGenres)
    })
  }
}

module.exports = MovieSeeder
