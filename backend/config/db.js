import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://aadil:Aadil%40123@foodiefrizzy.thctk.mongodb.net/?retryWrites=true&w=majority&appName=FoodieFrizzy")
    .then(() => console.log("DB Connected"));
};
