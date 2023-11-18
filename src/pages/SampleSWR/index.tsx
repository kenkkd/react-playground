import axios from "axios";
import useSWR, { SWRConfig } from "swr";

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const SampleSWR = () => {
  const { data, error, isLoading, isValidating } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (isValidating) return <div>validating...</div>;

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: true,
      }}
    >
      <div style={{ margin: 8 }}>
        <h1 style={{ marginBottom: 8 }}>Sample SWR</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {data?.map((post) => (
            <div
              key={post.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                border: "1px solid black",
                padding: 8,
              }}
            >
              <p>postId: {post.id}</p>
              <p>userId: {post.userId}</p>
              <p>title: {post.title}</p>
              <p>body: {post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </SWRConfig>
  );
};

export default SampleSWR;
