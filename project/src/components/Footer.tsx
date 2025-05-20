import { Truck, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <img
              src="/favicon.png"
              alt="Ambati Logistics Logo"
              className="h-8 w-8"
            />              <span className="text-xl font-bold">AMBATI LOGISTICS</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in global logistics solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-gray-400 hover:text-white"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-gray-400 hover:text-white">
                  Track Shipment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">
                  3-9-90 Sharadha Nagar, Ramanthapur, 500013.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">
                  +91-9177656116 <br /> +91-8297333338
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">info@ambatilogistics.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Sunday <br/> 9:00 AM - 6:00 PM</li>
              {/* <li>Saturday: 9:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} AMBATI LOGISTICS. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
