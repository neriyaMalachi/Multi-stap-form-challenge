import express from "express";
import userRouters from "./api/userRoutes";
 




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.use("api/userRoutes",userRouters)






