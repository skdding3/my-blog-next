import Link from "next/link";
import React from "react";

const RecentPost = () => {
  return (
    <section className="mt-10">
      <h1>최근 게시물</h1>
      <div>
        <Link href="/" passHref>
          <a className="mt-5">
            <div className="font-medium text-xl">게시물 제목</div>
            <div className="font-light">게시물 설명</div>
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="mt-5">
            <div className="font-medium text-xl">Hello</div>
            <div className="font-light">안녕하세요 👋</div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default RecentPost;
