import { useState } from "react";
import { addProperty } from "@/propertyService";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    type: "",
    status: "new" as "new" | "second", // Status hanya bisa "new" atau "second"
    name: "",
    description: "",
    address: "",
    price: "",
    image: "",
    building_area: "",
    land_area: "",
  });

  // Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle upload gambar & konversi ke base64
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addProperty({
        ...formData,
        price: Number(formData.price),
        building_area: Number(formData.building_area),
        land_area: Number(formData.land_area),
      });
      alert("Properti berhasil ditambahkan!");
    } catch (error) {
      console.error("Gagal menambahkan properti:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Tambah Properti</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" placeholder="Nama Properti" onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Deskripsi" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="address" placeholder="Alamat" onChange={handleChange} className="w-full p-2 border rounded" required />
        
        <select name="status" onChange={handleChange} value={formData.status} className="w-full p-2 border rounded" required>
          <option value="new">Baru</option>
          <option value="second">Bekas</option>
        </select>

        <input type="text" name="type" placeholder="Tipe Properti" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="price" placeholder="Harga" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="building_area" placeholder="Luas Bangunan" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="land_area" placeholder="Luas Tanah" onChange={handleChange} className="w-full p-2 border rounded" required />
        
        <input type="file" onChange={handleImageUpload} className="w-full p-2 border rounded" required />
        
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Tambah Properti</button>
      </form>
    </div>
  );
};

export default AddProperty;
