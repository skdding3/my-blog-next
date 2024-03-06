import Container from "../components/Container";
import RecentPost from "../components/RecentPost";
import metadata from "../data/metadata";

const Home = () => {
  return (
    <Container>
      <div className="my-5 w-full">
        <div className="relative">
          <span className="absolute top-12 font-extrabold italic text-white text-5xl md:text-9xltext flex justify-center w-full drop-shadow-lg">
            {metadata.title}
          </span>
        </div>
        <RecentPost />
      </div>
    </Container>
  );
};

export default Home;
