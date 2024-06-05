let games = [
    {id: "1", title: "Zelda", platform: ['Switch', 'Sbox']},
    {id: '2', title: "Jack", platform: ['Ps5', 'xbox']},
    {id: '3', title: "Elder Ring", platform: ['Switch']}
];

let authors = [
    {id: '1', name: "Mario", verified: true},
    {id: '2', name: "James", verified: true},
    {id: '3', name: "Rosemary", verified: true}
];

let reviews = [
    {id: "1", rating: 8, content: "something something", author_id: "2", game_id: '3'},
    {id: '2', rating: 3, content: "I just don't like this game", author_id: "3", game_id: '1'},
    {id: '3', rating: 9, content: "Good one I like it", author_id: '1', game_id: '2'}
]

export default { games, authors, reviews }