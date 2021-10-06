# Janux TypeScript Seed

Starting point to create projects based on typescript

## Requirements

Node.js 10.x

## Steps to start easily

Follow the instructions to start using the seed in the simplest way possible

1. Get the seed/skeleton

```bash
git clone https://github.com/janux/typescript-seed.git
cd typescript-seed
```

2. Install dependencies and typescript definitions

```bash
# Install by running:
npm install
```

3. Look seed structure (Directory structure)

```
.
├── LICENSE
├── README.md
├── src
│   ├── example-class.ts
│   └── index.ts
├── test
│   └── example-class.spec.ts
├── build
│
├── .gitignore
├── index.js
├── jest.config.js
├── package.json
├── package-lock.json
├── nodemon.json
└── tsconfig.json
```

- `src` Typescript source files for your project
- `build` Used for the production build

4. Compile typescript project

```bash
# Production build
npm run start
# Development build with nodemon
npm run start:dev
```

## Additional options

- run tests under `test`

```bash
npm run test
# run test in dev mode
npm run test:dev
```

## typescript compiler configuration

The configuration options are on `tsconfig.json`

## License

MIT
