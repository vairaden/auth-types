import Fastify from 'fastify'
import cors from '@fastify/cors'
const fastify = Fastify({
  logger: true
})

await fastify.register(cors, {
  origin: [/localhost:4173/],
  credentials: true,
})

fastify.get('/api', async function handler () {
  return { hello: 'world' }
})

try {
  await fastify.listen({ port: 3000, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
