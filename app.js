
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", (req, res, next) => {
  res.send("Welcome to POST Api")
});


app.get('/', (req, res) => res.send('hello there'));

app.listen(3000, () => {
  console.log('It alive on http://localhost:3000');
})



app.get('/employee', (req, res)=>{
  res.status(200).send({
    department: 'Software and IT Services',
    location:'United Staes'
  })
});

app.post('/employee/:id', (req, res)=>{
  const { id } = req.params;
  const { age } = req.body;

  if(!age){
    res.status(418).send({message: 'We need age!'})
  }

  res.send({
    employee: 'The age ${age} and ID of ${id}',
  });

});
