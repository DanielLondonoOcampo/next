import { Feed } from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="xl:hidden" />
        <span className="max-md: orange_gradient text-center">
          {" "}
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptopioa is an open-source AI propting tool for discovering, creating
        and sharing ingenious prompts.
      </p>

      <Feed />
    </section>
  );
};
export default Home;
