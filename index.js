/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded());
app.use(router);
app.disable('case sensitive routing');

router.get('/', (req, res) => {
  res.send('Hello, World!');
});
router.get('/user/:id', (req, res) => {
  console.log(req.body);
  res.send('Successfully get the data');
});

router.param('id', (req, res, next, id) => {
  const user = {
    userID: id,
    name: 'KopanMan',
  };
  req.userDetails = user;
  next();
});

router.post('/about', (req, res) => {
  console.log(req.body);
  res.send('This is the post route');
});

// now learnt the use cases of App.Route
router
  .route('/user/admin/kop')
  .get((req, res) => {
    res.send('This is the get route from the admin user kop');
  })
  .put((req, res) => {
    res.send('This is the put route from the admin user kop');
  })
  .post((req, res) => {
    res.send('This is the post route from the admin user kop');
  })
  .patch((req, res) => {
    res.send('This is the patch route from the admin user kop');
  });

router.all('/*', (req, res) => {
  res.send('This is the kopa Kopi path which is not valid path!!');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
