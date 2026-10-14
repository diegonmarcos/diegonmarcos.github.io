import { build } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { promises as fs } from 'fs'

async function buildAll() {
  console.log('🔨 Building regular version...')

  // Build 1: Regular multi-file build using vite.config.ts
  await build({
    configFile: './vite.config.ts',
    build: {
      emptyOutDir: true
    }
  })

  console.log('✅ Regular build complete')
  console.log('🔨 Building standalone SPA version...')

  // Build 2: Single-file SPA build to temp directory
  await build({
    configFile: './vite.config.ts',
    plugins: [viteSingleFile()],
    build: {
      outDir: 'dist-spa',
      emptyOutDir: true
    }
  })

  // Copy the single-file version to main dist
  await fs.copyFile('dist-spa/index.html', 'dist/index_spa.html')

  // Clean up temp directory
  await fs.rm('dist-spa', { recursive: true, force: true })

  console.log('✅ Standalone SPA build complete (index_spa.html)')
  console.log('📦 Both versions built successfully!')
}

buildAll().catch(err => {
  console.error('Build failed:', err)
  process.exit(1)
})
