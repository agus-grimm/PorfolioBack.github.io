
const express = require('express');
var cors = require('cors');
const morgan = require('morgan');
const runPythonScript = require("./utils/pythonRunner.ts")


const app = express()

const port = 4000
app.use(cors())


morgan("dev")


 
app.get('/', (req, res) => {
  const callback = (data) => {
    console.log(data)
    res.send(data)
  }
  runPythonScript({
    scriptPath: "src/index.py",
    callback: callback
  })
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})