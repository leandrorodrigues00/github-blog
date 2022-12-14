import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostHeader } from "./components/PostHeader";
import { IPost } from "../Home";
import { PostContent } from "./components/PostContent";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [postData, setPostData] = useState({} as IPost);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPostDetails = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );
      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  );
}
