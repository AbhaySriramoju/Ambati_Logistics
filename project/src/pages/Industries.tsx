import { Star } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      title: "Manufacturing & Industrial",
      points: [
        "Just-in-time delivery solutions",
        "Raw material transportation",
        "Finished goods distribution",
        "Inventory management systems",
        "Fast replenishment cycles",
        "Raw material movement to finished goods dispatch",
        "Just-in-time delivery and factory-to-distributor logistics",
        
      ],
    },
    {
      title: "Retail & E-commerce",
      points: [
        "Omnichannel fulfillment",
        "Last-mile delivery",
        "Returns management",
        "Inventory optimization",
        "Temperature-controlled transport",
        "Fast shipping, returns, and inventory syncing",
        "Integrated with major marketplaces and CRMs"
        
      ],
    },
    {
      title: "Healthcare & Pharmaceuticals",
      points: [
        "Temperature-controlled transport",
        "Regulatory compliance",
        "Medical device logistics",
        "Healthcare supply chain solutions",
        "Secure, compliant delivery with chain-of-custody tracking",
        "Cold chain logistics available"
      ],
    },
    {
      title: "Technology & Electronics",
      points: [
        "High-value cargo handling",
        "Secure transportation",
        "Component logistics",
        "Reverse logistics",
        "Supply chain efficiency for components and assemblies",
        "Reverse logistics and warranty returns",
        "Lifestyle goods, electronics, heavy equipment, and more"
        
      ],
    },
  ];

  const testimonials = [
    {
      name: "Anirudh",
      company: "Tech Solutions Inc.",
      content: "LogiTrack has transformed our supply chain efficiency. Their innovative solutions and reliable service have been instrumental in our growth.",
    },
    {
      name: "Chaitanya",
      company: "Global Manufacturing Co.",
      content: "We've seen a 30% improvement in delivery times since partnering with LogiTrack. Their attention to detail and professional service is outstanding.",
    },
    {
      name: "Aishwarya",
      company: "E-commerce Express",
      content: "The level of transparency and reliability we get with LogiTrack is unmatched. They're not just a service provider, but a true business partner.",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Industries We Serve</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry) => (
            <div key={industry.title} className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{industry.title}</h2>
              <ul className="space-y-2">
                {industry.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <section className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}