#!/usr/bin/env ts-node
import dotenv from 'dotenv'
import { Directus } from '@directus/sdk'
import { compile } from 'json-schema-to-typescript'
import openapiTS, { OpenAPI3 } from 'openapi-typescript'

import fs from 'fs'
dotenv.config()

const API_URL = process.env.API_URL || ''
const API_TOKEN = process.env.API_TOKEN || ''
const directus = new Directus(API_URL)

async function start() {
  // But, we need to authenticate if data is private
  let authenticated = false

  // Try to authenticate with token if exists
  await directus.auth
    .refresh()
    .then(() => {
      authenticated = true
    })
    .catch(() => {})

  // Let's login in case we don't have token or it is invalid / expired
  while (!authenticated) {
    await directus.auth
      .static(API_TOKEN)
      .then(() => {
        authenticated = true
      })
      .catch(() => {
        window.alert('Invalid credentials')
      })
  }

  const openapiSpec = await directus.server.oas()
  const output = await openapiTS(openapiSpec as OpenAPI3, { exportType: true })

  fs.writeFileSync('./@types/api.d.ts', output)
}

start()

export {}
