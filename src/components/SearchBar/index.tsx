import SearchGlass from "../../assets/searchGlass.svg?react";

// Custom hooks
import useDefineClassName from "./hooks/useDefineClassName";
import useSearch from "./hooks/useSearch";

// Styles
import "./index.scss";

interface SearchBarProps {
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  placeholder?: string;
  onlyLettersAndNumbers?: boolean;
  infoIndicator?: string;
  onChange?: (search: string) => void;
}

function SearchBar({
  size = "medium",
  disabled = false,
  placeholder = "Pesquisar",
  onlyLettersAndNumbers = false,
  onChange,
}: SearchBarProps) {
  const { search, setSearch, handleClickClear } = useSearch({ onChange });
  const { returnCloseIconClassName, returnSearchBarClassName } =
    useDefineClassName({
      size,
      disabled,
      searchValue: search,
    });

  return (
    <div className={returnSearchBarClassName()}>
      <input
        type="text"
        inputMode="search"
        placeholder={placeholder}
        aria-label="Pesquisar"
        onChange={(evt) => {
          if (onlyLettersAndNumbers) {
            setSearch(
              evt.target.value.replace(/[^\w\sÀ-ÖØ-öø-ÿ'`~^"´`¨&]/g, "")
            );
          } else {
            setSearch(evt.target.value);
          }
        }}
        value={search}
        style={search ? { paddingRight: 32 } : {}}
      />
      <SearchGlass />
    </div>
  );
}

export default SearchBar;
