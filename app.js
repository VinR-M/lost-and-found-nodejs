/**
* App entrypoint.
*/

const app = require('express')();

const PORT = 3000;

// Set up Express.
require('./src/server/setup/express')(app);

// Set up MongoDB.
require('./src/server/setup/mongoose')();

// Set up routes.
app.use('/', require('./src/server/routes'));

// Start app.
app.listen(PORT, () => {
  console.log(`App now listening on port ${PORT}`);
});

module.exports = app;
