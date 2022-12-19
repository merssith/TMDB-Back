const listService = require("../services/listService");

const lists = [
  {
    name: "My Favorites",
    content: [
      {
        movieId: 441,
        title: "Lord of the Rings",
      },
      {
        movieId: 555,
        title: "Harry Potter",
      },
    ],
    public: true,
    userId: 1,
  },
  {
    name: "My Favorites PRIVATE",
    content: [
      {
        movieId: 124,
        title: "Space Jam",
      },
      {
        movieId: 87,
        title: "Toy Story",
      },
      {
        movieId: 187,
        title: "Jumanji",
      },
    ],
    public: false,
    userId: 1,
  },
  {
    name: "My Favorites",
    content: [
      {
        movieId: 441,
        title: "Lord of the Rings",
      },
      {
        movieId: 555,
        title: "Harry Potter",
      },
    ],
    public: true,
    userId: 2,
  },
  {
    name: "My Favorites PRIVATE",
    content: [
      {
        movieId: 124,
        title: "Space Jam",
      },
      {
        movieId: 87,
        title: "Toy Story",
      },
      {
        movieId: 187,
        title: "Jumanji",
      },
    ],
    public: false,
    userId: 2,
  },
  {
    name: "My Favorites",
    content: [
      {
        movieId: 441,
        title: "Lord of the Rings",
      },
      {
        movieId: 555,
        title: "Harry Potter",
      },
    ],
    public: true,
    userId: 3,
  },
  {
    name: "My Favorites PRIVATE",
    content: [
      {
        movieId: 124,
        title: "Space Jam",
      },
      {
        movieId: 87,
        title: "Toy Story",
      },
      {
        movieId: 187,
        title: "Jumanji",
      },
    ],
    public: false,
    userId: 3,
  },
  {
    name: "My Favorites",
    content: [
      {
        movieId: 441,
        title: "Lord of the Rings",
      },
      {
        movieId: 555,
        title: "Harry Potter",
      },
    ],
    public: true,
    userId: 4,
  },
  {
    name: "My Favorites PRIVATE",
    content: [
      {
        movieId: 124,
        title: "Space Jam",
      },
      {
        movieId: 87,
        title: "Toy Story",
      },
      {
        movieId: 187,
        title: "Jumanji",
      },
    ],
    public: false,
    userId: 4,
  },
  {
    name: "My Favorites",
    content: [
      {
        movieId: 441,
        title: "Lord of the Rings",
      },
      {
        movieId: 555,
        title: "Harry Potter",
      },
    ],
    public: true,
    userId: 5,
  },
  {
    name: "My Favorites PRIVATE",
    content: [
      {
        movieId: 124,
        title: "Space Jam",
      },
      {
        movieId: 87,
        title: "Toy Story",
      },
      {
        movieId: 187,
        title: "Jumanji",
      },
    ],
    public: false,
    userId: 5,
  },
  {
    name: "My Favorites",
    content: [
      {
        movieId: 441,
        title: "Lord of the Rings",
      },
      {
        movieId: 555,
        title: "Harry Potter",
      },
    ],
    public: true,
    userId: 6,
  },
  {
    name: "My Favorites PRIVATE",
    content: [
      {
        movieId: 124,
        title: "Space Jam",
      },
      {
        movieId: 87,
        title: "Toy Story",
      },
      {
        movieId: 187,
        title: "Jumanji",
      },
    ],
    public: false,
    userId: 6,
  },
  {
    name: "My Favorites",
    content: [
      {
        movieId: 441,
        title: "Lord of the Rings",
      },
      {
        movieId: 555,
        title: "Harry Potter",
      },
    ],
    public: true,
    userId: 7,
  },
  {
    name: "My Favorites PRIVATE",
    content: [
      {
        movieId: 124,
        title: "Space Jam",
      },
      {
        movieId: 87,
        title: "Toy Story",
      },
      {
        movieId: 187,
        title: "Jumanji",
      },
    ],
    public: false,
    userId: 7,
  },
  {
    name: "My Favorites",
    content: [
      {
        movieId: 441,
        title: "Lord of the Rings",
      },
      {
        movieId: 555,
        title: "Harry Potter",
      },
    ],
    public: true,
    userId: 8,
  },
  {
    name: "My Favorites PRIVATE",
    content: [
      {
        movieId: 124,
        title: "Space Jam",
      },
      {
        movieId: 87,
        title: "Toy Story",
      },
      {
        movieId: 187,
        title: "Jumanji",
      },
    ],
    public: false,
    userId: 8,
  },
  {
    name: "My Favorites",
    content: [
      {
        movieId: 441,
        title: "Lord of the Rings",
      },
      {
        movieId: 555,
        title: "Harry Potter",
      },
    ],
    public: true,
    userId: 9,
  },
  {
    name: "My Favorites PRIVATE",
    content: [
      {
        movieId: 124,
        title: "Space Jam",
      },
      {
        movieId: 87,
        title: "Toy Story",
      },
      {
        movieId: 187,
        title: "Jumanji",
      },
    ],
    public: false,
    userId: 9,
  },
  {
    name: "My Favorites",
    content: [
      {
        movieId: 441,
        title: "Lord of the Rings",
      },
      {
        movieId: 555,
        title: "Harry Potter",
      },
    ],
    public: true,
    userId: 10,
  },
  {
    name: "My Favorites PRIVATE",
    content: [
      {
        movieId: 124,
        title: "Space Jam",
      },
      {
        movieId: 87,
        title: "Toy Story",
      },
      {
        movieId: 187,
        title: "Jumanji",
      },
    ],
    public: false,
    userId: 10,
  },
];

async function createLists() {
  for (let i = 0; i < lists.length; i++) {
    let list = lists[i];
    await listService.createList(list);
  }
  console.log("LISTS created");
}

module.exports = createLists;
