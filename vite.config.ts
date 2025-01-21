/// <reference types="vitest" />
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    Vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/types/components.d.ts',
      deep: true,
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/],
      globalNamespaces: ['components', 'layouts'],
      dirs: ['src/components', 'src/layouts'],
      resolvers: [VueUseComponentsResolver()],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/types/auto-import.d.ts',
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),

    // https://github.com/antfu/unocss
    Unocss(),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect(),
  ],

  server: {
    host: true,
  },
})
