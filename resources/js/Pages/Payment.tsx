import Modal from '@/Components/Modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';

  const payments = [
    { id: 1, tenant: 'John Doe', room: '101', amount: 5000, date: '2024-10-05', status: 'Paid' },
    { id: 2, tenant: 'Jane Smith', room: '102', amount: 5000, date: '2024-10-05', status: 'Paid' },
    { id: 3, tenant: 'Sarah Wilson', room: '201', amount: 5500, date: '2024-10-03', status: 'Paid' },
    { id: 4, tenant: 'Mike Johnson', room: '104', amount: 6000, date: '2024-10-10', status: 'Pending' },
  ];

const Tenants = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { data, setData, post } = useForm({
        firstName: '',
        lastName: '',
        room: '',
        contact: '',
        moveInDate: '',
    });
    return (
        <AuthenticatedLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">Payments</h2>
                    <button 
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Record Payment
                    </button>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tenant</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {payments.map((payment) => (
                                <tr key={payment.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{payment.tenant}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{payment.room}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">₱{payment.amount}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{payment.date}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${payment.status === 'Paid'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                                }`}
                                        >
                                            {payment.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                show={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Add New Tenant</h2>
                </div>
                <form>
                    <div className="px-6 pb-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                value={data.firstName}
                                onChange={(e) => setData('firstName', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Room</label>
                            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                                <option>Room 1</option>
                                <option>Room 2</option>
                                <option>Room 3</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contact</label>
                            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Move-in Date</label>
                            <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Save Tenant
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    )
}

export default Tenants