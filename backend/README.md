<h1 align="center">
  QX Analytics Firebase Project
</h1>

Code based QX Analytics Firebase project

## Quick Start

1. **[Optional]** Setup Node environment.
2. Clone the repo

   ```sh
   git clone {repository}
   cd {repository}/backend/functions
   ```

3. **[Optional]** Setup firebase configuration

   Install firebase-cli

   Change .firebaserc and firebase.json in project root directory to match with current firebase environment

4. Install dependencies

   ```sh
   npm install
   ```

5. Build

   ```sh
   npm run build
   ```

6. Run application

   ```sh
   npm run serve
   ```

7. **[Optional]** Run application with Hot reload

   ```sh
   npm run serve:watch
   ```

8. **[Optional]** Manual deployment

   > CI/CD will proceeded by .github/workflows/firebase-functions-build-deploy.yml with github workflow

   ```sh
   firebase deploy --only functions
   ```

## Available Commands

- Check for linting : `npm run lint`
- Fix for linting : `npm run lint:fix`
- Logging firebase : `npm run logs`
- Run Application : `npm run start`
- Firebase emulator shell : `npm run shell`
- Run Testing : `npm run test`

## The Package Features

- Running Environment

  - Firebase emulator

- Application

  - Typescript
  - NPM
  - Node.js
  - Express
    - compression: http request compressor
    - cors: CORS
    - helmet: HTTP Security
    - hpp: HTTP Parameter Pollution
    - morgan: http request logger

- DevOps

  - Github Action Workflows: CI/CD integration
  - NodeMon/Concurrently: Hot-reload
  - Jest/Supertest: Testing environment
  - Eslint/Prettier: Linting
  - tsc-alias: Directory module alias

- Utilities
  - Swagger: Documentation

## Anatomy

```text
.
├── README.md               // firebase project documentation
├── firestore.indexes.json  // firestore indexes
├── firestore.rules         // firestore rules
├── functions               // firebase functions
│   ├── .env.*              // firebase alias environment variables
│   ├── .eslintignore       // eslint ignore
│   ├── .eslintrc.js        // eslint configuration
│   ├── .gitignore          // git ignore
│   ├── .prettierrc         // prettier configuration
│   ├── nodemon.json        // Nodemon configuration
│   ├── package.json        // package json
│   ├── src                 // source directory
│   │   ├── app.ts          // ** Application **
│   │   ├── config          // application configurations
│   │   ├── constants       // application constants
│   │   ├── controllers     // application controllers
│   │   ├── data            // application data
│   │   ├── exceptions      // application exceptions
│   │   ├── index.ts        // ** Index **
│   │   ├── interfaces      // application interfaces
│   │   ├── middlewares     // application middleware
│   │   ├── models          // application data models
│   │   ├── routes          // application routes
│   │   ├── schemas         // data trasfer object schemas
│   │   ├── services        // application service layers
│   │   ├── tests           // testing
│   │   ├── triggers        // firebase functions triggers
│   │   └── utils           // application utilities
│   ├── tsconfig.dev.json   // developement typescript configuration
│   └── tsconfig.json       // typescript configuration
└── storage.rules           // firebase storage rules
```
