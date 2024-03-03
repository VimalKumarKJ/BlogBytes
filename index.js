import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
let posts = [];
let year = new Date();
let currYear = year.getFullYear();


app.get("/", (req, res) => {
    res.render("index.ejs", {posts, currYear});
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/create", (req, res) => {
    const {title, thumbnail, author, content} = req.body;
    const limitedContent = content.substring(0, 2000);
    const newPost = {Title : title, Thumbnail : thumbnail, Author : author, Content : limitedContent};
    posts.push(newPost);
    res.redirect("/")
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});