import {
  BestSellers,
  Hero,
  LatestCollection,
  NewsLetter,
  OurPolicy,
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellers />
      <OurPolicy />
      <NewsLetter />
    </div>
  );
};

export default Home;
