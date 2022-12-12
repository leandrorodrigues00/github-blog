import { PostsSummaryContainer, PostsSummaryHeader } from "./style";

export function PostsSummary() {
  return (
    <PostsSummaryContainer>
      <PostsSummaryHeader>
        <p>JavaScript data types and data structures</p>
        <time>Há 1 dia</time>
      </PostsSummaryHeader>

      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </PostsSummaryContainer>
  );
}
