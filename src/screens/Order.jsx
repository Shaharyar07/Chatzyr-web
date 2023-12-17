import React, { useState,useEffect } from 'react';
import './Order.css';
import { useLocation } from 'react-router-dom';

const OrderItemPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top left of the page
      }, []);
    const location = useLocation();
    const data = location.state;
    const [orderDetails, setOrderDetails] = useState({});
    const [orderText, setOrderText]= useState('Place Order');
    const [modalOpen, setModalOpen] = useState(false);
    const generateStrongID = () => {
        const timestamp = Date.now().toString(36);
        const randomStr = Math.random().toString(36).substr(2, 5);
        return `${timestamp}${randomStr}`.toUpperCase();
    };
    const orderID = generateStrongID();
    const handleOrder = (formData) => {
        
        setOrderDetails(formData);
        setOrderText('Placing Order...');
        
        fetch('https://chatzyr-ffd13b9f974e.herokuapp.com/sendOrderEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                orderDetails:formData,
                prodname: data.name,
                price: data.price,
                orderID: orderID
            }), // Send order details to backend
        })
        .then(response => {
            if (response.ok) {
                setOrderText('Place Order');
                setModalOpen(true);
                // Handle successful response, maybe show a confirmation to the user
            } else {
                // Handle error response
                setOrderText('Place Order');
                alert("Can't Place order Right Now.\nPlease Try Again Later");
            }
        })
        .catch(error => {
            // Handle fetch error
            setOrderText('Place Order');
            alert("Can't Place order Right Now.\nPlease Try Again Later");
        });
        // Here you can send the order details to a backend, generate a unique order number, etc.
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='order-item-page'>
            <div className='product'>
                <div className='image'>
                    <img src={data.img} alt="Item" className='productImage' />
                </div>
                <div className='details'>
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <h2><strong>Price: $ </strong>{data.price} / PKR: {((data.price)*data.PKR).toFixed(2)}</h2>
<br />
                    <p><strong>It will take few hours to update your badge or vip status after the purchase</strong></p>
                </div>
            </div>

            <form className='order-form' onSubmit={(e) => {
                e.preventDefault();
                const formData = {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    // Add more fields as needed
                };
                handleOrder(formData);
            }}>
                <input type="text" name="name" placeholder="Your Chatzyr Account Name" required />
                <input type="email" name="email" placeholder="Your Chatzyr Account Email" required />
                <button type="submit">{orderText}</button>
            </form>

            {modalOpen && (
                <div className='order-modal'>
                    {/* <div> */}
                        <h2>Your Order Details</h2>
                        <h4>Order Placed Succesfully</h4>
                        <p><strong>Name:</strong> {orderDetails.name}</p>
                        <p><strong>Email:</strong> {orderDetails.email}</p>
                        <p><strong>Product:</strong> {data.name}</p>
                        <p><strong>Price:</strong> ${data.price}</p>

                        <p><strong>Order ID:</strong> {orderID}</p>
                    {/* </div> */}
                    <button onClick={closeModal}>Close</button>
                </div>
            )}
        </div>
    );
};

export default OrderItemPage;
