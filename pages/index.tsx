import Container from "../components/Container";
import RecentPost from "../components/RecentPost";
import metadata from "../data/metadata";

const Home = () => {
  return (
    <Container>
<<<<<<< HEAD
      <span className="absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg">
        HOME
      </span>
=======
      <div className="my-5 w-full">
        <div className="relative">
          <span className="absolute top-12 font-extrabold italic text-white text-5xl md:text-9xltext flex justify-center w-full drop-shadow-lg">
            {metadata.title}
          </span>
        </div>
        <RecentPost />
      </div>
>>>>>>> 4005054d203f1f8dd3962295e19caab512c1dfad
    </Container>
  );
};

export default Home;
