'use strict';

const GenreSeeder = require('./GenreSeeder')
const MovieSeeder = require('./MovieSeeder')


class DatabaseSeeder {
  async run() {
    await GenreSeeder.run()
    await MovieSeeder.run()
  }
}

module.exports = DatabaseSeeder
