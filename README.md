# Blackjack
Learning Typescript By Coding - Blackjack

# Compile Code
Type `tsc` and the file name
```
tsc <file name>.ts
```
This will then generate a javascript file  
For all files type
```
npm run build
```

# Blackjack - Part 1
1. create the initial endpoints to start up a game of blackjack until end of round
these will be:
- `/game/start`
    does the following:
    1. loads a new deck
    2. shuffles the deck
    3. passes out two cards to player and dealer
    4. saves the game state (player hand, dealer hand, deck state) to session
- `/game/hit` = gives the player another card
- `/game/stand` = player ends their turn
- `/game/status` = retrieves the current status of the game
- `/game/reset` = resets the game

# Endpoints
1. http://localhost:3000/game/start 
Does the following:
- loads a deck of cards
- shuffles the deck of cards
- deal out the initial cards to the player and dealer

# Basic Structure For Backend and Frontend
```
blackjack/
├── src/
│   ├── frontend/
│   │   ├── public/        # Static assets for the frontend
│   │   │   ├── index.html
│   │   │   └── images/
│   │   │       ├── image1.jpg
│   │   │       └── image2.png
│   │   ├── src/           # Source code for the frontend
│   │   │   ├── index.ts     # Entry point for frontend
│   │   │   ├── components/  # React components
│   │   │   ├── App.tsx      # Main App component
│   │   │   ...
│   ├── backend/
│   │   ├── src/           # Source code for the backend
│   │   │   ├── main.ts      # Application entry point
│   │   │   ├── app.module.ts  # Root application module
│   │   │   ├── game/         # Game module
│   │   │   │   ├── game.module.ts
│   │   │   │   ├── game.controller.ts
│   │   │   │   ├── game.service.ts
│   │   │   │   ├── dto/
│   │   │   │   │   ├── create-game.dto.ts
│   │   │   │   │   └── update-game.dto.ts
│   │   │   │   ├── entities/
│   │   │   │   │   └── game.entity.ts
│   │   │   │   └── game.gateway.ts    # For WebSockets
│   │   │   ├── player/       # Player module
│   │   │   │   ├── player.module.ts
│   │   │   │   ├── player.controller.ts
│   │   │   │   ├── player.service.ts
│   │   │   │   ├── dto/
│   │   │   │   │   ├── create-player.dto.ts
│   │   │   │   │   ├── update-player.dto.ts
│   │   │   │   │   └── login-player.dto.ts
│   │   │   │   ├── entities/
│   │   │   │   │   └── player.entity.ts
│   │   │   │   ├── guards/
│   │   │   │   │   └── jwt.guard.ts
│   │   │   │   └── strategies/
│   │   │   │       └── jwt.strategy.ts
│   │   │   ├── shared/       # Shared modules/services
│   │   │   │   ├── shared.module.ts
│   │   │   │   └── shared.service.ts
│   │   │   ├── config/       # Configuration
│   │   │   │   └── config.module.ts
│   │   │   └── common/       # Reusable components
│   │   │       ├── guards/
│   │   │       ├── interceptors/
│   │   │       └── pipes/
├── package.json
├── tsconfig.json
└── .gitignore 
```

# Steps on creating files
1. type `npm init -y` this will:
* create the `package.json` file without asking questions
2. install dependencies
first need to install express
`npm install express`
then install Typescript type definition for express
`npm install @types/express`
then install typescript and ts-node as dev dependencies
`npm install typescript ts-node --save-dev`

# Create tsc config file
```
tsc --init
```

# Configuring for ES Modules
These are ECMAscript modules and new development should follow this pattern

# Generating the Session Secret
1. enter the node repl. type the following:
```
node
```
2. run the following code in the REPL
```
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);
```
3. create a `.env` file and paste the secretKey as the new value
```
SESSION_SECRET=<paste secretKey here>
```