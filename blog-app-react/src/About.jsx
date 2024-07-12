

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our website! We are dedicated to providing the best
          services to our customers. Our team is comprised of experienced
          professionals who are passionate about their work and committed to
          excellence.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to deliver high-quality products and services that meet
          the needs and expectations of our clients. We believe in continuous
          improvement and strive to exceed industry standards.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for visiting our site. We look forward to serving you and
          helping you achieve your goals.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>John Doe - CEO</li>
          <li>Jane Smith - CTO</li>
          <li>Emily Johnson - Lead Developer</li>
          <li>Michael Brown - Project Manager</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
