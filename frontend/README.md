<h1 align="center">
  QX Analytics NextJs Application
</h1>

NextJs Application for QX Analytics

## Quick Start

1. **[Optional]** Setup Node environment.
2. Clone the repo

   ```sh
   git clone {repository}
   cd {repository}/frontend
   ```

3. Install dependencies

   ```sh
   npm install
   ```

4. Build

   ```sh
   npm run build
   ```

5. Run application

   ```sh
   npm run dev
   ```

6. **[Optional]** Manual deployment

   > CI/CD will proceeded by .github/workflows/firebase-functions-build-deploy.yml with github workflow

   > Run below command at project root directory

   ```sh
   firebase deploy --only hosting
   ```

## Available Commands

- Check for linting: `npm run lint`
- Run application: `npm run dev`
- Build application: `npm run bulid`
- Production mode: `npm run start`
  > build before start

## The Package Features

- **ALL FEATURES POSSIBLE FROM NEXT.JS**
- [Firebase Hosting with Framework](https://firebase.google.com/docs/hosting/frameworks/nextjs)

## Anatomy

```text
.
├── public/                // Static assets to be served
│  ├── favicon.icon        // Favicon
│  └── icon.png            // App icon
├── src/                   // Application source
│  ├── _posts/             // Articles written in Markdown
│  ├── app/                // ** Applicaton **
│  │  ├── **/components/   // Page specific components
│  │  └── **/actions/      // Page specific actions/fetch
│  ├── components/         // Application Global UI components
│  ├── lib/                // Application libraries
│  └── styles/             // Application styles
├── next-env.d.ts          // Typescript declaration file for Next.js
├── next.config.mjs        // Next.js configuration file
├── package.json           // Project dependencies and scripts
├── postcss.config.js      // Post css config file
├── README.md              // README
├── tailwind.config.ts     // Tailwind configuration file
└── tsconfig.json          // Typescript configuration file
```

## See Also

- [Next.js](https://nextjs.org/docs)
  > For better understading of Router and project architecture.
