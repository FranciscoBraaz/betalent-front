function useDefineClassName({
  size,
  disabled,
  searchValue,
}: {
  size: string;
  disabled: boolean;
  searchValue: string;
}) {
  function returnSearchBarClassName() {
    let currentClassName = `search-bar search-bar--${size} `;
    if (disabled) currentClassName += `search-bar--disabled `;

    return currentClassName;
  }

  function returnCloseIconClassName() {
    let className = "search-bar__icon-right";
    if (searchValue) className += " search-bar__icon-right--visible";

    return className;
  }

  return { returnSearchBarClassName, returnCloseIconClassName };
}

export default useDefineClassName;
