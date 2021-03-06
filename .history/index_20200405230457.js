const express = require('express');
const port = 3000;
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

var users =  [
  {id: 1, name: 'Name 1'},
  {id: 2, name: 'Name 2'},
];

app.get('/', (req, res) => {
  res.render('index', {
    name: 'Nghi',
  });
});

app.get('/users', (req, res) => {
  res.render('users/index', {
    users
  });
});

app.get('/users/search', (req, res) => {
  console.log(req.path);
  var q = req.query.q;
  console.log(q);
  var result = users.filter((user) => {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  console.log('result', result);
  res.render('users/index', {
    users: result
  });
});
