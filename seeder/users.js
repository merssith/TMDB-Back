const userService = require("../services/userService");

const users = [
  {
    name: "Mercedes",
    lastName: "Salcedo",
    userName: "superadmin",
    email: "superadmin@1.com",
    password: "hello1234",
    role: "SuperAdmin",
    age: 33,
    moviePreferences: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
    ],
    tvPreferences: [
      {
        id: 10759,
        name: "Action & Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
    ],
  },
  {
    name: "Kevin",
    lastName: "Donaldson",
    userName: "KevinDon",
    email: "kevindonaldson@1.com",
    password: "hello1234",
    role: "Admin",
    age: 40,
    moviePreferences: [
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comedy",
      },
    ],
    tvPreferences: [
      {
        id: 35,
        name: "Comedy",
      },
      {
        id: 80,
        name: "Crime",
      },
    ],
  },
  {
    name: "Dominic",
    lastName: "Gates",
    userName: "Domga",
    email: "dominic234@1.com",
    password: "hello1234",
    role: "Admin",
    age: 27,
    moviePreferences: [
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 99,
        name: "Documentary",
      },
    ],
    tvPreferences: [
      {
        id: 99,
        name: "Documentary",
      },
      {
        id: 18,
        name: "Drama",
      },
    ],
  },
  {
    name: "Halima",
    lastName: "Merrill",
    userName: "Halima",
    email: "Merrill2022@1.com",
    password: "hello1234",
    role: "User",
    age: 17,
    moviePreferences: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
    ],
    tvPreferences: [
      {
        id: 10759,
        name: "Action & Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
    ],
  },
  {
    name: "Elsie",
    lastName: "Marks",
    userName: "Marksy",
    email: "elsie@1.com",
    password: "hello1234",
    role: "User",
    age: 12,
    moviePreferences: [
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comedy",
      },
    ],
    tvPreferences: [
      {
        id: 35,
        name: "Comedy",
      },
      {
        id: 80,
        name: "Crime",
      },
    ],
  },
  {
    name: "Faris",
    lastName: "Carlson",
    userName: "Carlson",
    email: "Carlson@1.com",
    password: "hello1234",
    role: "User",
    age: 21,
    moviePreferences: [
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 99,
        name: "Documentary",
      },
    ],
    tvPreferences: [
      {
        id: 99,
        name: "Documentary",
      },
      {
        id: 18,
        name: "Drama",
      },
    ],
  },
  {
    name: "Evie",
    lastName: "Torres",
    userName: "Torres",
    email: "Torres@1.com",
    password: "hello1234",
    role: "User",
    age: 30,
    moviePreferences: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
    ],
    tvPreferences: [
      {
        id: 10759,
        name: "Action & Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
    ],
  },
  {
    name: "Clyde",
    lastName: "Love",
    userName: "ClydeLove",
    email: "ClydeLove@1.com",
    password: "hello1234",
    role: "User",
    age: 65,
    moviePreferences: [
      {
        id: 16,
        name: "Animation",
      },
      {
        id: 35,
        name: "Comedy",
      },
    ],
    tvPreferences: [
      {
        id: 35,
        name: "Comedy",
      },
      {
        id: 80,
        name: "Crime",
      },
    ],
  },
  {
    name: "Christian",
    lastName: "Booker",
    userName: "BookerChris",
    email: "BookerChris@1.com",
    password: "hello1234",
    role: "User",
    age: 98,
    moviePreferences: [
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 99,
        name: "Documentary",
      },
    ],
    tvPreferences: [
      {
        id: 99,
        name: "Documentary",
      },
      {
        id: 18,
        name: "Drama",
      },
    ],
  },
  {
    name: "Aled",
    lastName: "Ayala",
    userName: "AyalaNew",
    email: "Ayala2022@1.com",
    password: "hello1234",
    role: "User",
    age: 10,
    moviePreferences: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
    ],
    tvPreferences: [
      {
        id: 10759,
        name: "Action & Adventure",
      },
      {
        id: 16,
        name: "Animation",
      },
    ],
  },
];

async function createUsers() {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    await userService.registerUser(user);
  }
  console.log("USERS created");
}

module.exports = createUsers;
