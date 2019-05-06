import { ApolloClient, InMemoryCache } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState, { getToken }) {
  const httpLink = createHttpLink({
    uri:
      "https://inkmlouqlzg5vi6wf5i2djonii.appsync-api.us-east-1.amazonaws.com/graphql",
    credentials: "same-origin"
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        "X-Api-Key": "da2-vpamgl3ncze5bn44oumjt2hhrm"
      }
    };
  });

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
