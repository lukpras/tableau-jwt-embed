import { generateToken } from "./generateToken.js";

// Options for token generation
const options = {
  secret: "YOUR_SECRET_VALUE",
  secretId: "YOUR_SECRET_ID",
  clientId: "YOUR_CLIENT_ID",
  scopes: ["tableau:views:embed", "tableau:views:embed_authoring"],
  userId: "YOUR_USER_CREDENTIALS",
  tokenExpiryInMinutes: 1, // Max of 10 minutes
  userAttributes: {},
};

// Generate the token
const token = generateToken(options);
console.log(token);
