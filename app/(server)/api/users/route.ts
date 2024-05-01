import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
export async function POST(req: Request, res: Response) {
  const { user } = await req.json();

console.log(user);

const saveContact:any = await prisma.contact.create({
  data: user
})

 res.json(saveContact);
}


