export default {
  jwt: {
    secret: process.env.JWT_SECRET || "your-secret-key",
    expiresIn: "24h",
  },
  bcrypt: {
    saltRounds: 10,
  },
};
