'use client'

import PropertyLayout from '@/components/PropertyLayout';
import PropertyForm from '@/components/PropertyForm';
import Property from '@/components/Property';

const PropertyPage = () => {
  return (
    <div className='mt-20' >
      <PropertyForm/>
      <Property/>
      <PropertyLayout/>
    </div>
  );
};

export default PropertyPage;
