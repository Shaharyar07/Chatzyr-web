import React,{useEffect} from 'react';
import './privacyterms.css'
import ScrollToTopButton from '../components/ScrollTop';

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top left of the page
      }, []);
    return (
        <div className="container">
            <div className="content">
                <section>
                    <h2>Refund and Return Policy</h2>
                    {/* Include your privacy policy content here */}
                </section>
                <section>
                    <h2>1. What is Chatzyr's return and refund policy?</h2>
                    <p>Chatzyr believes in providing a fair return and refund policy. We abide by the country's return and refund policy if the product is defective and does not meet its description as shown on our website or app.
                    </p>
                    {/* Include your terms of use content here */}
                </section>
                <section>
                    <h2>2. How do I initiate a return or refund? </h2>
                    <p>To initiate a return or refund, please contact our customer support team through our website or app. They will guide you through the process and assist you with any queries you may have if applicable under mutual settlement. 
                    </p>
                </section>
                <section>
                    <h2>3.	What is the timeframe for initiating a return or refund?</h2>
                    <p>You can initiate a return or refund within [2] days of receiving the product. Please refer to our website or app for the exact timeframe as it may vary depending on your location. We are friendly people, so we don’t really compromise our dearest customers we always try to assist them and maintain a healthy long-term relationship with them.</p>
                </section>
                <section>
                    <h2>4. Can I return or refund a product if I simply change my mind?    </h2>
                    <p>Unfortunately, we do not accept returns or provide refunds for a change of mind. Our return and refund policy strictly applies to defective products or items that do not meet their description.</p>
                </section>
                <section>
                    <h2>5.	How long does it take to process a return or refund?</h2>
                    <p>Once we receive the returned product, it may take [7] business days for us to process the return or refund depending on the location and size of the product. Please note that the actual refund may take additional time to reflect in your account, depending on your payment method. </p>
                </section>
                <section>
                    <h2>6.	Do I need to pay for return shipping?</h2>
                    <p> If the return or refund is due to a defective product or an error on our part, we will cover the return shipping costs. However, if the return or refund is due to a change of mind or any other reason not covered by our policy, you will be responsible for the return shipping costs. (which is currently not applicable because we are not accepting any refunds in case of change of mind).</p>
                </section>

                <section>
                    <h2>7.	Can I exchange a product instead of getting a refund?  </h2>
                    <p> In most cases, we do not offer exchanges. However, if the product you received is defective, we will gladly exchange it for a new one. Please contact our customer support team for further assistance. </p>
                </section>
                <section>
                    <h2>8.	What if the product I received is damaged during shipping? </h2>
                    <p>If the product you received is damaged during shipping, please contact our customer support team immediately. We may require photographic evidence of the damage to initiate a return or refund.  </p>
                </section>
                <section>
                    <h2>9.	What if I have further questions or concerns about the return and refund policy?</h2>
                    <p>  If you have any further questions or concerns about our return and refund policy, please reach out to our support team. They will be more than happy to assist you and provide clarification on any issues you may have.</p>
                </section>
            </div>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default RefundPolicy;
