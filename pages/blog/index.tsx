import BlogPost from "../../components/BlogPost";
import Container from "../../components/Container";

const blog = () => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </Container>
  );
};

export default blog;
