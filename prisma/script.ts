import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.userSchema.create({
    data: {
      name: "nesd",
      emailAddress: "sdfbsfd@gmail.com",
      phoneNumber: "222222",
      month: false,
      yeare: true,
      subscriptionType: "",
      OnlineService: false,
      largerStorage: false,
      CustomizableProfile: true,
      Price: 43,
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
