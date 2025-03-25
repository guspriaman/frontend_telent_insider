import { Footer } from 'flowbite-react';
import Link from 'next/link';
import Image from 'next/image';
import { SiTiktok } from 'react-icons/si';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';

export default function FooterCom() {
    return (
        <Footer container className="relative text-black bg-gray-100" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="w-full max-w-7xl mx-auto p-4">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link href="/" passHref legacyBehavior>
                            <a className="self-center whitespace-nowrap text-lg sm:text-xl font-light">
                                <Image
                                    src='/images/logo.png'
                                    alt='Logo'
                                    width={40}
                                    height={40}
                                    className='h-20 w-20 mb-5'
                                />
                            </a>
                        </Link>
                        <p className="text-sm text-black">
                        Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 mb-2">
                        <FooterSection title="PORPERTY">
                            <FooterLink href="#">Property Category</FooterLink>
                            <FooterLink href="#">Testimony</FooterLink>
                            <FooterLink href="#">Download App</FooterLink>
                        </FooterSection>
                        <FooterSection title="ABOUT">
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">News and Events</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                        </FooterSection>
                        <FooterSection title="CONTACTS">
                            <FooterLink href="#">Contact Us</FooterLink>
                            <FooterLink href="#">FAQ</FooterLink>
                            <FooterLink href="#">Send Feedback</FooterLink>
                            <FooterLink href="#">Socials</FooterLink>
                            <Footer.Title title="Follow Us" className="text-black mt-4 sm:mt-0" />
                            <div className="flex gap-5 mt-4 sm:mt-2 sm:justify-center">
                                <SocialIcon href="#" Icon={BsFacebook} hoverColor="hover:text-blue-600" />
                                <SocialIcon href="https://www.linkedin.com" Icon={BsLinkedin} hoverColor="hover:text-blue-700" />
                                <SocialIcon href="https://twitter.com" Icon={BsTwitterX} hoverColor="hover:text-gray-500" />
                                <SocialIcon href="https://www.instagram.com/" Icon={BsInstagram} hoverColor="hover:text-red-500" />
                            </div>
                        </FooterSection>
                    </div>
                </div>
                <div className="w-full sm:flex sm:items-center sm:justify-between text-black mt-5">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-4 sm:mt-0 sm:justify-center text-black">
                    <Footer.Copyright
                        className="text-black mt-4 sm:mt-0"
                        href="#"
                        by="LOGO"
                        year={new Date().getFullYear()}
                    />
                        
                    </div>
                </div>
            </div>
        </Footer>
    );
}

const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <Footer.Title title={title} className="text-black font-bold mb-3" />
        <Footer.LinkGroup col>
            {children}
        </Footer.LinkGroup>
    </div>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <Link href={href} className="text-black hover:text-gray-700 mt-2 mb-2">
        {children}
    </Link>
);

const SocialIcon: React.FC<{ href: string; Icon: React.ElementType; hoverColor: string }> = ({ href, Icon, hoverColor }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-black text-white p-2 rounded-full transition duration-300 ${hoverColor}`}
    >
        <Icon className="w-4 h-4" />
    </a>
);
