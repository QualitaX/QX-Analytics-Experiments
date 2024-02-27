"use client";

import { NetworkType } from "@/app/erc3643/constants/network-types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/widgets/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/widgets/table";
import { overviewDataset } from "../actions/overview";
import BChart from "./bchart";
import PChart from "./pchart";

interface OverviewProp {
  data: overviewDataset;
  network: string;
}

export function Overview({ data, network = "all" }: OverviewProp) {
  if (!Object.values(NetworkType).includes(network as NetworkType))
    network = "all";

  return (
    // <Tabs defaultValue={network} className="space-y-4">
    //   <TabsList>
    //     {Object.entries(NetworkType).map(([key, value]) => (
    //       <TabsTrigger key={key} value={value}>
    //         {capitalizeFirstLetter(value)}
    //       </TabsTrigger>
    //     ))}
    //   </TabsList>
    //   {Object.entries(NetworkType).map(([key, value]) => (
    //     <TabsContent key={key} value={value} className="space-y-4">
    <>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2">
          N# of permissionned token contracts deployed from the Tokeny T-Rex
          Factory.
        </h2>
        <div className="grid md:grid-cols-2 gap-4 pb-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Total Token Contracts Deployed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-center">
                {data.totalTokenContractsDeployed.count.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground text-end">
                Counter
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Total Token Contracts Deployed by Network</CardTitle>
            </CardHeader>
            <CardContent>
              <PChart
                data={Object.entries(
                  data.totalTokenContractsDeployed.byNetwork
                ).map(([key, value]) => ({
                  name: key,
                  value: value,
                }))}
              />
            </CardContent>
          </Card>
        </div>
        <div className="grid">
          <Card>
            <CardHeader>
              <CardTitle>ChartTitle</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <BChart
                xaxis="date"
                yaxis={Object.keys(data.totalTokenContractsDeployed.byNetwork)}
                data={Object.entries(
                  data.totalTokenContractsDeployed.byMonth
                ).map(([key, value]) => ({
                  date: key,
                  ...value,
                }))}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      {/* <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2">
          List of permissionned token contracts deployed from Tokeny TREX
          Factory by network.
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>1</CardTitle>
            </CardHeader>
            <CardContent className="pl-2"></CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">2</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">3</CardContent>
          </Card>
        </div>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-2">
          N# Whitelisted Investors
        </h2>
        <div className="p-4 grid lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>1</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">1</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">2</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">3</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>4</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">4</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>5</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">5</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>6</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">6</CardContent>
          </Card>
        </div>
      </div> */}
    </>
    //     </TabsContent>
    //   ))}
    // </Tabs>
  );
}
