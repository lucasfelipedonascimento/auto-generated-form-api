import Fastify from 'fastify'
import cors from '@fastify/cors'
import { z } from 'zod'
import { randomUUID } from 'crypto'
import { Form } from '../types/Form'
import { Question } from '../types/Question'
import { Condition } from '../types/Condition'
import { Option } from '../types/Option'

const fastify = Fastify()
await fastify.register(cors, {
  origin: '*', 
});
const forms: Form[] = []

fastify.post('/forms', async (req, reply) => {
    const body = req.body as Form;

    const formId = randomUUID();
    const questionsWithId = body.questions.map((question) => ({
      ...question,
      id: randomUUID(),
    }));

    forms.push({
      id: body.id,
      name: body.name,
      questions: questionsWithId.map((question: Question) => {
        return {
          id: question.id,
          label: question.label,
          type: question.type,
          conditions: question.conditions,
          options: question.options,
          response: question.response
        }
      })
    })

    return reply.status(201).send({ formId });
});

fastify.get('/forms', async (_req, reply) => {
  return reply.status(200).send({ forms})
});

fastify.listen({ port: 3333 }, () => {
  console.log('Servidor rodando na porta 3000');
});

