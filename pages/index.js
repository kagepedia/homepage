import Head from '../components/head';
import Header from '../components/molecules/header';
import Footer from '../components/molecules/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Top = () => (
  <div>
    <Head />
    <Header />
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">Next.js</h1>
      <div>
        <a className="" href="#">
          <FontAwesomeIcon icon={faTwitter} className="text-green-700 fa-2x" />
        </a>
      </div>
    </div>
    <Footer />
  </div>
);

export default Top;
