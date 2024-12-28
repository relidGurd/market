import NotFound from "@/app/404";
import CategoryPage from "@/clientPages/Category/CategoryPage";
import Breadcrubs from "@/components/Breadcrumb/Breadcrumb";

async function getCategoryProductList({
  params,
}: {
  params: { slug: string[] };
}) {
  const res = await fetch(
    `http://localhost:1337
/api/categories/${params.slug}`
  );

  if (!res.ok) {
    return NotFound();
  }

  return res.json();
}

export default async function Catalog({
  params,
}: {
  params: { slug: string[] };
}) {
  const { data } = await getCategoryProductList({ params });

  if (data.length === 0) {
    return NotFound();
  }

  console.log(data);
  // const list = [
  //   {
  //     title: data[0].attributes.page.data.attributes.Title,
  //     href: `/${data[0].attributes.page.data.attributes.slug}`,
  //   },
  // ];

  return (
    <main>
      {/* <Breadcrubs title={data[0].attributes.title} list={list} /> */}
      <CategoryPage data={data} />
    </main>
  );
}
