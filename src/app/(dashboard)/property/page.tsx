'use client'

import PropertyLayout from '@/components/PropertyLayout';
import PropertyForm from '@/components/PropertyForm';
import Property from '@/components/Property';

const PropertyPage = () => {
  return (
    <div className='mt-20' >
      <PropertyLayout/>
      <Property/>
      <PropertyForm/>
    </div>
  );
};

export default PropertyPage;
