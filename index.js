const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

function leerCanciones() {
  try {
    const data = fs.readFileSync('repertorio.json', 'utf8');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/canciones', (req, res) => {
  const canciones = leerCanciones();
  res.json(canciones);
});

app.post('/canciones', (req, res) => {
  const nuevaCancion = req.body;
  const canciones = leerCanciones();
  canciones.push(nuevaCancion);
  fs.writeFileSync('repertorio.json', JSON.stringify(canciones));
  res.send('Canción agregada');
});

app.put('/canciones/:id', (req, res) => {
  const { id } = req.params;
  const canciones = leerCanciones();
  const index = canciones.findIndex((l) => l.id == id);
  canciones[index] = req.body;
  fs.writeFileSync('repertorio.json', JSON.stringify(canciones));
  res.send('Cancion modificada');
});

app.delete('/canciones', (req, res) => {
  const { id } = req.query;
  let canciones = leerCanciones();
  canciones = canciones.filter((l) => l.id != id);
  fs.writeFileSync('repertorio.json', JSON.stringify(canciones));
  res.send('Canción eliminada');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
