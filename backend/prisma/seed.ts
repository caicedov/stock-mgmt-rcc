import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const dth = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'DTH'
    }
  })
  const fibra = await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      name: 'Fibra'
    }
  })
  const dgo = await prisma.category.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      name: 'DGO'
    }
  })
  const hughesnet = await prisma.category.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      name: 'HughesNet'
    }
  })
  const ferreteria = await prisma.category.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      name: 'Ferretería'
    }
  })
  console.log({
    dth,
    fibra,
    dgo,
    hughesnet,
    ferreteria
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })