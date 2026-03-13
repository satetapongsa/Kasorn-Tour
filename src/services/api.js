import { mockTours, mockCustomers, setMockCustomers } from '../data/mockData';
import { supabase } from './supabaseClient';

// Simulate network latency
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getTours = async ({ page = 1, limit = 9, category = 'All', regions = [], types = [], sortBy = 'recommended', query = '' }) => {
    await delay(500); // 500ms fake latency
    
    let filteredTours = [...mockTours];
    
    if (category !== 'All') {
        filteredTours = filteredTours.filter(t => t.category === category);
    }
    
    if (regions.length > 0) {
        // Find if any selected region exists in location string
        filteredTours = filteredTours.filter(t => 
            regions.some(r => t.location.toLowerCase().includes(r.toLowerCase()))
        );
    }
    
    if (types.length > 0) {
        filteredTours = filteredTours.filter(t => types.includes(t.category));
    }
    
    if (query) {
        filteredTours = filteredTours.filter(t => 
            t.title.toLowerCase().includes(query.toLowerCase()) || 
            t.location.toLowerCase().includes(query.toLowerCase())
        );
    }

    if (sortBy === 'price-low') {
        filteredTours.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filteredTours.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        filteredTours.sort((a, b) => b.rating - a.rating);
    }

    const startIndex = (page - 1) * limit;
    const paginatedTours = filteredTours.slice(startIndex, startIndex + limit);

    return {
        data: paginatedTours,
        totalElements: filteredTours.length,
        totalPages: Math.ceil(filteredTours.length / limit),
        currentPage: page
    };
};

export const getTourById = async (id) => {
    await delay(300);
    const tour = mockTours.find(t => t.id === parseInt(id));
    if (!tour) throw new Error('Tour not found');
    return tour;
};

export const createBooking = async (bookingData) => {
    // Generate custom booking ID similar to previous design
    const customId = `BK${Math.floor(Math.random() * 90000) + 10000}`;
    const newBooking = {
        id: customId,
        user_id: 1, // Mock user ID
        tour_id: bookingData.tour_id,
        clientName: bookingData.clientName,
        clientEmail: bookingData.clientEmail,
        phone: bookingData.phone,
        date: bookingData.date,
        guests: bookingData.guests,
        specialRequests: bookingData.specialRequests || '',
        totalPrice: bookingData.totalPrice,
        status: 'Upcoming'
    };
    
    const { data, error } = await supabase.from('bookings').insert([newBooking]).select();
    if (error) {
        console.error("Error creating Supabase booking:", error);
        throw error;
    }
    
    // Update local customer stats for display consistency
    const updatedCustomers = mockCustomers.map(c => {
        if(c.id === 1) {
            return {
                ...c,
                totalSpent: c.totalSpent + bookingData.totalPrice,
                bookingsCount: c.bookingsCount + 1
            };
        }
        return c;
    });
    setMockCustomers(updatedCustomers);
    
    return data[0];
};

export const getBookings = async () => {
    const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });
        
    if (error) {
        console.error("Error fetching Supabase bookings:", error);
        throw error;
    }
    
    return data || [];
};

export const deleteBooking = async (id) => {
    const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', String(id));
        
    if (error) {
        console.error("Error deleting Supabase booking:", error);
        throw error;
    }
    return id;
};

export const getCustomers = async () => {
    await delay(400);
    return mockCustomers;
};
