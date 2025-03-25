import express from 'express';
// import path from 'path';
// import routes from 'routes';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});