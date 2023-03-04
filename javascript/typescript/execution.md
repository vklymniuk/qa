## Node.js

### TypeScript

    - To execute TypeScript files, we need to install the TypeScript compiler. To check if it was successfully installed, run `tsc -v`. It will display the TypeScript version that is present on your PC.

    - If it is not install, install it with npm or any other package manager. `npm install -g typescript` will install TypeScript globally.

### Execute TypeScript file
    If the mentioned prerequisites are satisfied, we are good to execute TypeScript files using the command line.

## Method 1

    1. `tcs filename.ts`
    2. `node filename.js`

```txt
    When we execute tsc filename.ts, TypeScript will generate a js file with the same name at runtime. To execute the generated js file, run node filename.js.
```

## Method 2

We can use the `ts-node` package to execute TypeScript files from the command line.

Install it with npm or other package manager.
    `npm install -g ts-node`

After that, simply execute the TypeScript files with the command:
    `ts-node filename.ts`.