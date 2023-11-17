import { graphql, useLazyLoadQuery } from "react-relay";
import {
  useNavigate,
} from "react-router-dom";
import { RouteOneQuery as RouteOneQueryType } from "./__generated__/RouteOneQuery.graphql";
import AppChrome from "./AppChrome";

const RouteOneQuery = graphql`
  query RouteOneQuery {
    allStarships(first: 10) {
      edges {
         node {
           name
         }
      }
    }
  }
`;

export default function RouteOne() {
  const navigate = useNavigate();

  const data = useLazyLoadQuery<RouteOneQueryType>(RouteOneQuery, {});

  return (
    <AppChrome>
      <h2>Route one</h2>
      <ul>{data.allStarships?.edges?.map(edge => <li>{edge?.node?.name}</li>)}</ul>
      <button
        type="button"
        onClick={() => {
          navigate("/two");
        }}
      >
        two
      </button>
    </AppChrome>
  );
}
