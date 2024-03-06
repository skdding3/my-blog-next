import Head from "next/head";
import metadata from "../data/metadata";
import Navigation from "./Navigation";

const Container = (props: any) => {
  return (
    <>
      <div className="w-full flex flex-col items-center p-3">
        <Head>
          <title>{metadata.title}</title>
        </Head>
        <header className="w-full max-w-3xl flex flex-row justify-between items-center my-1">
          <div className="flex flex-row items-center">
            <span className="mx-2 font-extralight text-lg">
              {metadata.title}
            </span>
          </div>
          <Navigation />
        </header>
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Container;
