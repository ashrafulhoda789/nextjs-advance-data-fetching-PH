import BookCard from "@/components/BookCard";

/**
 * cache: no-store -> It will fetch the data on every request, and it will not cache the data. SSR
 * cache: force-cache -> It will cache the data, and it will not fetch the data on every request. SSG
 * revalidate: 20 -> It will cache the data for 20 seconds, and it will fetch the data after 20 seconds. ISR 
 */


const BooksPage = async() => {

    const res = await fetch('http://localhost:5000/books', {cache: 'no-store'});
    const books = await res.json();
    return (
        <div>
            <h2>Books: {books.length}</h2>
            <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;