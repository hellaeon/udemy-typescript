```
yarn init
yarn add typescript --dev
yarn add --dev --exact prettier
npx tsc --init
```

* in the tsconfig.json file set `"noEmitOnError": true`. This ensures we dont compile to JS if the TS compiler finds any errors.
* typescript assumes the root of the project wherever the tsconfig file is located
* you can use `npx tsc --watch` to compile ts to js on the fly.
* add an `"include": []`. this is better as you can simply state directories such as `"include": ["src"]`
* add an `"exclude": ["node_modules", "*.exclude.ts", "**/*.exclude.ts"]` array to the tsconfig. Anything not in include is automatically excluded. 
This allows you to specify any ts files to exclude from compilation. Use the file path based on the root folder location eg: `src/utility/blah.js`. `node_modules` is automatically excluded, however if you add the exclude option, you need to specify `node_modules`
* use `rootDir` for all the ts source files, and `outDir` for the JS files. Commonly its `"rootDir": "./src"` and `"outDir": "./dist"` 
* For the `target` property check [This repo](https://github.com/tsconfig/bases) which gives you ready to go tsconfig for multiple frameworks.
* Normally with `target`, typescript will know what JS versions to support. However if we use the `lib` folder, we might need to specify the `dom` if we are using a browser for our app etc. [Refer to this](https://www.typescriptlang.org/tsconfig#lib) to make some sense here. Ideally, we are always targetting at least `ES6` and get the standard JS libs ready to go and do not need to specify anything here.
* `"strict" : true` will set all type checking options on by default. Keep this enabled!