// // server.js
// import express from 'express';
// import { generateToken } from './generateToken.js';

// const app = express();

// app.get('/generateToken', (req, res) => {
//   const options = {
//     secret: "",
//     secretId: "",
//     clientId: "",
//     scopes: ["tableau:views:embed", "tableau:views:embed_authoring"],
//     userId: "",
//     tokenExpiryInMinutes: 1,
//     userAttributes: {},
//   };

//   const token = generateToken(options);
//   res.json({ token });
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

import express from 'express';
import cors from 'cors';
import { generateToken } from './generateToken.js';

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:8080', // Allow only this origin
  methods: 'GET,POST', // Allow only these methods
  allowedHeaders: 'Content-Type,Authorization', // Allow only these headers
}));

app.get('/generateToken', (req, res) => {
  const options = {
    secret: "YOUR_SECRET_VALUE",
    secretId: "YOUR_SECRET_ID",
    clientId: "YOUR_CLIENT_ID",
    scopes: ["tableau:views:embed", "tableau:views:embed_authoring"],
    userId: "YOUR_USER_CREDENTIALS",
    tokenExpiryInMinutes: 1,
    userAttributes: {},
  };

  const token = generateToken(options);
  res.json({ token });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
