import { useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";

function useSearch({ onChange }: { onChange?: (search: string) => void }) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (onChange) {
      onChange(debouncedSearch);
    }
  }, [debouncedSearch, onChange]);

  function handleClickClear() {
    setSearch("");
  }

  return { search, setSearch, handleClickClear };
}

export default useSearch;
