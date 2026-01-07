import Modal from '@/Components/Modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';

const tenants = [
    { id: 1, name: 'John Doe', room: '101', contact: '09123456789', moveIn: '2024-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', room: '102', contact: '09234567890', moveIn: '2024-02-20', status: 'Active' },
    { id: 3, name: 'Mike Johnson', room: '104', contact: '09345678901', moveIn: '2024-03-10', status: 'Active' },
    { id: 4, name: 'Sarah Wilson', room: '201', contact: '09456789012', moveIn: '2024-04-05', status: 'Active' },
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
                    <h2 className="text-2xl font-bold text-gray-800">Tenants</h2>
                    <button 
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Add Tenant
                    </button>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Move-in Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {tenants.map((tenant) => (
                                <tr key={tenant.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{tenant.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{tenant.room}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{tenant.contact}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{tenant.moveIn}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                            {tenant.status}
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