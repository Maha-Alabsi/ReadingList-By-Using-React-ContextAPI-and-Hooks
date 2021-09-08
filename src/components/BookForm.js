import { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit=(e)=>{
      e.preventDefault();
      addBook(title,author)
    //   reset value
    setTitle('');
    setAuthor('')
    console.log(title,author)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Book title'
        // value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
        required
      />
      <input
        type='text'
        placeholder='Book author'
        // value={author}
        onChange={e => {
          setAuthor(e.target.value);
        }}
      />
      <input
        type='submit'
        value='Add Book'
      />
    </form>
  );
};

export default NewBookForm;
