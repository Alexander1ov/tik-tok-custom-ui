"use client";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import SearchCursor from "./SearchCursor";
import ButtonRed from "../UI/ButtonRed/ButtonRed";

import styles from "./Search.module.scss";

const Search: FC = () => {
  const [page, setPage] = useState(0);
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  const pages = [];

  for (let i = 0; i <= page; i++) {
    pages.push(<SearchCursor key={i} cursor={i * 10} search={search} />);
  }

  useEffect(() => {
    setPage(0);
  }, [search]);

  const pushPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className={styles.videoSearch}>
      <h2>Страница поиска</h2>
      <p>{`По запросу "${search?.toUpperCase()}", найдены следующие видео:`}</p>
      {pages}
      <div>
        <ButtonRed act={pushPage} text="Ещё..." />
      </div>
    </section>
  );
};

export default Search;
