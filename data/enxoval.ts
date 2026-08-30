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
  berco: [
    {
      id: '51406272163',
      titulo: 'Berço Portátil Moises lateral de cama SleepGuard Cobed Bege Ragaluma com modo Balanço e Mosquiteiro',
      preco: 699.0,
      nota: 5.0,
      curtidas: 66,
      loja: 'Ragaluma',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lw-mrboyetvlv5wc7',
      link: 'https://s.shopee.com.br/9fKUQ7Zbjz'
    },
    {
      id: '22594033422',
      titulo: 'Ninho Redutor de Berço Recém Nascido Casulinho Menino e Menina Sensorial 100% Algodão',
      preco: 50.5,
      nota: 4.9,
      curtidas: 475,
      loja: 'Enxovais GRT',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-mbtlx7mn13kpe9',
      link: 'https://s.shopee.com.br/50YerXvym2'
    },
    {
      id: '18853852823',
      titulo: 'Troninho Penico Infantil Bebê Portátil Desfralde Menino e Menina Lorben',
      preco: 120.0,
      nota: 4.95,
      curtidas: 11633,
      loja: 'Lorben',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lr-mo76pxnj71tucb',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F386114683%2F18853852823'
    },
    {
      id: '22097180381',
      titulo: 'Carrinho Bebe Passeio Vira Berco Nivi até 15kg Reclinavel Capota Rodas Preto Cinza Maxi Baby',
      preco: 549.99,
      precoDe: 799.9,
      nota: 4.93,
      curtidas: 11933,
      loja: 'PlanetadoBebê',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lg-mls87813r0uf3c',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F22097180381'
    },
    {
      id: '22996876162',
      titulo: 'Berço Americano Marquesa 100% MDF Multifuncional 3 em 1',
      preco: 538.79,
      precoDe: 649.9,
      nota: 4.92,
      curtidas: 14406,
      loja: 'Faura',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rfha-m3wbwlrwip0nb6',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1012623059%2F22996876162'
    },
    {
      id: '23496144034',
      titulo: 'Quarto de Bebê Completo com Berço Americano Ben 3 Em 1 Cômoda Uli 4 Gavetas 100%MDF',
      preco: 949.91,
      precoDe: 1049.9,
      nota: 4.9,
      curtidas: 32146,
      loja: 'Faura',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdwo-lzi1v6clcmgn4c',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1012623059%2F23496144034'
    }
  ],
  body: [
    {
      id: '19997500480',
      titulo: 'Kit 8 Peças de Roupas para Bebê Menino (4 Body Longo + 4 Calça Mijão) Kit 4 Conjunto Body + Calça Roupa Infantil Bebê',
      preco: 74.9,
      precoDe: 150.0,
      nota: 4.85,
      curtidas: 9158,
      loja: 'Poloinfantil.store',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lx-mr4vn2n4fapx82',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F19997500480'
    },
    {
      id: '18598839019',
      titulo: 'Roupa Bebê Body Regata Amore 100% Algodão',
      preco: 19.99,
      precoDe: 29.9,
      nota: 4.84,
      curtidas: 13255,
      loja: 'Amore Online ✔',
      img: 'https://cf.shopee.com.br/file/br-11134207-820mc-ms1omlu17i1254',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F435692544%2F18598839019'
    },
    {
      id: '23293141751',
      titulo: 'Kit 8 Peças de Roupas para Bebê Menina (4 Body Longo + 4 Calça Mijão)Kit 4 Conjuntos Calça e Body Roupa Infantil Bebê',
      preco: 77.9,
      precoDe: 221.9,
      nota: 4.8,
      curtidas: 13759,
      loja: 'Poloinfantil.store',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lq-mlexlbiw1zwk48',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F23293141751'
    },
    {
      id: '55907579129',
      titulo: 'Conjunto Bebê Menina Jardineira Raposinha em Veludo Cotelê + Body Manga Longa Listrado Aurora',
      preco: 89.9,
      nota: 4.98,
      curtidas: 2101,
      loja: 'Nika baby',
      img: 'https://cf.shopee.com.br/file/br-11134207-820ll-mm6526rqbxfr9a',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F432637056%2F55907579129'
    },
    {
      id: '21397968729',
      titulo: 'Body Manga Curta Bebê Kiko Baby Timeless Em Suedine',
      preco: 39.9,
      nota: 4.95,
      curtidas: 2278,
      loja: 'Stikids',
      img: 'https://cf.shopee.com.br/file/sg-11134201-822zv-mi7amlwox53751',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1275097038%2F21397968729'
    },
    {
      id: '20699089835',
      titulo: 'Conjunto Roupa Kit 6 Peças Bebê Body Regata e Shorts Menina Menino Infantil',
      preco: 79.9,
      precoDe: 129.9,
      nota: 4.83,
      curtidas: 3174,
      loja: 'Amore Online ✔',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lo-ms2prdzadonb10',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F435692544%2F20699089835'
    }
  ],
  toalha: [
    {
      id: '18299200964',
      titulo: 'Toalha De Banho Infantil Estampadas Dohler Menino E Menina Felpuda 100% Algodão',
      preco: 39.9,
      precoDe: 57.9,
      nota: 4.83,
      curtidas: 2220,
      loja: 'MANIA DE ENXOVAL - A MELHOR',
      img: 'https://cf.shopee.com.br/file/br-11134207-81zu3-mknvphtl1af6f8',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F356841149%2F18299200964'
    },
    {
      id: '50810915151',
      titulo: 'Toalha Infantil Algodão Bebê Tigor T Tigre 75cm Com Capuz Azul Original - Pacific',
      preco: 119.99,
      nota: 5.0,
      curtidas: 177,
      loja: 'Monkey toys',
      img: 'https://cf.shopee.com.br/file/br-11134207-820mf-mojnewqwqbd28c',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F406894684%2F50810915151'
    },
    {
      id: '22493493727',
      titulo: 'Toalha Com Capuz Bordados Papi Felpuda Cavalinho',
      preco: 69.6,
      nota: 5.0,
      curtidas: 167,
      loja: 'Stikids',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rep7-m1okqfavq7q6ea',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1275097038%2F22493493727'
    },
    {
      id: '21499705640',
      titulo: 'Toalha De Banho Bebê Bublim Com Capuz Forrada 68cmX68cm Cinza',
      preco: 32.6,
      nota: 5.0,
      curtidas: 47,
      loja: 'Stikids',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rfid-m9g6nfj5b8yda6',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1275097038%2F21499705640'
    },
    {
      id: '22598547937',
      titulo: 'Toalha de Banho com Capuz Comfort Power Sec Girafa - Laço Bebê',
      preco: 149.9,
      nota: 5.0,
      curtidas: 27,
      loja: 'Tuttiamore',
      img: 'https://cf.shopee.com.br/file/br-11134201-820l5-mqxn72zvsemde8',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1334375141%2F22598547937'
    },
    {
      id: '22793398877',
      titulo: 'Toalha Forrada Papizinha Karinho Capuz Estampa Borboletas 70x70',
      preco: 37.4,
      nota: 4.97,
      curtidas: 81,
      loja: 'Stikids',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdwy-m0osctjyq6pm66',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1275097038%2F22793398877'
    }
  ],
  luminaria: [
    {
      id: '23396830796',
      titulo: 'Umidificador de Ar Infantil Ultrassônico Conforto para Bebês 300ml',
      preco: 76.69,
      precoDe: 98.76,
      nota: 5.0,
      curtidas: 55,
      loja: 'Deend',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98r-lm5470q8vppy1b',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F939446263%2F23396830796'
    }
  ],
  carrinho: [
    {
      id: '22793580977',
      titulo: 'Carrinho de Bebê Apolo 6 em 1 Premium Europeu com Moisés, Bebê Conforto e Base',
      preco: 1299.0,
      nota: 5.0,
      curtidas: 11,
      loja: 'Ragaluma',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m9s39iiv7w1udb',
      link: 'https://s.shopee.com.br/60RC3Nnlxt'
    },
    {
      id: '58253638211',
      titulo: 'Carrinho de Passeio Infantil com Alça Reversível (System) – Para Bebês até 15 Kg -P7',
      preco: 892.99,
      precoDe: 3000.0,
      nota: 4.99,
      curtidas: 6472,
      loja: 'KODI',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lo-mr6oqe258q9waf',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1386771889%2F58253638211'
    },
    {
      id: '22898541224',
      titulo: 'Carrinho De Bebê EasyGo Com Cesto 3 Rodas Passeio Até 15kgs - KaBaby',
      preco: 356.94,
      precoDe: 799.9,
      nota: 4.87,
      curtidas: 17265,
      loja: 'Kababy_Oficial',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdyu-mcku783el48n7e',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009324389%2F22898541224'
    },
    {
      id: '42961057367',
      titulo: 'Carrinho De Bebê Compact Reversível Dobrável 0-15kg INMETRO',
      preco: 551.31,
      precoDe: 799.0,
      nota: 4.92,
      curtidas: 4376,
      loja: 'Kids Baby Hercules',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdy9-mcuo95nk073af5',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F829520727%2F42961057367'
    },
    {
      id: '23297651677',
      titulo: 'Travel System Burigotto Carrinho de Bebê com Bebê Conforto Ecco + Touring X',
      preco: 1106.9,
      precoDe: 1301.9,
      nota: 5.0,
      curtidas: 620,
      loja: 'FIDComex',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdvj-lzfih05b0whgc3',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F554629856%2F23297651677'
    },
    {
      id: '23996175940',
      titulo: 'Carrinho de Passeio e Pedal para Bebe Calesita Moto Uno Azul',
      preco: 689.0,
      nota: 5.0,
      curtidas: 407,
      loja: 'Maçã Verde Baby',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7qvf4-listiq8yoefa95',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F364932311%2F23996175940'
    }
  ],
  babador: [
    {
      id: '58205848798',
      titulo: 'Babador Silicone Buba Impermeável Pega Migalhas Gumy Pêssego',
      preco: 24.79,
      precoDe: 30.4,
      nota: 5.0,
      curtidas: 105,
      loja: 'Droga Clara',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8260z-ml5fusqcvo5ffc',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1045085918%2F58205848798'
    },
    {
      id: '23993792193',
      titulo: 'Babador de Silicone TurmaTube Rosa | Coala com Pega Migalhas e Fecho Ajustável',
      preco: 29.94,
      precoDe: 49.9,
      nota: 5.0,
      curtidas: 79,
      loja: 'TurmaTube',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rd5b-m6zufaxvmh7e90',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1245828786%2F23993792193'
    },
    {
      id: '58205848639',
      titulo: 'Babador Silicone Buba Impermeável Pega Migalhas Gumy Rosa',
      preco: 30.4,
      nota: 4.96,
      curtidas: 411,
      loja: 'Droga Clara',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8260n-ml5uj41wr281f5',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1045085918%2F58205848639'
    },
    {
      id: '26926597767',
      titulo: 'Babador de Silicone para Bebê com Bolso Pega Migalhas Gumy - Buba',
      preco: 49.0,
      nota: 4.98,
      curtidas: 140,
      loja: 'DSD Multi Comercio',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rcc8-m65wbk9dtmjcf2',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F572649927%2F26926597767'
    },
    {
      id: '23893223157',
      titulo: 'Babador Descartável Absorvente Bolso Coletor 20UN Amarelo/Vermelho - Marcus & Marcus',
      preco: 64.9,
      nota: 4.88,
      curtidas: 121,
      loja: 'Tuttiamore',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rbla-m62qava3txogf8',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1334375141%2F23893223157'
    },
    {
      id: '23796954959',
      titulo: 'Babador Impermeável Bubazoo Leão Com Bolso Pega Migalhas 17073 Buba',
      preco: 21.99,
      precoDe: 24.98,
      nota: 4.88,
      curtidas: 71,
      loja: 'Mais Barato Brinquedos',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rbll-lm3dpgi1c315d8',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F446413605%2F23796954959'
    }
  ],
  kit_higiene: [
    {
      id: '23699371490',
      titulo: 'Kit Higiene Urso Caramelo Ursinho Bebê 5 Peças Plasútil',
      preco: 61.9,
      nota: 4.98,
      curtidas: 444,
      loja: 'LOJA PLASÚTIL',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8261u-mlfbxay4nmyte8',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F648928964%2F23699371490'
    },
    {
      id: '22496917881',
      titulo: 'Kit Higiene Bichinhos Petit Floresta Bebê 5 Peças Plasútil',
      preco: 61.9,
      nota: 4.93,
      curtidas: 819,
      loja: 'LOJA PLASÚTIL',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rbkn-llv3zvquum8503',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F648928964%2F22496917881'
    },
    {
      id: '58206864371',
      titulo: 'Kit Higiene Jardim Encantado Borboleta 5 Peças Plasútil',
      preco: 61.9,
      nota: 4.95,
      curtidas: 210,
      loja: 'LOJA PLASÚTIL',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8261r-mlrux6r8v0g238',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F648928964%2F58206864371'
    },
    {
      id: '22296688988',
      titulo: 'Kit Higiene Completo c/ 5 peças KaBaby Azul',
      preco: 49.9,
      precoDe: 119.9,
      nota: 4.69,
      curtidas: 154,
      loja: 'Kababy_Oficial',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rbkf-lnblx92sk39m62',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009324389%2F22296688988'
    }
  ],
  organizador: [
    {
      id: '28881614919',
      titulo: 'Cesto Organizador Infantil Retangular 25L - Jacki Design',
      preco: 47.3,
      precoDe: 62.9,
      nota: 4.89,
      curtidas: 784,
      loja: 'Chic Charm',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-mc98u5p5qrq882',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F530578890%2F28881614919'
    }
  ],
  fralda_desc: [
    {
      id: '20699319989',
      titulo: 'Kit 2 - Fralda Premium Huggies Natural Care RN 34 Un',
      preco: 94.9,
      precoDe: 99.9,
      nota: 4.96,
      curtidas: 15455,
      loja: 'Oficial Huggies',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rasy-max0u2z5jexu47',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1261893889%2F20699319989'
    },
    {
      id: '23093658879',
      titulo: 'Fralda Cremer Magic Care Tamanho G Pacote Hiper com 60 Fraldas Descartáveis',
      preco: 43.99,
      nota: 4.93,
      curtidas: 10516,
      loja: 'Drogaria Araujo',
      img: 'https://cf.shopee.com.br/file/sg-11134201-823pw-mpavq0gy88p8f7',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F23093658879'
    },
    {
      id: '23195807515',
      titulo: 'Fralda Descartável Babysec Galinha Pintadinha Ultrasec G Com 60 Unidades',
      preco: 79.9,
      precoDe: 87.74,
      nota: 4.93,
      curtidas: 13203,
      loja: 'Lojas REDE',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8258p-ms1nkexhwrgh99',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F683941545%2F23195807515'
    },
    {
      id: '23495807435',
      titulo: 'Fralda Descartável Babysec Galinha Pintadinha Ultrasec XG Com 56 Unidades',
      preco: 79.9,
      precoDe: 87.74,
      nota: 4.93,
      curtidas: 5867,
      loja: 'Lojas REDE',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8259m-msd3867anpqaf9',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F683941545%2F23495807435'
    },
    {
      id: '22592462303',
      titulo: 'Fralda Turma da Mônica Baby Mega P com 62un',
      preco: 67.29,
      nota: 4.92,
      curtidas: 6552,
      loja: 'Loja Sage\'s',
      img: 'https://cf.shopee.com.br/file/sg-11134201-820mt-mnwy9rel8b9e76',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F528273775%2F22592462303'
    },
    {
      id: '20998823217',
      titulo: 'Fralda Descartável Babysec Galinha Pintadinha Premium Mega P - 34 Unidades',
      preco: 42.99,
      precoDe: 49.94,
      nota: 4.92,
      curtidas: 5622,
      loja: 'Lojas REDE',
      img: 'https://cf.shopee.com.br/file/sg-11134201-82583-mscv4tjupjbb71',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F683941545%2F20998823217'
    }
  ],
  mamadeira: [
    {
      id: '21926692567',
      titulo: 'Chupeta 100% Silicone Soft Calming 0m+ Neutra - Lillo',
      preco: 26.9,
      nota: 4.97,
      curtidas: 5334,
      loja: 'lillobr',
      img: 'https://cf.shopee.com.br/file/a6986c1c6cb51abc265aab707db872d1',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F481992044%2F21926692567'
    },
    {
      id: '18403582910',
      titulo: 'Kit 2 Mamadeiras Easy Active 270/330ml 2m+ Azul - MAM',
      preco: 128.0,
      nota: 4.96,
      curtidas: 4856,
      loja: 'PlanetadoBebê',
      img: 'https://cf.shopee.com.br/file/ae35a2f753a014556c9767120bcde2a1',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F18403582910'
    },
    {
      id: '20398661176',
      titulo: 'Kit de Mamadeira Primeiros Passos 50/150/240ml Azul - Lillo',
      preco: 62.9,
      nota: 4.93,
      curtidas: 5603,
      loja: 'lillobr',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7qvfv-lid5obxzfozt2a',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F481992044%2F20398661176'
    },
    {
      id: '13354974456',
      titulo: 'Kit 2 Escovas Para Mamadeira e Bico Com Esponja Rosa 5415 Buba',
      preco: 21.51,
      nota: 4.92,
      curtidas: 5946,
      loja: 'Mais Barato Brinquedos',
      img: 'https://cf.shopee.com.br/file/br-11134201-820ly-mqx980g7acclfc',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F446413605%2F13354974456'
    },
    {
      id: '23391978867',
      titulo: 'Mamadeira Super Evolution com Bico em Látex 300ml 0m+ Lillo',
      preco: 44.9,
      nota: 4.91,
      curtidas: 3134,
      loja: 'PlanetadoBebê',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7qvfb-ljyklpmf7yvqef',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F23391978867'
    },
    {
      id: '13585885863',
      titulo: 'Escova Para Mamadeira Com Limpador De Bico Azul 12728 - Buba',
      preco: 31.59,
      nota: 4.93,
      curtidas: 2527,
      loja: 'Mais Barato Brinquedos',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rccg-lsvezoymh1m162',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F446413605%2F13585885863'
    }
  ],
  canguru: [
    {
      id: '14536888592',
      titulo: 'Bolsa Canguru Ergonômico Bebê Mamãe Conforto Original',
      preco: 299.9,
      precoDe: 399.9,
      nota: 4.94,
      curtidas: 906,
      loja: 'Lequeen Oficial',
      img: 'https://cf.shopee.com.br/file/9490189a3438bf7d649d8c3822474fe0',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F345061139%2F14536888592'
    },
    {
      id: '23294288041',
      titulo: 'Canguru Ergonômico P/ Bebê Comfort 3 Posições 15kg Cinza Nuk',
      preco: 459.9,
      nota: 5.0,
      curtidas: 140,
      loja: 'Planeta_Max',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdy5-md0swados3cpaa',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F624228750%2F23294288041'
    },
    {
      id: '23398469373',
      titulo: 'Canguru Ergonômico Bebê 6x1 Cinza Importway 3 A 24 Meses',
      preco: 64.9,
      precoDe: 207.81,
      nota: 5.0,
      curtidas: 40,
      loja: 'Auto Equip Sc 2',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rfgf-m9kk9lwcaec588',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1229255557%2F23398469373'
    }
  ],
  bolsa: [
    {
      id: '10603364542',
      titulo: 'Bolsa Mochila Maternidade Gancho Funcional Madami',
      preco: 189.9,
      precoDe: 219.9,
      nota: 4.96,
      curtidas: 2689,
      loja: 'Style Brand Oficial',
      img: 'https://cf.shopee.com.br/file/5c824b6293a78e6e7fc77907b1ab3823',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F441209003%2F10603364542'
    },
    {
      id: '22697785225',
      titulo: 'Kit Trocador 3 Peças Bebê Enxoval Lenço Fralda Caixa Plasútil',
      preco: 94.9,
      nota: 4.97,
      curtidas: 2440,
      loja: 'LOJA PLASÚTIL',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7req7-m2ijw4f1x1iwa2',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F648928964%2F22697785225'
    },
    {
      id: '8410881852',
      titulo: 'Bolsa Mochila Saída Maternidade Mãe E Bebê Lequeen Multifuncional',
      preco: 229.9,
      precoDe: 299.9,
      nota: 4.94,
      curtidas: 2564,
      loja: 'Lequeen Oficial',
      img: 'https://cf.shopee.com.br/file/br-11134207-820ls-msdr5vala4uf86',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F345061139%2F8410881852'
    },
    {
      id: '6177276356',
      titulo: 'Mochila Bolsa Maternidade Lequeen Bolso Térmico',
      preco: 279.8,
      precoDe: 399.9,
      nota: 4.93,
      curtidas: 1401,
      loja: 'Lequeen Oficial',
      img: 'https://cf.shopee.com.br/file/dbc0983b01a5a1ed90e0af48d89446e5',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F345061139%2F6177276356'
    },
    {
      id: '4677230844',
      titulo: 'Mochila Bolsa Maternidade Lequeen Bebê Bolso Térmico',
      preco: 189.89,
      precoDe: 189.9,
      nota: 4.94,
      curtidas: 1133,
      loja: 'Lequeen Oficial',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lr-mrfjhooj2pdy78',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F345061139%2F4677230844'
    },
    {
      id: '10282707911',
      titulo: 'Mochila Saída Maternidade Lequeen Bolsa Mãe e Bebê',
      preco: 249.9,
      precoDe: 299.9,
      nota: 4.98,
      curtidas: 437,
      loja: 'Lequeen Oficial',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lw-msdtobiwq87a4d',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F345061139%2F10282707911'
    }
  ],
  banho: [
    {
      id: '23494304334',
      titulo: 'Kit Shampoo , Condicionador e Creme de Pentear infantil Cachinhos Gota Dourada',
      preco: 36.0,
      precoDe: 45.0,
      nota: 4.94,
      curtidas: 4734,
      loja: 'Gota Dourada Cosméticos',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-md7u9zvoly5udd',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1382606196%2F23494304334'
    },
    {
      id: '23094801639',
      titulo: 'Kit Morango com Shampoo + Condicionador e Creme de Pentear Kids',
      preco: 58.8,
      precoDe: 73.5,
      nota: 4.86,
      curtidas: 4107,
      loja: 'Salon Line',
      img: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mjzv8ko2l98j88',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F616222685%2F23094801639'
    },
    {
      id: '20399662060',
      titulo: 'Kit Shampoo e Condicionador Melancia Meu Liso Kids',
      preco: 28.32,
      precoDe: 32.55,
      nota: 4.91,
      curtidas: 3405,
      loja: 'Salon Line',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rd5e-m718c03qm53o90',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F616222685%2F20399662060'
    },
    {
      id: '20398994602',
      titulo: 'Sabonete Líquido Infantil Dove Baby Hidratação Glicerina 400ml',
      preco: 29.89,
      precoDe: 33.58,
      nota: 4.94,
      curtidas: 2860,
      loja: 'Perfumaria Sumirê',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rblf-lmhgvy87zys08c',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1010974641%2F20398994602'
    },
    {
      id: '20498088790',
      titulo: 'Kit Shampoo e Condicionador Morango Meu Liso Kids',
      preco: 28.32,
      precoDe: 32.55,
      nota: 4.9,
      curtidas: 3039,
      loja: 'Salon Line',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rd50-m718dkvjhtsx04',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F616222685%2F20498088790'
    },
    {
      id: '20898688820',
      titulo: 'Shampoo Mousse Recém-Nascido Mustela Bebê com 150ml',
      preco: 67.89,
      nota: 4.93,
      curtidas: 2301,
      loja: 'Drogaria Araujo',
      img: 'https://cf.shopee.com.br/file/sg-11134201-8258w-msgndv8xntvt57',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F20898688820'
    }
  ],
  lenco: [
    {
      id: '23296759926',
      titulo: 'Lenços Umedecidos Pampers Carícia de Bebê 576 unidades',
      preco: 134.28,
      precoDe: 140.19,
      nota: 4.98,
      curtidas: 23198,
      loja: 'Pampers By Sage\'s',
      img: 'https://cf.shopee.com.br/file/5b4a2c4487753a6da0ae4e835b39afed',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1062557396%2F23296759926'
    },
    {
      id: '21152780405',
      titulo: 'Kit com 3 Lenços Umedecidos Johnson\'s Baby Recém-Nascido 96un cada',
      preco: 130.09,
      nota: 4.95,
      curtidas: 2711,
      loja: 'Kenvue by Sage´s',
      img: 'https://cf.shopee.com.br/file/b0b80e494a6d1d3fb2330e7e3696bcf6',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F818390117%2F21152780405'
    },
    {
      id: '19297402091',
      titulo: 'Lenços Umedecidos Pampers Cuidado de Bebê 192un',
      preco: 53.92,
      nota: 4.95,
      curtidas: 2550,
      loja: 'Pampers By Sage\'s',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rbk0-llxkbq7pbuar24',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1062557396%2F19297402091'
    },
    {
      id: '22593710223',
      titulo: 'Lenço Umedecido Infantil Huggies Recém-Nascido Leve 4 Pague 3 Pacotes Com 48 Unidades',
      preco: 57.29,
      precoDe: 82.79,
      nota: 4.95,
      curtidas: 1932,
      loja: 'ZANUP',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m6mr0h5yu0xc01',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F560644869%2F22593710223'
    },
    {
      id: '23898072729',
      titulo: 'Kit 2 Lenços Umedecidos Huggies Recém-Nascido Sem Fragrância 4x48U',
      preco: 145.18,
      nota: 4.98,
      curtidas: 770,
      loja: 'Drogaria Araujo',
      img: 'https://cf.shopee.com.br/file/sg-11134201-825aw-mqsfur0mgv7x5d',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F23898072729'
    },
    {
      id: '10965773379',
      titulo: 'Lenços Umedecidos Pampers Cheirinho de Bebê com 48 un',
      preco: 18.19,
      precoDe: 19.19,
      nota: 4.97,
      curtidas: 832,
      loja: 'P&G Brasil Loja Oficial By Sage’s',
      img: 'https://cf.shopee.com.br/file/1156741792d730688598dc57539c0bff',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F353664457%2F10965773379'
    }
  ],
  macacao: [
    {
      id: '18299206698',
      titulo: 'Macacão bebê menina com vestido em tule lilás Manuela',
      preco: 78.9,
      precoDe: 99.9,
      nota: 4.95,
      curtidas: 7896,
      loja: 'Nika baby',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-ls4z6kgrgwlpb4',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F432637056%2F18299206698'
    },
    {
      id: '28034594938',
      titulo: 'Macacão para bebê tricô de luxo Isabela',
      preco: 78.9,
      precoDe: 99.0,
      nota: 4.95,
      curtidas: 11079,
      loja: 'Nika baby',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m8x7rd369id5d1',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F432637056%2F28034594938'
    },
    {
      id: '11464423840',
      titulo: 'kit com dois macacões bebê menino Kauã',
      preco: 59.9,
      precoDe: 99.9,
      nota: 4.95,
      curtidas: 6523,
      loja: 'Nika baby',
      img: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mkcha83ayubn23',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F432637056%2F11464423840'
    },
    {
      id: '18396952680',
      titulo: 'Macacão bebê com vestido/usa separado Manuela',
      preco: 78.9,
      precoDe: 99.0,
      nota: 4.93,
      curtidas: 11094,
      loja: 'Nika baby',
      img: 'https://cf.shopee.com.br/file/br-11134211-7qukw-lix4vtcc8pz346',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F432637056%2F18396952680'
    },
    {
      id: '18499206688',
      titulo: 'Macacão bebê menina com vestido tule rosa bebê Manuela',
      preco: 78.9,
      precoDe: 99.9,
      nota: 4.93,
      curtidas: 25729,
      loja: 'Nika baby',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-ls4zfjosgzl0e1',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F432637056%2F18499206688'
    },
    {
      id: '22693906534',
      titulo: 'Pijama Macacão Bebê Menina em Fleece Temático Unicórnio ,Dinossauro, Panda, Urso – Super Quentinho e Confortável! L11',
      preco: 159.9,
      precoDe: 220.0,
      nota: 4.93,
      curtidas: 9396,
      loja: 'Poloinfantil.store',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lq-mmiw5sn9udc0ba',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F22693906534'
    }
  ],
  banheira: [
    {
      id: '22194163545',
      titulo: 'Banheira Dobrável Deend Serenity Baby Silicone',
      preco: 192.57,
      precoDe: 257.86,
      nota: 4.95,
      curtidas: 13824,
      loja: 'Deend',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rd5z-m7s9ehnv0awt96',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F939446263%2F22194163545'
    },
    {
      id: '19261320401',
      titulo: 'Banheira Luxo Com Suporte Dobrável, Trocador e Saboneteira, 25l, até 30kg - Baby Hércules',
      preco: 279.99,
      nota: 4.92,
      curtidas: 38369,
      loja: 'Kids Baby Hercules',
      img: 'https://cf.shopee.com.br/file/sg-11134201-22110-5wjjneh81ojv6a',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F829520727%2F19261320401'
    },
    {
      id: '11197900696',
      titulo: 'Banheira com trocador suporte dobrável tanque 25L até 30Kg Tanque rígido com mangueira para escoamento de água Hercules',
      preco: 219.44,
      precoDe: 265.99,
      nota: 4.92,
      curtidas: 6007,
      loja: 'Kids Baby Hercules',
      img: 'https://cf.shopee.com.br/file/06a210e52e22591d8edfd517cee2dbcd',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F829520727%2F11197900696'
    },
    {
      id: '22097800250',
      titulo: 'Banheira Azul ou Rosa para bebe com termômetro digital + almofada + chuveirinho de mão Dobrável',
      preco: 156.9,
      precoDe: 360.0,
      nota: 4.97,
      curtidas: 4426,
      loja: 'Pluggei Select',
      img: 'https://cf.shopee.com.br/file/br-11134207-820m6-mnde0marwnwif8',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1095160737%2F22097800250'
    },
    {
      id: '23796882806',
      titulo: 'Super Banheira Infantil Dobrável 35L Antiderrapante KaBaby - Azul',
      preco: 127.94,
      precoDe: 299.9,
      nota: 4.95,
      curtidas: 4573,
      loja: 'Kababy_Oficial',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rd4g-lvsywxkhhgu308',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009324389%2F23796882806'
    },
    {
      id: '18544286912',
      titulo: 'Banheira com suporte dobrável, tanque 25 L, até 30Kg - Hercules',
      preco: 154.99,
      nota: 4.88,
      curtidas: 13166,
      loja: 'Kids Baby Hercules',
      img: 'https://cf.shopee.com.br/file/dc190d9c290c5755f89b6db81b4d4ad3',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F829520727%2F18544286912'
    }
  ],
  esterilizador: [
    {
      id: '23498399106',
      titulo: 'Esterilizador Para Micro-ondas Redondo com 3 peças Plasutil',
      preco: 45.9,
      nota: 5.0,
      curtidas: 71,
      loja: 'LOJA PLASÚTIL',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rep3-m8kwz28xh7eo66',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F648928964%2F23498399106'
    }
  ],
  pomada: [
    {
      id: '18198945453',
      titulo: 'Kit 6 Pomadas Para Prevenção De Assaduras Babymed Azul 45g',
      preco: 46.99,
      precoDe: 55.49,
      nota: 4.93,
      curtidas: 13878,
      loja: 'Droga Clara',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rbnj-llco6cwbljtn32',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1045085918%2F18198945453'
    },
    {
      id: '20398809856',
      titulo: 'Bepantol Baby 30g Com 15% De Desconto',
      preco: 40.67,
      nota: 4.92,
      curtidas: 14258,
      loja: 'Droga Clara',
      img: 'https://cf.shopee.com.br/file/br-11134207-7qukw-lk5vncjzk46e05',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1045085918%2F20398809856'
    },
    {
      id: '22197925897',
      titulo: 'Kit 2 Pomadas Para Prevenção De Assaduras Babymed Azul 45g',
      preco: 16.99,
      precoDe: 23.15,
      nota: 4.91,
      curtidas: 8572,
      loja: 'Droga Clara',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdxe-m0ykrqwomium14',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1045085918%2F22197925897'
    },
    {
      id: '22997084240',
      titulo: 'Hipoglos Pomada Contra Assaduras 120g',
      preco: 61.99,
      nota: 5.0,
      curtidas: 229,
      loja: 'Drogaria Araujo',
      img: 'https://cf.shopee.com.br/file/sg-11134201-823pr-mopq2uqppo8w24',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F22997084240'
    },
    {
      id: '22896167987',
      titulo: 'Loção Corporal Bepantol Derma Hidratante Restaurador Pele Seca 400ml',
      preco: 120.88,
      nota: 4.97,
      curtidas: 428,
      loja: 'Drogaria Araujo',
      img: 'https://cf.shopee.com.br/file/sg-11134201-825ar-msf8bba64r2a4f',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F22896167987'
    },
    {
      id: '23698316171',
      titulo: 'Loção Corporal Bepantol Derma Hidratante Restaurador 400ml',
      preco: 148.05,
      nota: 5.0,
      curtidas: 105,
      loja: 'Drogal',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m7s7kl7ba9p04d',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1467864110%2F23698316171'
    }
  ],
  monitor: [
    {
      id: '28717823824',
      titulo: 'Babá Eletrônica Branca com Monitor Visão Noturna e Audio Sensor de Temperatura',
      preco: 309.99,
      precoDe: 688.0,
      nota: 4.91,
      curtidas: 5848,
      loja: 'JORTAN',
      img: 'https://cf.shopee.com.br/file/sg-11134201-824gg-melt5obcrlz51e',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1363055219%2F28717823824'
    },
    {
      id: '22998700209',
      titulo: 'Babá Eletrônica HelloBaby HB32, Monitor de Bebê 3.2", Visão Noturna e Áudio Bidirecional',
      preco: 466.99,
      nota: 5.0,
      curtidas: 106,
      loja: 'Beelink_BR',
      img: 'https://cf.shopee.com.br/file/br-11134275-7r98o-mbsi45opzyxzba',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1163157664%2F22998700209'
    },
    {
      id: '22997829557',
      titulo: 'Babá Eletrônica Branca Sem Fio Digital Com Visão Noturna',
      preco: 249.99,
      precoDe: 699.99,
      nota: 4.93,
      curtidas: 348,
      loja: 'JORTAN',
      img: 'https://cf.shopee.com.br/file/sg-11134201-824hx-melt6dlcc7bbfa',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1363055219%2F22997829557'
    },
    {
      id: '49255012304',
      titulo: 'Babá Eletrônica com Monitor, Visão Noturna, Áudio Bidirecional, Modo VOX e Sensor de Temperatura',
      preco: 599.98,
      nota: 4.77,
      curtidas: 399,
      loja: 'simyke.br',
      img: 'https://cf.shopee.com.br/file/cn-11134207-820l4-mjqg90zjk8oxf3',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1717764435%2F49255012304'
    }
  ],
  termometro: [
    {
      id: '20599090478',
      titulo: 'Kit 2 Seringas Lavador Aspirador Nasal Infantil Bico Silicone Livre de BPA',
      preco: 19.51,
      nota: 4.9,
      curtidas: 697,
      loja: 'VENDAS.VTO',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-lsirz2r4bpkra4',
      link: 'https://s.shopee.com.br/4AzXs13LTY'
    },
    {
      id: '58204417297',
      titulo: 'Aspirador Nasal Infantil 9 Níveis Sucção Ajustável Com Música Recarregável Silicone Alimentício Seguro Silencioso 5V/1A',
      preco: 48.97,
      nota: 4.8,
      curtidas: 2517,
      loja: 'Quali BR',
      img: 'https://cf.shopee.com.br/file/sg-11134201-82629-mk568mmb3o5c7c',
      link: 'https://s.shopee.com.br/2BETULFdLh'
    },
    {
      id: '22298737284',
      titulo: 'Termômetro Clínico Digital Flexível Dellamed',
      preco: 21.89,
      precoDe: 32.99,
      nota: 5.0,
      curtidas: 63,
      loja: 'Dellamed',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdwo-mc8a1vldxzogc5',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1557525936%2F22298737284'
    },
    {
      id: '20699703254',
      titulo: 'Termômetro Clínico Haste Flexível Dellamed',
      preco: 18.9,
      precoDe: 21.9,
      nota: 4.93,
      curtidas: 672,
      loja: 'Cirúrgica Nova Era',
      img: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m90krnjrq91576',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1295597776%2F20699703254'
    },
    {
      id: '23898948595',
      titulo: 'Buba Termômetro de Banho Girafinha',
      preco: 39.99,
      nota: 4.95,
      curtidas: 51,
      loja: 'AQtudo',
      img: 'https://cf.shopee.com.br/file/sg-11134201-824h8-mffd97t98kr212',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F539054153%2F23898948595'
    },
    {
      id: '40130044447',
      titulo: 'Termômetro Clinico Digital Branco Multi Saúde - HC148',
      preco: 19.0,
      precoDe: 21.38,
      nota: 4.89,
      curtidas: 39,
      loja: 'Multi Oficial',
      img: 'https://cf.shopee.com.br/file/sg-11134201-81zvm-mn1qqlmgl5oif6',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F389315825%2F40130044447'
    }
  ],
  mantas: [
    {
      id: '45005226257',
      titulo: 'Kit 02 Mantinhas Cobertor Bebê Macia Quentinha Menor Preço',
      preco: 31.99,
      nota: 4.9,
      curtidas: 3005,
      loja: 'Longhini Enxovais',
      img: 'https://cf.shopee.com.br/file/br-11134207-820lw-mqcdhhgampdu9c',
      link: 'https://s.shopee.com.br/6fgsqbu2AC'
    },
    {
      id: '20299447357',
      titulo: 'Kit Cueiro Baby Gijo Rolinho Bordado Borboleta - 03 Peças',
      preco: 79.3,
      nota: 4.99,
      curtidas: 2113,
      loja: 'Stikids',
      img: 'https://cf.shopee.com.br/file/br-11134201-820lv-mqxfyp3ow7wkda',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1275097038%2F20299447357'
    },
    {
      id: '23394663470',
      titulo: 'Cueiro Dengo Estampa Leão 03 Peças 80cm x 50cm',
      preco: 32.9,
      nota: 5.0,
      curtidas: 86,
      loja: 'Stikids',
      img: 'https://cf.shopee.com.br/file/sg-11134201-821g2-mgs4wv9qjl6za4',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1275097038%2F23394663470'
    },
    {
      id: '23297358873',
      titulo: 'Manta com Naninha Cobertor Bebê Personagens Elegante',
      preco: 119.99,
      nota: 5.0,
      curtidas: 46,
      loja: 'Cia das Malas',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rcch-ls76pl8msrlj16',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F443783188%2F23297358873'
    },
    {
      id: '22393346845',
      titulo: 'Manta Infantil Rozac Baby Confort Neon Brilha No Escuro',
      preco: 39.84,
      precoDe: 49.8,
      nota: 5.0,
      curtidas: 30,
      loja: 'Stikids',
      img: 'https://cf.shopee.com.br/file/sg-11134201-7rdvc-m0kbuglm7bu8ce',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1275097038%2F22393346845'
    },
    {
      id: '22998924253',
      titulo: 'Kit Cueiro Bebê Papi Soft Estampa Dinossauro 3 Peças 80cm x 80cm',
      preco: 67.9,
      nota: 5.0,
      curtidas: 30,
      loja: 'Stikids',
      img: 'https://cf.shopee.com.br/file/sg-11134201-82595-meydmv16qwas15',
      link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1275097038%2F22998924253'
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
