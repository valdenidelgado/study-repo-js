import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3000),
})

// export const env = envSchema.parse(process.env)

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid variables', _env.error.format())

  throw new Error('Invalid variables')
}

export const env = _env.data
