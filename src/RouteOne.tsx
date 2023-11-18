import {
  PreloadedQuery,
  graphql,
  loadQuery,
  usePreloadedQuery,
} from "react-relay";
import {
  useNavigate,
  useLoaderData,
  LoaderFunctionArgs,
} from "react-router-dom";
import { RouteOneQuery as RouteOneQueryType } from "./__generated__/RouteOneQuery.graphql";
import AppChrome from "./AppChrome";
import { RelayEnvironment } from "./RelayEnvironment";
import ShipList from "./ShipList";
import { Suspense } from "react";

const RouteOneQuery = graphql`
  query RouteOneQuery($amount: Int) {
    ...ShipListFragment
  }
`;

export function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const amount = parseInt(url.searchParams.get("amount") || "5", 10);
  return loadQuery(RelayEnvironment, RouteOneQuery, { amount });
}

export default function RouteOne() {
  const navigate = useNavigate();

  const queryReference = useLoaderData() as PreloadedQuery<RouteOneQueryType>;
  const data = usePreloadedQuery<RouteOneQueryType>(
    RouteOneQuery,
    queryReference,
  );

  return (
    <AppChrome>
      <h2>Route one</h2>
      <Suspense fallback={<p>Loading ships...</p>}>
        <ShipList root={data} />
      </Suspense>
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
