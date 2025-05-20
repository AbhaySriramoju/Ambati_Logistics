import { Truck, Package, Globe, BarChart } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen py-16">
      <style>
        {`
          .gradient-text {
            background: linear-gradient(120deg, #1C99FE 20.69%, #7644FF 50.19%, #FD4766 59.69%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        `}
      </style>
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-center mb-16 gradient-text">
          Services
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Complete Logistics Services Designed for Your Business
        </h1>

        <div className="max-w-3xl mx-auto text-center text-gray-600 mb-16">
          <p className="mb-4">
            At Ambati Logistics, we understand that every business has unique
            logistics requirements. Our comprehensive suite of services is
            designed to meet these diverse needs while ensuring efficiency,
            reliability, and cost-effectiveness. We combine industry expertise
            with cutting-edge technology to deliver solutions that drive your
            business forward.
          </p>
          <p>
            Our integrated approach ensures seamless coordination across all
            aspects of your supply chain, from warehousing to last-mile
            delivery. We're committed to providing you with the highest level of
            service while maintaining complete transparency throughout the
            process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">
                Transportation Services
              </h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Ground transportation and freight services</li>
              <li>• Air freight solutions</li>
              <li>• Ocean freight and maritime logistics</li>
              <li>• Intermodal transportation</li>
              <li>• Express delivery services</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Package className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">Warehousing Solutions</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Inventory management</li>
              <li>• Order fulfillment</li>
              <li>• Cross-docking services</li>
              <li>• Climate-controlled storage</li>
              <li>• Security monitoring</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">Global Logistics</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• International shipping</li>
              <li>• Customs clearance</li>
              <li>• Import/Export documentation</li>
              <li>• Global trade compliance</li>
              <li>• Cross-border logistics</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <BarChart className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">Supply Chain Solutions</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Supply chain optimization</li>
              <li>• Demand planning</li>
              <li>• Network design</li>
              <li>• Risk management</li>
              <li>• Performance analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
