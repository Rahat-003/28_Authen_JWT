const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017";

mongoose
  .connect(connectionString + "/sport") // runtime e create hobe
  .then(() => {
    return console.log("connection successfull"); // return na krleo somossa nai
  })
  .catch((err) => {
    return console.log(err);
  });

const playSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
    required: true,
  },
});

const play = new mongoose.model("Play", playSchema);

async function savePlay(data) {
  const nPlay = new play(data);
  try {
    const wait = await nPlay.save();
    console.log("wait finished:\n", wait);
  } catch (err) {
    console.log(`error occured:\n${err}`);
  }
}

const data = {
  title: "table tennis",
  equipment: "circular small ball of dia 1.57 inches",
};

savePlay(data);
