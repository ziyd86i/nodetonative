const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
// var port = process.env.PORT || 3300;
var firebase = require('firebase')
var config = {
    apiKey: "AIzaSyCMO9R8FEp1QwdoO71WeA_dyMkAZ0TfyU8",
    authDomain: "testnative-e7864.firebaseapp.com",
    databaseURL: "https://testnative-e7864.firebaseio.com",
    projectId: "testnative-e7864",
    storageBucket: "testnative-e7864.appspot.com",
    messagingSenderId: "968048385985"
  };

firebase.initializeApp(config);
var database = firebase.database()

app.use(bodyParser.json())
app.use(cors())
app.get('/', (req,res) => {
  res.send('Hello Express And Node js')
})

app.get('/test', async (req,res) => {
  let province = []
  await database.ref('peopleIncome').once('value').then(snapshot => {
    province = snapshot.val()
  })

  res.send(province)

})

app.listen(3300, () => {
  console.log('Express start in port ' + 3300);
})