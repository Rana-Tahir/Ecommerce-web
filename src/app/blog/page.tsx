import React from "react";
import image1 from "../../../public/card-item (1).png";
import image2 from "../../../public/card-item (2).png";
import image3 from "../../../public/card-item (3).png";

interface ImageType {
  src: string;
  alt: string;
}

const Blog: React.FC = () => {
  const randomImages: ImageType[] = [
    { src: image1.src, alt: "Card Item 1" },
    { src: image2.src, alt: "Card Item 2" },
    { src: image3.src, alt: "Card Item 3" }
  ];

  return (
    <div className="p-5 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Welcome to Our Blog</h1>
        <p className="text-lg text-gray-600">Explore our latest articles, tips, and updates.</p>
      </header>

      <main className="flex flex-wrap gap-5">
        <section className="flex-1 min-w-[300px]">
          <article className="mb-5">
            <h2 className="text-2xl font-semibold mb-2">The Rise of Sustainable Fashion</h2>
            <p className="text-gray-700">The fashion industry is undergoing a significant transformation as consumers demand more sustainable and ethical practices. Learn how brands are embracing eco-friendly materials and reducing waste.</p>
          </article>
          <article className="mb-5">
            <h2 className="text-2xl font-semibold mb-2">Top 5 Travel Destinations for 2024</h2>
            <p className="text-gray-700">Looking for your next adventure? Discover the top travel destinations for 2024, from serene beaches to bustling cityscapes.</p>
          </article>
          <article className="mb-5">
            <h2 className="text-2xl font-semibold mb-2">How Technology is Shaping Education</h2>
            <p className="text-gray-700">From virtual classrooms to AI-driven learning tools, explore how technology is revolutionizing education and making it more accessible.</p>
          </article>
        </section>


        <section className="flex-1 min-w-[300px]">
          <h2 className="text-2xl font-semibold mb-5">Random Pics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {randomImages.map((image, index) => (
              <img 
                key={index} 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;