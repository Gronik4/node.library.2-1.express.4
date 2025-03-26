import express from 'express';
import { nanoid } from 'nanoid';
//const express = require('express');
//const {nanoid} = require('nanoid');


class Book{
  constructor(
    id = nanoid(7),
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
      nanoid(7),
      'Мартин Иден',
      'Молодой моряк по имени Мартин Иден спасает от смерти незнакомого юношу',
      'Джек Лондон',
      '10',
      'Твёрдая',
      'MartinIden_JackL'
    ),
    new Book(
      nanoid(7),
      'Безымянный раб',
      'Хорошее боевое фэнтези. На Торн не по своей воле попадают несколько землян.',
      'Виталий Зыков',
      '10',
      'Твёрдая',
      'NamelessSlave_VitaliZ'
    )
  ] 
}

const app = express();
//app.use(express.json);

/*app.post('/api/user/login', (res, req)=>{res.json({ id: 1, mail: "test@mail.ru" })});
app.get('/api/books', (res, req)=>{
  const {books} = stor;
  console.log('id: 1, mail: "test@mail.ru" ');
  res.json(books);
});
app.get('/api/books/:id', (res, req)=>{});
app.post('/api/books', (res, req)=>{});
app.put('/api/books/:id', (res, req)=>{});
app.delete('/api/books/:id', (res, req)=>{});*/
app.get('/api/books', (req, res)=> res.send('Hello world!!'));

const port = process.env.PORT || 8080;
app.listen(port, (err)=>{
  if(err) {
    return console.log(`string 65: ${err}`);
  } else {console.log(`Server starting on port ${port}`);}
});
