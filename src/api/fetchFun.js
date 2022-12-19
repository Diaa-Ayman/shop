import client from "./gql-client";

// This function for fetching Data from a server...

const fetchData = async (the_query) => {
  const res = await client.query({ query: the_query });
  return res;
};

export default fetchData;
