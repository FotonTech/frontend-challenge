import { Container, SearchInputComponent } from "./styles"

export function SearchInput(){

  return (
    <Container>
      <img src="/images/search.svg" alt="Search" />
      <SearchInputComponent placeholder="Search book" maxLength={255} />
    </Container>
  )
}