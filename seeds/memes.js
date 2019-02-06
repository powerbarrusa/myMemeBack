
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('memes').del()
    .then(function () {
      // Inserts seed entries
      return knex('memes').insert([
        {id: 1, image: "https://i.imgur.com/1PCyDuD.jpg", top_text: "V1 I'm on top!", bottom_text: "V1 I'm on bottom!"},
        {id: 2, image: "http://memebomb.net/wp-content/uploads/2018/10/blank-meme-maker-2.jpg", top_text: "V2 I'm on top!", bottom_text: "V2 I'm on bottom!"},
        {id: 3, image: "https://comicsandmemes.com/wp-content/uploads/blank-meme-template-018-office-space-if-you-could-just.png", top_text: "V3 I'm on top!", bottom_text: "V3 I'm on bottom!"}
      ]);
    });
};
