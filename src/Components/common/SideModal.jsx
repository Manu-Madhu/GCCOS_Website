import { IoMdCloseCircle } from "react-icons/io";
import logo from '../../assets/Images/Logo.webp';
import { useState } from "react";

const SideModal = ({ closeHandler }) => {
    const [activeLink, setActiveLink] = useState('');
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <main
            className="fixed w-screen h-screen top-0 left-0 bg-black/30 z-50"
            role="dialog"
            aria-modal="true"
        >
            {/* Clicking background closes modal */}
            <div className="absolute inset-0" onClick={closeHandler}></div>

            <section className="relative flex flex-col items-center justify-center w-[80%] lg:w-[50%] h-full bg-green-4 z-10 p-5">
                <IoMdCloseCircle
                    onClick={closeHandler}
                    className="absolute top-3 right-3 text-3xl text-white hover:text-black cursor-pointer"
                />
                <h1 className="text-green-4 font-bold text-2xl">
                    <img src={logo} alt="Logo" sizes={10} className='lg:h-16 lg:pr-32 object-contain' />
                </h1>

                {/* links */}
                <div className='gap-5 w-full flex flex-col tracking-wide mt-10 text-white'>
                    <a
                        href="#"
                        className={`lg:hover:text-gray-400 bg-[#fee48b] text-black text-center rounded-lg p-2 ${activeLink === 'home' ? 'opacity-50' : ''}`}
                        onClick={() => handleLinkClick('home')}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className={`lg:hover:text-gray-400 bg-[#fee48b] text-black text-center rounded-lg p-2 ${activeLink === 'about' ? 'opacity-50' : ''}`}
                        onClick={() => handleLinkClick('about')}
                    >
                        About
                    </a>
                    <a
                        href="#gallery"
                        className={`lg:hover:text-gray-400 bg-[#fee48b] text-black text-center rounded-lg p-2 ${activeLink === 'gallery' ? 'opacity-50' : ''}`}
                        onClick={() => handleLinkClick('gallery')}
                    >
                        Gallery
                    </a>
                    <a
                        href="#blogs"
                        className={`lg:hover:text-gray-400 bg-[#fee48b] text-black text-center rounded-lg p-2 ${activeLink === 'blogs' ? 'opacity-50' : ''}`}
                        onClick={() => handleLinkClick('blogs')}
                    >
                        Blogs
                    </a>
                </div>

                {/*contact button */}
                <button className="bg-[#fee48b] mt-5 w-full h-10 rounded-xl hover:bg-green-3 hover:border-2 hover:text-white border-black duration-300">
                    <a
                        href="#contact"
                        className={`cursor-pointer ${activeLink === 'contact' ? 'opacity-50' : ''}`}
                        onClick={() => handleLinkClick('contact')}
                    >
                        Contact us
                    </a>
                </button>
            </section>
        </main>
    );
};

export default SideModal;
