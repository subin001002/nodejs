const express = require('express');
const path = require('path');

const app = express(); 

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log('1 요청에 실행하고싶어요');
  next();
}, (req, res, next) => {
  throw new Error('에러가 났어요');
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/', (req, res) => {
   res.send('Hello, Express!');
});
app.get('/about', (req, res) => {
  res.send('Hello, Express');
});
app.get('*', (req, res) => {
  res.send('Hello, Everybody');
});
app.use((err, req, res, next) => {
  res.status(200).send('에러지롱');
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(200).send('에러남');
})
app.listen(app.get('port'), () => {
  console.log('익스프레스 서버 실행');
});
