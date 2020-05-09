'use strict';

const GenreSeeder = require('./GenreSeeder')

class DatabaseSeeder {
  async run() {
    await GenreSeeder.run()
  }
}

module.exports = DatabaseSeeder
