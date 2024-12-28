import Product from "@/clientPages/Product/Product";
import Breadcrubs from "@/components/Breadcrumb/Breadcrumb";
async function getProduct({ params }: { params: { slug: string[] } }) {
  const data = await fetch(
    "http://localhost:1337/api/products/1?populate[image][populate]=*&populate[Details][populate]=*&populate[categories][populate]=*"
  ).then();
  return data.json();
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const { data } = await getProduct({ params });

  const breadcrubms = [
    {
      title:
        data.attributes.categories.data[0].attributes.page.data.attributes
          .Title,
      href: `/${data.attributes.categories.data[0].attributes.page.data.attributes.slug}`,
    },
    {
      title: data.attributes.categories.data[0].attributes.title,
      href: `/catalog/${data.attributes.categories.data[0].attributes.slug}`,
    },
  ];

  console.log(data.attributes.Title);

  return (
    <main>
      <Breadcrubs title={data.attributes.Title} list={breadcrubms} />
      <Product {...data} />
    </main>
  );
}
