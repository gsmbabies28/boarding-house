import React, { useState } from 'react';
import { Home, Users, DollarSign, Calendar, Settings, Menu, X, Bell, Search } from 'lucide-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function BoardingHouseApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const rooms = [
    { id: 1, number: '101', tenant: 'John Doe', status: 'Occupied', rent: 5000, dueDate: '2024-11-05' },
    { id: 2, number: '102', tenant: 'Jane Smith', status: 'Occupied', rent: 5000, dueDate: '2024-11-05' },
    { id: 3, number: '103', tenant: null, status: 'Vacant', rent: 5000, dueDate: null },
    { id: 4, number: '104', tenant: 'Mike Johnson', status: 'Occupied', rent: 6000, dueDate: '2024-11-10' },
    { id: 5, number: '201', tenant: 'Sarah Wilson', status: 'Occupied', rent: 5500, dueDate: '2024-11-03' },
    { id: 6, number: '202', tenant: null, status: 'Vacant', rent: 5500, dueDate: null },
  ];

  const tenants = [
    { id: 1, name: 'John Doe', room: '101', contact: '09123456789', moveIn: '2024-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', room: '102', contact: '09234567890', moveIn: '2024-02-20', status: 'Active' },
    { id: 3, name: 'Mike Johnson', room: '104', contact: '09345678901', moveIn: '2024-03-10', status: 'Active' },
    { id: 4, name: 'Sarah Wilson', room: '201', contact: '09456789012', moveIn: '2024-04-05', status: 'Active' },
  ];

  const payments = [
    { id: 1, tenant: 'John Doe', room: '101', amount: 5000, date: '2024-10-05', status: 'Paid' },
    { id: 2, tenant: 'Jane Smith', room: '102', amount: 5000, date: '2024-10-05', status: 'Paid' },
    { id: 3, tenant: 'Sarah Wilson', room: '201', amount: 5500, date: '2024-10-03', status: 'Paid' },
    { id: 4, tenant: 'Mike Johnson', room: '104', amount: 6000, date: '2024-10-10', status: 'Pending' },
  ];

  

  const NavItem: React.FC<IconProps> = ({ icon: Icon, label, tab }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        activeTab === tab
          ? 'bg-blue-600 text-white'
          : 'text-gray-300 hover:bg-gray-800'
      }`}
    >
      <Icon size={20} />
      {sidebarOpen && <span>{label}</span>}
    </button>
  );

  const StatCard = ({ title, value, icon: Icon, color }: StatCardProps) => (
    <div className="bg-white rounded-lg shadow p-6 border-l-4" style={{ borderColor: color }}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className="p-3 rounded-lg" style={{ backgroundColor: color + '20' }}>
          <Icon size={24} style={{ color }} />
        </div>
      </div>
    </div>
  );

  return (
    <AuthenticatedLayout>
      <div className="flex h-screen bg-gray-100 mt-1">
        {/* Sidebar */}
        <div
          className={`bg-gray-900 text-white transition-all duration-300 ${
            sidebarOpen ? 'w-64' : 'w-20'
          }`}
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-800">
            {sidebarOpen && <h1 className="text-xl font-bold">BoardingHub</h1>}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-800 rounded-lg"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <nav className="p-4 space-y-2">
            <NavItem icon={Home} label="Dashboard" tab="dashboard" />
            <NavItem icon={Users} label="Tenants" tab="tenants" />
            <NavItem icon={DollarSign} label="Payments" tab="payments" />
            <NavItem icon={Calendar} label="Schedule" tab="schedule" />
            <NavItem icon={Settings} label="Settings" tab="settings" />
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                  <Bell size={20} className="text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard title="Total Rooms" value="6" icon={Home} color="#3B82F6" />
                  <StatCard title="Occupied" value="4" icon={Users} color="#10B981" />
                  <StatCard title="Vacant" value="2" icon={Home} color="#F59E0B" />
                  <StatCard title="Monthly Revenue" value="₱22,000" icon={DollarSign} color="#8B5CF6" />
                </div>

                {/* Rooms Grid */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Room Status</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rooms.map((room) => (
                      <div key={room.id} className="bg-white rounded-lg shadow p-4 border border-gray-200">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-bold text-lg text-gray-800">Room {room.number}</h4>
                            <p className="text-sm text-gray-500">₱{room.rent}/month</p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              room.status === 'Occupied'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {room.status}
                          </span>
                        </div>
                        {room.tenant ? (
                          <div className="space-y-1">
                            <p className="text-sm text-gray-700 font-medium">{room.tenant}</p>
                            <p className="text-xs text-gray-500">Due: {room.dueDate}</p>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-400">Available for rent</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tenants' && (
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
            )}

            {activeTab === 'payments' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">Payments</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                payment.status === 'Paid'
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
            )}
          </main>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}