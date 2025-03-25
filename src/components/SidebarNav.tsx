"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Slider } from "@/components/ui/Slider";

interface SidebarNavProps {
  setStatus: (status: string | null) => void;
  setLocation: (location: string | null) => void;
  setType: (type: string | null) => void;
  setPriceRange: (price: number[]) => void;
}

export function SidebarNav({ setStatus, setLocation, setType, setPriceRange }: SidebarNavProps) {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [priceRange, setLocalPriceRange] = useState<number[]>([4000000, 8000000]);

  // Apply Filter
  const applyFilter = () => {
    setStatus(selectedStatus);
    setLocation(selectedLocation);
    setType(selectedType);
    setPriceRange(priceRange);
  };

  return (
    <aside className="w-1/3 md:w-64 bg-white rounded-lg shadow-lg p-4">
      <h2 className="font-bold text-lg">FILTER BY</h2>

      <Accordion type="multiple">
        {/* Status */}
        <AccordionItem value="status">
          <AccordionTrigger>Status</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {["New", "Second"].map((s) => (
                <label key={s} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value={s}
                    onChange={() => setSelectedStatus(s)}
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Location */}
        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {["Bekasi", "Jakarta", "Bandung", "Bogor"].map((city) => (
                <label key={city} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="location"
                    value={city}
                    onChange={() => setSelectedLocation(city)}
                  />
                  <span>{city}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Type */}
        <AccordionItem value="type">
          <AccordionTrigger>Type</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {["Rumah", "Apartement", "Ruko", "Hotel"].map((t) => (
                <label key={t} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="type"
                    value={t}
                    onChange={() => setSelectedType(t)}
                  />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <Slider value={priceRange} onValueChange={setLocalPriceRange} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="mt-4 w-full" onClick={applyFilter}>
        Apply
      </Button>
    </aside>
  );
}

export default SidebarNav;
