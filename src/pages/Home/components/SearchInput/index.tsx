import { SearchInputContainer, SearchInputHeader } from "./style";

export function SearchInput() {
  return (
    <SearchInputContainer>
      <SearchInputHeader>
        <span>Publicações</span>
        <p>6 publicações</p>
      </SearchInputHeader>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  );
}
