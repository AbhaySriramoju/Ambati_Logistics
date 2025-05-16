import { useState } from 'react';
import Modal from '../components/Modal';
import { Package } from 'lucide-react';

export default function Track() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Package className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6">Track Your Shipment</h1>
          <p className="text-gray-600 mb-8">
            Enter your tracking number to get real-time updates on your shipment's location and status.
          </p>
      
          <div className="bg-white p-8 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Enter tracking number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4"
            />
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Track Shipment
            </button>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="text-center">
            <Package className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-gray-600">
              We're currently enhancing our tracking system to provide you with even better service.
              This feature will be available soon.
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
}