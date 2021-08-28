import Head from "next/head";
import SectionAbout from "../components/SectionAbout";

const HomePage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Justin Chiou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <SectionAbout />
      </main>
    </div>
  );
};

export default HomePage;
