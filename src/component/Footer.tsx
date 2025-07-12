const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-purple-100 to-indigo-200 text-base-content pt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-purple-300">
          {/* Brand Info */}
          <div>
            <h2 className="text-xl font-bold text-purple-700 mb-3">ACME Industries</h2>
            <p className="text-sm text-gray-600">
              Building reliable tech and design solutions since 2025.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-2 text-purple-600">Services</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a className="hover:text-purple-800">Branding</a></li>
              <li><a className="hover:text-purple-800">Design</a></li>
              <li><a className="hover:text-purple-800">Marketing</a></li>
              <li><a className="hover:text-purple-800">Advertisement</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2 text-purple-600">Company</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a className="hover:text-purple-800">About us</a></li>
              <li><a className="hover:text-purple-800">Contact</a></li>
              <li><a className="hover:text-purple-800">Jobs</a></li>
              <li><a className="hover:text-purple-800">Press kit</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-2 text-purple-600">Legal</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a className="hover:text-purple-800">Terms of use</a></li>
              <li><a className="hover:text-purple-800">Privacy policy</a></li>
              <li><a className="hover:text-purple-800">Cookie policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-sm text-gray-600 py-6">
          <p>
            &copy; {new Date().getFullYear()} — All rights reserved by{" "}
            <span className="font-semibold text-purple-700">ACME Industries Ltd</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
