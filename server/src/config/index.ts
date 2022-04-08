const config = {
  debug: Boolean(process.env.DEBUG),
  port: Number(process.env.PORT ?? 3000),
  jwtSecretKey: process.env.JWT_SECRET_KEY ?? 'default',
};

export default config;
