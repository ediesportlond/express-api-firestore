import express from 'express';
import { createCoffee, getAllCoffees } from './src/coffees.js';
const app = express();
const PORT = 3030;
app.use(express.json());

app.get('/coffees/all', getAllCoffees)

app.post('/coffees', createCoffee);
// {"success":true,"message":"Created coffee: xTDCjC71nRYVsRRGLFpu"}
// {"success":true,"message":"Created coffee: mVnkiC0IZJ5D9rU9EOuM"}

app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));