import { Title } from "./Title";
import { Search } from "./Search";

function Header({ setSearch }) {
  return (
    <>
      {/* Header of the page */}
      <Title />

      {/* Searchbar to filter the recipes */}
      <Search setSearch={setSearch} />
    </>
  );
}

export { Header };
