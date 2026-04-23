
export const generateStaticParams = async() =>{
    const res = await fetch('http://localhost:5000/books');
    const books = await res.json();
    
    return books.slice(1,3).map(book => ({bookId: book.id}));
}


const BookDetailPage = async ({ params }) => {
    const { bookId } = await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const book = await res.json();
    const { title, author, price, rating } = book
    return (
        <div>
            <h2>Book: {bookId}</h2>
            <div className="card bg-base-100 card-md shadow-sm">
                <div className="card-body">

                    <h2 className="card-title">{title}</h2>
                    <p>${price}</p>
                    <p>{author}</p>
                    <p>{rating}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;