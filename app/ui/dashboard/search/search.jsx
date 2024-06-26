// this is shared for search in all Dashboard pages

"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default Search;