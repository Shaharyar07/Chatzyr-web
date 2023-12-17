import React, { useEffect, useState } from 'react';
import './shop.css';
import productsJSON from './products.json'
import ScrollToTopButton from '../components/ScrollTop';
import { useNavigate } from "react-router-dom";
import LoaderComp from '../components/loader';

var usdToPkr; 


function Shop() {
  const [products, setProducts] = useState([]);
  const [merchandise, setMerchandise] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const navigate = useNavigate();

  

  const handleClick = (name,price,desc,image,pkr) => {
    const data = { name: name, price:price, description:desc, img:image,PKR:pkr };
    navigate("/order", { state: data });
  };
  const redirectToAnotherPage = () => {
    window.location.href = '/'; // Replace '/other-page' with the URL of the page you want to redirect to
};

const showAlertAndRedirect = () => {
    const alertMessage = "Can't Open Page\nCheck Your Internet Connection";

    const userConfirmation = window.confirm(alertMessage);

    if (userConfirmation) {
        redirectToAnotherPage();
    }
};
  async function fetchWebDetails() {
    try {
      const response = await fetch('https://chatzyr-ffd13b9f974e.herokuapp.com/webDetails');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const updatedProducts = [];
      const updatedMerchandise = [];

      data.forEach(item => {
        if (item.type === 0 || item.type === 2) {
          updatedProducts.push(item);
        } else if (item.type === 1) {
          updatedMerchandise.push(item);
        }
        // Add further conditions for other types if needed
      });

      setProducts(updatedProducts);
      // setMerchandise(updatedMerchandise);
      setLoading(false);
    } catch (error) {
      showAlertAndRedirect();
      console.error('Error fetching web details:', error);
      // setLoading(false);
    }
  }

  useEffect(() => {
    const apiKey = 'cur_live_BLYINAX9a1sKs1G2y8eAwCbs9bUlQLHd3k5A8fLD'; // Replace this with your actual API key

fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
      if (data && data.data && data.data.PKR && data.data.PKR.value !== undefined) {
         usdToPkr = data.data.PKR.value; // Assuming PKR is available in the data
        //  console.log(usdToPkr);
        // You can use the data here, update state in a React component, etc.
    } else {
        console.error('USD value not found in the data');
    }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    fetchWebDetails();
  }, []);
  // State for modal (larger image view)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to open the modal with a selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  const truncateDescription = (description, wordsCount) => {
    const words = description.split(' ');
    if (words.length > wordsCount) {
      return words.slice(0, wordsCount).join(' ') + '...';
    }
    return description;
  };
  
  return (
    <div className="product-list-container">
      {loading ? (
        <div className="loader">
          <LoaderComp></LoaderComp>
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img
                src={product.image}
                alt={product.name}
                onClick={() => openModal(product)}
              />
            
                <div
                onClick={()=>{handleClick(product.name,product.price,product.description,product.image,usdToPkr)}}
             > 
                <h3>{product.name}</h3>
                <p>Price: ${product.price} / PKR: {((product.price)*usdToPkr).toFixed(2)}</p><br />
                <p>{truncateDescription(product.description, 4)}</p>
                </div> 
            </div>
          ))}
        </div>
      )}
      <div className="merchandise-list-container">
        <h2 style={{ textAlign: 'center' }}>Chatzyr Merchandise</h2>
        {merchandise.length > 0 ? (
          <div className="product-grid">

            {merchandise.map((merchandise, index) => (
              <div className="product-card" key={index}>
                <img
                  src={merchandise.image}
                  alt={merchandise.name}
                  onClick={() => openModal(merchandise)}
                />
                <h3>{merchandise.name}</h3>
                <p>Price: ${merchandise.price} / PKR: {((merchandise.price)*usdToPkr).toFixed(2)}</p><br />
                <p>{truncateDescription(merchandise.description,4)}</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <p style={{ textAlign: 'center' }}>Chatzyr merchandise coming Soon</p>
          </div>

        )}
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <button style={{ width: 100, }} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
}

export default Shop;
