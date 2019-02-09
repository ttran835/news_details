require('dotenv').config();

const app = require('./index');

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => console.log(`listening on port ${port}`));
