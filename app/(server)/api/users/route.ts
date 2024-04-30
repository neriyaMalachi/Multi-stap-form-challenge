import User from "../../models/usersModel";
import connectMongoDB from "@/libs/mongodb"


// export async function POST(req: Request, res: Response) {
//   const { user } = await req.json();

// const userData = await User.find()
// res.json(userData)
// }

export async function GET(req: Request, res: any) {
  await connectMongoDB();

  

const userData = await User.find({})
console.log(userData);

if(userData){
  res.send(userData)
console.log("successfull get users");

}else{
  res.status(404).send({ message: "Not Found" });
}
}