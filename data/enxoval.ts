// GERADO por ENXOVAL/dados/gerar_ts.py — nao editar a mao.
// Produtos vem do datafeed de afiliada da Shopee, filtrados por nota do item
// (>= 4.6), nota da loja (>= 4.5), minimo de 20 curtidas e faixa de preco
// plausivel por categoria. Dos 56.275 do feed sobraram os que estao aqui.
//
// A lista NAO e inflada de proposito: itens sem produto bom no catalogo
// aparecem com orientacao e sem link. Ver o porque em ENXOVAL/dados/enxoval.py.

export interface ProdutoEnxoval {
  id: string
  titulo: string
  preco: number
  precoDe?: number
  nota: number
  curtidas: number
  loja: string
  img: string
  link: string
}

export interface ItemEnxoval {
  grupo: string
  nome: string
  qtd: number
  chave?: string
  porque: string
  dica?: string
}


export const produtosEnxoval: Record<string, ProdutoEnxoval[]> = {
  body: [
    {
      id: '41073261964',
      titulo: 'Magnésio e Inositol 210g Melatonina 0,21mg Body Action - Original',
      preco: 67.9,
      precoDe: 84.99,
      nota: 4.93,
      curtidas: 28466,
      loja: 'DaFabricaSuplementos',
      img: 'https://cf.shopee.com.br/file/br-11134211-81z1k-mfu1g0m4r9c7c3',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F434195734%2F41073261964'
    },
    {
      id: '19297517987',
      titulo: 'Roupa Kit 6 Peças Bebê Body Manga Curta e Calça Menina Menino Infantil',
      preco: 78.9,
      precoDe: 129.9,
      nota: 4.84,
      curtidas: 6713,
      loja: 'Amore Online ✔',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m04unwhm0rlp01',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F435692544%2F19297517987'
    },
    {
      id: '23693845827',
      titulo: 'Body Loção Hidratante 200ml Nivea',
      preco: 24.9,
      precoDe: 29.9,
      nota: 4.9,
      curtidas: 4334,
      loja: 'Cirúrgica Nova Era',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-mc73ov5u48g519',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1295597776%2F23693845827'
    },
    {
      id: '58210075879',
      titulo: 'Kit Xerosa com 3 Body Splash 200ml',
      preco: 77.74,
      precoDe: 91.35,
      nota: 4.82,
      curtidas: 5453,
      loja: 'Salon Line',
      img: 'https://cf.shopee.com.br/file/br-11134207-820mh-mnub0w4pf2mcf7',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F616222685%2F58210075879'
    },
    {
      id: '26941603314',
      titulo: 'Body Splash Cabelo e Corpo Xêrosa Glamour Chic 200ml',
      preco: 27.1,
      precoDe: 30.45,
      nota: 4.82,
      curtidas: 42581,
      loja: 'Salon Line',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8259k-mfuz10igxz4951',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F616222685%2F26941603314'
    },
    {
      id: '42658182428',
      titulo: 'Body Whey 900g com Whey Protein concentrado 30g de proteína por dose - Original',
      preco: 69.98,
      precoDe: 109.99,
      nota: 4.91,
      curtidas: 3943,
      loja: 'DaFabricaSuplementos',
      img: 'https://cf.shopee.com.br/file/br-11134211-81z1k-mffbjim1hfyfe3',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F434195734%2F42658182428'
    }
  ],
  macacao: [
    {
      id: '54401468119',
      titulo: 'Macacão bebê com touca em tricô unissex Raposa Taylor',
      preco: 87.19,
      precoDe: 119.9,
      nota: 4.98,
      curtidas: 4756,
      loja: 'Nika baby',
      img: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mh3ghfplzytj02',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F432637056%2F54401468119'
    },
    {
      id: '18499206688',
      titulo: 'Macacão bebê menina com vestido tule rosa bebê Manuela',
      preco: 78.9,
      precoDe: 99.9,
      nota: 4.93,
      curtidas: 25604,
      loja: 'Nika baby',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-ls4zfjosgzl0e1',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F432637056%2F18499206688'
    },
    {
      id: '21058201621',
      titulo: 'Kit 3 Macacões Bebê Amore Vira Pé Zíper Mais Vendidos Menino 100% Algodão',
      preco: 75.5,
      precoDe: 99.9,
      nota: 4.91,
      curtidas: 50028,
      loja: 'Amore Online ✔',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lf-ml7t4vdbjfgk44',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F435692544%2F21058201621'
    },
    {
      id: '46454818454',
      titulo: 'Escolha Seu Macacão Bebe Menino Roupa Inverno Soft Peluciado Com Zíper Quentinho e Confortável L09',
      preco: 29.88,
      precoDe: 55.0,
      nota: 4.88,
      curtidas: 7478,
      loja: 'Poloinfantil.store',
      img: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mjk2npcximmad5',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F46454818454'
    },
    {
      id: '18097070906',
      titulo: '3 Macacão para Bebê Amore Vira Pé com Zíper Menina Liso e Estampado 100% Algodão',
      preco: 72.64,
      precoDe: 99.9,
      nota: 4.87,
      curtidas: 23444,
      loja: 'Amore Online ✔',
      img: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mhhsxtm4zlky24',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F435692544%2F18097070906'
    },
    {
      id: '22092665417',
      titulo: 'KIT 4 Macacões Sortidos Pezinho - Sundine',
      preco: 111.53,
      precoDe: 199.9,
      nota: 4.84,
      curtidas: 9431,
      loja: 'Amore Online ✔',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m04mnwqrx77h0c',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F435692544%2F22092665417'
    }
  ],
  mantas: [
    {
      id: '23393119541',
      titulo: 'Cobertor Solteiro Corinthians Manta Microfibra Antialérgico 1,50x 2,00m Presente Torcedor Jolitex',
      preco: 70.23,
      precoDe: 99.9,
      nota: 4.91,
      curtidas: 5531,
      loja: 'Mec G Store',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lm-mrac6cfphgqvb3',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F310274254%2F23393119541'
    },
    {
      id: '21853832322',
      titulo: 'Manta Liquida Ultra Emborrachada Hydromanta Flexivel Para Lajes Telhas Parede Balde 5kg - Hydronorth',
      preco: 99.9,
      precoDe: 139.9,
      nota: 4.79,
      curtidas: 10556,
      loja: 'A Casa do Pintor',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lj-mpv53w5tjf2a86',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F705932885%2F21853832322'
    },
    {
      id: '22128138095',
      titulo: 'Cobertor Coberdrom Manta Flannel Toque Macio Dupla Face Sherpa Pele de Carneiro - Queen 2,40 x 2,20',
      preco: 167.98,
      precoDe: 340.0,
      nota: 4.74,
      curtidas: 4802,
      loja: 'LaTu Magazine',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m82ba59baknle1',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F443294432%2F22128138095'
    },
    {
      id: '5386442865',
      titulo: 'Manta Asfáltica Auto Adesiva Aluminizada Multiuso Calhas Telhas Fácil Aplicação Impermeabilizante',
      preco: 24.9,
      precoDe: 29.99,
      nota: 4.87,
      curtidas: 3256,
      loja: 'Comercial Vipasa',
      img: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mkdxe0tnwyyq31',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F408128510%2F5386442865'
    },
    {
      id: '17773614046',
      titulo: 'Pillow Top Solteiro Macio de Manta Siliconada Antialérgico 200 Fios BF Colchões',
      preco: 184.0,
      precoDe: 258.7,
      nota: 4.84,
      curtidas: 2427,
      loja: 'BF Colchões',
      img: 'https://cf.shopee.com.br/file/br-11134207-81z1k-me74rfrz8ge9d0',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F412482669%2F17773614046'
    },
    {
      id: '40451853489',
      titulo: 'Cobertor Casal Jolitex Antialérgico Microfibra 2,20x1,80m Coberta Casal Manta Edredom',
      preco: 69.9,
      precoDe: 139.9,
      nota: 4.65,
      curtidas: 3950,
      loja: 'Mec G Store',
      img: 'https://cf.shopee.com.br/file/br-11134207-820ly-mqlzxzuvgnwgac',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F310274254%2F40451853489'
    }
  ],
  toalha: [
    {
      id: '22193422235',
      titulo: 'Jogo de Toalha 4 Peças Karsten 100% Algodão Yuna Quebec Felpuda Macia Excelente Absorção Banho Rosto',
      preco: 141.02,
      precoDe: 260.9,
      nota: 4.94,
      curtidas: 16431,
      loja: 'MANIA DE ENXOVAL - A MELHOR',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lr-mo6vj761ird09e',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F356841149%2F22193422235'
    },
    {
      id: '23593861372',
      titulo: 'Toalhas de Banho e Rosto 100% Algodão Kit com 4 peças Karsten Provence',
      preco: 139.9,
      precoDe: 254.0,
      nota: 4.91,
      curtidas: 6490,
      loja: 'Bf Casa Oficial',
      img: 'https://cf.shopee.com.br/file/br-11134207-820m0-mnx5rp8v5qf8f8',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1264071501%2F23593861372'
    },
    {
      id: '22796863015',
      titulo: 'Kit Acessórios Banheiro Preto Fosco 4 Peças Porta Toalha Banho Duplo Mais Grosso Luxo',
      preco: 72.9,
      precoDe: 120.0,
      nota: 4.86,
      curtidas: 6871,
      loja: 'Be Cazza',
      img: 'https://cf.shopee.com.br/file/br-11134207-820ma-mrsr0nvbp05j8c',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F378447288%2F22796863015'
    },
    {
      id: '22094421541',
      titulo: 'Jogo de Toalhas Buddemeyer Fio Penteado Roma Banho 2 Peças',
      preco: 142.0,
      precoDe: 168.32,
      nota: 4.97,
      curtidas: 3456,
      loja: 'Buddemeyer',
      img: 'https://cf.shopee.com.br/file/sg-11134201-824hk-mej1zb8cusjl1e',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F462263068%2F22094421541'
    },
    {
      id: '43611904153',
      titulo: 'Kit 2 Toalhas De Banho Karsten 100% Algodão Grossa Yuna Excelente Absorção 430g/m²',
      preco: 109.89,
      precoDe: 129.9,
      nota: 4.94,
      curtidas: 3254,
      loja: 'MANIA DE ENXOVAL - A MELHOR',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lh-mlmf4myw2fpibe',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F356841149%2F43611904153'
    },
    {
      id: '21133105462',
      titulo: 'Jogo de Toalhas de Banho e Rosto Dohler 2 peças 100% Algodão Toque Aveludado Macia Romance',
      preco: 99.9,
      precoDe: 159.9,
      nota: 4.94,
      curtidas: 1744,
      loja: 'MANIA DE ENXOVAL - A MELHOR',
      img: 'https://cf.shopee.com.br/file/br-11134207-820me-mqqj5vbwrl6rf9',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F356841149%2F21133105462'
    }
  ],
  fralda_pano: [
    {
      id: '23493483337',
      titulo: 'Kit Fralda de Pano Bublim Festonê Girafa - 3 Peças',
      preco: 33.9,
      nota: 5.0,
      curtidas: 384,
      loja: 'Stikids',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7req4-m1o89xngxkjocb',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1275097038%2F23493483337'
    }
  ],
  fralda_desc: [
    {
      id: '22792263788',
      titulo: 'Fralda Pampers Confort Sec Super P 72 Unidades',
      preco: 116.5,
      precoDe: 139.99,
      nota: 4.97,
      curtidas: 7077,
      loja: 'Pampers By Sage\'s',
      img: 'https://cf.shopee.com.br/file/fb09c5e8f130eca23edcecd7240912b7',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1062557396%2F22792263788'
    },
    {
      id: '21962881511',
      titulo: 'Fralda Infantil Turma da Mônica Baby Mega Tamanho M 50 Fraldas Descartáveis',
      preco: 42.99,
      nota: 4.94,
      curtidas: 5244,
      loja: 'Drogaria Araujo',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8259j-mrv8omo0inls4e',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F21962881511'
    },
    {
      id: '22993049862',
      titulo: 'Kit Fralda Descartável Babysec Galinha Pintadinha Ultra Mega P 42 Unidades - 3 Unidades',
      preco: 104.99,
      precoDe: 145.76,
      nota: 4.95,
      curtidas: 4818,
      loja: 'Lojas REDE',
      img: 'https://cf.shopee.com.br/file/sg-11134201-82620-mkv5gdl5ubr6a0',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F683941545%2F22993049862'
    },
    {
      id: '23192310399',
      titulo: 'Fralda Descartável Turma da Mônica Tamanho M - 4 Pacotes com 50 Fraldas - Total 200 Tiras',
      preco: 155.9,
      precoDe: 207.6,
      nota: 4.91,
      curtidas: 11655,
      loja: 'Efácil Oficial',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7r99j-ll9dgiww4kmt3c',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F822103155%2F23192310399'
    },
    {
      id: '22293753451',
      titulo: 'Fralda Personal Baby Protect & Sec Tamanho P 44 Fraldas Descartáveis',
      preco: 32.99,
      nota: 4.9,
      curtidas: 3963,
      loja: 'Drogaria Araujo',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8259j-mrq2x9mnx8g87c',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F22293753451'
    },
    {
      id: '19498691874',
      titulo: 'Kit 2 Fralda Babysec Premium Tamanho M Pacote Mega com 32 Unidades Descartáveis',
      preco: 75.98,
      nota: 4.95,
      curtidas: 2811,
      loja: 'Drogaria Araujo',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8258s-mri3o5mbj958a1',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F19498691874'
    }
  ],
  lenco: [
    {
      id: '23092571526',
      titulo: 'Lenços Umedecidos Pampers Cuidado de Bebê 192 Unidades Leve 4 Pague 3',
      preco: 57.08,
      nota: 4.96,
      curtidas: 20704,
      loja: 'Drogaria Araujo',
      img: 'https://cf.shopee.com.br/file/sg-11134201-823pi-moihww66r9qn28',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F23092571526'
    },
    {
      id: '21998198734',
      titulo: 'Lenço Umedecido Intimus Defesa Natural 16 Un',
      preco: 10.49,
      nota: 4.94,
      curtidas: 7261,
      loja: 'Farmácia Preço Popular',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdyi-mc6y4ekcoyku51',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1458515228%2F21998198734'
    },
    {
      id: '22094660957',
      titulo: 'Lenços Umedecidos Pampers Aloe Vera Leve 4 Pague 3 Com 48 Unidades',
      preco: 45.89,
      nota: 4.97,
      curtidas: 2724,
      loja: 'Panvel Farmácias',
      img: 'https://cf.shopee.com.br/file/sg-11134201-820me-mnd9gfmy7w207b',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1609010660%2F22094660957'
    },
    {
      id: '20598974277',
      titulo: 'Lenços Umedecidos Pampers Cuidado de Bebê 192un',
      preco: 53.92,
      nota: 4.96,
      curtidas: 1486,
      loja: 'P&G Brasil Loja Oficial By Sage’s',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rbk0-llxkbq7pbuar24',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F353664457%2F20598974277'
    },
    {
      id: '20952808596',
      titulo: 'Kit 2 Lenços Umedecidos Pampers Aloe Vera com 192un cada',
      preco: 117.04,
      nota: 4.96,
      curtidas: 1308,
      loja: 'P&G Brasil Loja Oficial By Sage’s',
      img: 'https://cf.shopee.com.br/file/b2ade08796e5dc96fa39740b009e342f',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F353664457%2F20952808596'
    },
    {
      id: '10965773379',
      titulo: 'Lenços Umedecidos Pampers Cheirinho de Bebê com 48 un',
      preco: 18.19,
      precoDe: 19.19,
      nota: 4.97,
      curtidas: 825,
      loja: 'P&G Brasil Loja Oficial By Sage’s',
      img: 'https://cf.shopee.com.br/file/1156741792d730688598dc57539c0bff',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F353664457%2F10965773379'
    }
  ],
  banho: [
    {
      id: '23397474987',
      titulo: 'Sabonete Líquido Infantil Dove Baby Hidratação Enriquecida 200ml',
      preco: 16.99,
      precoDe: 25.45,
      nota: 4.93,
      curtidas: 6841,
      loja: 'Perfumaria Sumirê',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rd5u-lui1sdbyawscc3',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1010974641%2F23397474987'
    },
    {
      id: '21797672992',
      titulo: 'Kit Shampoo + Condicionador Salon Line Hidra Kids Cachinhos 300ml',
      preco: 22.82,
      precoDe: 27.07,
      nota: 4.91,
      curtidas: 3787,
      loja: 'Perfumaria Sumirê',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rd5u-lujg26ty1n9982',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1010974641%2F21797672992'
    },
    {
      id: '20224226941',
      titulo: 'Shampoo Para Bebê JOHNSON\'S® Baby De Glicerina, 200mL',
      preco: 30.09,
      nota: 4.89,
      curtidas: 3287,
      loja: 'Kenvue by Sage´s',
      img: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mg6m8z1kvrb83f',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F818390117%2F20224226941'
    },
    {
      id: '23094801639',
      titulo: 'Kit Morango com Shampoo + Condicionador e Creme de Pentear Kids',
      preco: 59.54,
      precoDe: 73.5,
      nota: 4.85,
      curtidas: 3567,
      loja: 'Salon Line',
      img: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mjzv8ko2l98j88',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F616222685%2F23094801639'
    },
    {
      id: '23698524634',
      titulo: 'Sabonete Liquido Granado Bebe 250ml',
      preco: 26.74,
      nota: 4.97,
      curtidas: 466,
      loja: 'Farmácia Preço Popular',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdyu-mbqzb060zqmlfb',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1458515228%2F23698524634'
    },
    {
      id: '23397720119',
      titulo: 'Kit Shampoo Condicionador Cachinhos E Sabonete Bebê Skalinha',
      preco: 55.98,
      precoDe: 69.98,
      nota: 5.0,
      curtidas: 99,
      loja: 'Beltaf',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdxs-lz22ssafaf8q1b',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F371678536%2F23397720119'
    }
  ],
  pomada: [
    {
      id: '22197925897',
      titulo: 'Kit 2 Pomadas Para Prevenção De Assaduras Babymed Azul 45g',
      preco: 16.99,
      precoDe: 23.15,
      nota: 4.91,
      curtidas: 8397,
      loja: 'Droga Clara',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdxe-m0ykrqwomium14',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1045085918%2F22197925897'
    },
    {
      id: '23393740598',
      titulo: 'Kit 3 Bepantriz Pomada para Assaduras Dexpantenol 30g',
      preco: 23.49,
      nota: 4.93,
      curtidas: 1494,
      loja: 'Drogaria Araujo',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8257y-mr6j8yxslaf988',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F23393740598'
    },
    {
      id: '23998774481',
      titulo: 'Creme Hidratante Corporal Intensivo Derma 200ml - Bepantol',
      preco: 69.9,
      precoDe: 74.9,
      nota: 4.94,
      curtidas: 172,
      loja: 'Planeta_Max',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdxl-md0lyw4zclksaa',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F624228750%2F23998774481'
    },
    {
      id: '23793050545',
      titulo: 'BEPANTOL DERMA CREME COM 20G',
      preco: 58.29,
      nota: 4.7,
      curtidas: 112,
      loja: 'Drogaria Nova Esperança',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rd4l-lvnfokq30b6b08',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1251200960%2F23793050545'
    }
  ],
  banheira: [
    {
      id: '22891428413',
      titulo: 'Banheira Luxo Suporte Trocador Saboneteira Star Of The Show',
      preco: 289.99,
      nota: 4.92,
      curtidas: 10492,
      loja: 'Kids Baby Hercules',
      img: 'https://cf.shopee.com.br/file/br-11134207-7qukw-ljwsz7853l432f',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F829520727%2F22891428413'
    },
    {
      id: '16292106261',
      titulo: 'Banheira Luxo Com Suporte Dobrável, Trocador e Saboneteira, 25l, até 30kg - Little Princess',
      preco: 289.99,
      nota: 4.92,
      curtidas: 12518,
      loja: 'Kids Baby Hercules',
      img: 'https://cf.shopee.com.br/file/br-11134207-7qukw-ljwsz7857stff6',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F829520727%2F16292106261'
    },
    {
      id: '49756409167',
      titulo: 'Banheira Bebê Dobrável Com Termômetro Digital Portátil e Compacta 30L + Rede de Proteção Toki Baby',
      preco: 136.9,
      precoDe: 169.9,
      nota: 4.96,
      curtidas: 1585,
      loja: 'Tudo Barato Brasil_',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lj-moicq3khw26e41',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F637480448%2F49756409167'
    },
    {
      id: '23393928816',
      titulo: 'KIt Banheira De Bebê Adoleta Com Balde e Bacia Azul',
      preco: 154.9,
      nota: 5.0,
      curtidas: 149,
      loja: 'Stikids',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rep1-m907i6v3adbb76',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1275097038%2F23393928816'
    },
    {
      id: '23298425729',
      titulo: 'Banheira Bebê Cajovil 22 Litros Transparente Azul',
      preco: 57.9,
      nota: 4.96,
      curtidas: 90,
      loja: 'Stikids',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7reok-m8z5fymv6fmq01',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1275097038%2F23298425729'
    },
    {
      id: '18399924319',
      titulo: 'Piscina Banheira Inflável Infantil Redonda 450 Litros - Mor',
      preco: 82.27,
      precoDe: 126.56,
      nota: 4.95,
      curtidas: 30,
      loja: 'saavedramateriais',
      img: 'https://cf.shopee.com.br/file/sg-11134201-821d7-mggo9ns3239k8d',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1190424233%2F18399924319'
    }
  ],
  berco: [
    {
      id: '24340811169',
      titulo: 'Berço De Balanço Bebês Colchão Mosquiteiro Cesto Até 50kg Ergonômico Tubo De Ferro Poliéster Pipdip',
      preco: 589.99,
      precoDe: 2999.99,
      nota: 4.95,
      curtidas: 52847,
      loja: 'Loja Oficial | Kidsy',
      img: 'https://cf.shopee.com.br/file/br-11134207-820l4-mrkpc2mnwr2d1a',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F390278034%2F24340811169'
    },
    {
      id: '23602204696',
      titulo: 'Berço Cômoda para Colchão 60 x 130 cm Multimóveis Meu Bebê FG2870 Branco',
      preco: 413.55,
      precoDe: 549.9,
      nota: 4.86,
      curtidas: 18213,
      loja: 'Multimóveis Oficial',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7qve9-lhxfzq689hm504',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F308628919%2F23602204696'
    },
    {
      id: '18797982259',
      titulo: 'Berço 3 em 1 para Colchão 130 x 60 cm com Cômoda Framboesa Multimóveis MP4295',
      preco: 793.39,
      precoDe: 1299.99,
      nota: 4.85,
      curtidas: 25545,
      loja: 'Multimóveis Oficial',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7reqd-m1o8nao10vul90',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F308628919%2F18797982259'
    },
    {
      id: '20899247252',
      titulo: 'Quarto de Bebê Berço com Rodízios Cômoda 1 Porta 100% MDF Lana Espresso Móveis Branco/Amêndoa Branco',
      preco: 787.5,
      precoDe: 1098.13,
      nota: 4.93,
      curtidas: 3574,
      loja: 'MadeiraMadeira',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8258n-mrq9w5cf50cgd6',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F855489892%2F20899247252'
    },
    {
      id: '18899692128',
      titulo: 'Berço Portátil Serenata Pink Burigotto Cercadinho Bebê',
      preco: 519.99,
      precoDe: 776.1,
      nota: 4.97,
      curtidas: 3020,
      loja: 'Mami Brinquedos',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7repa-m8mf2xcot15he6',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1479622710%2F18899692128'
    },
    {
      id: '22598409530',
      titulo: 'Berço Portátil Sonata Bege Burigotto Chiqueiro Cercado Bebê',
      preco: 449.99,
      precoDe: 547.3,
      nota: 4.93,
      curtidas: 3369,
      loja: 'Mami Brinquedos',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rep0-m8l5phxohk0yd1',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1479622710%2F22598409530'
    }
  ],
  mamadeira: [
    {
      id: '21926692567',
      titulo: 'Chupeta 100% Silicone Soft Calming 0m+ Neutra - Lillo',
      preco: 26.9,
      nota: 4.97,
      curtidas: 5285,
      loja: 'lillobr',
      img: 'https://cf.shopee.com.br/file/a6986c1c6cb51abc265aab707db872d1',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F481992044%2F21926692567'
    },
    {
      id: '14336895764',
      titulo: 'Mochila Bolsa Maternidade Lequeen Original Porta Mamadeira Menina Menino',
      preco: 188.8,
      precoDe: 199.9,
      nota: 4.95,
      curtidas: 7327,
      loja: 'Lequeen Oficial',
      img: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mgcavdeyz9c090',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F345061139%2F14336895764'
    },
    {
      id: '13354974456',
      titulo: 'Kit 2 Escovas Para Mamadeira e Bico Com Esponja Rosa 5415 Buba',
      preco: 18.99,
      nota: 4.92,
      curtidas: 5939,
      loja: 'Mais Barato Brinquedos',
      img: 'https://cf.shopee.com.br/file/br-11134201-820ly-mqx980g7acclfc',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F446413605%2F13354974456'
    },
    {
      id: '23391599079',
      titulo: 'Mamadeira com Alça Super Evolution 240ml Rosa - Lillo',
      preco: 39.9,
      nota: 4.94,
      curtidas: 4464,
      loja: 'lillobr',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7qvg5-lid60r7swmbb32',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F481992044%2F23391599079'
    },
    {
      id: '20143020699',
      titulo: 'Aquecedor De Mamadeiras Portátil Com Bolsa 14516 - Buba',
      preco: 52.99,
      nota: 4.77,
      curtidas: 7659,
      loja: 'Mais Barato Brinquedos',
      img: 'https://cf.shopee.com.br/file/df806d24fc848498a31274fb07d46c89',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F446413605%2F20143020699'
    },
    {
      id: '23491983212',
      titulo: 'Mamadeira Super Evolution com Bico em Látex 150ml 0m+ Lillo',
      preco: 39.9,
      nota: 4.91,
      curtidas: 3432,
      loja: 'lillobr',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7qvel-ljykq8mspptx1e',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F481992044%2F23491983212'
    }
  ],
  bomba: [
    {
      id: '23494637763',
      titulo: 'Bomba Tira-Leite Vestível Sem Fio Elétrica Antirrefluxo Baixo Ruído 3 Modos Sem BPA Flanges 17/19/21/24mm',
      preco: 199.0,
      precoDe: 400.0,
      nota: 4.86,
      curtidas: 6799,
      loja: 'QBuen',
      img: 'https://cf.shopee.com.br/file/br-11134207-820m5-mrb1s52gmz9j56',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1611271950%2F23494637763'
    },
    {
      id: '6595069283',
      titulo: 'Bomba Extratora Manual Tira Leite Materno Adapt - Lillo',
      preco: 99.99,
      precoDe: 152.9,
      nota: 5.0,
      curtidas: 354,
      loja: 'lillobr',
      img: 'https://cf.shopee.com.br/file/0cf6340e849ce419588da89f912a4eba',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F481992044%2F6595069283'
    },
    {
      id: '56610925312',
      titulo: 'Garrafa Térmica Soprano 1L Com Bomba Trava Segurança e Ampola De Vidro para Café Leite e Chá',
      preco: 91.57,
      precoDe: 99.99,
      nota: 4.67,
      curtidas: 46,
      loja: 'Eletricario Loja Oficial',
      img: 'https://cf.shopee.com.br/file/sg-11134201-823q1-mol5gtn7wf7zec',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F951290141%2F56610925312'
    }
  ],
  babador: [
    {
      id: '19798089408',
      titulo: 'Babador de Silicone Bear Pink KikkaBoo',
      preco: 19.9,
      precoDe: 69.9,
      nota: 5.0,
      curtidas: 71,
      loja: 'ABC Design & KikkaBoo',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m8c0mv1yx3w1a2',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1419417476%2F19798089408'
    },
    {
      id: '58255834826',
      titulo: 'Babador Silicone Buba Impermeável Pega Migalhas Gumy Verde',
      preco: 30.4,
      nota: 5.0,
      curtidas: 70,
      loja: 'Droga Clara',
      img: 'https://cf.shopee.com.br/file/sg-11134201-82607-ml5ujjcvi4u909',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1045085918%2F58255834826'
    },
    {
      id: '58205848934',
      titulo: 'Babador de Silicone Buba Com Pega Migalhas Cloudy Esquilo',
      preco: 32.66,
      nota: 5.0,
      curtidas: 62,
      loja: 'Droga Clara',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8260i-ml5fwy9uy3ghe9',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1045085918%2F58205848934'
    },
    {
      id: '23693530311',
      titulo: 'Babador de Silicone Cata Migalhas Zoo Borboleta Skip Hop',
      preco: 99.9,
      nota: 5.0,
      curtidas: 24,
      loja: 'Büp Baby',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7reo4-m2jqauzsuc2d2a',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1240688238%2F23693530311'
    },
    {
      id: '58205849049',
      titulo: 'Babador de Silicone Buba Com Pega Migalhas Cloudy Elefante',
      preco: 28.9,
      precoDe: 32.66,
      nota: 4.97,
      curtidas: 52,
      loja: 'Droga Clara',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8261i-ml5fyefl9kaw96',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1045085918%2F58205849049'
    },
    {
      id: '20341099249',
      titulo: 'Bandana Babador Com Mordedor Algodão Espaço 15286 - Buba',
      preco: 29.99,
      precoDe: 34.07,
      nota: 4.81,
      curtidas: 322,
      loja: 'Mais Barato Brinquedos',
      img: 'https://cf.shopee.com.br/file/7b56b4f3bf9ef476fa67056d6db5e050',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F446413605%2F20341099249'
    }
  ],
  termometro: [
    {
      id: '5384108120',
      titulo: 'Termômetro Digital Branco Th1027 G-tech',
      preco: 28.99,
      nota: 4.9,
      curtidas: 1944,
      loja: 'Fabricante Online - Saúde e Beleza',
      img: 'https://cf.shopee.com.br/file/4a88a8434d1db5176a4921b2fb129736',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341217898%2F5384108120'
    },
    {
      id: '22716235231',
      titulo: 'Termômetro Clinico Digital Branco Multi Saúde - HC222',
      preco: 16.39,
      nota: 4.91,
      curtidas: 1843,
      loja: 'Multi Oficial',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m9iv5fbnobuqad',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F389315825%2F22716235231'
    },
    {
      id: '23993604897',
      titulo: 'Termômetro Digital Infravermelho Rápido Testa Relaxmedic',
      preco: 129.9,
      precoDe: 399.9,
      nota: 5.0,
      curtidas: 323,
      loja: 'Relaxmedic',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7ra18-m4q92q7tcwez77',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1050227476%2F23993604897'
    },
    {
      id: '23493879412',
      titulo: 'Termômetro Infravermelho Sem Contato Termo Check Smart - HC273',
      preco: 112.09,
      nota: 5.0,
      curtidas: 97,
      loja: 'Multi Oficial',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7renq-m8an9gg3exat01',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F389315825%2F23493879412'
    },
    {
      id: '22998193964',
      titulo: 'Termômetro Digital Infravermelho com Mira Laser -32 a + 390ºC Hulter HT5390F',
      preco: 87.9,
      nota: 4.8,
      curtidas: 22,
      loja: 'Dufrio',
      img: 'https://cf.shopee.com.br/file/sg-11134201-825zt-ml5ll0kruvwt2e',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1398462025%2F22998193964'
    }
  ],
  kit_higiene: [
    {
      id: '58206864371',
      titulo: 'Kit Higiene Jardim Encantado Borboleta 5 Peças Plasútil',
      preco: 61.9,
      nota: 4.95,
      curtidas: 208,
      loja: 'LOJA PLASÚTIL',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8261r-mlrux6r8v0g238',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F648928964%2F58206864371'
    },
    {
      id: '15471211727',
      titulo: 'Tesoura Pontas Arredondadas P/ Unha de Bebê Azul 5238 Buba',
      preco: 28.98,
      nota: 4.93,
      curtidas: 84,
      loja: 'Mais Barato Brinquedos',
      img: 'https://cf.shopee.com.br/file/sg-11134201-23010-vqur8n0fnwlv56',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F446413605%2F15471211727'
    }
  ],
  carrinho: [
    {
      id: '21399610412',
      titulo: 'Carrinho de Passeio com Bebê Conforto 2 em 1 Travel System Youturn Maxi Baby',
      preco: 1149.9,
      nota: 4.94,
      curtidas: 7693,
      loja: 'PlanetadoBebê',
      img: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mfmjmqgeyvwk09',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F21399610412'
    },
    {
      id: '23493928125',
      titulo: 'Carrinho e Bebê Conforto Rosa Rio 22 Mon Amour Burigotto (0 À 22Kg)',
      preco: 1249.0,
      precoDe: 1671.3,
      nota: 4.95,
      curtidas: 3272,
      loja: 'Mami Brinquedos',
      img: 'https://cf.shopee.com.br/file/br-11134207-820le-mpl8lrd975du2e',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1479622710%2F23493928125'
    },
    {
      id: '21399759049',
      titulo: 'Carrinho De Bebê EasyGo Com Cesto 3 Rodas Até 15kg KaBaby - Cinza',
      preco: 404.9,
      precoDe: 799.9,
      nota: 4.86,
      curtidas: 4005,
      loja: 'Kababy_Oficial',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7ratp-maoi7fobmij4a2',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009324389%2F21399759049'
    },
    {
      id: '19997868762',
      titulo: 'Carrinho Speed Travel System Triciclo / 3 rodas + Bebê Conforto ColorBaby',
      preco: 899.99,
      nota: 4.94,
      curtidas: 2996,
      loja: 'ColorBaby',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lh-mozot61rqd5161',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1352493725%2F19997868762'
    },
    {
      id: '22397132765',
      titulo: 'Bebê Conforto Luxo Selo Inmetro - Conforto e Segurança',
      preco: 464.8,
      precoDe: 595.9,
      nota: 4.97,
      curtidas: 1883,
      loja: 'club.baby',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rbk1-lo5wsh8fwuota4',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F976844888%2F22397132765'
    },
    {
      id: '23898388253',
      titulo: 'Carrinho Ivy Trio Black com Bebê Conforto e Base Galzerano',
      preco: 1999.0,
      precoDe: 2468.7,
      nota: 5.0,
      curtidas: 1151,
      loja: 'Mami Brinquedos',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rep3-m8osw8yw7v1ja7',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1479622710%2F23898388253'
    }
  ],
  canguru: [
    {
      id: '50508520396',
      titulo: 'Jogo Sling Puck Disco Rápido Estilingue Madeira Infantil Adulto Diversão Família Interativo Kizumba',
      preco: 58.9,
      precoDe: 84.9,
      nota: 5.0,
      curtidas: 20,
      loja: 'Abcompras',
      img: 'https://cf.shopee.com.br/file/sg-11134201-81zug-mmurmo557xtw14',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F281898655%2F50508520396'
    },
    {
      id: '17425531629',
      titulo: 'Canguru para Bebê 3 posições Até 9kgs Marinho - Lillo',
      preco: 219.0,
      precoDe: 239.0,
      nota: 4.96,
      curtidas: 337,
      loja: 'lillobr',
      img: 'https://cf.shopee.com.br/file/bbead4961097ce4ebb15415460f0cced',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F481992044%2F17425531629'
    },
    {
      id: '22693806936',
      titulo: 'Canguru Riley Grey KikkaBoo',
      preco: 339.9,
      precoDe: 369.9,
      nota: 4.8,
      curtidas: 36,
      loja: 'ABC Design & KikkaBoo',
      img: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mgzf0vrkmrd1e2',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1419417476%2F22693806936'
    }
  ],
  bolsa: [
    {
      id: '27189706203',
      titulo: 'Banheira Com Trocador Burigotto Splash+ Granito 20Kg Dobrável',
      preco: 489.9,
      precoDe: 692.55,
      nota: 4.98,
      curtidas: 5109,
      loja: 'Mami Brinquedos',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdwj-mdaftlv8yj4k30',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1479622710%2F27189706203'
    },
    {
      id: '23697601517',
      titulo: 'Bebê Reborn Menino Boneco Mayze Original Realista de Silicone Com Bolsa Maternidade/Sem bolsa - Variações.',
      preco: 79.98,
      precoDe: 179.9,
      nota: 4.77,
      curtidas: 11346,
      loja: 'Adora',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lx-mmge70paz28740',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F790605924%2F23697601517'
    },
    {
      id: '42862315545',
      titulo: 'Banheira Dobrável Burigotto Splash+ Rose Madder Com Trocador',
      preco: 489.99,
      precoDe: 613.6,
      nota: 4.98,
      curtidas: 2548,
      loja: 'Mami Brinquedos',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdx1-mdafthlt72v05f',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1479622710%2F42862315545'
    },
    {
      id: '21497516275',
      titulo: 'Banheira de Bebe Desmontavel com Trocador Kiddo Shower Grafite',
      preco: 437.0,
      precoDe: 517.0,
      nota: 4.95,
      curtidas: 1744,
      loja: 'Maçã Verde Baby',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lt-mqou9k3r3o5e89',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F364932311%2F21497516275'
    },
    {
      id: '44062491099',
      titulo: 'Gêmeos Bebê Reborn Boneca Realista Mayze Menina e Menino Silicone com Bolsa Maternidade.',
      preco: 159.98,
      precoDe: 249.9,
      nota: 4.85,
      curtidas: 2719,
      loja: 'Adora',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-mdc11irvqhoh17',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F790605924%2F44062491099'
    },
    {
      id: '15137883553',
      titulo: 'Mochila Maternidade Lequeen Original Trocador Gancho Usb',
      preco: 279.9,
      precoDe: 399.9,
      nota: 4.98,
      curtidas: 393,
      loja: 'Lequeen Oficial',
      img: 'https://cf.shopee.com.br/file/3aa90fbb3789aa7970f0e261eaa6de2f',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F345061139%2F15137883553'
    }
  ],
  organizador: [
    {
      id: '22793983315',
      titulo: 'Kit organizador de gavetas Ou 3 peças Linha Clear Preto',
      preco: 195.92,
      precoDe: 244.9,
      nota: 5.0,
      curtidas: 682,
      loja: '<OU>',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rfh9-m9t1sgm0nslt42',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1477305422%2F22793983315'
    },
    {
      id: '22898153417',
      titulo: 'Organizador de Gavetas, Meias, Calcinhas, Bijuterias c/ 15 Divisórias - Jacki Design',
      preco: 29.17,
      precoDe: 61.0,
      nota: 5.0,
      curtidas: 106,
      loja: 'Chic Charm',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rbki-m5d7uypukekqff',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F530578890%2F22898153417'
    },
    {
      id: '21697270686',
      titulo: 'Organizador de Gavetas para Sutiã TNT para 6 Peças Branco My Closet Ordene',
      preco: 42.9,
      precoDe: 59.9,
      nota: 5.0,
      curtidas: 60,
      loja: 'Lots Home Shop',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rfg0-m968uf303rrt81',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F816806234%2F21697270686'
    },
    {
      id: '23698480236',
      titulo: 'Kit de organizador de gavetas com 2 divisórias Ou 3 peças Linha Logic - Branco',
      preco: 79.19,
      precoDe: 98.99,
      nota: 5.0,
      curtidas: 20,
      loja: '<OU>',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rfh6-m9u9f2p85qakc9',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1477305422%2F23698480236'
    },
    {
      id: '18699308307',
      titulo: 'Organizador De Gaveta Porta Talher Arthi Extensível Divisor 33,5cm x 25,5cm Utensílios de Cozinha',
      preco: 49.9,
      precoDe: 69.9,
      nota: 4.83,
      curtidas: 347,
      loja: 'Âncora Shopp',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m08wf7ilfl9lf8',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F316557325%2F18699308307'
    },
    {
      id: '23694015070',
      titulo: 'Kit de organizador de gavetas Ou 4 peças Linha Logic - Natural',
      preco: 59.12,
      precoDe: 73.9,
      nota: 4.78,
      curtidas: 38,
      loja: '<OU>',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rfih-m9u9ezq4jvrjc9',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1477305422%2F23694015070'
    }
  ],
  almofada: [
    {
      id: '21899605684',
      titulo: 'Capa de Almofada de Amamentação Mescla - Loja Fom',
      preco: 239.0,
      nota: 5.0,
      curtidas: 27,
      loja: 'LOJA FOM',
      img: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mjzivnsetm9vd0',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1366041969%2F21899605684'
    }
  ],
  monitor: [
    {
      id: '49108334934',
      titulo: 'Babá Eletrônica com Tela HD de 3,5", Câmera, Áudio e Conversa Bidirecional, Visão Noturna',
      preco: 899.98,
      nota: 5.0,
      curtidas: 33,
      loja: 'simyke.br',
      img: 'https://cf.shopee.com.br/file/cn-11134207-820l4-mmqz44bg3r448a',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1717764435%2F49108334934'
    },
    {
      id: '49255012304',
      titulo: 'Babá Eletrônica com Monitor, Visão Noturna, Áudio Bidirecional, Modo VOX e Sensor de Temperatura',
      preco: 599.98,
      nota: 4.77,
      curtidas: 376,
      loja: 'simyke.br',
      img: 'https://cf.shopee.com.br/file/cn-11134207-820l4-mjqg90zjk8oxf3',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1717764435%2F49255012304'
    }
  ],
  luminaria: [
    {
      id: '21075431944',
      titulo: 'Umidificador Britânia 4,8L BUD04B Desligamento Automático',
      preco: 169.9,
      nota: 4.9,
      curtidas: 13359,
      loja: 'Britânia Oficial',
      img: 'https://cf.shopee.com.br/file/sg-11134201-823qv-mpcl3deao4r02c',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F811879342%2F21075431944'
    },
    {
      id: '7883953480',
      titulo: 'Essência Concentrada 100ml VIOLETA Para Aromatizador Difusor Umidificador Elétrico Hidrossolúvel A Melhor',
      preco: 28.9,
      precoDe: 29.9,
      nota: 5.0,
      curtidas: 29,
      loja: 'Editora Yumi',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-lnd0d0q4yjt8c8',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F313968882%2F7883953480'
    },
    {
      id: '3576493827',
      titulo: 'Essência Concentrada 100ml Talco Baby Para Aromatizador Difusor Umidificador Elétrico Hidrossolúvel A Melhor',
      preco: 28.9,
      precoDe: 29.9,
      nota: 4.62,
      curtidas: 54,
      loja: 'Editora Yumi',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-lnd0fmi1owr327',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F313968882%2F3576493827'
    }
  ]
}

export const listaEnxoval: ItemEnxoval[] = [
  {
    grupo: 'Roupa',
    nome: 'Body de manga curta',
    qtd: 6,
    chave: 'body',
    porque: 'Troca 3 a 4 vezes por dia. Seis é o mínimo para não lavar todo dia.',
    dica: 'Compre no P, não no RN. Metade dos bebês nasce com mais de 3,3 kg e nunca veste o RN.'
  },
  {
    grupo: 'Roupa',
    nome: 'Body de manga longa',
    qtd: 6,
    chave: 'body',
    porque: 'Mesma lógica do curto, para as noites e o ar-condicionado.',
    dica: 'P também. Se sobrar RN, use como pijama nas primeiras semanas.'
  },
  {
    grupo: 'Roupa',
    nome: 'Macacão ou mijão',
    qtd: 6,
    chave: 'macacao',
    porque: 'É o que vai por cima do body. Com pé embutido você elimina a meia.',
    dica: 'Prefira os de abrir na frente. Vestir pela cabeça um recém-nascido é briga.'
  },
  {
    grupo: 'Roupa',
    nome: 'Manta ou cueiro',
    qtd: 3,
    chave: 'mantas',
    porque: 'Serve para enrolar, cobrir no carrinho e forrar superfície suja.',
    dica: 'Uma leve, uma média. A terceira só se for região fria.'
  },
  {
    grupo: 'Roupa',
    nome: 'Meia',
    qtd: 6,
    porque: 'Só se o macacão não tiver pé. Compre no supermercado — não vale link.'
  },
  {
    grupo: 'Troca e higiene',
    nome: 'Fralda descartável',
    qtd: 1,
    chave: 'fralda_desc',
    porque: 'UM pacote de RN, não mais. Muitos bebês pulam direto para o P.',
    dica: 'Estoque de fralda RN é o desperdício número um do enxoval.'
  },
  {
    grupo: 'Troca e higiene',
    nome: 'Lenço umedecido',
    qtd: 4,
    chave: 'lenco',
    porque: 'Esse sim vale estoque — não vence e você usa até o desfralde.',
    dica: 'Sem álcool e sem perfume nas primeiras semanas.'
  },
  {
    grupo: 'Troca e higiene',
    nome: 'Fralda de pano',
    qtd: 6,
    chave: 'fralda_pano',
    porque: 'Não para fraldar: para o ombro na hora do arroto, forrar o trocador e secar respingo.',
    dica: 'As de boa qualidade duram anos como pano de prato depois.'
  },
  {
    grupo: 'Troca e higiene',
    nome: 'Pomada de assadura',
    qtd: 1,
    chave: 'pomada',
    porque: 'Uma bisnaga. Só abra a segunda quando a primeira acabar.'
  },
  {
    grupo: 'Troca e higiene',
    nome: 'Kit de higiene',
    qtd: 1,
    chave: 'kit_higiene',
    porque: 'Tesourinha de ponta redonda e escova. O resto do kit costuma encalhar.'
  },
  {
    grupo: 'Banho',
    nome: 'Toalha com capuz',
    qtd: 2,
    chave: 'toalha',
    porque: 'Duas bastam: uma na máquina, uma no armário.'
  },
  {
    grupo: 'Banho',
    nome: 'Sabonete e shampoo',
    qtd: 1,
    chave: 'banho',
    porque: 'Um produto só, neutro, que serve para corpo e cabeça.',
    dica: 'Nas primeiras semanas, água morna sozinha já limpa.'
  },
  {
    grupo: 'Banho',
    nome: 'Banheira',
    qtd: 1,
    chave: 'banheira',
    porque: 'Uma simples resolve. A com suporte e termômetro é conforto, não necessidade.'
  },
  {
    grupo: 'Sono',
    nome: 'Berço com colchão',
    qtd: 1,
    chave: 'berco',
    porque: 'O colchão importa mais que o berço: firme, sem desnível, do tamanho exato.',
    dica: 'Colchão mole é fator de risco de morte súbita. Aqui não economize.'
  },
  {
    grupo: 'Sono',
    nome: 'Lençol de berço',
    qtd: 3,
    porque: 'Três jogos. Não achei opção boa no catálogo — compre em loja física e apalpe o tecido.',
    dica: 'Com elástico em toda a volta. Lençol solto no berço é risco.'
  },
  {
    grupo: 'Alimentação',
    nome: 'Mamadeira',
    qtd: 2,
    chave: 'mamadeira',
    porque: 'DUAS, não doze. Você ainda não sabe se vai amamentar exclusivo.',
    dica: 'Compre o resto depois que souber como sua amamentação vai andar.'
  },
  {
    grupo: 'Alimentação',
    nome: 'Babador',
    qtd: 3,
    chave: 'babador',
    porque: 'De tecido, para golfada. Os de silicone só servem na introdução alimentar, aos 6 meses.'
  },
  {
    grupo: 'Alimentação',
    nome: 'Bomba de tirar leite',
    qtd: 1,
    chave: 'bomba',
    porque: 'Só compre se for voltar a trabalhar cedo ou tiver indicação. Não é item de partida.'
  },
  {
    grupo: 'Sair de casa',
    nome: 'Bebê conforto',
    qtd: 1,
    chave: 'carrinho',
    porque: 'Obrigatório por lei para sair da maternidade. Verifique a validade — ele expira.',
    dica: 'Nunca compre usado. Não dá para saber se já sofreu impacto.'
  },
  {
    grupo: 'Sair de casa',
    nome: 'Carrinho',
    qtd: 1,
    chave: 'carrinho',
    porque: 'O que importa é caber no porta-malas do SEU carro e você conseguir fechar com uma mão.',
    dica: 'Vá numa loja, abra e feche o modelo antes de comprar pela internet.'
  },
  {
    grupo: 'Sair de casa',
    nome: 'Bolsa maternidade',
    qtd: 1,
    chave: 'bolsa',
    porque: 'Uma mochila comum com trocador resolve e não dói nas costas.'
  },
  {
    grupo: 'Sair de casa',
    nome: 'Canguru ou sling',
    qtd: 1,
    chave: 'canguru',
    porque: 'Libera suas duas mãos e acalma o bebê. O modelo precisa apoiar a coxa toda, formando um M.',
    dica: 'Canguru que deixa a perna pendurada é ruim para o quadril.'
  }
]

export const naoCompre = [
  {
    item: 'Sapatinho',
    porque: 'Recém-nascido não anda e o pé não precisa de apoio. Sai sozinho o dia inteiro e você passa a viagem procurando um par.'
  },
  {
    item: 'Roupa tamanho RN em quantidade',
    porque: 'Dura de duas a quatro semanas, quando dura. Duas peças por garantia, o resto no P.'
  },
  {
    item: 'Kit com 12 mamadeiras',
    porque: 'Você não sabe ainda se vai amamentar exclusivo. Duas para começar. O resto depois.'
  },
  {
    item: 'Esterilizador elétrico',
    porque: 'Água fervendo por cinco minutos faz o mesmo. Ele ocupa bancada e vira enfeite.'
  },
  {
    item: 'Trocador caro',
    porque: 'Um colchonete em cima da cômoda que você já tem resolve. Ninguém troca fralda no trocador depois do terceiro mês — troca onde estiver.'
  },
  {
    item: 'Babá eletrônica com vídeo',
    porque: 'A recomendação é o bebê dormir no mesmo quarto que você no primeiro ano. Você vai ouvi-lo sem aparelho.'
  },
  {
    item: 'Almofada de amamentação cara',
    porque: 'Um travesseiro comum dobrado faz o mesmo trabalho. Se depois você sentir falta, compra.'
  },
  {
    item: 'Berço de luxo com dossel',
    porque: 'Dossel, protetor de berço e travesseiro são fator de risco de sufocamento. Berço de bebê seguro é berço vazio.'
  },
  {
    item: 'Kit de manicure de bebê',
    porque: 'Uma tesourinha de ponta redonda. O alicate e a lixa do kit você nunca vai usar.'
  },
  {
    item: 'Roupa de festa',
    porque: 'Ele vai vomitar nela na primeira hora. Deixe para quando ele sentar sozinho.'
  }
]

export const ordemCompra = [
  {
    fase: 1,
    quando: 'Agora, sem pressa de preço',
    itens: [
      'Bebê conforto',
      'Berço com colchão'
    ],
    nota: 'São os dois que você não pode improvisar na hora. Bebê conforto é exigência legal para sair da maternidade, e colchão firme é segurança do sono.'
  },
  {
    fase: 2,
    quando: 'Até o sétimo mês',
    itens: [
      'Body de manga curta',
      'Body de manga longa',
      'Macacão ou mijão',
      'Manta ou cueiro'
    ],
    nota: 'A roupa que vai para a mala da maternidade. Lave tudo antes com sabão de coco ou sabão neutro — tecido novo vem com resíduo de fábrica.'
  },
  {
    fase: 3,
    quando: 'Oitavo mês',
    itens: [
      'Fralda descartável',
      'Lenço umedecido',
      'Toalha com capuz',
      'Sabonete e shampoo',
      'Banheira'
    ],
    nota: 'Higiene e banho. Aqui é onde a maioria compra demais — resista ao estoque de fralda.'
  },
  {
    fase: 4,
    quando: 'Depois que ele nascer',
    itens: [
      'Mamadeira',
      'Bomba de tirar leite',
      'Carrinho'
    ],
    nota: 'Sim, depois. Mamadeira depende de como a amamentação vai andar, e carrinho você só usa de verdade quando começar a sair — e aí já sabe o que precisa.'
  }
]

export const climas = {
  quente: {
    rotulo: 'quente o ano inteiro',
    estados: [
      'AM',
      'PA',
      'RR',
      'AP',
      'AC',
      'RO',
      'TO',
      'MA',
      'PI',
      'CE',
      'RN',
      'PB',
      'PE',
      'AL',
      'SE',
      'BA',
      'MT'
    ],
    conselho: 'Aqui o erro caro é comprar enxoval de revista: plush, touca de lã, macacão forrado. Seu bebê vai passar o primeiro verão inteiro de body de manga curta e fralda. O que faz diferença é tecido — algodão fino, de preferência com etiqueta externa.',
    atencao: 'Ar-condicionado muda a conta. Se o quarto for refrigerado, tenha duas mantas leves de algodão — não de plush — só para o momento do sono. E umidificador não serve para nada aqui; o ar já é úmido.'
  },
  frio: {
    rotulo: 'inverno de verdade',
    estados: [
      'RS',
      'SC',
      'PR'
    ],
    conselho: 'Aqui a regra das camadas vale mais que peça cara: body de manga longa por baixo, macacão por cima, manta por fora. Três camadas finas aquecem mais que uma grossa e você tira uma por vez conforme o dia esquenta.',
    atencao: 'Casa com aquecedor resseca o ar e o bebê acorda com o nariz entupido. Umidificador aqui não é luxo. E cuidado com o excesso: bebê agasalhado demais transpira, a roupa molha e ele passa mais frio do que passaria com uma camada a menos.'
  },
  ameno: {
    rotulo: 'amplitude térmica alta',
    estados: [
      'SP',
      'MG',
      'RJ',
      'ES',
      'GO',
      'MS',
      'DF'
    ],
    conselho: 'O problema daqui não é frio nem calor — é a variação. Pode fazer 28 graus ao meio-dia e 15 à noite no mesmo dia. Por isso o enxoval precisa das duas pontas: manga curta e manga longa em quantidade parecida, e macacão leve para a virada da noite.',
    atencao: 'Não compre pensando na estação em que o bebê nasce. Ele vai passar por duas estações antes de trocar de tamanho, e a peça de meia estação é a que mais rende.'
  }
}

/**
 * Link avulso de afiliada, fora da curadoria do datafeed.
 * Incluido a pedido expresso da Rhaideline em 14/ago/2026.
 *
 * RESSALVA REGISTRADA: lenco de secadora nao e recomendado em roupa de
 * recem-nascido — a orientacao padrao e lavar com sabao neutro ou de coco e
 * evitar amaciante nas primeiras semanas. A propria lista deste arquivo diz
 * isso no item "Body de manga curta". Usar em conteudo de casa/lavanderia,
 * nao na pagina de enxoval de recem-nascido.
 */
export const linksAvulsos = [
  {
    id: 'lenco-secadora',
    titulo: 'Lenço de secadora',
    link: 'https://s.shopee.com.br/AUtDPbLchh',
    contexto: 'casa e lavanderia',
    observacao: 'Não indicar para roupa de recém-nascido.',
  },
]
