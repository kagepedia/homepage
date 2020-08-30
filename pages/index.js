import Link from "next/link";
import Head from "../components/head";

const Top = () => (
  <div>
    <Head />
    <h2>
      <Link href="/about/">
        <a>About Me</a>
      </Link>
    </h2>
    <h2>
      <Link href="/contact/form">
        <a>Contact</a>
      </Link>
    </h2>
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">Next.js</h1>
      <p className="text-gray-500">
        with Tailwind CSS & postcss-preset-env. Now uses tailwind purge method
        for production builds.
      </p>
    </div>
  </div>
);

export default Top;
