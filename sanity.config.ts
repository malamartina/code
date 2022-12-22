import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '@/schemas/schema.js'

export default defineConfig({
  name: 'default',
  title: 'Fluffy´s World',

  projectId: '1okvc3t4',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes
  },
})
