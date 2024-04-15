const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

// const http = require('http').createServer(app);
// const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  const apiKey = 'f3a3a7be3d49dd862f58ea2c064483ff';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const weatherCurrent = response.data;
    res.json(weatherCurrent);
  } catch (error) {
    console.error('Błąd podczas pobierania danych z API:', error.message);
    res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych z API' });
  }
});

// app.get('/daysweather/:city', async (req, res) =>{
//   const city = req.params.city;
//   const apiKey = 'f3a3a7be3d49dd862f58ea2c064483ff';
//   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=16&appid=${apiKey}`;

//   try{
//     const response = await axios.get(apiUrl);
//     const weather = response.data;
//     res.json(weather);
//   }catch(error){
//     console.error('Błąd podczas pobierania danych z API:', error.message);
//     res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych z API' });
//   }
// });

app.get('/currenciesA', async (req, res) => {
  const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/A';

  try {
    const response = await axios.get(apiUrl);
    const currencies = response.data;
    res.json(currencies);
  } catch (error) {
    console.error('Błąd podczas pobierania danych z API:', error.message);
    res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych z API' });
  }
});


app.get('/currencies', async (req, res) => {
  const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/C';

  try {
    const response = await axios.get(apiUrl);
    const currencies = response.data;
    res.json(currencies);
  } catch (error) {
    console.error('Błąd podczas pobierania danych z API:', error.message);
    res.status(500).json({ error: 'Wystąpił błąd podczas pobierania danych z API' });
  }
});

app.get('/exchangerateofcurrency/:code/:startDate/:endDate', async (req, res) =>{
  const code = req.params.code;
  const startDate = req.params.startDate;
  const endDate = req.params.endDate;
  const apiUrl = `http://api.nbp.pl/api/exchangerates/rates/C/${code}/${startDate}/${endDate}`;

  try{
    const response = await axios.get(apiUrl);
    const rates = response.data;
    res.json(rates);
  }catch(error){
    console.error('Błąd podczas pobierania danych z API:', error.message);
    res.status(500).json({error: 'Wystąpił błąd podczas pobierania danych z API'});
  }
});

// io.on('connection', (socket) =>{
//   console.log('Nowy użytkownik połączony');

//   socket.on('textUpdate', (text)=>{
//     io.emit('textUpdate', text);
//   });

//   socket.on('disconnect', ()=>{
//     console.log('Użytkownik rozłączony');
//   });
// });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
