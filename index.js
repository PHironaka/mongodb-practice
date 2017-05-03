const
  express = require('express'),
  app = express()



  app.listen(1234, (err) => {
    console.log(err || "Server running on 1234")
  })
