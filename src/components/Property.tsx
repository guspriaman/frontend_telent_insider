import { useEffect, useState } from "react";
import { getProperties } from "@/propertyService";

interface Property {
  id: number;
  type: string;
  status: string;
  name: string;
  description: string;
  address: string;
  price: number;
  image: string;
  building_area: number;
  land_area: number;
}

const Properti = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();
        setProperties(data);
      } catch (error) {
        console.error("Gagal mengambil properti:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Daftar Properti</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="border p-4 rounded-lg shadow-md">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2">{property.name}</h3>
            <p className="text-gray-600">{property.address}</p>
            <p className="text-gray-800 font-bold">Rp {property.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properti;
