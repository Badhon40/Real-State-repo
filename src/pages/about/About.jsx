import Footer from '../../conponents/footer/Footer';
import 'animate.css';

const About = () => {
    return (
        <div>
            <div className="about-page container mx-auto px-4 py-8 md:px-20">
            <section className="intro mb-8">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p>Welcome to SALORD, where we believe in delivering excellence and creating lasting impressions. Our team is dedicated to providing the best real estate services to help you find your dream home or investment property.</p>
            </section>

            <section className="mission-vision mb-8">
                <h2 className="text-3xl font-bold mb-4">Our Mission and Vision</h2>
                <p>Our mission is to connect people with their ideal properties through exceptional service, innovative solutions, and a commitment to integrity. We envision a future where [Company Name] is synonymous with trust and excellence in the real estate industry.</p>
            </section>

            <section className="history mb-8">
                <h2 className="text-3xl font-bold mb-4">Our History</h2>
                <p>SALORD was founded in 2015 with a vision to revolutionize the real estate market. Over the years, we have grown from a small team to a leading real estate agency, achieving numerous milestones and helping countless clients along the way.</p>
            </section>

            <section className="values mb-8">
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <ul className="list-disc list-inside">
                    <li>Integrity: We operate with honesty and transparency in all our dealings.</li>
                    <li>Excellence: We strive for excellence in everything we do.</li>
                    <li>Innovation: We embrace change and continually seek new ways to improve.</li>
                    <li>Customer Focus: Our clients are at the heart of our business.</li>
                </ul>
            </section>

            <section className="team mb-8">
                <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
                <div className="team-members grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="team-member text-center animate__animated animate__bounce animate__repeat-2">
                        <img src="https://i.ibb.co/f09XNtg/team-3.png" alt="Team Member 1" className="w-full rounded-full mb-2" />
                        <h3 className="text-2xl font-bold">John Doe</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div className="team-member text-center animate__animated animate__bounce animate__repeat-2">
                        <img src="https://i.ibb.co/fGQYQxQ/team-2.png" alt="Team Member 2" className="w-full rounded-full mb-2" />
                        <h3 className="text-2xl font-bold">Jane Smith</h3>
                        <p>Head of Sales</p>
                    </div>
                    <div className="team-member text-center animate__animated animate__bounce animate__repeat-2">
                        <img src="https://i.ibb.co/GdVt4dV/team-1.png" alt="Team Member 3" className="w-full rounded-full mb-2" />
                        <h3 className="text-2xl font-bold">Emily Johnson</h3>
                        <p>Marketing Director</p>
                    </div>
                </div>
            </section>

            <section className="services mb-8">
                <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                <p>We offer a wide range of services to meet all your real estate needs, including property sales, rentals, property management, and real estate consulting. Our team is equipped with the expertise and resources to provide tailored solutions for every client.</p>
            </section>

            <section className="testimonials mb-8">
                <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
                <div className="testimonial">
                    <p>"SALORD helped us find our dream home in no time. Their professionalism and dedication were evident from the start. Highly recommend!" - Sarah L.</p>
                </div>
                <div className="testimonial mt-4">
                    <p>"Working with SALORD was a fantastic experience. They made the process of selling our house smooth and stress-free." - Michael K.</p>
                </div>
            </section>

        </div>

        <Footer></Footer>
        </div>
    );
};

export default About;
