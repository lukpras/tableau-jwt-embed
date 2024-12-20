// import jwt from "jsonwebtoken";
// import { v4 as uuidv4 } from "uuid";

// export function generateToken({
//   secret = "",
//   secretId = "",
//   clientId = "",
//   scopes = ["tableau:views:embed", "tableau:views:embed_authoring"],
//   userId = "",
//   tokenExpiryInMinutes = 1, // Max of 10 minutes
//   userAttributes = {},
// } = {}) {
//   const header = {
//     alg: "HS256",
//     typ: "JWT",
//     kid: secretId,
//     iss: clientId,
//   };

//   const data = {
//     jti: uuidv4(),
//     aud: "tableau",
//     sub: userId,
//     scp: scopes,
//     exp: Math.floor(Date.now() / 1000) + tokenExpiryInMinutes * 60,
//     ...userAttributes,
//   };

//   const token = jwt.sign(data, secret, { header });
//   return token;
// }

import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

export function generateToken({
  secret = "YOUR_SECRET_VALUE",
  secretId = "YOUR_SECRET_ID",
  clientId = "YOUR_CLIENT_ID",
  scopes = ["tableau:views:embed", "tableau:views:embed_authoring"],
  userId = "YOUR_USER_ID",
  tokenExpiryInMinutes = 1, // Max of 10 minutes
  userAttributes = {},
} = {}) {
  const header = {
    alg: "HS256",
    typ: "JWT",
    kid: secretId,
    iss: clientId,
  };

  const data = {
    jti: uuidv4(),
    aud: "tableau",
    sub: userId,
    scp: scopes,
    exp: Math.floor(Date.now() / 1000) + tokenExpiryInMinutes * 60,
    ...userAttributes,
  };

  const token = jwt.sign(data, secret, { header });
  return token;
}
