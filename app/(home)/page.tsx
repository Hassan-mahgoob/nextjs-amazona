import { HomeCarousel } from "@/components/shared/home/home-carousel";
import data from "@/lib/data";
import {
  getAllCategories,
  getProductsForCard,
} from "@/lib/actions/product.actions";
import { HomeCards } from "@/components/shared/home/home-card";
export default async function Page() {
  const categories = (await getAllCategories()).slice(0, 4);
  const NewArrivals = await getProductsForCard({
    tag: "new-arrival",
    limit: 4,
  });
  const featureds = await getProductsForCard({
    tag: "featured",
    limit: 4,
  });
  const bestSellers = await getProductsForCard({
    tag: "best-seller",
    limit: 4,
  });
  const cards = [
    {
      title: "Categories to explore",
      link: {
        text: "See More",
        href: "/search",
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${category.toString()}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: "Explore New Arrivals",
      items: NewArrivals,
      link: {
        text: "view All",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "Discover Best Sellers",
      items: bestSellers,
      link: {
        text: "view All",
        href: "/search?tag=best-seller",
      },
    },
    {
      title: "Featured Products",
      items: featureds,
      link: {
        text: "view All",
        href: "/search?tag=featured",
      },
    },
  ];
  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className="md:p-4 md:space-y-4 bg-border">
        <HomeCards cards={cards} />
      </div>
    </>
  );
}
