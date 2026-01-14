import app from './app.js';
import { connectDB } from './database/mongodb.js';
import { PORT } from './config/env.js'; 

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port`);
})

process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    process.exit(1);
});