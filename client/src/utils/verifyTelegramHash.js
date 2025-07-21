import CryptoJS from "crypto-js";

export const verifyTelegramHash = (data, botToken) => {
  const { hash, ...params } = data;

  // Sort the parameters alphabetically by key
  const sortedKeys = Object.keys(params).sort();
  const sortedParams = sortedKeys
    .map((key) => `${key}=${params[key]}`)
    .join("\n");

  // Generate the HMAC-SHA256 hash
  const secretKey = CryptoJS.SHA256(botToken);
  const hmac = CryptoJS.HmacSHA256(sortedParams, secretKey).toString(
    CryptoJS.enc.Hex
  );

  console.log("Sorted Parameters:", sortedParams);
  console.log("HMAC:", hmac);
  console.log("Hash:", hash);

  return hmac === hash;
};
