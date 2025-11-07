import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {

  res.render("index.ejs");
  
});

app.post("/submit", (req, res) => {

  let randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
  let randomLastName = lastName[Math.floor(Math.random() * lastName.length)];

  let randomFullName = randomFirstName + " " + randomLastName;

  res.render("index.ejs", {randomFullName : randomFullName});
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const firstName = ["Madison", "Annie", "Ally", "Allison", "Mary Anne", "Nicole", "Amy", "Sarah", "Avery", "Christina", "Isabella", "Kayla", "Elizabeth", "Grace", "Gabi", "Amber", "Molly", "Alina", "Lauren", "Tonya", "Rebecca", "Mia", "Mae", "Abigail", "Julianna", "Hermione", "Giny", "Alex", "Anthony", "Mike", "Dustin", "John", "Jack", "Nick", "Andrew", "Marvin", "Chris", "Patrick", "Ryan", "David", "Luke", "Payton", "Craig", "Bill", "Jason", "Conner", "Tommy", "Kevin", "Ken", "Sean", "Jeff", "Hudson", "Curtis"];

const lastName = ["Rivers", "Banks", "Burb", "Alloy", "Bell", "Maltby", "Scislowski", "Phillips", "Beadro", "Hed", "Wrights", "Right", "Levvi", "Klann", "Cooper", "Klost", "Dril", "Hir", "Day", "Higgins", "Richardson", "Kareily", "Murphy", "Steirling", "Coszenza", "Less", "Thomas", "Cirillo", "Williams", "Brookes", "O'Rouke", "Tran", "Matlock", "Ramon", "Watford", "Black", "Green", "White"];
