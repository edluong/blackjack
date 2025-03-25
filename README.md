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
1. create express endpoint to show randomly picked two cards onto the browser
2. import open source playing cards

# Basic Structure For Backend and Frontend
```
your-project-name/  
├── src/  
│   ├── frontend/  
│   │   ├── index.html  
│   │   └── index.ts  
│   ├── backend/  
│   │   ├── app.ts  
│   │   └── routes.ts  
│   └── public/  
│       └── images/  
│           ├── image1.jpg  
│           └── image2.png  
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