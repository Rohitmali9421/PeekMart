import React from "react";

const categories = [
  {
    id: 1,
    image:
      "https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-01.jpg",
    label: "#House",
    title: "Express Your Beautiful Life Through Furniture",
    size: "large",
  },
  {
    id: 2,
    image:
      "https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-02.jpg",
    label: "#Accessories",
    title: "Discover Our Accessories Collection",
    size: "small",
  },
  {
    id: 3,
    image:
      "https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/categories/category-03/image-03.jpg",
    label: "#Office",
    title: "Make Your Workspace More Comfortable",
    size: "small",
  },
];

function OurServices() {
  return (
    <section className="bg-white py-12 md:py-14 lg:py-16">
      <div className="px-8 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mx-auto max-w-6xl">
          <div className="row-span-2 relative">
            <img
              src={categories[0].image}
              alt="category"
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute left-0 top-0 h-full w-full  px-6 py-8 sm:px-10 flex items-start rounded-lg">
              <div className="max-w-[400px]">
                <span className="mb-2 block text-sm font-medium text-blue">
                  {categories[0].label}
                </span>
                <a
                  href="#"
                  className="text-lg font-semibold text-white lg:text-xl xl:text-2xl"
                >
                  {categories[0].title}
                </a>
              </div>
            </div>
          </div>
          {categories.slice(1).map((category) => (
            <div key={category.id} className="relative">
              <img
                src={category.image}
                alt="category"
                className="h-full w-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-black/30 px-6 py-8 sm:px-10 flex items-start rounded-lg">
                <div className="max-w-[400px]">
                  <span className="mb-2 block text-sm font-medium text-white">
                    {category.label}
                  </span>
                  <a
                    href="#"
                    className="text-lg font-semibold text-white lg:text-xl xl:text-2xl"
                  >
                    {category.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
