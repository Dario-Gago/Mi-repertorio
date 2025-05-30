const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/canciones', (req, res) => {
  const canciones = JSON.parse(fs.readFileSync('canciones.json'));
  res.json(canciones);
});

app.post('/canciones', (req, res) => {
  const nuevaCancion = req.body;
  const canciones = JSON.parse(fs.readFileSync('canciones.json'));
  canciones.push(nuevaCancion);
  fs.writeFileSync('canciones.json', JSON.stringify(canciones));
  res.send('Canción agregada');
});

app.put('/canciones/:id', (req, res) => {
  const { id } = req.params;
  const canciones = JSON.parse(fs.readFileSync('canciones.json'));
  const index = canciones.findIndex((l) => l.id == id);
  canciones[index] = req.body;
  fs.writeFileSync('canciones.json', JSON.stringify(canciones));
  res.send('Cancion modificada');
});

app.delete('/canciones/:id', (req, res) => {
  const { id } = req.params;
  let canciones = JSON.parse(fs.readFileSync('canciones.json'));
  canciones = canciones.filter((l) => l.id != id);
  fs.writeFileSync('canciones.json', JSON.stringify(canciones));
  res.send('Libro eliminado');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
