const mongoose = require('mongoose');
const app = require('./app');
const config = require('./app/shared/app/config');

main().catch((err) => console.log(`connection failed due to: ${err}`));

async function main() {
  await mongoose.connect(config.db);
  console.log('connection successful');

  app.listen(process.env.PORT, () => {
    console.log(`API rest running on port: ${config.port}`);
  });
}
