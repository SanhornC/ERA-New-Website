import { build } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { prerender } from './prerender.mjs'

const projectRoot = fileURLToPath(new URL('..', import.meta.url))

process.env.NODE_ENV = 'production'

await build({
  root: projectRoot,
  build: {
    outDir: resolve(projectRoot, 'dist'),
    emptyOutDir: true,
  },
})

await build({
  root: projectRoot,
  publicDir: false,
  resolve: {
    alias: [
      {
        find: /^react-slick$/,
        replacement: resolve(projectRoot, 'src/ssr/reactSlick.js'),
      },
    ],
  },
  build: {
    ssr: resolve(projectRoot, 'src/entry-server.jsx'),
    outDir: resolve(projectRoot, 'dist-ssr'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'entry-server.js',
      },
    },
  },
})

const result = await prerender()
console.log(`Prerendered ${result.routeCount} routes and 404.html`)
