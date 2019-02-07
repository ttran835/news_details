require('dotenv').config();

const app = require('./index');

const port = process.env.SERVER_PORT;

app.listen(port, () => console.log(`listening on port ${port}`));
