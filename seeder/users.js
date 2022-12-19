const userService = require("../services/userService");

const users = [
  {
    name: "Mercedes",
    lastName: "Salcedo",
    userName: "superadmin",
    email: "superadmin@1.com",
    password: "hello1234",
    role: "SuperAdmin",
    preferences: ["Drama", "Comedy", "Crime"],
  },
  {
    name: "Kevin",
    lastName: "Donaldson",
    userName: "KevinDon",
    email: "kevindonaldson@1.com",
    password: "hello1234",
    role: "Admin",
    preferences: ["Family", "Comedy", "Fantasy"],
  },
  {
    name: "Dominic",
    lastName: "Gates",
    userName: "Domga",
    email: "dominic234@1.com",
    password: "hello1234",
    role: "Admin",
    preferences: ["Documentary", "Animation"],
  },
  {
    name: "Halima",
    lastName: "Merrill",
    userName: "Halima",
    email: "Merrill2022@1.com",
    password: "hello1234",
    role: "User",
    preferences: ["Drama", "Comedy", "Crime"],
  },
  {
    name: "Elsie",
    lastName: "Marks",
    userName: "Marksy",
    email: "elsie@1.com",
    password: "hello1234",
    role: "User",
    preferences: ["Romance", "War", "Music"],
  },
  {
    name: "Faris",
    lastName: "Carlson",
    userName: "Carlson",
    email: "Carlson@1.com",
    password: "hello1234",
    role: "User",
    preferences: ["Drama", "Comedy", "Crime"],
  },
  {
    name: "Evie",
    lastName: "Torres",
    userName: "Torres",
    email: "Torres@1.com",
    password: "hello1234",
    role: "User",
    preferences: ["Romance", "War", "Music"],
  },
  {
    name: "Clyde",
    lastName: "Love",
    userName: "ClydeLove",
    email: "ClydeLove@1.com",
    password: "hello1234",
    role: "User",
    preferences: ["Family", "Comedy", "Fantasy"],
  },
  {
    name: "Christian",
    lastName: "Booker",
    userName: "BookerChris",
    email: "BookerChris@1.com",
    password: "hello1234",
    role: "User",
    preferences: ["Science Fiction", "Western", "Fantasy"],
  },
  {
    name: "Aled",
    lastName: "Ayala",
    userName: "AyalaNew",
    email: "Ayala2022@1.com",
    password: "hello1234",
    role: "User",
    preferences: ["Science Fiction", "Horror", "Documentary"],
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
