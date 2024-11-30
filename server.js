const express = require('express');
const path = require('path');
const app = express();

const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  })

  app.get('/event', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'event.html'));
  })

  app.get('/myBooking', (req, res) => {
    res.sendFile(path.join(dirname, 'public', 'myBookings.html'));
  })

  app.get('/refund', (req, res) => {
    res.sendFile(path.join(dirname, 'public', 'refund.html'));
  })

  app.get('/schedule', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'schedule.html'));
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })