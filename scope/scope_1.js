// 1.
// Var is function scoped and let & const block scoped

// global scope of env
// const env = "dev";
// function getServer() {
//   const ip = env === "dev" ? "127.0.0.1" : "12.34.56.78";
//   return ip;
// }

// enclosing function scope of env
function outer() {
  const env = "dev";

  function getServer() {
    const ip = env === "dev" ? "127.0.0.1" : "12.34.56.78";
    return ip;
  }

  return getServer();
}
