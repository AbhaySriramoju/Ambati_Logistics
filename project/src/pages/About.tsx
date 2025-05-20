export default function About() {
  return (
    <div className="min-h-screen py-16">
       {/* Gradient CSS injected here */}
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
          About us
        </h1>
        {/* Who We Are */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Ambati Logistics Pvt Ltd is a next-generation, tech-enabled logistics company founded to address the challenges of fragmented supply chains, inefficient tracking, and the lack of tailored logistics in India.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Headquartered in India, we integrate 3PL, 4PL, and 5PL logistics under one platform to serve businesses of all sizes and types with seamless operations — from local courier deliveries to global freight forwarding.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To be India’s most reliable and intelligent logistics partner by offering integrated, scalable, and sustainable logistics infrastructure supported by real-time tracking, AI, and automation.
          </p>
        </section>

        {/* Our Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To simplify logistics in India through innovation, technology, and customer-first solutions. Our goal is to create lasting value for our clients while contributing to a more connected and efficient world.
          </p>
        </section>

        {/* Our Approach to Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Approach to Challenges</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In the dynamic world of logistics, challenges are inevitable. We approach each challenge as an opportunity to demonstrate our expertise and commitment to excellence. Our methodology focuses on:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Infrastructure Gaps: Poor road networks, underdeveloped ports, and congestion</li>
            <li>Regulatory Confusion: Complex and evolving compliance norms</li>
            <li>Supply Chain Fragmentation: Lack of integrated visibility</li>
            <li>Driver Shortages: Skill and availability gaps across the transport sector</li>
            <li>Sustainable and efficient solutions</li>
          </ul>
        </section>

        {/* We Address These Using */}
        <section>
          <h2 className="text-3xl font-bold mb-6">We Address These Using:</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Advanced Technology</h3>
              <p className="text-gray-600">
                Implementing cutting-edge logistics management systems and real-time tracking solutions to ensure efficient operations and complete visibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our experienced professionals bring diverse expertise and industry knowledge to solve complex logistics challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Global Network</h3>
              <p className="text-gray-600">
                Leveraging our extensive network of partners and resources to provide comprehensive solutions worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sustainable Practices</h3>
              <p className="text-gray-600">
                Implementing eco-friendly solutions and optimizing routes to reduce environmental impact while maintaining efficiency.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}