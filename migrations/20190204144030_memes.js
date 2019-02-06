
exports.up = function(knex, Promise) {
  return knex.schema.createTable('memes', table => {
    table.increments('id')
    table.string('image')
    table.string('top_text')
    table.string('bottom_text')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('memes')
}
