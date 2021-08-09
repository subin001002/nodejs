const condition = true; 
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});
// 동기

promise
  .then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => { 
    console.log('무조건');
  });
