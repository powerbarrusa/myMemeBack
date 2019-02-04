// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/memes'
    },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    }
  }
