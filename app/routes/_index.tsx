import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Mini Product Catalog" }];
};

export default function Index() {
  return <h1>oi</h1>;
}
