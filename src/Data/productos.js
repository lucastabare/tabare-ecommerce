const products = [
  {
    id: 1,
    name: "Fernet Branca",
    stock: 50,
    description: "Fernet Branca 750ml",
    image: [
      "https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/f/e/fernet_750_1.jpg",
    ],
    price: 900,
    categoryId: 1,
  },
  {
    id: 2,
    name: "Cerveza Amstel",
    stock: 100,
    description: "Cerveza Amstel en lata 473cm3",
    image: [
      "https://ardiaprod.vteximg.com.br/arquivos/ids/201912-500-500/Cerveza-Amstel-Lager-Suave-lata-473-Ml-_1.jpg?v=637559912073200000",
    ],
    price: 250,
    categoryId: 1,
  },
  {
    id: 3,
    name: "Cervezal Iguana",
    stock: 300,
    description: "Cerveza Iguana botella retornable 900ml",
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAi7JaBgDIQfUOkFjJtCuUlFMFn67JGPSS3w&usqp=CAU",
    ],
    price: 200,
    categoryId: 1,
  },
  {
    id: 4,
    name: "Fanta Naranja",
    stock: 50,
    description: "Fanta Naranja 1.75L",
    image: [
      "https://jumboargentina.vtexassets.com/arquivos/ids/666408/Gaseosa-Fanta-Naranja-1-75-Lt-1-766720.jpg?v=637674142012600000",
    ],
    price: 250,
    categoryId: 4,
  },
  {
    id: 5,
    name: "Gin Beefeater",
    stock: 20,
    description: "Beefeater DRY Gin London ",
    image: [
      "https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/g/i/gin-beefeater-london-dry-gin-750ml_1.jpg",
    ],
    price: 2200,
    categoryId: 1,
  },
  {
    id: 6,
    name: "Gordon's",
    stock: 15,
    description: "Gin Gordon's 700ml",
    image: [
      "https://carrefourar.vtexassets.com/arquivos/ids/176635/7791250002267_01.jpg?v=637468573919330000",
    ],
    price: 1385,
    categoryId: 1,
  },
  {
    id: 7,
    name: "Coca Cola",
    stock: 50,
    description: "Coca Cola sabor original retornable",
    image: [
      "https://jumboargentina.vtexassets.com/arquivos/ids/666394-800-600?v=637674141780970000&width=800&height=600&aspect=true",
    ],
    price: 200,
    categoryId: 4,
  },
  {
    id: 8,
    name: "Coca Cola",
    stock: 50,
    description: "Coca Cola sin azucares 3L",
    image: [
      "https://jumboargentina.vtexassets.com/arquivos/ids/666402-800-600?v=637674141915100000&width=800&height=600&aspect=true",
    ],
    price: 350,
    categoryId: 4,
  },
  //VINOS

  //MALBEC
  {
    name: "Trapiche",
    stock: 50,
    description: "Fond De Cave Gran Reserva Malbec Trapiche",
    image: [
      "https://www.vinosyspirits.com/media/catalog/product/cache/f49669d1bf2df0010137a9ec5423343e/f/d/fdc_gran_reserva_malbec_sku_74248.jpg",
    ],
    price: 1780,
    categoryProduct: "vinos",
    categoryName: "malbec,",
  },
  {
    name: "Bianchi",
    stock: 50,
    description: "Famiglia Bianchi Malbec",
    image: [
      "https://cdn.shopify.com/s/files/1/0005/4634/0925/products/FAMIGLIA-MALBEC-2021_2048x2048.jpg?v=1649452041",
    ],
    price: 1230,
    categoryProduct: "vinos",
    categoryName: "malbec,",
  },

  {
    name: "Alma Mora",
    stock: 50,
    description: "Vino Tinto Alma Mora Malbec",
    image: [
      "https://ardiaprod.vteximg.com.br/arquivos/ids/185125-500-500/Vino-Tinto-Alma-Mora-Malbec-750-ml-_1.jpg?v=637427558890000000",
    ],
    price: 1000,
    categoryProduct: "vinos",
    categoryName: "malbec,",
  },

  //CABERNET

  {
    name: "Chacabuco",
    stock: 50,
    description: "Vino Tinto Chacabuco Cabernet Sauvignon",
    image: [
      "https://jumboargentina.vtexassets.com/arquivos/ids/624747/Vino-Chacabuco-Cabernet-Botella-550-Ml-1-37304.jpg?v=637510296794330000",
    ],
    price: 1300,
    categoryProduct: "vinos",
    categoryName: "cabernet,",
  },

  {
    name: "Septima",
    stock: 50,
    description: "Vino Tinto Septima Obra Cabernet Sauvignon",
    image: [
      "http://d3ugyf2ht6aenh.cloudfront.net/stores/131/273/products/septima-obra-cabernet-sauvignon1-15245647955245bc0215977904477006-640-0.png",
    ],
    price: 1100,
    categoryProduct: "vinos",
    categoryName: "cabernet,",
  },

  {
    name: "Bianchi",
    stock: 50,
    description: "Vino Tinto Finca Los Primos Cabernet Sauvignon",
    image: [
      "https://cdn.shopify.com/s/files/1/0005/4634/0925/products/FLP-CS_2048x2048.jpg?v=1615985454",
    ],
    price: 1100,
    categoryProduct: "vinos",
    categoryName: "cabernet,",
  },

  //FRUTALES
  {
    name: "Rioja",
    stock: 50,
    description: "Vino Rosado Flor De Muga Rioja",
    image: [
      "https://ep01.epimg.net/elviajero/imagenes/2018/05/24/actualidad/1527161106_236187_1527169366_sumario_normal.jpg",
    ],
    price: 800,
    categoryProduct: "vinos",
    categoryName: "frutales,",
  },

  {
    name: "Bianchi",
    stock: 50,
    description: "Vino Marlo Blanco Dulce De Bianchi",
    image: [
      "https://cdn.shopify.com/s/files/1/0005/4634/0925/products/Marlo-Nueva-1000x1000_2048x2048.jpg?v=1639399770",
    ],
    price: 900,
    categoryProduct: "vinos",
    categoryName: "frutales,",
  },

  {
    name: "Callia",
    stock: 50,
    description: "Vino Blanco Callia Amable Tardio",
    image: [
      "https://www.espaciovino.com.ar/media/default/0001/57/thumb_56357_default_big.jpeg",
    ],
    price: 500,
    categoryProduct: "vinos",
    categoryName: "frutales,",
  },

  //DESTILADOS

  //GIN
  {
    name: "Heraclito",
    stock: 50,
    description: "Heraclito London Dry Gin 750ml",
    image: [
      "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61617_default_medium.jpeg",
    ],
    price: 1850,
    categoryProduct: "destiladas",
    categoryName: "gin,",
  },
  {
    name: "Gordon´s",
    stock: 50,
    description: "Gin Gordon´s London Dry Gin 700ml",
    image: [
      "http://cdn.shopify.com/s/files/1/0557/2093/5599/products/GIN-GORDONS-LONDON-DRY-700ML_4c2cec_14236.jpg?v=1622315363",
    ],
    price: 1470,
    categoryProduct: "destiladas",
    categoryName: "gin,",
  },
  {
    name: "Merle",
    stock: 50,
    description: "Gin Merle London Dry Gin 700ml",
    image: [
      "https://www.aromadevid.com.ar/wp-content/uploads/2020/10/merle-gin-scaled.jpg",
    ],
    price: 1300,
    categoryProduct: "destiladas",
    categoryName: "gin",
  },

  //VODKA
  {
    name: "Absolut",
    stock: 50,
    description: "Absolut Vodka ",
    image: [
      "https://www.absolut.com/globalassets/images/products/absolut-vodka/atlas/ingredient_absolut-vodka_1000ml_row_packshot.jpg",
    ],
    price: 4500,
    categoryProduct: "destiladas",
    categoryName: "vodka",
  },

  {
    name: "Smirnoff",
    stock: 50,
    description: "Smirnoff Vodka Original 700ml",
    image: [
      "http://cdn.shopify.com/s/files/1/0557/2093/5599/products/VODKA-SMIRNOFF-ORIGINAL-700ML-UNIDAD_e4b52f_13957.jpg?v=1627078615g",
    ],
    price: 1000,
    categoryProduct: "destiladas",
    categoryName: "vodka",
  },
  {
    name: "Skyy",
    stock: 50,
    description: "Skyy Vodka Original 700ml",
    image: [
      "https://bzsgrupobebidas.com.ar/wp-content/uploads/2018/05/skyy-vodka.png",
    ],
    price: 840,
    categoryProduct: "destiladas",
    categoryName: "vodka",
  },

  //RON
  {
    name: "Bacardí",
    stock: 50,
    description: "Ron Bacardí Dorado 750ml",
    image: [
      "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/bacardi1-ef30e9acd6c1db18ea16098704921595-640-0.jpg",
    ],
    price: 840,
    categoryProduct: "destiladas",
    categoryName: "ron",
  },
  {
    name: "Cayman",
    stock: 50,
    description: "Ron Cayman Grape",
    image: [
      "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/133/882/products/cayman-grape_750cc_11-1e6f1c7860b92c191a15864703705670-640-0.jpg",
    ],
    price: 420,
    categoryProduct: "destiladas",
    categoryName: "ron",
  },

  {
    name: "Malibu",
    stock: 50,
    description: "Ron Malibu 750ml",
    image: [
      "https://labebidadetusfiestas.com.ar/38413-large_default/ron-malibu-750cc.jpg",
    ],
    price: 1200,
    categoryProduct: "destiladas",
    categoryName: "ron",
  },

  //SIN ALCOHOL
  //GASEOSAS
  {
    name: "Coca Cola",
    stock: 200,
    description: "Coca Cola Retornable 2L",
    image: [
      "https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/fotos/b/0000000000/2079_1.jpg",
    ],
    price: 300,
    categoryProduct: "sin alcohol",
    categoryName: "gaseosa",
  },

  {
    name: "Coca Cola",
    stock: 200,
    description: "Coca Cola Retornable 2L Sin Azucar",
    image: [
      "https://cdnx.jumpseller.com/supermercado-santa-teresita/image/15562322/resize/540/540?1616612280",
    ],
    price: 300,
    categoryProduct: "sin alcohol",
    categoryName: "gaseosa",
  },
  {
    name: "Fanta",
    stock: 200,
    description: "Fanta Naranja 2.25L",
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_903830-MLA43690256367_102020-O.jpg",
    ],
    price: 300,
    categoryProduct: "sin alcohol",
    categoryName: "gaseosa",
  },
  {
    name: "Sprite",
    stock: 250,
    description: "Sprite Limon 2.25L",
    image: ["https://elbaronline.com.ar/wp-content/uploads/2021/03/sprite.jpg"],
    price: 250,
    categoryProduct: "sin alcohol",
    categoryName: "gaseosa",
  },

  //AGUAS

  {
    name: "Agua",
    stock: 250,
    description: "Agua Bon Aqua 2L",
    image: [
      "https://carrefourar.vtexassets.com/arquivos/ids/171898/7790895003882_02.jpg?v=637468542367770000",
    ],
    price: 127,
    categoryProduct: "sin alcohol",
    categoryName: "aguas",
  },

  {
    name: "Glaciar",
    stock: 250,
    description: "Agua Glaciar 2L",
    image: [
      "https://http2.mlstatic.com/D_Q_NP_2X_843913-MLA43773836976_102020-P.jpg",
    ],
    price: 118,
    categoryProduct: "sin alcohol",
    categoryName: "aguas",
  },
  {
    name: "kin",
    stock: 100,
    description: "Agua kin Sin Gas 6L",
    image: [
      "https://jumboargentina.vteximg.com.br/arquivos/ids/640562-512-512/Agua-De-Mesa-Kin-Sin-Gas-6-Lt-2-242575.jpg?v=637556946670000000",
    ],
    price: 390,
    categoryProduct: "sin alcohol",
    categoryName: "aguas",
  },

  //JUGOS

  {
    name: "Cepita",
    stock: 100,
    description: "Jugo Cepita Del Valle 1.5L",
    image: [
      "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3051415_f.jpg",
    ],
    price: 200,
    categoryProduct: "sin alcohol",
    categoryName: "jugos",
  },
  {
    name: "Citric",
    stock: 100,
    description: "Jugo Citrit Naranaja 5L",
    image: [
      "https://http2.mlstatic.com/D_NQ_NP_985908-MLA49329217498_032022-O.webp",
    ],
    price: 900,
    categoryProduct: "sin alcohol",
    categoryName: "jugos",
  },
  {
    name: "Fres",
    stock: 100,
    description: "Jugo Baggio Fresh Manzana 1.5L",
    image: ["https://danor.com.ar/wp-content/uploads/34492.jpg"],
    price: 900,
    categoryProduct: "sin alcohol",
    categoryName: "jugos",
  },
];
export default products;
