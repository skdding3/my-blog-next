import Head from "next/head";
import Image from "next/image";
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
            <Image
              src="/logo.png"
              alt="로고"
              width={40}
              height={40}
              objectFit={`cover`}
              className={`rounded-full`}
            />
            <span
              className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
            >
              {metadata.title}
            </span>
          </div>
          <Navigation />
        </header>
        <main className="w-full max-w-3xl">{props.children}</main>
      </div>
    </>
  );
};

export default Container;
