import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var pass = "";

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public")); //use css


//function name read from input
function writeName(req, res, next){
    pass = req.body["password"];
    console.log(pass);
    next();
};

app.use(writeName);

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const bendaItem = benda[Math.floor(Math.random() * benda.length)];
    const sifatItem = sifat[Math.floor(Math.random() * sifat.length)];
    res.render("index.ejs", {
        adjective: sifatItem,
        noun: bendaItem,
        pass: pass
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const benda = [
    "singa",
    "harimau",
    "lele",
    "rubah",
    "serigala",
    "anjing",
    "kucing",
    "kelinci",
    "tikus",
    "monyet",
    "platipus",
    "burung hantu",
    "rusa",
    "gajah",
    "benteng",
    "jerapah",
    "elang",
    "gurita",
    "lumba-lumba",
    "burung beo",
    "ikan hiu",
    "paus",
    "kodok",
    "cicak",
    "kecoa",
    "semut",
    "belalang",
    "kepiting",
    "udang",
    "kuda laut",
    "cumi-cumi",
    "ubur-ubur",
    "teripang",
    "musang",
    "tupai",
    "beruang",
    "panda",
    "naga",
    "kambing",
    "domba",
    "kancil",
    "mermaid",
    "salamander",
    "lebah",
    "kunang-kunang",
    "ikan pari",
    "kalajengking",
    "kupu-kupu",
    "gorilla",
    "laron",
    "tawon",
    "trenggiling",
    "sugar glider",
    "buaya",
    "koala",
    "cacing",
    "kapibara",
    "nyamuk",
    "lalat",
    "capung",
    "t-rex",
    "rusa",
    "quokka",
    "kaki seribu",
    "cheetah",
    "puma",
    "laba-laba",
    "kecebong",
    "babi",
    "sapi"
];

const sifat = [
    "hitam",
    "putih",
    "merah",
    "pink",
    "abu-abu",
    "bau",
    "bersih",
    "mewah",
    "miskin",
    "cina",
    "gatal",
    "sakit",
    "cantik",
    "ganteng",
    "jelek",
    "sampah",
    "halus",
    "manja",
    "kasar",
    "halu",
    "keren",
    "alay",
    "bego",
    "kiyowo",
    "raksasa",
    "mungil",
    "pemarah",
    "pendendam",
    "boros",
    "kecepirit",
    "unik",
    "bertalenta",
    "misterius",
    "sinister",
    "psikopat",
    "tidak berguna",
    "sigma",
    "skibidi",
    "rizzler",
    "coquette",
    "swiftie",
    "cringe",
    "basic",
    "GOAT",
    "mid",
    "moody",
    "slay",
    "woke",
    "kurban",
    "kepedean",
    "ambisius",
    "caper",
    "haram",
    "berdosa",
    "gold digger",
    "centil",
    "sok ganteng",
    "sok keren"
];