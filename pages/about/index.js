import Head from "../../components/head";

const About = () => (
  <div>
    <Head />
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="text-gray-500">
        with Tailwind CSS & postcss-preset-env. Now uses tailwind purge method
        for production builds.
      </p>
    </div>
  </div>
);

export default About;
