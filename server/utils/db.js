import mongoose from "mongoose";

async function DB(url) {
  try {
    console.log("connect");
    return await mongoose.connect(url);
  } catch (e) {
    console.log(e);
  }
}

export { DB };
