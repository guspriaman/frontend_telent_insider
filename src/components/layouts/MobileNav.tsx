"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex lg:hidden'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost' size='icon'>
            <Menu />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <div className='px-2 flex flex-col gap-4'>
            <Link href='/' className='flex items-center' onClick={() => setIsOpen(false)}>
              <Image
                src='/images/home/logo-hitam.svg'
                alt='Our Daily Pets Logo'
                width={150}
                height={150}
                className='h-200 w-200 mt-2 mb-3'
              />
              <span className='sr-only'>Home</span>
            </Link>
            <div className='text-sm'>
              <Accordion type='multiple' defaultValue={['item-1', 'item-2', 'item-3']} className='w-full'>
                {/* My Dashboard Accordion */}
                <AccordionItem value='item-1'>
                  <AccordionTrigger>My Dashboard</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      {['/dashboard/profile', '/dashboard/membership', '/dashboard/orderspending', '/dashboard/order', '/dashboard/orderssuccess', '/dashboard/contact', '/dashboard/inputtestimoni'].map((href, index) => (
                        <Link key={index} onClick={() => setIsOpen(false)} href={href}>
                          {href.split('/').pop()?.replace(/-/g, ' ').replace(/^./, str => str.toUpperCase())}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Halaman Utama Accordion */}
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Halaman Utama</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      {['/', '/product', '/About', '/Contact', '/blog', '/testimonial', '/Membership', '/FAQs'].map((href, index) => (
                        <Link key={index} onClick={() => setIsOpen(false)} href={href}>
                          {href.split('/').pop()?.replace(/-/g, ' ').replace(/^./, str => str.toUpperCase())}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Categories Accordion */}
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Categories</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col gap-y-2 text-muted-foreground'>
                      {['/supplements', '/rawfood', '/cooked'].map((href, index) => (
                        <Link key={index} onClick={() => setIsOpen(false)} href={href}>
                          {href.split('/').pop()?.replace(/-/g, ' ').replace(/^./, str => str.toUpperCase())}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
