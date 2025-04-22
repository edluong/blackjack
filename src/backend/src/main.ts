import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// express-session uses CommonJS exports so no named exports
import * as session from 'express-session';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const sessionSecret = process.env.SESSION_SECRET;

  if (!sessionSecret) {
    throw new Error('SESSION_SECRET is not defined in .env');
  }

  //convert the session secret into a Buffer to ensure it's treated as a key
  const secretKey = Buffer.from(sessionSecret, 'utf-8');

  // Use session middleware with the session secret converted to a CipherKey (Buffer)
  app.use(
    session({
      secret: secretKey,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 3600000, // 1 hour session
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
