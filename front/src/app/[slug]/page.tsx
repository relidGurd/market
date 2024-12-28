import Breadcrubs from "@/components/Breadcrumb/Breadcrumb";
import NotFound from "../404";
import { title } from "process";
import CatalogPage from "@/clientPages/Catalog/Catalog";
import { IPage } from "@/types/page";

async function getPage({ params }: { params: { slug: string } }) {
  const res = await fetch(`http://localhost:1337/api/pages/${params.slug}`);

  if (!res.ok) {
    return NotFound();
  }

  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await getPage({ params });

  // if (data.length === 0) {
  //   return NotFound();
  // }

  return <main>{<CatalogPage {...data} />}</main>;
}
