//require('module-alias/register');
//const mongoose = require('mongoose');
//const { globSync } = require('glob');
//const path = require('path');
import serverless from 'serverless-http';
import app from './app.js';
// import environmental variables from our variables.env file
//require('dotenv').config({ path: '.env' });
//require('dotenv').config({ path: '.env.local' });

//mongoose.connect(process.env.DATABASE);

//const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// mongoose.connection.on('error', (error) => {
//   console.log(
//     `1. 🔥 Common Error caused issue → : check your .env file first and add your mongodb url`,
//   );
//   console.error(`2. 🚫 Error → : ${error.message}`);
// });

// const modelsFiles = globSync('./src/models/**/*.js');

// for (const filePath of modelsFiles) {
//   require(path.resolve(filePath));
// }

// Start our app!

export const handler = serverless(app);
