import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import Books from "../Books/Books"; // Asegúrate de importar el componente Books
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const { buyProducts } = useContext(dataContext);

  useEffect(() => {
    axios("data.json")
      .then((res) => setData(res.data))
      .catch((error) => {
        console.error("Error fetching books from data.json:", error);
      });
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShow(true);
  };

  return (
    <div className="container">
      {data.map((product) => (
        <div className="bookCard" key={product.id} onClick={() => handleBookClick(product)}>
          <img className="bookCard_img" src={product.img} alt="img-product-card" />
          <h3 className="title">{product.name}</h3>
        </div>
      ))}
      {selectedBook && (
        <Books 
          show={show} 
          item={{ volumeInfo: { title: selectedBook.name, authors: [selectedBook.author], description: selectedBook.description, imageLinks: { smallThumbnail: selectedBook.img } } }} 
          onClose={() => setShow(false)} 
        />
      )}
    </div>
  );
};

export default Products;
