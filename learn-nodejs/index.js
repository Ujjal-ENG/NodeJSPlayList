/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

const app = express();
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Hei this the root page',
    });
});
app.listen(3000, () => {
    console.log(`The server is run at port: ${3000}`);
});
