import { PostCard } from "./components/PostCard";
import { PostContent } from "./components/PostContent";
import { PostContainer } from "./styles";

export function Post() {
  return (
    <PostContainer className="container">
      <PostCard />

      <PostContent />
    </PostContainer>
  );
}
