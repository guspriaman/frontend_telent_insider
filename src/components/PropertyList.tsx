export interface Property {
    id: number;
    name: string;
    location: string;
    type: string;
    status: "New" | "Second";
    price: number;
    image: string;
    landSize: number; // luas tanah dalam meter persegi
    buildingSize: number; // luas bangunan dalam meter persegi
    listingAge: number; // umur listing dalam bulan
}

export const properties: Property[] = [
    { id: 1, name: "Rumah Mewah di Jakarta", location: "Jakarta", type: "Rumah", status: "New", price: 7500000, image: "/images/rumah1.jpg", landSize: 200, buildingSize: 150, listingAge: 3},
    { id: 2, name: "Apartemen Modern di Bekasi", location: "Bekasi", type: "Apartement", status: "Second", price: 5000000, image: "/images/rumah1.jpg", landSize: 100, buildingSize: 80, listingAge: 3 },
    { id: 3, name: "Ruko Strategis di Bandung", location: "Bandung", type: "Ruko", status: "New", price: 6500000, image: "/images/rumah1.jpg", landSize: 150, buildingSize: 120, listingAge: 3 },
    { id: 4, name: "Hotel Eksklusif di Bogor", location: "Bogor", type: "Hotel", status: "Second", price: 9000000, image: "/images/rumah1.jpg", landSize: 500, buildingSize: 450, listingAge: 3 },
    { id: 5, name: "Rumah Minimalis di Jakarta", location: "Jakarta", type: "Rumah", status: "New", price: 6000000, image: "/images/rumah2.jpg", landSize: 120, buildingSize: 90, listingAge: 3 },
    { id: 6, name: "Apartemen Elite di Bandung", location: "Bandung", type: "Apartement", status: "New", price: 8000000, image: "/images/rumah2.jpg", landSize: 90, buildingSize: 75, listingAge: 3 },
    { id: 7, name: "Ruko Murah di Bekasi", location: "Bekasi", type: "Ruko", status: "Second", price: 4500000, image: "/images/rumah2.jpg", landSize: 130, buildingSize: 100, listingAge: 3 },
    { id: 8, name: "Hotel Bintang Lima di Jakarta", location: "Jakarta", type: "Hotel", status: "New", price: 10000000, image: "/images/rumah2.jpg", landSize: 600, buildingSize: 550, listingAge: 3 },
    { id: 9, name: "Rumah Cluster di Bogor", location: "Bogor", type: "Rumah", status: "Second", price: 5500000, image: "/images/rumah3.jpg", landSize: 140, buildingSize: 100, listingAge: 3 },
    { id: 10, name: "Apartemen Cozy di Bandung", location: "Bandung", type: "Apartement", status: "Second", price: 6200000, image: "/images/rumah3.jpg", landSize: 85, buildingSize: 70, listingAge: 3 },
    { id: 11, name: "Ruko Premium di Jakarta", location: "Jakarta", type: "Ruko", status: "New", price: 7000000, image: "/images/rumah3.jpg", landSize: 160, buildingSize: 130, listingAge: 3 },
    { id: 12, name: "Hotel Murah di Bekasi", location: "Bekasi", type: "Hotel", status: "Second", price: 8500000, image: "/images/rumah3.jpg", landSize: 550, buildingSize: 500, listingAge: 3 },
    { id: 13, name: "Rumah Klasik di Bandung", location: "Bandung", type: "Rumah", status: "New", price: 6800000, image: "/images/rumah4.jpg", landSize: 160, buildingSize: 110, listingAge: 3 },
    { id: 14, name: "Apartemen Mewah di Bogor", location: "Bogor", type: "Apartement", status: "New", price: 7700000, image: "/images/rumah4.jpg", landSize: 95, buildingSize: 85, listingAge: 3 },
    { id: 15, name: "Ruko Usaha di Bogor", location: "Bogor", type: "Ruko", status: "Second", price: 5000000, image: "/images/rumah4.jpg", landSize: 140, buildingSize: 110, listingAge: 3 }
];