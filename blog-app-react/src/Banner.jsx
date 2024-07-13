const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-64 flex items-center justify-center text-white"
      style={{ backgroundImage: "url('path/to/your/image.jpg')" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-2 text-lg">Your success is our priority.</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
