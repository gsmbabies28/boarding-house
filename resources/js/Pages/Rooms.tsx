import Modal from '@/Components/Modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

type Room = {
    id: number;
    room_number: string;
    capacity: number;
    occupants: number;
    price: number;
}

const Rooms: React.FC<{ rooms: Room[] }> = ({ rooms }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { data, setData, post, errors } = useForm({
        room_number: '',
        capacity: '',
        price: '',
    });
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('rooms.store'), {
            onSuccess: () => setIsModalOpen(false),
        });
    }
    
    return (
        <AuthenticatedLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">Rooms</h2>
                    <button 
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={() => setIsModalOpen(true)}
                    >
                        + Add Room
                    </button>
                </div>
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room No.</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Capacity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Occupants</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {rooms.map((room) => (
                                <tr key={room.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{room.room_number}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{room.capacity}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{room.occupants}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{room.price}</td>
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
                <form onSubmit={handleSubmit}>
                    <div className="px-6 pb-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Room No.</label>
                            <input 
                                type="text" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
                                value={data.room_number}
                                onChange={(e) => setData('room_number', e.target.value)}
                            />
                            <div className="text-red-500 text-sm">{errors.room_number}</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Capacity</label>
                            <input 
                                type="number" 
                                value={data.capacity}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
                                onChange={(e) => setData('capacity', e.target.value)}
                            />
                            <div className="text-red-500 text-sm">{errors.capacity}</div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price</label>
                            <input 
                                type="number"
                                value={data.price}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
                                onChange={(e) => setData('price', e.target.value)}
                            /> 
                            <div className="text-red-500 text-sm">{errors.price}</div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Save Room
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    )
}

export default Rooms