import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Banner from "~/components/Banner";

export const meta: MetaFunction = () => {
  return [{ title: "Mini Product Catalog" }];
};

export default function Index() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <Header />
      <Banner />
    </div>
  );
}
