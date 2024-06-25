const sampleListings = [
    {
        title: "Amanbagh,",
        description: "luxurious resort located at the pictiuorsquie surrounding",
        image: {
            filename: "listingImage",
            url: "https://www.lafayetteluxury.club/blogs/uploads/blogs/img-blog9.jpg"
        },
        price: 18730,
        location: "Alwar, Rajasthan",
        country: "India",
    },
    {
        title: "The Khyber Himalayan Resort & Spa",
        description: "Breathtaking landscapes of Gulmarg",
        image: {
            filename: "listingImage",
            url: "https://th.bing.com/th/id/OIP.xxTYCmq3kFgP6fe_2aCn-AHaE8?rs=1&pid=ImgDetMain",
        },
        price: 15550,
        location: "Gulmarg, Jammu and Kashmir",
        country: "India",
    },
    {
        title: "SaffronStays 9 Palms",
        description: "Offering a serene place far from hustle and bustle",
        image: {
            filename: "listingImage",
            url: "https://th.bing.com/th/id/OIP.jlaBsS2ukvHLG-sr1yrQLAHaE8?rs=1&pid=ImgDetMain",
        },
        price: 14370,
        location: "Alibaug, Maharashtra",
        country: "India",
    },
    {
        title: "Vivanta by Taj - Madikeri",
        description: "Gorgeousness of amidst of coffee plantation",
        image: {
            filename: "listingImage",
            url: "https://seoimgak.mmtcdn.com/blog/sites/default/files/images/entrance%20hall%20taj%20vivanta.jpg",
        },
        price: 11680,
        location: "Coorg, Karnataka",
        country: "India",
    },
    {
        title: "Panoramic Peninsula Villa",
        description: "This cliffside villa offers 360-degree views of a private peninsula, complete with a helipad, infinity pool, and a private yacht for exploring the azure waters below.",
        image: {
            filename: "listingImage",
            url: "https://th.bing.com/th/id/OIP.WkEZeHtxV-baLG-sQLZ6ZQHaE8?rs=1&pid=ImgDetMain"
        },
        price: 25000,
        location: "Phuket, Thailand",
        country: "Thailand",
    },
    {
        title: "Golden Sands Sanctuary",
        description: "Escape to the Arabian Gulf in this luxurious villa featuring private beach access, gold-infused decor, and personalized concierge service. A haven of opulence in the Middle East.",
        image: {
            filename: "listingImage",
            url: "https://th.bing.com/th/id/OIP.JzOJIDKe630a7wymDB4P_QHaEH?rs=1&pid=ImgDetMain",
        },
        price: 22000,
        location: "Dubai, UAE",
        country: "United Arab Emirates",
    },
    {
        title: "Serenity Overlook Villa",
        description: "Perched high on a cliff, this villa offers unrivaled views of the ocean. The infinity pool, modern amenities, and minimalist design create a serene ambiance for the ultimate escape.,",
        image: {
            filename: "listingImage",
            url: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        price: 17500,
        location: "Amalfi Coast, Italy",
        country: "Italy"
    },
    {
        title: "Eternal Elegance Manor",
        description: "Experience timeless luxury in this historic villa featuring classic architecture, manicured gardens, and antique furnishings. An exclusive retreat for those with a penchant for elegance.",
        image: {
            filename: "listingImage",
            url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 16500,
        location: "Tuscany, Italy",
        country: "Italy",
    },
    {
        title: "Step Elegance property",
        description:"Step into the future with this cutting-edge architectural masterpiece. This villa seamlessly blends sleek design, smart technology, and unparalleled comfort for a truly modern lifestyle.",
        image: {
            filename: "listingImage",
            url: "https://hotelbusiness.com/wp-content/uploads/2019/06/Airbnb-Luxe.jpg",
        },
        price: 16500,
        location:" Tuscany, Italy",
        country: "Italy",
    },
    {
        title: "Tropical Paradise Estate",
        description: "Immerse yourself in luxury amidst lush tropical gardens, cascading waterfalls, and a private beach. This estate offers an unparalleled fusion of nature and sophistication.",
        image: {
            filename: "listingImage",
            url: "https://th.bing.com/th/id/OIP.GzxCuotF3br3ZGIXFody2wHaE8?rs=1&pid=ImgDetMain",
        },
        price: 18000,
        location: "Bora Bora, French Polynesia",
        country:" French Polynesia",
    },
    {
        title: "Majestic Mountain Retreat ",
        description: "Nestled in the heart of the Alps, this regal villa offers breathtaking mountain vistas, a ski-in/ski-out experience, and world-class amenities for an unforgettable alpine escape.",
        image: {
            filename: "listingImage",
            url: "https://th.bing.com/th/id/OIP.7que1CocuskRPqsDlphWpwHaE8?rs=1&pid=ImgDetMain",
        },
        price: 14000,
        location: "St. Moritz, Switzerland",
        country: "Switzerland",
    },
    {
        title: "Riviera Paradise Villa",
        description: "Live the Riviera dream in this elegant seaside villa with sprawling terraces, a private beach, and unparalleled Mediterranean views. The epitome of coastal luxury living.",
        image: {
            filename: "listingImage",
            url: "https://th.bing.com/th/id/OIP.jyShc6vNkhbY3VI4joKj7AHaEK?rs=1&pid=ImgDetMain",
        },
        price: 15000,
        location: "French Riviera, France",
        country: "France",
    },
    {
        title: "Zen Garden Haven",
        description:" Escape to this contemporary villa surrounded by lush gardens, water features, and a serene atmosphere. Enjoy the seamless fusion of modern design and natural beauty.",
        image: {
            filename: "listingImage",
            url: "https://th.bing.com/th/id/OIP.4DqavTEZ04yhd2wUgnnFEgHaF9?rs=1&pid=ImgDetMain",
        },
        price: 12500,
        location: "Kyoto, Japan",
        country: "Japan",
    },
    {
        title: "Exquisite Oasis Retreat",
        description: "Indulge in the lap of luxury with this secluded villa boasting panoramic views, a private pool, and opulent interiors. Perfect for those seeking tranquility and lavish living.",
        image: {
            filename: "listingImage",
            url: "https://th.bing.com/th/id/OIP.3z0MNCff6PNcEBtFv_AsOgHaEK?rs=1&pid=ImgDetMain",
        },
        price: 10000,
        location: "Santorini, Greece",
        country: "Greece",
    },
]

module.exports = {data: sampleListings};