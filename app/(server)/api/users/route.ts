import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const { user } = await req.json();
  try {
    const saveContact = await prisma.userSchema.create({
      data: user,
    });
    console.log(saveContact);
    return Response.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 401 });
  }
}
