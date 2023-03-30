import { prisma } from '@/lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function listAll(request: FastifyRequest, reply: FastifyReply) {
  const users = await prisma.user.findMany()
  reply.send(users)
}
