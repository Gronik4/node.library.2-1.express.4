import express from 'express';
import { nanoid } from 'nanoid';


class Book{
  constructor(
    id = '',
    title = "",
    description = "",
    authors = "",
    favorite = "",
    fileCover = "",
    fileName = ""
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.authors = authors
    this.favorite = favorite
    this.fileCover = fileCover
    this.fileName = fileName
  }
}

const stor = {
  books: [
    new Book(
      'sDwXvXL',
      'Мартин Иден',
      'Молодой моряк по имени Мартин Иден спасает от смерти незнакомого юношу',
      'Джек Лондон',
      '10',
      'Твёрдый',
      'MartinIden_JackL'
    ),
    new Book(
      'SgfsucY',
      'Безымянный раб',
      'Хорошее боевое фэнтези. На Торн не по своей воле попадают несколько землян.',
      'Виталий Зыков',
      '10',
      'Твёрдый',
      'NamelessSlave_VitaliZ'
    )
  ] 
}

const app = express();
app.use(express.json());

app.post('/api/user/login', (req, res)=>{res.json('id: 1, mail: test@mail.ru ')});
app.get('/api/books', (req, res)=>{
  res.json(stor.books);
});
app.get('/api/books/:id', (req, res)=>{
  const {id} = req.params;
  const findEl = stor.books.find(el=> el.id === id);
  if(findEl) {res.json(findEl);} else {
    res.status(404);
    res.json('404 | Книги с таким id нет в библиотеке.');
  }
});
app.post('/api/books', (req, res)=>{
  const {title, description, authors, favorite, fileCover, fileName} = req.body;
  if(!title || !description || !authors || !favorite || !fileCover || !fileName) {
    res.status(204);
    res.json('204 | Запись не сделана, недостаточно данных.')
  } else {
    const id = nanoid(7);
    const newBook = new Book(id, title, description, authors, favorite, fileCover, fileName);
    stor.books.push(newBook);
    res.status(201);
    res.json(stor.books);
  }
});
app.put('/api/books/:id', (req, res)=>{
  const {id} = req.params;
  const idx = stor.books.findIndex(el=> el.id === id);
  if(idx !== -1){
    const {title, description, authors, favorite, fileCover, fileName} = req.body;
    stor.books[idx] = {
      ... stor.books[idx], title,  description, authors, favorite, fileCover, fileName
    }
    res.json(stor.books);
  } else {
    res.status(404);
    res.json('404 | Книги с таким id нет в библиотеке.');
  }
});
app.delete('/api/books/:id', (req, res)=>{
  const {id} = req.params;
  const idx = stor.books.findIndex(el=> el.id === id);
  if(idx !== -1) {
    stor.books.splice(idx, 1);
    res.json(stor.books);
  } else {
    res.status(404);
    res.json('404 | Книги с таким id нет в библиотеке.');
  }
});

const port = process.env.PORT || 7989;
app.listen(port, (err)=>{
  if(err) {
    return console.log(`string 65: ${err}`);
  } else {console.log(`Server starting on port ${port}`);}
});
