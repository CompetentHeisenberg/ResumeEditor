const express = require("express"); //прописали експресс
const app = express(); // задали значення нашого екземляру експресс обєкту-модели app
const path = require("path");
const port = 3001; // порт
const mongoose = require("mongoose"); // скачав монгус
let checking = 0;
app.use(express.json()); // треба додати json в звичні файли

mongoose.connect("mongodb://127.0.0.1:27017/testing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // підключення до бд

db.once("open", () => {
  console.log("Connected to Mongo");
});

const userSchema = new mongoose.Schema({
  // тут схема як наші дані будуть виглядати
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model(
  "User",
  userSchema
); /* создает модель на основі схеми і причому в нижньому кейсі и у множественном числі*/

app.post("/users", async (req, res) => {
  // тута ми робим пост, отправляем дані на наш юрл, а в реквесті дані шо відправив юзер
  try {
    const newUser = new User(req.body); //робить нового юзера по модели схеми даних
    await newUser.save(); // збереження юзера
    res.status(201).send(newUser); // все добре відправили юзера
    checking = 1;
  } catch (error) {
    res.status(400).send(error); // погано
  }
});

app.get("/check", function (req, res) {
  if (checking == true) {
    res.send(console.log("Все добре"));
  }
});

app.listen(port, () => {
  console.log(`This server is currently working on this ${port}`); // Сервак слухає на порту
});
