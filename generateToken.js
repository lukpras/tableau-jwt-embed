// import jwt from "jsonwebtoken";
// import { v4 as uuidv4 } from "uuid";

// export function generateToken({
//   secret = "AItFep52xj45V733MOLuJBiyLLD0T1LW1CAG0GlbyXI=",
//   secretId = "7a1a1a80-5b8d-4f5d-a8af-4c61421beaaf",
//   clientId = "294bdfe2-1ad4-4f8c-a5e8-e84e97382f11",
//   scopes = ["tableau:views:embed", "tableau:views:embed_authoring"],
//   userId = "luki@inixindobdg.co.id",
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
