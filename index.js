/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded());
app.use(router);
app.disable('case sensitive routing');

router.get('/about', (req, res) => {
  // res.json({
  //   name: 'Mamar Kop Kop',
  // });
  // res.format({
  //   'text/plain': () => {
  //     res.send('Tmi ekhn plain text ee jaw');
  //   },
  //   'text/html': () => {
  //     res.send('Tmi ekhn html ee jaw');
  //   },
  //   'application/json': () => {
  //     res.send('ekhn tmi json ee jaw');
  //   },
  //   default: () => {
  //     res.send('mama onnak geso ekhn tmi kop kop khelo');
  //   },
  // });
  // res.cookie('name', 'Ujjal ekhn toi ghuma vai', {
  //   expires: new Date(Date.now() + 1900000),
  //   httpOnly: true,
  //   secure: true,
  // });
  // res.end();
  // res.redirect('/test');
  //   res.send('redirect koira disi toke test page ja oi khne jaiya kopa');
  //   res.end();
  // });
  // router.get('/test', (req, res) => {
  //   res.json({
  //     msg: 'mama ami to redirect hoiya aisi ei page ki kos beda toi',
  //   });
  //   res.end();

  
});

// router.get('/user/:id', (req, res) => {
//   console.log(req.body);
//   res.send('Successfully get the data');
// });

// router.param('id', (req, res, next, id) => {
//   const user = {
//     userID: id,
//     name: 'KopanMan',
//   };
//   req.userDetails = user;
//   next();
// });

// router.post('/about', (req, res) => {
//   console.log(req.body);
//   res.send('This is the post route');
// });

// // now learnt the use cases of App.Route
// router
//   .route('/user/admin/kop')
//   .get((req, res) => {
//     res.send('This is the get route from the admin user kop');
//   })
//   .put((req, res) => {
//     res.send('This is the put route from the admin user kop');
//   })
//   .post((req, res) => {
//     res.send('This is the post route from the admin user kop');
//   })
//   .patch((req, res) => {
//     res.send('This is the patch route from the admin user kop');
//   });

router.all('/*', (req, res) => {
  res.send('This is the kopa Kopi path which is not valid path!!');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
