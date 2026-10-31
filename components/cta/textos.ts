// Textos do sistema de CTA nos dois idiomas. Mesmo arquivo nos dois sites
// (.com.br e .com) — mudou aqui, copiar para o outro.
export type Lang = 'pt' | 'en'

export const WHATSAPP = {
  pt: 'https://wa.me/5531982948067?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento',
  en: 'https://wa.me/5531982948067?text=Hi%2C%20I%20came%20from%20your%20website%20and%20I%27d%20like%20a%20quote',
}

export const T = {
  pt: {
    orcamento: 'Orçamento grátis',
    whatsapp: 'WhatsApp',
    falarWhats: 'Prefiro falar no WhatsApp',
    eyebrow: 'Orçamento grátis',
    formTitulo: 'Vamos colocar o seu negócio para vender mais',
    formTexto:
      'Preencha o formulário. Eu mesma leio, olho o seu site e o seu Google antes de responder, e volto em até 1 dia útil com o que faria no seu lugar.',
    bullets: [
      'Resposta em até 1 dia útil, por quem vai fazer o trabalho',
      'Diagnóstico do seu site, do Google e do atendimento',
      'Proposta por escrito, com escopo, prazo e valor',
    ],
    bandTitulo: 'Quer isso funcionando no seu negócio?',
    bandTexto:
      'Me conte onde você está hoje. Eu olho o seu site, o seu Google e como o cliente chega até você, e respondo em até 1 dia útil.',
    bandBotao: 'Quero meu orçamento grátis',
    formIframe: 'Formulário de orçamento',
  },
  en: {
    orcamento: 'Free quote',
    whatsapp: 'WhatsApp',
    falarWhats: 'Rather text on WhatsApp',
    eyebrow: 'Free quote',
    formTitulo: "Let's get your business booking more jobs",
    formTexto:
      'Fill out the form. I read every request myself, look at your website and your Google profile first, and reply within one business day with what I would do in your place.',
    bullets: [
      'Reply within one business day, from the person who does the work',
      'A look at your website, your Google profile and how leads reach you',
      'A written proposal with scope, timeline and price',
    ],
    bandTitulo: 'Want this working for your business?',
    bandTexto:
      'Tell me where things stand today. I will look at your site, your Google profile and how customers reach you, and reply within one business day.',
    bandBotao: 'Get my free quote',
    formIframe: 'Quote request form',
  },
} as const
