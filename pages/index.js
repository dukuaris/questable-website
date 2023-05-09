import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";

const Home = () => {
  return (
    <>
      <Head>
        <title>Questable</title>
        <meta
          name="description"
          content="Questable analyzes your content and auto-generates questions to improve your learning effectiveness."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <br/>
      <br/>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;