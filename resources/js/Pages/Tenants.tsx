import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const tenants = [
    { id: 1, name: 'John Doe', room: '101', contact: '09123456789', moveIn: '2024-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', room: '102', contact: '09234567890', moveIn: '2024-02-20', status: 'Active' },
    { id: 3, name: 'Mike Johnson', room: '104', contact: '09345678901', moveIn: '2024-03-10', status: 'Active' },
    { id: 4, name: 'Sarah Wilson', room: '201', contact: '09456789012', moveIn: '2024-04-05', status: 'Active' },
];

const Tenants = () => {
    return (
        <AuthenticatedLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">Tenants</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
        </AuthenticatedLayout>
    )
}

export default Tenants