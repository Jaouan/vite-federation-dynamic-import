# vite-federation-dynamic-import

A library that simplifies the dynamic import of remotes in a [@originjs/vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) host, without declaring it in `vite.config.js`.

## Installation

```sh
npm install vite-federation-dynamic-import
```

## Usage

```js
import { importRemote } from 'vite-federation-dynamic-import';

const remote = await importRemote('http://localhost:3001/remoteEntry.js');
```


Remember that you still need to enable host capabilities in the `vite.config.js` file:

```js:highlight={8,10}
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    federation({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
            dummy: ""
        },
    })
  ],
})
```