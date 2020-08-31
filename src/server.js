  // Servidor
  const express = require('express')
  const server = express()
  const port = process.env.PORT || 5500;
 
 // const port = process.env.PORT;
 // if (port == null || port == "") {
 //   port = 5500;
 // }
 // app.listen(port);
 
  //page
  const {
     pageLanding,
     pageStudy,
     pageGiveClasses,
     saveClasses
  } = require('./pages')
  
 
  // configurar nunjucks (template engine)
  const nunjucks = require('nunjucks')
  nunjucks.configure('src/views', {
      express: server,
      noCache: true,
      express: server,
      noCache: true,
  })
  
  // Inicio e configuração do servidor 
  //server
  // receber os dados do req.body
  .use(express.urlencoded({ extended: true }))
  // configurar arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))
  // rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  // Start do servidor
  .listen(port, function() { 
      console.log("app running")
 })