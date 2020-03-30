const p1 = new Promise((res) => {
  setTimeout(() => {
    console.log('p1 invoked...');
    res(1);
  }, 1000)
})

const p2 = new Promise((res) => {
  setTimeout(() => {
    console.log('p2 invoked...');
    res(2);
  }, 2000)
})

Promise.all([p1, p2])
  .then((results) => {
    console.log(results);
  })