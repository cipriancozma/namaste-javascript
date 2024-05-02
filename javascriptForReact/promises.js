const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((user) => user.json())
  .then((newUser) => console.log(newUser))
  .catch((err) => console.error(err));

// fetch returns a promise and by then method we can get the fullfilled version, in this case the list of users
