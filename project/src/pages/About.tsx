export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Who We Are */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            LogiTrack is a leading logistics solutions provider with over two decades of experience in the industry. We specialize in delivering comprehensive logistics services that help businesses optimize their supply chain operations and achieve their goals. Our team of experts combines industry knowledge with cutting-edge technology to provide innovative solutions that drive efficiency and growth.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to revolutionize the logistics industry by providing reliable, efficient, and sustainable solutions that empower businesses to thrive in the global marketplace. We are committed to delivering excellence in every aspect of our service while maintaining the highest standards of integrity and customer satisfaction.
          </p>
        </section>

        {/* Our Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We envision being the most trusted and innovative logistics partner globally, setting new standards in the industry through technological advancement, sustainable practices, and exceptional service delivery. Our goal is to create lasting value for our clients while contributing to a more connected and efficient world.
          </p>
        </section>

        {/* Our Approach to Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Approach to Challenges</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In the dynamic world of logistics, challenges are inevitable. We approach each challenge as an opportunity to demonstrate our expertise and commitment to excellence. Our methodology focuses on:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Proactive problem identification and resolution</li>
            <li>Data-driven decision making</li>
            <li>Continuous improvement and innovation</li>
            <li>Transparent communication with stakeholders</li>
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