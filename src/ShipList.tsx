import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { ShipListFragment$key } from "./__generated__/ShipListFragment.graphql";
import { useSearchParams } from "react-router-dom";
import { useTransition } from "react";

const ShipListFragment = graphql`
  fragment ShipListFragment on Root {
    allStarships(first: $amount) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

type ShipListProps = {
  root: ShipListFragment$key;
};

export default function ShipList({ root }: ShipListProps) {
  const data = useFragment(ShipListFragment, root);
  const [isPending, startTransition] = useTransition();

  const [_, setSearchParams] = useSearchParams();

  function onMore() {
    startTransition(() => {
      setSearchParams((params) => ({
        ...params,
        amount: parseInt(params.get("amount") || "5", 10) + 1,
      }));
    });
  }

  return (
    <div>
      <ol>
        {data.allStarships?.edges?.map((edge) => (
          <li key={edge?.node?.id}>{edge?.node?.name}</li>
        ))}
      </ol>
      {isPending && <p>Pending</p>}
      <button type="button" onClick={onMore}>
        More
      </button>
    </div>
  );
}
