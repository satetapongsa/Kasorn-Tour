const categories = ['All', 'Island Tours', 'Cultural', 'Adventure', 'Luxury', 'Wellness'];

const locations = ['Phuket', 'Chiang Mai', 'Bangkok', 'Krabi', 'Pattaya', 'Samui', 'Hua Hin'];
const tourNames1 = ['Private Yacht', 'Elephant Sanctuary', 'Temple Tour', 'Scuba Diving', 'Jungle Safari', 'Cooking Class', 'Island Hopping', 'Helicopter Ride'];
const tourNames2 = ['Escape', 'Experience', 'Adventure', 'Journey', 'Retreat', 'VIP Tour', 'Discovery', 'Expedition'];

const curatedTours = [
    {
        id: 1,
        title: 'Royal Heritage: Bangkok & Ayutthaya',
        location: 'Bangkok',
        category: 'Cultural',
        badge: { text: 'Best Seller', color: 'bg-primary' },
        price: 3450,
        originalPrice: null,
        rating: 4.9,
        reviews: 124,
        duration: '10 Days',
        icon2: 'group',
        text2: 'Max 8 People',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqtIux59-4Gk31pr-dHza82bdRx_5mxeXSgvbQKlijwpPdlafXAiB3HSbMpQiP_grDxc7JZFVPbvcy2aE70J9fvqzdb9B2oINghwUpv4cdk1Jay0vK3mDCwDKVTtQch1JFyF_2IIc96Cen6tbemD4Prz8uCq5W1655Pwm1PLE5TNrQ_3JfwwUk4Vu8F_6qcDbC0Ql5Mt4Z3vByKfo04yi9wIjUUMGZ7h7a3g5UD9tcoWe2M5Fh-Yzt8EPSSl4B-fQYpQR5zwoKbMk',
        description: 'Private chauffeur-driven exploration of ancient Siamese capitals with exclusive after-hours temple access and fine dining.',
        highlights: ['Luxury Transport', 'English Speaking Guide', 'Premium Meals Included', 'Skip-the-line Access'],
        itinerary: [
            { time: '08:30 AM', title: 'Departure', desc: 'Board your luxury transport.' },
            { time: '10:00 AM', title: 'Temple Visit', desc: 'Explore the ancient ruins.' }
        ]
    },
    {
        id: 2,
        title: 'Andaman Sanctuary: Phuket & Phi Phi',
        location: 'Phuket',
        category: 'Wellness',
        badge: { text: 'Wellness', color: 'bg-emerald-600' },
        price: 5120,
        originalPrice: null,
        rating: 4.8,
        reviews: 86,
        duration: '7 Days',
        icon2: 'pool',
        text2: 'Private Villa',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW_e1saqMjoS1YAXPtLghBfDtPktqwlTX5lDN7OSuPakNlnrPJXdfn2718_fSMB9HpcR_S21cpv8owACr79z7c_iCC9e1mnZSB1G8XuxV36tPUiliHsdYUFkwqQMgQAsgimBz8nw1nXrWG66Dc0JAKF7F5rFiipuDh7q83kKpOwWvuPYZ2i3o4uNka6qEnlKcysWOZjYOMzt_YKO5LfHzM_PcL6Orb3bUwDvsAHGDllBiIbw8Dec7DlgpCKilZYCapY8EMbnkm2rQ',
        description: 'Sail on a private yacht between hidden lagoons, staying at the world\'s most exclusive eco-resorts.',
        highlights: ['Private Villa', 'Spa Treatments', 'Healthy Meals Included', 'Sunset Yacht Cruise'],
        itinerary: [
            { time: '09:00 AM', title: 'Yoga Session', desc: 'Start your morning with a relaxing yoga session.' },
            { time: '12:00 PM', title: 'Healthy Lunch', desc: 'Enjoy a nutritious lunch served by your private chef.' }
        ]
    },
    {
        id: 3,
        title: 'Lanna Luxury: The Northern Escape',
        location: 'Chiang Mai',
        category: 'Luxury',
        badge: { text: 'Exclusive', color: 'bg-amber-600' },
        price: 4890,
        originalPrice: null,
        rating: 5.0,
        reviews: 42,
        duration: '12 Days',
        icon2: 'restaurant',
        text2: 'Michelin Star Dining',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCN50V0vXWM_M3mT7lG1E0vmrkcmwcVR432jiVZbIwlvdQ8jWCdR6u8O_l0qs8hT57QOmt6o0ax_Y4a6lTw3lyY-I5DfntzzJl7a-fA121CpbMJHUqJixobEzeEJp_LwsFI8nYiX99uV-7oCTvd587zBxADS1agkdSLeYID3JR2rjNTFty-MJzn2n_1bWCYNpzAAUTq-j-x2YBZbiCc3U85dZEvA0qImDk8AExegC6fhjWbyoVqltGJW4Rwpf6NlU9n8YZWjUTBjU',
        description: 'A curated journey through Chiang Mai\'s artisanal heritage, elephant sanctuaries, and private mountain retreats.',
        highlights: ['Helicopter Transfer', 'Elephant Interaction', 'Fine Dining', 'Local Artisans'],
        itinerary: [
            { time: '08:00 AM', title: 'Mountain Flight', desc: 'Take a private helicopter to the northern peaks.' }
        ]
    },
    {
        id: 4,
        title: 'Ultimate Thailand: Coast to Coast',
        location: 'Samui',
        category: 'Luxury',
        badge: null,
        price: 8200,
        originalPrice: null,
        rating: 4.9,
        reviews: 155,
        duration: '14 Days',
        icon2: 'flight_takeoff',
        text2: 'Private Jets',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATZOrFxAJ4PAt4JbtGdFXxWQlkbYpRCT20mHShyF_bSdKcDLvLK9TZynF8lBuvsbI6jOJYjWdbVq2ylon84rSVbsXfhBGU6MQr57mBsRC3hKhPCncJTaf901X2XS98qhVAVCtgGeUnbslZKjBfanGWCD4M_cSWthxdKhMY1FHpmeGT9nZNSYMZcihWOVfu967jBtrKTx8uDavVcHTia3qRzcxGEiqLHSBzi8-JqFiE21Pm3hJyQq-0STAN7UUrcBHJCh0V_rtCsAI',
        description: 'Our most comprehensive itinerary. Cross the country in uncompromising luxury, from the Golden Triangle to Koh Samui.',
        highlights: ['Private Jet Transfers', 'Presidential Suites', '24/7 Concierge', 'All-Inclusive'],
        itinerary: [
            { time: '10:00 AM', title: 'Private Flight', desc: 'Fly from Bangkok to Koh Samui.' }
        ]
    },
    {
        id: 5,
        title: 'Pattaya Sunset Luxury Cruise',
        location: 'Pattaya',
        category: 'Luxury',
        badge: { text: 'New', color: 'bg-purple-600' },
        price: 1200,
        originalPrice: 1500,
        rating: 4.7,
        reviews: 45,
        duration: '1 Day',
        icon2: 'sailing',
        text2: 'Yacht Charter',
        image: 'https://pattayacitytourcoltd.com/uploads/SightSeenImage/james-bond-island-luxury-sunset-cruise-3450.jpg',
        description: 'Sail across the Pattaya coastline on a luxury catamaran, with unlimited cocktails and a private DJ creating the perfect sunset ambiance.',
        highlights: ['Sunset Cruise', 'Open Bar', 'Live DJ', 'Gourmet Snacks'],
        itinerary: [
            { time: '04:00 PM', title: 'Boarding', desc: 'Welcome drink upon boarding the catamaran.' },
            { time: '06:30 PM', title: 'Sunset Party', desc: 'Enjoy music and cocktails during sunset.' }
        ]
    },
    {
        id: 6,
        title: 'Krabi Island Safari Adventure',
        location: 'Krabi',
        category: 'Adventure',
        badge: { text: 'Adventure', color: 'bg-primary' },
        price: 850,
        originalPrice: null,
        rating: 4.8,
        reviews: 210,
        duration: '3 Days',
        icon2: 'kayaking',
        text2: 'Active Explorer',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
        description: 'Kayak through mangrove forests, rock climb the limestone cliffs of Railay Beach, and swim in hidden emerald pools.',
        highlights: ['Rock Climbing', 'Mangrove Kayaking', 'Emerald Pool Swim', 'Camping Option'],
        itinerary: [
            { time: '07:00 AM', title: 'Early Rise', desc: 'Morning kayak session through mangroves.' },
            { time: '01:00 PM', title: 'Rock Climbing', desc: 'Beginner friendly climb at Railay Beach.' }
        ]
    },
    {
        id: 7,
        title: 'Samui Holistic Wellness Retreat',
        location: 'Samui',
        category: 'Wellness',
        badge: { text: 'Wellness', color: 'bg-emerald-600' },
        price: 3100,
        originalPrice: 3500,
        rating: 4.9,
        reviews: 98,
        duration: '5 Days',
        icon2: 'self_improvement',
        text2: 'Deep Detox',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
        description: 'A transformative 5-day journey focusing on holistic health, meditation retreats, and plant-based fine dining on Koh Samui.',
        highlights: ['Daily Yoga', 'Sound Healing', 'Plant-based Nutrition', 'Massages'],
        itinerary: [
            { time: '06:00 AM', title: 'Sunrise Yoga', desc: 'Beachfront stretching and meditation.' },
            { time: '03:00 PM', title: 'Sound Bath', desc: 'Relaxing Tibetan singing bowl therapy.' }
        ]
    },
    {
        id: 8,
        title: 'Khao Sok Wildlife Expedition',
        location: 'Phuket',
        category: 'Adventure',
        badge: { text: 'Popular', color: 'bg-orange-500' },
        price: 950,
        originalPrice: null,
        rating: 4.7,
        reviews: 132,
        duration: '2 Days',
        icon2: 'nature',
        text2: 'Rainforest',
        image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=800&q=80',
        description: 'Venture deep into the Khao Sok National park. Sleep in floating bungalows and wake up the the sounds of wild gibbons.',
        highlights: ['Floating Bungalow', 'Night Safari', 'Cave Exploration', 'Local Guide'],
        itinerary: [
            { time: '10:00 AM', title: 'Lake Tour', desc: 'Longtail boat tour of Cheow Lan Lake.' },
            { time: '08:00 PM', title: 'Night Safari', desc: 'Spot nocturnal animals on a guided hike.' }
        ]
    },
    {
        id: 9,
        title: 'Bangkok Michelin Street Food',
        location: 'Bangkok',
        category: 'Cultural',
        badge: { text: 'Foodie', color: 'bg-red-500' },
        price: 320,
        originalPrice: null,
        rating: 5.0,
        reviews: 412,
        duration: '1 Day',
        icon2: 'local_dining',
        text2: 'Gastronomy',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=800',
        description: 'Taste your way through Bangkok back-alleys riding in a private Tuk Tuk. Sample legendary Michelin-recognized street food vendors.',
        highlights: ['Private Tuk Tuk', 'Michelin Street Food', 'Night Market', 'Local Guide'],
        itinerary: [
            { time: '06:00 PM', title: 'Start Journey', desc: 'Meet your guide and hop on a Tuk Tuk.' },
            { time: '07:30 PM', title: 'Michelin Tasting', desc: 'Sample famous Jay Fai crab omelette (when available).' }
        ]
    },
    {
        id: 10,
        title: 'Phuket Old Town Heritage Walk',
        location: 'Phuket',
        category: 'Cultural',
        badge: null,
        price: 150,
        originalPrice: 200,
        rating: 4.6,
        reviews: 87,
        duration: '1 Day',
        icon2: 'architecture',
        text2: 'History Walk',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Phuket_Aerial.jpg/960px-Phuket_Aerial.jpg',
        description: 'Discover the rich Sino-Portuguese architecture and history of Phuket Old Town, complete with traditional Peranakan meal.',
        highlights: ['Architecture Tour', 'Museum Visit', 'Authentic Lunch', 'Coffee Tasting'],
        itinerary: [
            { time: '09:00 AM', title: 'Walking Tour', desc: 'Explore Thalang Road and Soi Romanee.' },
            { time: '12:30 PM', title: 'Peranakan Lunch', desc: 'Traditional local dining experience.' }
        ]
    },
    {
        id: 11,
        title: 'Golden Triangle Discovery',
        location: 'Chiang Mai',
        category: 'Cultural',
        badge: { text: 'Hidden Gem', color: 'bg-teal-600' },
        price: 1800,
        originalPrice: null,
        rating: 4.8,
        reviews: 56,
        duration: '4 Days',
        icon2: 'map',
        text2: 'Border Explorer',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Golden_Triangle_Mekong_at_Doi_Pu_Khao_06.jpg/960px-Golden_Triangle_Mekong_at_Doi_Pu_Khao_06.jpg',
        description: 'Journey to the borderlands where Thailand, Laos, and Myanmar meet. Visit minority villages and learn about the region\'s complex history.',
        highlights: ['Golden Triangle Viewpoint', 'Village Visits', 'Boat Trip on Mekong', 'History Museum'],
        itinerary: [
            { time: '08:00 AM', title: 'Scenic Drive', desc: 'Travel through the mountains towards the border.' },
            { time: '02:00 PM', title: 'Mekong River', desc: 'Cruise the mighty Mekong River.' }
        ]
    },
    {
        id: 12,
        title: 'Ayutthaya Sunrise Cycling',
        location: 'Bangkok',
        category: 'Adventure',
        badge: null,
        price: 250,
        originalPrice: 350,
        rating: 4.5,
        reviews: 110,
        duration: '1 Day',
        icon2: 'pedal_bike',
        text2: 'Active Tour',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Ayutthaya_World_Heritage_sign.jpg/960px-Ayutthaya_World_Heritage_sign.jpg',
        description: 'Beat the heat and the crowds. Cycle through the magnificent ruins of Ayutthaya as the sun rises over the ancient stupas.',
        highlights: ['Sunrise Views', 'Bike Rental Included', 'Breakfast Packet', 'Historic Sites'],
        itinerary: [
            { time: '05:30 AM', title: 'Sunrise Cycle', desc: 'Begin cycling as the sun comes up.' },
            { time: '08:00 AM', title: 'Breakfast', desc: 'Enjoy a local breakfast near the ruins.' }
        ]
    },
    {
        id: 13,
        title: 'Hua Hin Vineyard & Wine Tasting',
        location: 'Hua Hin',
        category: 'Luxury',
        badge: { text: 'Romance', color: 'bg-pink-500' },
        price: 600,
        originalPrice: null,
        rating: 4.7,
        reviews: 34,
        duration: '1 Day',
        icon2: 'wine_bar',
        text2: 'Wine Tasting',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
        description: 'Experience Thailand\'s blossoming wine region. Enjoy a jeep tour of the vineyards followed by a premium wine pairing lunch overlooking the hills.',
        highlights: ['Vineyard Tour', 'Wine Tasting', '3-Course Lunch', 'Elephant Sighting'],
        itinerary: [
            { time: '11:00 AM', title: 'Vineyard Tour', desc: 'Guided tour of the Monsoon Valley vineyards.' },
            { time: '01:00 PM', title: 'Wine Pairing', desc: 'Exquisite lunch paired with local wines.' }
        ]
    },
    {
        id: 14,
        title: 'Similan Islands Scuba Expedition',
        location: 'Phuket',
        category: 'Adventure',
        badge: { text: 'Diving', color: 'bg-blue-600' },
        price: 2200,
        originalPrice: 2500,
        rating: 5.0,
        reviews: 289,
        duration: '4 Days',
        icon2: 'scuba_diving',
        text2: 'Liveaboard',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
        description: 'Join our luxury liveaboard for a 4-day diving expedition to the Similan Islands, renowned globally for manta rays and whale sharks.',
        highlights: ['Liveaboard Accommodation', '12 Dives', 'Equipment Rental', 'Marine Biologist Guide'],
        itinerary: [
            { time: '06:00 AM', title: 'Morning Dive', desc: 'First dive of the day before breakfast.' },
            { time: '07:00 PM', title: 'Night Dive', desc: 'Explore the reef under the cover of darkness.' }
        ]
    }
];

const generateTours = (count) => {
    const tours = [...curatedTours];
    for (let i = 15; i <= count; i++) {
        const cat = categories[Math.floor(Math.random() * (categories.length - 1)) + 1];
        const loc = locations[Math.floor(Math.random() * locations.length)];
        const n1 = tourNames1[Math.floor(Math.random() * tourNames1.length)];
        const n2 = tourNames2[Math.floor(Math.random() * tourNames2.length)];
        const p = Math.floor(Math.random() * 5000) + 500;
        const discount = Math.random() > 0.7 ? Math.floor(p * 1.2) : null;
        const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
        const reviews = Math.floor(Math.random() * 300) + 10;
        const duration = Math.floor(Math.random() * 7) + 1;
        
        const genericImages = [
            'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1510813959146-5fd72d2fb4c2?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1512343879784-a95147517926?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1540398686153-f7cc189280cd?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1588636401083-d9ea98deab06?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1562519154-1b12b593efae?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1530906622960-e8eaaddd9a1f?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1588015383569-42b781da65ff?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1506461883276-594c39bbbece?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1551853631-df20c5780a4a?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1620241088710-bb2bb459bd8a?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-15740fc601815-4baabd09b30c?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1608408891486-f5cafe22998a?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1551854402-9a3d4d3db23b?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1510006734157-194d2bcf39c4?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1494959324147-3f309d949fe5?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1473172083658-96bb00d02dcf?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1503756234508-e32369269deb?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1528659556157-e6dccee8dbcb?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1558290264-9665bc783b9c?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1601323337965-cfbac36c4f03?auto=format&fit=crop&q=80&w=800'
        ];

        tours.push({
            id: i,
            title: `${loc} ${n1} ${n2}`,
            location: loc,
            category: cat,
            badge: null,
            price: p,
            originalPrice: discount,
            rating: parseFloat(rating),
            reviews: reviews,
            duration: `${duration} Days`,
            icon2: 'group',
            text2: 'Max 12 People',
            image: genericImages[i % genericImages.length],
            description: `Experience the best of ${loc} with this exclusive ${cat.toLowerCase()} tour. We offer personalized service and unforgettable memories in one of the most beautiful destinations.`,
            highlights: ['Luxury Transport', 'English Speaking Guide', 'Premium Meals Included'],
            itinerary: [
                { time: '08:00 AM', title: 'Hotel Pickup', desc: 'Our guide will meet you at your lobby.' }
            ]
        });
    }
    return tours;
};

// Generate 60 tours
export const mockTours = generateTours(60);

export let mockBookings = [
    {
        id: 'BK92837',
        user_id: 1,
        tour_id: 1,
        clientName: 'Sarah Jenkins',
        clientEmail: 'sarah.jenkins@example.com',
        phone: '+1 (555) 123-4567',
        date: '2024-11-15',
        guests: 4,
        status: 'Upcoming',
        totalPrice: 2570,
        createdAt: '2024-03-01T10:00:00Z',
        specialRequests: 'Vegetarian meals required for 2 guests.'
    },
    {
        id: 'BK88219',
        user_id: 1,
        tour_id: 2,
        clientName: 'Sarah Jenkins',
        clientEmail: 'sarah.jenkins@example.com',
        phone: '+1 (555) 123-4567',
        date: '2023-12-05',
        guests: 2,
        status: 'Completed',
        totalPrice: 4890,
        createdAt: '2023-10-15T09:30:00Z',
        specialRequests: ''
    }
];

export let mockCustomers = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        email: 'sarah.jenkins@example.com',
        phone: '+1 (555) 123-4567',
        status: 'VIP Member',
        totalSpent: 7460,
        bookingsCount: 2,
        joinDate: '2023-10-01'
    }
];

export const setMockBookings = (newBookings) => {
    mockBookings = newBookings;
};

export const setMockCustomers = (newCustomers) => {
    mockCustomers = newCustomers;
};
