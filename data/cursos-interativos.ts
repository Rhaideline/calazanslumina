import { cursoIAMarketing } from './ia-marketing-curso'
import type { CursoInterativo } from '@/components/curso-viewer/types'
import { cursosInterativosExtras } from './cursos-interativos-extras'

const cursosBase: CursoInterativo[] = [
  cursoIAMarketing,
  {
    slug: 'chatgpt-para-idosos',
    nome: 'ChatGPT para Idosos — Curso Gratuito',
    modulos: [
      {
        titulo: 'O Que é Essa Tal de Inteligência Artificial?',
        slides: [
          {
            type: 'content',
            title: 'O que é IA? (explicação como se fosse para um amigo)',
            body: 'Inteligência Artificial, ou IA, é como um programa de computador muito esperto que aprendeu a entender o que a gente fala e escreve. Imagine que você tem um assistente que leu milhões de livros, receitas, notícias e conversas — e agora consegue responder suas perguntas de forma educada e útil. A IA não pensa como nós, mas consegue imitar muito bem uma conversa natural. É como ter alguém disponível 24 horas por dia para te ajudar com qualquer dúvida.',
            tip: 'Não precisa ter medo da IA. Ela é apenas uma ferramenta, como o telefone ou a televisão. Você está no controle!',
          },
          {
            type: 'content',
            title: 'ChatGPT: seu novo assistente digital gratuito',
            body: 'O ChatGPT é um programa de IA criado pela empresa OpenAI. Ele funciona como uma conversa por escrito: você digita uma pergunta ou pedido, e ele responde na hora. O melhor de tudo é que a versão básica é totalmente gratuita! Você pode usar pelo celular ou pelo computador, sem precisar instalar nada. É como ter um ajudante muito paciente que nunca se cansa de responder suas perguntas.',
            tip: 'O ChatGPT é gratuito. Você não precisa pagar nada para começar a usar!',
          },
          {
            type: 'diagram',
            title: 'Como é a tela do ChatGPT',
            diagramType: 'mockup',
            data: {
              url: 'chat.openai.com',
              title: 'ChatGPT',
              elements: [
                { type: 'header', text: 'ChatGPT — Seu assistente digital' },
                { type: 'text', text: 'Olá! Como posso te ajudar hoje?' },
                { type: 'chat_user', text: 'Me dê uma receita de bolo de cenoura simples' },
                { type: 'chat_ai', text: 'Claro! Aqui vai uma receita fácil de bolo de cenoura: 3 cenouras, 3 ovos, 1 xícara de óleo...' },
                { type: 'input', text: 'Digite sua mensagem aqui...' },
                { type: 'button', text: 'Enviar' },
              ],
            },
            caption: 'A tela do ChatGPT é simples: você digita embaixo e a resposta aparece em cima, como no WhatsApp',
          },
          {
            type: 'quiz',
            question: 'O que é o ChatGPT?',
            options: [
              'Um robô que anda pela sua casa',
              'Um programa de conversa por escrito que responde suas perguntas',
              'Um aplicativo de banco',
              'Um jogo de celular',
            ],
            correctIndex: 1,
            explanation: 'O ChatGPT é um programa de inteligência artificial que funciona como uma conversa por escrito. Você digita uma pergunta e ele responde na hora, de graça!',
          },
        ],
      },
    ],
  },
]

export const cursosInterativos: CursoInterativo[] = [...cursosBase, ...cursosInterativosExtras]
