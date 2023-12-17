import React,{useEffect} from 'react';
import './privacyterms.css'
import ScrollToTopButton from '../components/ScrollTop';

const Policy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top left of the page
      }, []);
    return (
        <div className="container">
            <div className="content">
                <section>
                    <h2>Shipping Policy</h2>
                    {/* Include your privacy policy content here */}
                </section>
                <section>
                    <h2>1. Do you offer shipping for all your services? </h2>
                    <p>No, most of our services are virtual and do not require shipping. However, we do offer shipping for products purchased from our e-commerce store.
                    </p>
                    {/* Include your terms of use content here */}
                </section>
                <section>
                    <h2>2. How do you determine the shipping method for your products?</h2>
                    <p>We carefully consider the best and most secure mode of shipping for our products to ensure they arrive safely with our customers.
                    </p>
                </section>
                <section>
                    <h2>3. How long does shipping usually take?</h2>
                    <p>Shipping times may vary depending on your location and the shipping method chosen. We strive to deliver your order as quickly as possible, and estimated shipping times will be provided during the checkout process.</p>
                </section>
                <section>
                    <h2>4. What should I do if my shipment is delayed or lost?</h2>
                    <p>If your shipment is delayed or lost, please contact our support team. We will investigate the issue and work towards resolving it as quickly as possible.</p>
                </section>
                <section>
                    <h2>5. Do you offer international shipping?</h2>
                    <p>Yes, we offer international shipping to select countries. Shipping rates and delivery times may vary depending on the destination.</p>
                </section>
                <section>
                    <h2>6. Can I change my shipping address after placing an order?</h2>
                    <p>If you need to change your shipping address after placing an order, please contact our customer support team as soon as possible. We will do our best to accommodate your request, but please note that changes may not be possible if the order has already been dispatched.</p>
                </section>
            </div>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default Policy;
