import { ArrowRight, Truck, Package, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[500px] relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Global Logistics Solutions for Your Business
            </h1>
            <p className="text-xl mb-8">
              Ambati Logistics offers a centralized logistics platform combining courier services, freight forwarding, warehousing, packaging, and SCM consulting. With real-time AI-powered tracking and complete supply chain visibility, we help you take control of your logistics like never before.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* About Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            About Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Delivery</h3>
              <p className="text-gray-600">
                We ensure your shipments reach their destination safely and on
                time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Handling</h3>
              <p className="text-gray-600">
                Your cargo is handled with utmost care throughout its journey.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">
                Our extensive network ensures worldwide coverage for your
                logistics needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Manufacturing & FMCG",
              "Retail & Lifestyle Products",
              "E-commerce",
              "Healthcare",
              "Technology",
              "Automotive",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{industry}</h3>
                <p className="text-gray-600">
                  Specialized logistics solutions tailored for the{" "}
                  {industry.toLowerCase()} sector.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
