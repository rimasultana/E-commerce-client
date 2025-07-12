import { FaShippingFast, FaShieldAlt, FaHeadset, FaUndoAlt } from "react-icons/fa";
const Service = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 mb-10">
            We provide the best support and experience for your online shopping.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
              <div className="text-purple-600 text-4xl mb-4">
                <FaShippingFast />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-500 text-sm">
                Get your orders delivered quickly to your doorstep with our
                reliable shipping.
              </p>
            </div>

            <div className="card bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
              <div className="text-purple-600 text-4xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-500 text-sm">
                All your transactions are encrypted and fully protected.
              </p>
            </div>

            <div className="card bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
              <div className="text-purple-600 text-4xl mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-500 text-sm">
                Our friendly support team is available around the clock.
              </p>
            </div>

            <div className="card bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
              <div className="text-purple-600 text-4xl mb-4">
                <FaUndoAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-500 text-sm">
                Hassle-free returns on all products if you’re not satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
