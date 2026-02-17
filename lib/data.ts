import type { Product, Category } from "./types"

export const categories: Category[] = [
  {
    id: "running",
    name: "Беговые",
    slug: "running",
    image: "/images/categories/running.jpg",
    description: "Кроссовки для бега и тренировок",
  },
  {
    id: "basketball",
    name: "Баскетбольные",
    slug: "basketball",
    image: "/images/categories/basketball.jpg",
    description: "Обувь для баскетбола и уличных площадок",
  },
  {
    id: "casual",
    name: "Повседневные",
    slug: "casual",
    image: "/images/categories/casual.jpg",
    description: "Стиль на каждый день",
  },
  {
    id: "limited",
    name: "Лимитированные",
    slug: "limited",
    image: "/images/categories/limited.jpg",
    description: "Эксклюзивные и коллекционные модели",
  },
]

export const products: Product[] = [
  {
    id: "1",
    slug: "air-speed-runner",
    name: "Air Speed Runner",
    brand: "Nike",
    category: "running",
    price: 12990,
    originalPrice: 15990,
    images: ["/images/products/running-1.jpg"],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    description:
      "Легкие беговые кроссовки с амортизацией Air. Сетчатый верх обеспечивает максимальную вентиляцию, а пеноматериал в подошве поглощает удары при каждом шаге. Идеальны для ежедневных пробежек и марафонов.",
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: "2",
    slug: "ultraboost-x",
    name: "Ultraboost X",
    brand: "Adidas",
    category: "running",
    price: 14490,
    images: ["/images/products/running-2.jpg"],
    sizes: [40, 41, 42, 43, 44],
    description:
      "Премиальные беговые кроссовки с технологией Boost. Бесконечная энергия возврата и адаптивная посадка Primeknit делают каждый километр комфортным.",
    isFeatured: true,
    inStock: true,
  },
  {
    id: "3",
    slug: "fresh-foam-tempo",
    name: "Fresh Foam Tempo",
    brand: "New Balance",
    category: "running",
    price: 9990,
    images: ["/images/products/running-3.jpg"],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    description:
      "Темповые кроссовки для скоростных тренировок. Подошва Fresh Foam обеспечивает мягкость и отзывчивость одновременно.",
    isNew: true,
    inStock: true,
  },
  {
    id: "4",
    slug: "court-force-high",
    name: "Court Force High",
    brand: "Nike",
    category: "basketball",
    price: 16990,
    originalPrice: 19990,
    images: ["/images/products/basketball-1.jpg"],
    sizes: [41, 42, 43, 44, 45, 46],
    description:
      "Баскетбольные кроссовки с высоким голеностопом и системой фиксации. Zoom Air в пятке и переднем отделе для максимальной амортизации на площадке.",
    isFeatured: true,
    inStock: true,
  },
  {
    id: "5",
    slug: "harden-vol-7",
    name: "Harden Vol. 7",
    brand: "Adidas",
    category: "basketball",
    price: 15490,
    images: ["/images/products/basketball-2.jpg"],
    sizes: [41, 42, 43, 44, 45],
    description:
      "Игровые кроссовки с низким профилем для быстрых маневров. Boost-подошва для взрывного первого шага и комфорта в длительных матчах.",
    inStock: true,
  },
  {
    id: "6",
    slug: "jordan-legacy-mid",
    name: "Jordan Legacy Mid",
    brand: "Jordan",
    category: "basketball",
    price: 18990,
    images: ["/images/products/basketball-3.jpg"],
    sizes: [40, 41, 42, 43, 44, 45],
    description:
      "Культовый силуэт Jordan с обновленными технологиями. Кожаный верх, видимая Air-камера и легендарный дизайн, покоривший миллионы.",
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: "7",
    slug: "classic-leather-white",
    name: "Classic Leather White",
    brand: "Nike",
    category: "casual",
    price: 8990,
    images: ["/images/products/casual-1.jpg"],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    description:
      "Минималистичные кожаные кроссовки для повседневной носки. Чистый белый дизайн сочетается с любым образом.",
    isFeatured: true,
    inStock: true,
  },
  {
    id: "8",
    slug: "suede-retro-574",
    name: "Suede Retro 574",
    brand: "New Balance",
    category: "casual",
    price: 10990,
    originalPrice: 12990,
    images: ["/images/products/casual-2.jpg"],
    sizes: [39, 40, 41, 42, 43, 44],
    description:
      "Легендарная модель 574 в замшевом исполнении. Ретро-дизайн с современным комфортом ENCAP для стильных прогулок по городу.",
    inStock: true,
  },
  {
    id: "9",
    slug: "puma-suede-classic",
    name: "Suede Classic",
    brand: "Puma",
    category: "casual",
    price: 7490,
    images: ["/images/products/casual-3.jpg"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    description:
      "Классический силуэт Puma Suede. Замшевый верх, резиновая подошва и узнаваемая формменная полоса. Икона стритвера с 1968 года.",
    inStock: true,
  },
  {
    id: "10",
    slug: "yeezy-foam-black",
    name: "Yeezy Foam Black",
    brand: "Adidas",
    category: "limited",
    price: 24990,
    images: ["/images/products/limited-1.jpg"],
    sizes: [40, 41, 42, 43, 44],
    description:
      "Лимитированная модель из литого пеноматериала. Футуристический дизайн, невесомость и уникальный стиль. Каждая пара пронумерована.",
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: "11",
    slug: "air-max-collector",
    name: "Air Max Collector",
    brand: "Nike",
    category: "limited",
    price: 29990,
    originalPrice: 34990,
    images: ["/images/products/limited-2.jpg"],
    sizes: [41, 42, 43, 44],
    description:
      "Коллекционная версия Air Max с серебристым покрытием и увеличенной воздушной камерой. Тираж ограничен 1000 пар по всему миру.",
    inStock: true,
  },
  {
    id: "12",
    slug: "premium-rose-gold",
    name: "Premium Rose Gold",
    brand: "Puma",
    category: "limited",
    price: 19990,
    images: ["/images/products/limited-3.jpg"],
    sizes: [36, 37, 38, 39, 40, 41],
    description:
      "Элегантные кроссовки с отделкой розовым золотом. Кожаный верх ручной работы, подошва с металлическим блеском. Для тех, кто ценит роскошь.",
    isNew: true,
    inStock: true,
  },
]

export const brands = ["Nike", "Adidas", "New Balance", "Jordan", "Puma"]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured)
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
