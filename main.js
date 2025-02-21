// создание промиса, который через 2 сек возвращает число 42
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }), 2000;
});

myPromise
  .then((result) => {
    console.log(`The result is: ${result}`);
  })
  .catch((err) => {
    console.error(err);
  });