import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import {
    Loader2,
    Search,
    Calendar,
    Mail,
    User,
    CheckCircle,
    XCircle,
    Users
} from 'lucide-react';

type Booking = {
    id: string;
    created_at: string;
    full_name: string;
    email: string;
    phone: string;
    trip_type: string;
    adults: number;
    children: number;
    country: string;
    travel_date: string;
    status: 'pending' | 'contacted' | 'booked' | 'cancelled';
    package_id: string;
    message: string;
};

export default function AdminBookingsTable() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<string>('all');
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setBookings(data || []);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const { error } = await supabase
                .from('bookings')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;

            // Optimistic update
            setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus as any } : b));
            if (selectedBooking && selectedBooking.id === id) {
                setSelectedBooking({ ...selectedBooking, status: newStatus as any });
            }
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status');
        }
    };

    const filteredBookings = bookings.filter(booking => {
        const matchesSearch =
            booking.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (booking.package_id && booking.package_id.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'contacted': return 'bg-blue-100 text-blue-800';
            case 'booked': return 'bg-green-100 text-green-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 text-safari-orange animate-spin" />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Filters & Search */}
            <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50">
                <div className="relative w-full md:w-96">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                        type="text"
                        placeholder="Search by name, email, or package..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-safari-orange/50"
                    />
                </div>

                <div className="flex gap-2">
                    {['all', 'pending', 'contacted', 'booked', 'cancelled'].map(status => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${filterStatus === status
                                ? 'bg-gray-900 text-white'
                                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4">Client</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Trip Details</th>
                            <th className="px-6 py-4">Date Submitted</th>
                            <th className="px-6 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredBookings.map((booking) => (
                            <tr
                                key={booking.id}
                                className="hover:bg-gray-50 transition-colors cursor-pointer"
                                onClick={() => setSelectedBooking(booking)}
                            >
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-safari-orange font-bold">
                                            {booking.full_name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{booking.full_name}</div>
                                            <div className="text-gray-500 text-xs">{booking.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getStatusColor(booking.status)}`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="space-y-1">
                                        <div className="font-medium">{booking.package_id || 'Custom Inquiry'}</div>
                                        <div className="text-xs text-gray-500 flex items-center gap-1">
                                            <Users className="w-3 h-3" /> {booking.adults} Adults, {booking.children} Kids
                                        </div>
                                        {booking.travel_date && (
                                            <div className="text-xs text-gray-500 flex items-center gap-1">
                                                <Calendar className="w-3 h-3" /> {new Date(booking.travel_date).toLocaleDateString()}
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    {new Date(booking.created_at).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        className="text-gray-400 hover:text-safari-orange"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedBooking(booking);
                                        }}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredBookings.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                        No bookings found matching your criteria.
                    </div>
                )}
            </div>

            {/* Booking Details Modal */}
            {selectedBooking && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedBooking(null)}>
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
                        <div className="p-6 border-b border-gray-200 flex justify-between items-start bg-gray-50">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    Booking Details
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getStatusColor(selectedBooking.status)}`}>
                                        {selectedBooking.status}
                                    </span>
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">ID: {selectedBooking.id}</p>
                            </div>
                            <button
                                onClick={() => setSelectedBooking(null)}
                                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <XCircle className="w-6 h-6 text-gray-400" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Contact Info */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Client Information</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <User className="w-5 h-5 text-gray-400" />
                                            <div>
                                                <p className="font-medium text-gray-900">{selectedBooking.full_name}</p>
                                                <p className="text-xs text-gray-500">{selectedBooking.country}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-gray-400" />
                                            <a href={`mailto:${selectedBooking.email}`} className="text-blue-600 hover:underline">{selectedBooking.email}</a>
                                        </div>
                                        {selectedBooking.phone && (
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold">📞</div>
                                                <a href={`tel:${selectedBooking.phone}`} className="text-blue-600 hover:underline">{selectedBooking.phone}</a>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Trip Details</h4>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        <p><span className="font-semibold">Package:</span> {selectedBooking.package_id || 'Custom'}</p>
                                        <p><span className="font-semibold">Type:</span> {selectedBooking.trip_type}</p>
                                        <p><span className="font-semibold">Party:</span> {selectedBooking.adults} Adults, {selectedBooking.children} Children</p>
                                        <p><span className="font-semibold">Travel Date:</span> {selectedBooking.travel_date ? new Date(selectedBooking.travel_date).toLocaleDateString() : 'Flexible'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            {selectedBooking.message && (
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Message from Client</h4>
                                    <p className="text-gray-700 whitespace-pre-wrap">{selectedBooking.message}</p>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="border-t border-gray-200 pt-6">
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Update Status</h4>
                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={() => updateStatus(selectedBooking.id, 'contacted')}
                                        disabled={selectedBooking.status === 'contacted'}
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 disabled:opacity-50"
                                    >
                                        <Mail className="w-4 h-4" /> Mark as Contacted
                                    </button>
                                    <button
                                        onClick={() => updateStatus(selectedBooking.id, 'booked')}
                                        disabled={selectedBooking.status === 'booked'}
                                        className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg font-semibold hover:bg-green-100 disabled:opacity-50"
                                    >
                                        <CheckCircle className="w-4 h-4" /> Mark as Booked
                                    </button>
                                    <button
                                        onClick={() => updateStatus(selectedBooking.id, 'cancelled')}
                                        disabled={selectedBooking.status === 'cancelled'}
                                        className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg font-semibold hover:bg-red-100 disabled:opacity-50"
                                    >
                                        <XCircle className="w-4 h-4" /> Mark as Cancelled
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
