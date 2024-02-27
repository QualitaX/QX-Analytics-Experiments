import { Overview } from "@/app/erc3643/components/overview";
import { Metadata } from "next";
import { getOverviewData } from "../actions/overview";

export const metadata: Metadata = {
  title: "Overview",
};

export default async function OverviewPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const network = (searchParams["network"] as string) ?? "all";
  const data = await getOverviewData();

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Overview
      </h1>
      <Overview data={data} network={network} />
    </>
  );
}
