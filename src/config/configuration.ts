export default () => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  apiKeys: {
    googleMaps: process.env.GOOGLE_API_KEY,
    stripe: process.env.STRIPE_API_KEY,
  },
});
