import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Criar as categorias
  const pizzasCategory = await prisma.category.create({
    data: {
      name: 'pizzas',
    },
  })

  const drinksCategory = await prisma.category.create({
    data: {
      name: 'drinks',
    },
  })

  const entradasCategory = await prisma.category.create({
    data: {
      name: 'entradas',
    },
  })

  const sobremesaCategory = await prisma.category.create({
    data: {
      name: 'sobremesa',
    },
  })

  // Criar os produtos da categoria "Pizzas"
  await prisma.product.createMany({
    data: [
      {
        name: 'calabresa',
        description:
          'Linguiça calabresa artesanal e fatias de cebola sobre molho de tomate fresco',
        price: 79,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731701813/vvy5bt8berqdaxziqkrb.jpg',
        category_id: pizzasCategory.id,
      },
      {
        name: 'parma in puglia',
        description:
          'Mozarela de búfala cremosa, típica da Puglia, presunto Parma, molho de tomate fresco e raspas de limão-siciliano',
        price: 84,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731701813/kusft3xuxryba5lrkdcl.jpg',
        category_id: pizzasCategory.id,
      },
      {
        name: 'quattro formaggi',
        description:
          'Catupiry, mozarela, queijo parmesão e gorgonzola sobre molho de tomate fresco',
        price: 80,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731703755/gp8tacl8ernbzbwuwaxn.jpg',
        category_id: pizzasCategory.id,
      },
      {
        name: 'della nonna',
        description:
          'Fatias de calabresa artesanal sobre mozarela e molho de tomate',
        price: 80,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731703811/tockcznvbyvem9hti0nf.jpg',
        category_id: pizzasCategory.id,
      },
      {
        name: 'sapore di parma',
        description:
          'Fatias de presunto parma sobre mozarela e molho de tomate fresco',
        price: 82,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731703860/wxwopdthege7yrgshz1e.jpg',
        category_id: pizzasCategory.id,
      },
    ],
  })

  // Criar os produtos da categoria "Drinks"
  await prisma.product.createMany({
    data: [
      {
        name: 'drink americano',
        description: 'Campari, Vermouth Rosso e club soda',
        price: 38,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731701812/xymftvv4kx4ea5bmr5zl.jpg',
        category_id: drinksCategory.id,
      },
      {
        name: 'drink boulevardier',
        description: 'Bourbon Whiskey, Vermouth e Campari',
        price: 38,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731701813/zkfqcnl9wzh39ogs2k3d.jpg',
        category_id: drinksCategory.id,
      },
      {
        name: 'coca-cola 2 litros',
        description: 'Refrigerante Coca-Cola pet, 1 unidade com 2L',
        price: 12,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731701813/kklmayb2ket8fi3uqpb9.jpg',
        category_id: drinksCategory.id,
      },
    ],
  })

  // Criar os produtos da categoria "Entradas"
  await prisma.product.createMany({
    data: [
      {
        name: 'pão de calabresa',
        description:
          'Preparado na casa com linguiça calabresa artesanal e leve toque de mozarela',
        price: 36,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731701812/hvn5nl9lvywv13ws47o8.jpg',
        category_id: entradasCategory.id,
      },
      {
        name: 'carpaccio',
        description:
          'Temperado com molho de mostarda, azeite extra-virgem, alcaparras e parmesão. Rúcula opcional',
        price: 62,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731701813/xskorel2x1saheab6wfh.jpg',
        category_id: entradasCategory.id,
      },
    ],
  })

  // Criar os produtos da categoria "Sobremesa"
  await prisma.product.createMany({
    data: [
      {
        name: 'sorvete de chocolate',
        description: 'sorvete de chocolate',
        price: 28,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731701813/uyxofxapnwidl6jh48hj.jpg',
        category_id: sobremesaCategory.id,
      },
      {
        name: 'pudim',
        description:
          'Sobremesa clássica e deliciosa, perfeita para qualquer ocasião',
        price: 28,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731701813/bhzznjykjo1znq9dfytg.jpg',
        category_id: sobremesaCategory.id,
      },
      {
        name: 'affogato',
        description: 'Duas bolas de sorvete de creme regadas com café espresso',
        price: 32,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731703602/pdqytu0a85gx4klpjjc7.jpg',
        category_id: sobremesaCategory.id,
      },
      {
        name: 'chesecake',
        description:
          'Torta leve à base de cream cheese com massa de biscoito e calda de frutas vermelhas',
        price: 32,
        image_url:
          'https://res.cloudinary.com/ddetuuxug/image/upload/v1731703661/jmhl1dqp8yrqcn2wifcb.jpg',
        category_id: sobremesaCategory.id,
      },
    ],
  })

  console.log('Seed completed!')
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
