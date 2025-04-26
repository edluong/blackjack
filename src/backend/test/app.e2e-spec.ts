import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import TestAgent from 'supertest/lib/agent';
import * as session from 'express-session';
import { config } from 'dotenv';

config();

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  let agent: TestAgent;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    const sessionSecret = process.env.SESSION_SECRET;

    if (!sessionSecret) {
      throw new Error('SESSION_SECRET is not defined in .env');
    }

    //convert the session secret into a Buffer to ensure it's treated as a key
    const secretKey = Buffer.from(sessionSecret, 'utf-8');

    // Mock session middleware
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
    await app.init();
    agent = request(app.getHttpServer());
  });

  it('/game/start (GET)', () => {
    return agent.get('/game/start').send({}).expect(200);
  });
});
