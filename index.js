import express from 'express';
import { nanoid } from 'nanoid';


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

export const stor = {
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
console.log(stor.books);
