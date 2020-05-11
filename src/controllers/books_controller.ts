import {Request, Response} from 'express';
import BookModel, { Book } from '../models/book_model';

export class BooksController {

    public async index (req: Request, res: Response): Promise<void> {
        const books:Book[] = await BookModel.find();
        res.render('books/index', {
            title: 'Libros',
            books
        }); 
        // console.log(books);
    }

    public renderFormBook (req: Request, res: Response): void {
        res.render('books/add', {
            title: 'Agregar Libro'
        });
    }

    public async saveBook (req: Request, res: Response) {
        const { title, author, isbn } = req.body;
        const book:Book = new BookModel({title, author, isbn});
        await book.save();
        res.redirect('/books');
    }

}