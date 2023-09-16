import { useEffect } from "react";
import axios from "axios";
import useSWR, { SWRConfig } from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home = () => {
  const { data, error, isLoading, isValidating } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  useEffect(() => {
    if (!isLoading) {
      console.log(data);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (isValidating) return <div>validating...</div>;

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: true,
      }}
    >
      <h1>This is Home</h1>
      {/* <div>{data}</div> */}
    </SWRConfig>
  );
};

export default Home;
