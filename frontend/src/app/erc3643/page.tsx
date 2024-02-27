import { getOverviewData } from "./actions/overview";
import { Overview } from "./components/overview";

export default async function IndexPage({
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
        Dashboard
      </h1>
      <Overview data={data} network={network} />
    </>
  );
}
