/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

const app = express();
const admin = express();

const router = express.Router();

app.use(express.urlencoded());
app.use(router);

admin.get('/dashbroad', (req, res) => {
  console.log(admin.mountpath);
  res.send('this is from admin page');
});

app.use('/admin', admin);

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('This is the post route');
});
router.all('/*', (req, res) => {
  res.send('This is the kopa Kopi path which is not valid path!!');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
