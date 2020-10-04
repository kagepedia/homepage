import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [showMenubar, setShowMenubar] = useState(false);

  return (
    <div>
      <nav className="w-full py-4 bg-blue-800 shadow">
        <div className="ml-6">
          <div className="text-white">
            <a className="" href="https://www.facebook.com/profile.php?id=100034531956446" aria-label="Facebookリンク">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="pl-6" href="https://www.instagram.com/k4gepedia/" aria-label="Instagramリンク">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="pl-6" href="https://twitter.com/Luvpys" aria-label="Twitterリンク">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="pl-6" href="https://www.linkedin.com/in/soichiro-kage/" aria-label="Linkdinリンク">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </nav>
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="/">
            ひなたぼっこ
          </a>
          <p className="text-lg text-gray-800">エンジニアのための備忘録</p>
        </div>
      </header>
      <nav className="w-full py-4 border-t border-b bg-gray-100">
        <div className="block sm:hidden">
          <a href="#" onClick={() => setShowMenubar(!showMenubar)} className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center">
            Menu <span className="fas ml-2">{showMenubar ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
          </a>
        </div>
        <div className={'w-full flex-grow sm:flex sm:items-center sm:w-auto' + (showMenubar ? '' : ' hidden')}>
          <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            <a href="/posts" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Posts
            </a>
            <a href="/about" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              About Me
            </a>
            <a href="/contact/form" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
