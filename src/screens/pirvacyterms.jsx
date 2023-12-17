import React,{useEffect} from 'react';
import './privacyterms.css'
import ScrollToTopButton from '../components/ScrollTop';

const PrivacyAndTerms = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top left of the page
      }, []);
    return (
        <div className="container">
            <div className="content">
                <section>
                    <h2>Privacy Policy</h2>
                    <p>To access and use the Services, you will need to register and create an account (your “Account”). By
                        creating an Account, you represent that you are 13 years or older and are not barred from using the
                        Services under applicable law. When creating an Account, you may be required to provide certain PII
                        about yourself and establish a username and a password. You agree to provide accurate, current, and
                        complete information about your Account.</p>
                    {/* Include your privacy policy content here */}
                </section>
                <section>
                    <h2>Changes to Terms or Services</h2>
                    <p>We may modify the Terms at any time, at our sole discretion. If we do so, we’ll let you know either by
                        posting the modified Terms on the Site or Apps or through other communications. It’s important that
                        you review the Terms whenever we modify them because if you continue to use the Services after we
                        have posted modified Terms on the Site or Apps, you are indicating to us that you agree to be bound by
                        the modified Terms. If you don’t agree to be bound by the modified Terms, then you can’t use the
                        Services anymore. Because our Services are evolving over time we may change or discontinue all or any
                        part of the Services, at any time and without notice, at our sole discretion.
                    </p>
                    {/* Include your terms of use content here */}
                </section>
                <section>
                    <h2>Content Submissions</h2>
                    <p>For purposes of these Terms: (i) “Content” means text, graphics, images, music, software, audio, video,
                        works of authorship of any kind, and information or other materials that are posted, generated, provided
                        or otherwise made available through the Services; and (ii) “User Content” means any Content that
                        Account holders (including you) provide to be made available through the Services. Content includes
                        without limitation User Content.
                        CHAT Z Y R does not claim any ownership rights in any User Content that you make available through the
                        Services and nothing in these Terms will be deemed to restrict any rights that you may have to use and
                        exploit your User Content. Subject to the foregoing, CHAT Z Y R and its licensors exclusively own all
                        rights, title, and interest in and to the Services and Content, including all associated intellectual property
                    </p>
                </section>
            </div>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default PrivacyAndTerms;
