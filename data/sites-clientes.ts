// GERADO por _gerar-dados-portfolio.mjs — nao editar a mao.
// Medicao propria, em emulacao de iPhone 13, com PerformanceObserver.
// ⚠️ Nenhum numero aqui e estimado. LCP, CLS e TTFB saem da propria pagina
//    do cliente, no dia indicado. Quem quiser conferir roda pagespeed.web.dev.

export type SiteCliente = {
  slug: string; nome: string; ramo: string; url: string;
  desktop: string; mobile: string;
  lcp: number; cls: number; ttfb: number; medidoEm: string;
};

/** os que estao no ar e passam nos Core Web Vitals */
export const sitesVitrine: SiteCliente[] = [
  {
    slug: 'jh-painting-services', nome: 'JH Painting Services', ramo: 'Pintura · MA',
    url: 'https://jhpaintingservices.com',
    desktop: '/portfolio/jh-painting-services-desktop.webp', mobile: '/portfolio/jh-painting-services-mobile.webp',
    lcp: 512, cls: 0.008, ttfb: 572,
    medidoEm: '2026-09-20',
  },
  {
    slug: 'wolfs-siding', nome: 'Wolf\'s Siding Inc.', ramo: 'Siding · MA',
    url: 'https://wolfs-siding.com',
    desktop: '/portfolio/wolfs-siding-desktop.webp', mobile: '/portfolio/wolfs-siding-mobile.webp',
    lcp: 432, cls: 0.023, ttfb: 465,
    medidoEm: '2026-09-20',
  },
  {
    slug: 'rs-development-group', nome: 'RS Development Group', ramo: 'Construção · MA',
    url: 'https://rs-developmentgroup.com',
    desktop: '/portfolio/rs-development-group-desktop.webp', mobile: '/portfolio/rs-development-group-mobile.webp',
    lcp: 568, cls: 0, ttfb: 482,
    medidoEm: '2026-09-20',
  },
  {
    slug: 'alfa-painting', nome: 'Alfa Painting & Carpentry', ramo: 'Pintura · MA',
    url: 'https://alfapaintingcarpentry.com',
    desktop: '/portfolio/alfa-painting-desktop.webp', mobile: '/portfolio/alfa-painting-mobile.webp',
    lcp: 744, cls: 0.02, ttfb: 554,
    medidoEm: '2026-09-20',
  },
  {
    slug: 'tavares-landscape', nome: 'Tavares Brothers Landscaping', ramo: 'Paisagismo · MA',
    url: 'https://www.tavareslandscape.com',
    desktop: '/portfolio/tavares-landscape-desktop.webp', mobile: '/portfolio/tavares-landscape-mobile.webp',
    lcp: 384, cls: 0, ttfb: 374,
    medidoEm: '2026-09-20',
  },
  {
    slug: 'yellowstone-masonry', nome: 'Yellowstone Masonry', ramo: 'Alvenaria · MA',
    url: 'https://www.yellowstonemasonry.com',
    desktop: '/portfolio/yellowstone-masonry-desktop.webp', mobile: '/portfolio/yellowstone-masonry-mobile.webp',
    lcp: 444, cls: 0, ttfb: 345,
    medidoEm: '2026-09-20',
  },
  {
    slug: 'am-painter', nome: 'AM Painter Inc', ramo: 'Pintura · MA',
    url: 'https://www.ampainterinc.com',
    desktop: '/portfolio/am-painter-desktop.webp', mobile: '/portfolio/am-painter-mobile.webp',
    lcp: 632, cls: 0, ttfb: 422,
    medidoEm: '2026-09-20',
  },
  {
    slug: 'mass-painter-pro', nome: 'Mass Painter Pro', ramo: 'Pintura · MA',
    url: 'https://masspainter.pro',
    desktop: '/portfolio/mass-painter-pro-desktop.webp', mobile: '/portfolio/mass-painter-pro-mobile.webp',
    lcp: 416, cls: 0, ttfb: 254,
    medidoEm: '2026-09-20',
  },
  {
    slug: 'maia-construction', nome: 'Maia Construction', ramo: 'Construção · MA',
    url: 'https://maiaconstruction.com',
    desktop: '/portfolio/maia-construction-desktop.webp', mobile: '/portfolio/maia-construction-mobile.webp',
    lcp: 464, cls: 0, ttfb: 355,
    medidoEm: '2026-09-20',
  },
];

/** no ar, mas com layout instavel (CLS acima de 0,25) — sem numero em destaque */
export const sitesLista: SiteCliente[] = [
  {
    slug: 'dorys-cleaning', nome: 'Dory\'s Cleaning Services', ramo: 'Limpeza · MA',
    url: 'https://doryscleaningservices.com',
    desktop: '/portfolio/dorys-cleaning-desktop.webp', mobile: '/portfolio/dorys-cleaning-mobile.webp',
    lcp: 0, cls: 0.461, ttfb: 564,
    medidoEm: '2026-09-20',
  },
  {
    slug: 'mass-hvac', nome: 'Mass HVAC', ramo: 'HVAC · MA',
    url: 'https://masshvac.net',
    desktop: '/portfolio/mass-hvac-desktop.webp', mobile: '/portfolio/mass-hvac-mobile.webp',
    lcp: 340, cls: 1.97, ttfb: 327,
    medidoEm: '2026-09-20',
  },
];

export const sitesClientes = [...sitesVitrine, ...sitesLista];

/** medicao agregada, so sobre a vitrine */
export const resumoMedicao = {
  quantos: 9,
  lcpMediana: 464,
  clsZerado: 6,
  medidoEm: '2026-09-20',
};
