const express = require("express");
const router = express.Router();


const data = {
    title: "Popüler uygulamalar",
    categories: ["Web Geliştirme" , "Programlama", "Mobil Uygulamalar", "Veri Analizi", "Ofis Uygulamalar"],
    blogs:[
            {
                blogid:1,
                baslik:"Komple Uygulamalı Web Geliştirme",
                aciklama:"Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
                resim:"1.jpeg",
                anasayfa:true,
                onay:true
            },
            {
                blogid:2,
                baslik:"Python ile Sıfırdan İleri Seviye Python Programlama",
                aciklama:"Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
                resim:"2.jpeg",
                anasayfa:false,
                onay:true
            },
            {
                blogid:3,
                baslik:"Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
                aciklama:"Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular, React ve VueJs için sağlam bir temel oluşturun.",
                resim:"3.jpeg",
                anasayfa:false,
                onay:true
            }
            
        ]
}

router.use("/blogs/:blogid", (req, res) => {
    res.render("users/blog-details");
});

router.use("/blogs", (req, res) => {
    res.render( "users/blogs", data);
});

router.use("/",(req, res) =>{
    res.render( "users/index" , data);
});

module.exports = router;