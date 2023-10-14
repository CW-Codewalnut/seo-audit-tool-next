# Seo Audit Report

Codewalnut leads an open-source project offering a high-quality Next.js boilerplate. It's accessible for developers to use and customize as per their needs.

## Technologies

### Core

- [TypeScript](https://www.typescriptlang.org/) - a superset of JavaScript that adds static typing. This allows for more robust code and better developer experience.

- [React](https://facebook.github.io/react/) - a JavaScript library for building user interfaces. It provides a number of features that make it a great choice for building a web app.

- [Next.js](https://nextjs.org/) - for server-side rendering and static site generation. It also has a growing ecosystem of plugins and features that make it a great choice for building a React app.

### Styling

- [Tailwind CSS](https://tailwindcss.com/) - for styling. Tailwind is a utility-first CSS framework that provides a number of base styles and utility classes that can be used to build custom styles. It also provides a number of plugins that can be used to extend the base styles.

- [Sass](https://sass-lang.com/) - for advanced styling. Sass is a CSS preprocessor that allows for more advanced styling, including keyframe animations and targeting specific elements.

### Testing

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - for testing. React Testing Library is a testing library that allows for testing React components in a way that closely resembles how the components are used.

- [Jest](https://jestjs.io/) - for running tests. Jest is a JavaScript testing framework that allows for running tests.

### Linting & Formatting

- [ESLint](https://eslint.org/) - for linting. ESLint is a linter that checks for common errors and code smells in JavaScript code.

- [Prettier](https://prettier.io/) - for formatting. Prettier is a code formatter that automatically formats JavaScript code.


### Utilities

- [clsx](https://www.npmjs.com/package/clsx) - for dynamic classnames. clsx is a tiny utility package that allows for dynamic classnames.

- [date-fns](https://date-fns.org/) - for date formatting. date-fns is a date formatting library that allows for formatting dates in a variety of ways.

## Getting Started

---

First, install the app dependencies:

```
npm install
```

Then, you can run the development server with the command:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Open Dummy Report [http://localhost:3000/seo-report/testing-one](http://localhost:3000/seo-report/testing-one) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

<br>

### Running Tests

You can run the tests with the command:

```
npm run test
```

You can also run the tests in watch mode with the command:

```
npm run test:watch
```

<br>

## Folder Structure

---

### `/public` folder

```
- public
-- img
```

The public folder contains img that are used by the app. These img are copied to the dist folder when the app is built.

We want to keep as many assets as possible in the public folder, so that they can be cached by the browser. This will improve the performance of the app.

### `/src` folder

```
- src
-- components
--- atoms
--- molecules
--- organisms
-- constants
-- pages
-- styles
-- utils
```

The src folder contains the source code for the app. We want to keep all of the source code in the src folder, so that it is easy to find and organize.

### `/components` folder

The components folder contains the components that make up the UI of our app. Components are separated into Atoms, Molecules, and Organisms according to the [Atomic Design methodology](https://atomicdesign.bradfrost.com/chapter-2/). The atoms folder contains the smallest components that are used by the app. The molecules folder contains components that are made up of atoms. The organisms folder contains components that are made up of molecules.

### `/constants` folder

The constants folder contains constants that are used by the app. This includes constants for the app's theme, colors, and API endpoints.

### `/pages` folder

The pages folder contains the pages that make up the app. Each page is a React component that is rendered by Next.js. Pages are automatically routed by Next.js based on the file name and folder structure.

### `/styles` folder

The styles folder contains a global styles file that is used by the app. The global styles file contains styles that are used by the entire app. It also imports the Tailwind CSS styles.

### `/utils` folder

The utils folder contains common utility functions for reusable logic that we want to share between components.

<br>

## Naming Conventions

---

I've also included an example Button component that showcase the file structure and naming conventions that we want to use.

```
- Button
-- Button.tsx
-- Button.test.tsx
```

We can also add a `__mocks__` folder to mock dependencies for testing if needed.

Component files and folders should be named using PascalCase. This is the common naming convention that is used for React components.

Helper functions and their folders should be named using camelCase.

```
- utils
-- formatDate
--- formatDate.ts
--- formatDate.test.ts
```

## Testing

Every component should have a corresponding test file. This allows us to test the component in isolation and ensure that it works as expected.
