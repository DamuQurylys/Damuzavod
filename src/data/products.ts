// src/data/products.ts
export type Product = {
  id: number;
  slug: string;
  title: string;
  previewImages: string[];
  fullImages: string[];
  shortDescription: string;
  fullDescription: string;
  price: string;
  specs: Record<string, string>;
  colors?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "kirpichik-100x200",
    title: "Кирпичик 100×200 мм",
    shortDescription: "Классическая брусчатка для тротуаров и дворов.",
    fullDescription: "Универсальный формат для тротуаров, пешеходных зон и подъездных дорожек. Высокая прочность и долговечность.",
    price: "2 600 тг/м2",
    specs: {
      размер: "100×200 мм",
      толщина: "60 мм",
      вес: "130 кг/м²",
      упаковка: "10 м² / паллета"
    },
    fullImages: [
      "/products/full/kirpichik/trotuarnaia_plitka_kirpichik_seriy_100x200.webp",
      "/products/full/kirpichik/trotuarnaia_plitka_kirpichik_cherniy_100x200.webp",
      "/products/full/kirpichik/trotuarnaia_plitka_kirpichik_krasniy_100x200.webp",
      "/products/full/kirpichik/trotuarnaia_plitka_kirpichik_korichneviy_100x200.webp",
      "/products/full/kirpichik/trotuarnaia_plitka_kirpichik_zheltiy_100x200.webp",
      "/products/full/kirpichik/trotuarnaia_plitka_kirpichik_oranjeviy_100x200.webp"
    ],
    previewImages: [
      "/products/previews/kirpichik/trotuarnaia_plitka_kirpichik_seriy_100x200.webp",
      "/products/previews/kirpichik/trotuarnaia_plitka_kirpichik_cherniy_100x200.webp",
      "/products/previews/kirpichik/trotuarnaia_plitka_kirpichik_krasniy_100x200.webp",
      "/products/previews/kirpichik/trotuarnaia_plitka_kirpichik_korichneviy_100x200.webp",
      "/products/previews/kirpichik/trotuarnaia_plitka_kirpichik_zheltiy_100x200.webp",
      "/products/previews/kirpichik/trotuarnaia_plitka_kirpichik_oranjeviy_100x200.webp"
    ]
  },
  {
    id: 2,
    slug: 'kvadrat-200x200',
    title: 'Квадрат 200×200 мм',
    shortDescription: 'Плитка квадратной формы для дворов и парковок.',
    fullDescription: 'Прочная бетонная плитка 200×200 мм для мощения частных территорий, садов и стоянок.',
    price: ' 2 600 тг/м2',
    specs: {
      размер: '200×200 мм',
      толщина: '60 мм',
      вес: '135 кг/м²',
      упаковка: '10 м² / паллета',
    },
    fullImages: [
      '/products/full/kvadrat/trotuarnaia_plitka_kvadrat_seriy_200x200.webp',
      '/products/full/kvadrat/trotuarnaia_plitka_kvadrat_cherniy_200x200.webp',
      '/products/full/kvadrat/trotuarnaia_plitka_kvadrat_krasniy_200x200.webp',
      '/products/full/kvadrat/trotuarnaia_plitka_kvadrat_korichneviy_200x200.webp',
      '/products/full/kvadrat/trotuarnaia_plitka_kvadrat_zheltiy_200x200.webp',
      '/products/full/kvadrat/trotuarnaia_plitka_kvadrat_oranjeviy_200x200.webp'
    ],
    previewImages: [
      '/products/previews/kvadrat/trotuarnaia_plitka_kvadrat_seriy_200x200.webp',
      '/products/previews/kvadrat/trotuarnaia_plitka_kvadrat_cherniy_200x200.webp',
      '/products/previews/kvadrat/trotuarnaia_plitka_kvadrat_krasniy_200x200.webp',
      '/products/previews/kvadrat/trotuarnaia_plitka_kvadrat_korichneviy_200x200.webp',
      '/products/previews/kvadrat/trotuarnaia_plitka_kvadrat_zheltiy_200x200.webp',
      '/products/previews/kvadrat/trotuarnaia_plitka_kvadrat_oranjeviy_200x200.webp'
    ]
  },
  {
    id: 3,
    slug: 'landhaus',
    title: 'Ландхаус',
    shortDescription: 'Брусчатка с эффектом натурального камня.',
    fullDescription: 'Идеально подходит для ландшафтного дизайна и элитного мощения. Поверхность рельефная.',
    price: ' 2 600 тг/м2',
    specs: {
      формат: 'мультиформат',
      толщина: '60 мм',
      вес: '125 кг/м²',
      упаковка: '9 м² / паллета',
    },
    fullImages: [
      '/products/full/landhaus/trotuarnaia_plitka_landhaus_seriy.webp',
      '/products/full/landhaus/trotuarnaia_plitka_landhaus_cherniy.webp',
      '/products/full/landhaus/trotuarnaia_plitka_landhaus_kvadrat_krasniy.webp',
      '/products/full/landhaus/trotuarnaia_plitka_landhaus_korichneviy.webp',
      '/products/full/landhaus/trotuarnaia_plitka_landhaus_zheltiy.webp',
      '/products/full/landhaus/trotuarnaia_plitka_landhaus_oranjeviy.webp',
      '/products/full/landhaus/trotuarnaia_plitka_landhaus_oranjeviy_korichneviy.webp',
      '/products/full/landhaus/trotuarnaia_plitka_landhaus_seriy_cherniy_beliy.webp'
    ],
    previewImages: [
      '/products/previews/landhaus/trotuarnaia_plitka_landhaus_seriy.webp',
      '/products/previews/landhaus/trotuarnaia_plitka_landhaus_cherniy.webp',
      '/products/previews/landhaus/trotuarnaia_plitka_landhaus_kvadrat_krasniy.webp',
      '/products/previews/landhaus/trotuarnaia_plitka_landhaus_korichneviy.webp',
      '/products/previews/landhaus/trotuarnaia_plitka_landhaus_zheltiy.webp',
      '/products/previews/landhaus/trotuarnaia_plitka_landhaus_oranjeviy.webp',
      '/products/full/landhaus/trotuarnaia_plitka_landhaus_oranjeviy_korichneviy.webp',
      '/products/full/landhaus/trotuarnaia_plitka_landhaus_seriy_cherniy_beliy.webp'
    ]
  },
  {
    id: 4,
    slug: 'triada',
    title: 'Триада',
    shortDescription: 'Комплект из трёх элементов для узорчатого мощения.',
    fullDescription: 'Брусчатка Триада позволяет укладывать геометрические рисунки. Подходит для террас и дворов.',
    price: ' 2 600 тг/м2',
    specs: {
      формат: '3 элемента',
      толщина: '60 мм',
      вес: '132 кг/м²',
      упаковка: '10 м² / паллета',
    },
    fullImages: [
      '/products/full/triada/trotuarnaia_plitka_triada_seriy.webp',
      '/products/full/triada/trotuarnaia_plitka_triada_cherniy.webp',
      '/products/full/triada/trotuarnaia_plitka_triada_krasniy.webp',
      '/products/full/triada/trotuarnaia_plitka_triada_korichneviy.webp',
      '/products/full/triada/trotuarnaia_plitka_triada_zheltiy.webp',
      '/products/full/triada/trotuarnaia_plitka_triada_oranjeviy.webp'
    ],
    previewImages: [
      '/products/previews/triada/trotuarnaia_plitka_triada_seriy.webp',
      '/products/previews/triada/trotuarnaia_plitka_triada_cherniy.webp',
      '/products/previews/triada/trotuarnaia_plitka_triada_krasniy.webp',
      '/products/previews/triada/trotuarnaia_plitka_triada_korichneviy.webp',
      '/products/previews/triada/trotuarnaia_plitka_triada_zheltiy.webp',
      '/products/previews/triada/trotuarnaia_plitka_triada_oranjeviy.webp'
    ]
  },
  {
    id: 5,
    slug: '600x300',
    title: 'Плитка 600×300 мм',
    shortDescription: 'Крупноформатная бетонная плитка.',
    fullDescription: 'Используется для благоустройства тротуаров, промзон и парков. Устойчива к нагрузкам.',
    price: ' 2 600 тг/м2',
    specs: {
      размер: '600×300 мм',
      толщина: '60 мм',
      вес: '120 кг/м²',
      упаковка: '8 м² / паллета',
    },
    fullImages: [
      '/products/full/600x300/trotuarnaia_plitka_600x300_seriy.webp',
      '/products/full/600x300/trotuarnaia_plitka_600x300_cherniy.webp',
      '/products/full/600x300/trotuarnaia_plitka_600x300_krasniy.webp',
      '/products/full/600x300/trotuarnaia_plitka_600x300_korichneviy.webp',
      '/products/full/600x300/trotuarnaia_plitka_600x300_zheltiy.webp',
      '/products/full/600x300/trotuarnaia_plitka_600x300_oranjeviy.webp'
    ],
    previewImages: [
      '/products/previews/600x300/trotuarnaia_plitka_600x300_seriy.webp',
      '/products/previews/600x300/trotuarnaia_plitka_600x300_cherniy.webp',
      '/products/previews/600x300/trotuarnaia_plitka_600x300_krasniy.webp',
      '/products/previews/600x300/trotuarnaia_plitka_600x300_korichneviy.webp',
      '/products/previews/600x300/trotuarnaia_plitka_600x300_zheltiy.webp',
      '/products/previews/600x300/trotuarnaia_plitka_600x300_oranjeviy.webp'
    ]
  },
  {
    id: 6,
    slug: '300x300',
    title: 'Плитка 300×300 мм',
    shortDescription: 'Удобная плитка для садовых дорожек.',
    fullDescription: 'Подходит для дачных участков, дворов, террас. Легко укладывается.',
    price: ' 2 600 тг/м2',
    specs: {
      размер: '300×300 мм',
      толщина: '60 мм',
      вес: '125 кг/м²',
      упаковка: '10 м² / паллета',
    },
    fullImages: [
      '/products/full/300x300/trotuarnaia_plitka_300x300_seriy.webp',
      '/products/full/300x300/trotuarnaia_plitka_300x300_cherniy.webp',
      '/products/full/300x300/trotuarnaia_plitka_300x300_krasniy.webp',
      '/products/full/300x300/trotuarnaia_plitka_300x300_korichneviy.webp',
      '/products/full/300x300/trotuarnaia_plitka_300x300_zheltiy.webp',
      '/products/full/300x300/trotuarnaia_plitka_300x300_oranjeviy.webp'
    ],
    previewImages: [
      '/products/previews/300x300/trotuarnaia_plitka_300x300_seriy.webp',
      '/products/previews/300x300/trotuarnaia_plitka_300x300_cherniy.webp',
      '/products/previews/300x300/trotuarnaia_plitka_300x300_krasniy.webp',
      '/products/previews/300x300/trotuarnaia_plitka_300x300_korichneviy.webp',
      '/products/previews/300x300/trotuarnaia_plitka_300x300_zheltiy.webp',
      '/products/previews/300x300/trotuarnaia_plitka_300x300_oranjeviy.webp'
    ]
  },
  {
    id: 7,
    slug: 'reshetka-gazon',
    title: 'Газонная решётка',
    shortDescription: 'Решётка для укрепления газона.',
    fullDescription: 'Используется на парковках и пешеходных дорожках для сохранения травяного покрытия.',
    price: ' 2 600 тг/м2',
    specs: {
      размер: '600×400 мм',
      толщина: '80 мм',
      вес: '100 кг/м²',
      упаковка: '6 м² / паллета',
    },
    fullImages: [
      '/products/full/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_seriy.webp',
      '/products/full/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_cherniy.webp',
      '/products/full/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_krasniy.webp',
      '/products/full/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_korichneviy.webp',
      '/products/full/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_zheltiy.webp',
      '/products/full/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_oranjeviy.webp'
    ],
    previewImages: [
      '/products/previews/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_seriy.webp',
      '/products/previews/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_cherniy.webp',
      '/products/previews/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_krasniy.webp',
      '/products/previews/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_korichneviy.webp',
      '/products/previews/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_zheltiy.webp',
      '/products/previews/reshetka-gazonnaia/trotuarnaia_plitka_reshetka-gazonnaia_oranjeviy.webp'
    ]
  },
  {
    id: 8,
    slug: 'bordyur',
    title: 'Бордюр',
    shortDescription: 'Бетонный бордюр для тротуаров и дорожек.',
    fullDescription: 'Используется для оформления и отделения пешеходных зон и проезжей части.',
    price: ' 2 600 тг/м2',
    specs: {
      размер: '1000×200×80 мм',
      вес: '45 кг/шт',
      упаковка: '30 шт / поддон',
    },
    fullImages: [
      '/products/full/bordyur/bordyur_seriy.webp',
      '/products/full/bordyur/bordyur_cherniy.webp',
      '/products/full/bordyur/bordyur_krasniy.webp',
      '/products/full/bordyur/bordyur_korichneviy.webp',
      '/products/full/bordyur/bordyur_zheltiy.webp',
      '/products/full/bordyur/bordyur_oranjeviy.webp'
    ],
    previewImages: [
      '/products/previews/bordyur/bordyur_seriy.webp',
      '/products/previews/bordyur/bordyur_cherniy.webp',
      '/products/previews/bordyur/bordyur_krasniy.webp',
      '/products/previews/bordyur/bordyur_korichneviy.webp',
      '/products/previews/bordyur/bordyur_zheltiy.webp',
      '/products/previews/bordyur/bordyur_oranjeviy.webp'
    ]
  },
  {
    id: 9,
    slug: 'porebrik',
    title: 'Поребрик',
    shortDescription: 'Компактный бордюр для садовых дорожек.',
    fullDescription: 'Идеален для разделения клумб и дорожек в саду. Лёгкий и прочный.',
    price: ' 2 600 тг/м2',
    specs: {
      размер: '500×200×80 мм',
      вес: '20 кг/шт',
      упаковка: '60 шт / поддон',
    },
    fullImages: [
      '/products/full/porebrik/porebrik_seriy.webp',
      '/products/full/porebrik/porebrik_cherniy.webp',
      '/products/full/porebrik/porebrik_krasniy.webp',
      '/products/full/porebrik/porebrik_korichneviy.webp',
      '/products/full/porebrik/porebrik_zheltiy.webp',
      '/products/full/porebrik/porebrik_oranjeviy.webp'
    ],
    previewImages: [
      '/products/previews/porebrik/porebrik_seriy.webp',
      '/products/previews/porebrik/porebrik_cherniy.webp',
      '/products/previews/porebrik/porebrik_krasniy.webp',
      '/products/previews/porebrik/porebrik_korichneviy.webp',
      '/products/previews/porebrik/porebrik_zheltiy.webp',
      '/products/previews/porebrik/porebrik_oranjeviy.webp'
    ]
    },
  {
    id: 10,
    slug: 'staraya-aziya',
    title: 'Старая Азия',
    shortDescription: 'Брусчатка с эффектом старинного камня.',
    fullDescription: 'Используется в исторических реконструкциях, пешеходных зонах и премиальных проектах.',
    price: ' 2 600 тг/м2',
    specs: {
      формат: 'мультиформат',
      толщина: '60 мм',
      вес: '125 кг/м²',
      упаковка: '9 м² / паллета',
    },
    fullImages: [
      '/products/full/staraya_aziya/trotuarnaia_plitka_staraya-aziya_seriy.webp',
      '/products/full/staraya_aziya/trotuarnaia_plitka_staraya-aziya_cherniy.webp',
      '/products/full/staraya_aziya/trotuarnaia_plitka_staraya-aziya_krasniy.webp',
      '/products/full/staraya_aziya/trotuarnaia_plitka_staraya-aziya_korichneviy.webp',
      '/products/full/staraya_aziya/trotuarnaia_plitka_staraya-aziya_zheltiy.webp',
      '/products/full/staraya_aziya/trotuarnaia_plitka_staraya-aziya_oranjeviy.webp'
    ],
    previewImages: [
      '/products/previews/staraya_aziya/trotuarnaia_plitka_staraya-aziya_seriy.webp',
      '/products/previews/staraya_aziya/trotuarnaia_plitka_staraya-aziya_cherniy.webp',
      '/products/previews/staraya_aziya/trotuarnaia_plitka_staraya-aziya_krasniy.webp',
      '/products/previews/staraya_aziya/trotuarnaia_plitka_staraya-aziya_korichneviy.webp',
      '/products/previews/staraya_aziya/trotuarnaia_plitka_staraya-aziya_zheltiy.webp',
      '/products/previews/staraya_aziya/trotuarnaia_plitka_staraya-aziya_oranjeviy.webp'
    ]
  },
  {
    id: 11,
    slug: 'kirpichik-120x240',
    title: 'Кирпичик 120×240 мм',
    shortDescription: 'Расширенный формат кирпичика.',
    fullDescription: 'Для мощения больших площадей и укладки по диагонали или ёлочкой.',
    price: ' 2 600 тг/м2',
    specs: {
      размер: '120×240 мм',
      толщина: '60 мм',
      вес: '135 кг/м²',
      упаковка: '10 м² / паллета',
    },
    fullImages: [
      '/products/full/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_seriy.webp',
      '/products/full/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_cherniy.webp',
      '/products/full/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_krasniy.webp',
      '/products/full/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_korichneviy.webp',
      '/products/full/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_zheltiy.webp',
      '/products/full/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_oranjeviy.webp'
    ],
    previewImages: [
      '/products/previews/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_seriy.webp',
      '/products/previews/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_cherniy.webp',
      '/products/previews/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_krasniy.webp',
      '/products/previews/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_korichneviy.webp',
      '/products/previews/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_zheltiy.webp',
      '/products/previews/kirpichik_120x240/trotuarnaia_plitka_kirpichik-120x240_oranjeviy.webp'
    ]
    },
  {
    id: 12,
    slug: 'poligonal',
    title: 'Полигональ',
    shortDescription: 'Декоративная брусчатка нестандартной формы.',
    fullDescription: 'Создаёт уникальные узоры и рисунки. Подходит для дизайнерских решений.',
    price: ' 2 600 тг/м2',
    specs: {
      формат: 'мультиформат',
      толщина: '60 мм',
      вес: '120 кг/м²',
      упаковка: '8 м² / паллета',

    },
    fullImages: [
      '/products/full/poligonal/trotuarnaia_plitka_poligonal_seriy.webp',
      '/products/full/poligonal/trotuarnaia_plitka_poligonal_cherniy.webp',
      '/products/full/poligonal/trotuarnaia_plitka_poligonal_krasniy.webp',
      '/products/full/poligonal/trotuarnaia_plitka_poligonal_korichneviy.webp',
      '/products/full/poligonal/trotuarnaia_plitka_poligonal_zheltiy.webp',
      '/products/full/poligonal/trotuarnaia_plitka_poligonal_oranjeviy.webp'
    ],
    previewImages: [
      '/products/previews/poligonal/trotuarnaia_plitka_poligonal_seriy.webp',
      '/products/previews/poligonal/trotuarnaia_plitka_poligonal_cherniy.webp',
      '/products/previews/poligonal/trotuarnaia_plitka_poligonal_krasniy.webp',
      '/products/previews/poligonal/trotuarnaia_plitka_poligonal_korichneviy.webp',
      '/products/previews/poligonal/trotuarnaia_plitka_poligonal_zheltiy.webp',
      '/products/previews/poligonal/trotuarnaia_plitka_poligonal_oranjeviy.webp'
    ]  
  }
];
