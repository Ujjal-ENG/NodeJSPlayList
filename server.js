/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import app from './index.js';

// config({ path: './config.env' });
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port localhost:${port}`);
});
