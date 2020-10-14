const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceElement = require("./module/replaceElement");


//Load Html File

const htmlIndexTemplate = fs.readFileSync("./Html/index.html",'utf-8');
const articleTemplate = fs.readFileSync("./Html/article.html",'utf-8');

//Get Json Data

const getData = fs.readFileSync("./json/data.json",'utf-8');
const blogData = JSON.parse(getData);

//Create Server

const server = http.createServer((req,res) => {

    //Get Path And url parameters using destructring

    const { query , pathname } = url.parse(req.url,true);

    //Create Simple Routing


    //Make Index.html As homepage
    
    if(pathname === "/" || pathname === "node-blog"){
        
        

        res.writeHead(200,{ 'content-type' : "text/html"});
        
        const blogPosts = blogData.map(el => replaceElement(articleTemplate,el)).join('');
        const output = htmlIndexTemplate.replace("{%BLOG_POSTS%}",blogPosts);
        res.end(output);



    //Single Blog Post     
    }else if(pathname === "/blog"){
        res.end("Blog Here");

        //404 Error
    }else{
        res.writeHead(404,{ 'content-type' : "text/html"});
        res.end("<h2>Page not Found </h2> ")
    }


});


//Launch Server

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
  });
