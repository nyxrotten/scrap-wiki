const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://es.wikipedia.org/wiki/Categor%C3%ADa:M%C3%BAsicos_de_heavy_metal";



app.get("/", (req, res) => {

    axios.get(url).then((response) => {
        if(response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            //const pageTitle = $("title").text();

            const links = [];
            $("#mw-pages a").each((index, element) => {
                const link = $(element).attr("href")
               
                    links.push(link)
                


            })
            console.log(links)



        }
    })



})

app.listen(3000, () => {
    console.log("Express está escuchando en el puerto 3000")
})