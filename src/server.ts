import Fastify, { FastifyRequest } from 'fastify'
import cors from '@fastify/cors'
import { randomUUID } from 'crypto'
import { Form } from '../types/Form'
import { Question } from '../types/Question'


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
      id: formId,
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

    return reply.status(201).send({ id: formId });
});

fastify.get('/forms', async (_req, reply) => {
  return reply.status(200).send({ forms: forms.map((form: Form) => {
    return {
      id: form.id,
      nome: form.name,
      questions: form.questions
    }
  })})
});

fastify.get('/forms/:id', async (req: FastifyRequest<{
  Params: {
    id: string
  }
}>, reply) => {
  const { id: formId } = req.params

  const form = forms.find(f => f.id === formId);
  return reply.status(200).send({ form: {
    id: form?.id,
    nome: form?.name,
    questions: form?.questions
  }})
})

fastify.listen({ port: 3333 }, () => {
  console.log('Servidor rodando na porta 3000');
});

