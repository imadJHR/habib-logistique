export default {
    jwt: {
      secret: process.env.JWT_SECRET || 'your-secret-key',
      expiresIn: '1h'
    },
    bcrypt: {
      saltRounds: 10
    }
  };