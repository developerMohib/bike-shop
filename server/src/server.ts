import mongoose from 'mongoose';
import app from './index';
import config from './config';
const port = config.port;

// server run function
async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    console.log('Database connected successfully.🤞');
    app.listen(port, () => {
      console.log(
        `Car shop server listening on port ${port} 🏃🏃`,
      );
    });
  } catch (error) {
    console.error(`Failed to start the server: ${error}`);
    process.exit(1);
  }
}
main();