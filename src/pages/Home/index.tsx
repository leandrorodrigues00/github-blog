import { PostsSummary } from "./components/PostsSummary";
import { ProfileCard } from "./components/ProfileCard";
import { SearchInput } from "./components/SearchInput";
import { HomeContainer, PostsContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer className="container">
      <ProfileCard />
      <SearchInput />

      <PostsContainer>
        <PostsSummary />

        <PostsSummary />
        <PostsSummary />
        <PostsSummary />
        <PostsSummary />
        <PostsSummary />
      </PostsContainer>
    </HomeContainer>
  );
}
