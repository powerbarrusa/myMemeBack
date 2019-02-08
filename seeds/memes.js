
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('memes').del()
    .then(function () {
      // Inserts seed entries
      return knex('memes').insert([
        {id: 1, image_url: "https://i.imgur.com/1PCyDuD.jpg", top_text: "That feeling when", bottom_text: "You're stoned."},
        {id: 2, image_url: "http://memebomb.net/wp-content/uploads/2018/10/blank-meme-maker-2.jpg", top_text: "Whoo are you?", bottom_text: "Who? Who? Who? Who?"},
        {id: 3, image_url: "https://comicsandmemes.com/wp-content/uploads/blank-meme-template-018-office-space-if-you-could-just.png", top_text: "This coffee tastes", bottom_text: "Like crap"}
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('memes_id_seq', (SELECT MAX(id) FROM memes))"
      )
    })
}
