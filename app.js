const express = require('express')
const path = require('path');
const glob = require('glob');
const ejs = require('ejs');
const isNil = require('lodash/isNil');
const httpRequest = require('request');
const moment = require('moment');
moment.locale('fr');
const app = express()
const port = 3000


// app.get('/', (req, res) => res.send('Hello World!'))


// a convenient variable to refer to the HTML directory
let html_dir = path.join(__dirname, './2019/');

// routes to serve the static HTML files
app.get('/', function(req, res) {
  // res.sendFile(html_dir + 'index.html');

  let data={};
  ejs.renderFile(html_dir+'index.html', data, null, function(err, html){
     res.send(html);
  });
});

app.get('/en/', function(req, res) {
  let data={};
  ejs.renderFile(html_dir+'en/index.html', data, null, function(err, html){
     res.send(html);
  });
});


app.get('/blog/:slug', function(req, res) {
 // res.sendFile(html_dir + base+'.html');

 // let url = req.url;
 // let spll = url.split('blog/');
 let slug = req.params.slug

 let apiUrl = 'https://api.sosticket.ca/blog-article';
 let propertiesObject = { slug:slug };

 httpRequest.get({url:apiUrl, qs:propertiesObject}, (error, response, body) => {

 const respBody = JSON.parse(body);

 if(typeof respBody.data!=='undefined' && respBody.data!==null && respBody.data.length>0)
 {
  let data=respBody.data[0];

  data['publishDateFormatted']= moment(data.publishDate).format('LL');
  data['url']=req.get('host')+req.url;
  data['hasNext']=false;
  data['nextSlug']=null;
  if(!isNil(data.nextArticle) && !isNil(data.nextArticle.slug))
  {
    data['hasNext']=true;
    data['nextSlug']=data.nextArticle.slug;
  }

  data['hasPrevious']=false;
  data['previousSlug']=null;
  if(!isNil(data.previousArticle) && !isNil(data.previousArticle.slug))
  {
    data['hasPrevious']=true;
    data['previousSlug']=data.previousArticle.slug;
  }
   ejs.renderFile(html_dir+'blogue-histoire.html', data, null, function(err, html){
      res.send(html);
  });

 }
 });

});

app.get('/en/blog/:slug', function(req, res) {
 // res.sendFile(html_dir + base+'.html');

 // let url = req.url;
 // let spll = url.split('blog/');

 let slug = req.params.slug

 let apiUrl = 'https://api.sosticket.ca/blog-article';
 let propertiesObject = { slug:slug };

 httpRequest.get({url:apiUrl, qs:propertiesObject}, (error, response, body) => {

 const respBody = JSON.parse(body);

 if(typeof respBody.data!=='undefined' && respBody.data!==null && respBody.data.length>0)
 {
  let data=respBody.data[0];

  data['publishDateFormatted']= moment(data.publishDate).format('LL');
  data['url']=req.get('host')+req.url;
  data['hasNext']=false;
  data['nextSlug']=null;
  if(!isNil(data.nextArticle) && !isNil(data.nextArticle.slug))
  {
    data['hasNext']=true;
    data['nextSlug']=data.nextArticle.slug;
  }

  data['hasPrevious']=false;
  data['previousSlug']=null;
  if(!isNil(data.previousArticle) && !isNil(data.previousArticle.slug))
  {
    data['hasPrevious']=true;
    data['previousSlug']=data.previousArticle.slug;
  }
   ejs.renderFile(html_dir+'en/blogue-histoire.html', data, null, function(err, html){
      res.send(html);
  });

 }
 });

});




glob(html_dir +'*.html', {}, (err, files)=>{

  for(let file of files)
  {


    let base = path.parse(file).name;
    if (base!=='blogue-histoire') {

        app.get('/'+base, function(req, res) {
          let data={};
          ejs.renderFile(html_dir+ base+'.html', data, null, function(err, html){
             res.send(html);
          });
        });

       //  app.get('/'+base, function(req, res) {
       //   // res.sendFile(html_dir + base+'.html');
       // });

       app.get('/fr/'+base, function(req, res) {
        // res.sendFile(html_dir + base+'.html');
        let data={};
        ejs.renderFile(html_dir+ base+'.html', data, null, function(err, html){
           res.send(html);
        });
      });

     }

     if (base==='blogue-histoire') {


     }

     app.get('/'+base+'.html', function(req, res) {
       res.redirect('/'+base);
     });

     app.get('/fr/'+base+'.html', function(req, res) {
       res.redirect('/fr/'+base);
     });

  }
});


glob(html_dir +'/en/*.html', {}, (err, files)=>{

  let lan='en';
  for(let file of files)
  {


    let base = path.parse(file).name;
    if (base!=='blogue-histoire') {
       //  app.get('/'+base, function(req, res) {
       //   res.sendFile(html_dir + base+'.html');
       // });

       app.get('/'+lan+'/'+base, function(req, res) {
        //res.sendFile(html_dir +'/'+lan+'/'+ base+'.html');
        let data={};
        ejs.renderFile(html_dir+'/'+lan+'/'+ base+'.html', data, null, function(err, html){
           res.send(html);
        });
      });

     }

     if (base==='blogue-histoire') {


     }

     // app.get('/'+base+'.html', function(req, res) {
     //   res.redirect('/'+base);
     // });

     app.get('/'+lan+'/'+base+'.html', function(req, res) {
       res.redirect('/'+lan+'/'+base);
     });

  }
});


glob(html_dir +'html/*.html', {}, (err, files)=>{
  for(let file of files)
  {


    let base = path.parse(file).name;
        app.get('/html/'+base, function(req, res) {
         res.sendFile(html_dir +'html/'+ base+'.html');
       });

     app.get('/html/'+base+'.html', function(req, res) {
       res.redirect('/html/'+base);
     });
  }
});

app.use('/css', express.static(html_dir+'css/'));
app.use('/js', express.static(html_dir+'js/'));
app.use('/img', express.static(html_dir+'img/'));
app.use('/bootstrap', express.static(html_dir+'bootstrap/'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
