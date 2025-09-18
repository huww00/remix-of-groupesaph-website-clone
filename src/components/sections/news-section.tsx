"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsArticle {
  imageSrc: string;
  imageAlt: string;
  title: string;
  category: string;
  articleLink: string;
  categoryLink: string;
}

const newsData: NewsArticle[] = [
  {
    imageSrc: "https://www.groupesaph.com/wp-content/uploads/2025/03/EasyRoaming.png",
    imageAlt: "EasyRoaming Application on a smartphone",
    title: "EasyRoaming – Restez connecté à l'étranger sans vous ruiner",
    category: "Nouveautés technologiques",
    articleLink: "#",
    categoryLink: "#",
  },
  {
    imageSrc: "https://www.groupesaph.com/wp-content/uploads/2025/03/photo-article-hwai.jpg",
    imageAlt: "Enterprise Roadshow 2025 event for HUAWEI innovations",
    title: "Enterprise Roadshow 2025 – Venez découvrir les innovations HUAWEI !",
    category: "Evènements",
    articleLink: "#",
    categoryLink: "#",
  },
  {
    imageSrc: "https://www.groupesaph.com/wp-content/uploads/2025/01/Vignette-actus-site-5.png",
    imageAlt: "2025 new year wishes",
    title: "Saphelec vous partage ses meilleurs voeux !",
    category: "Actualité de l'entreprise",
    articleLink: "#",
    categoryLink: "#",
  },
  {
    imageSrc: "https://www.groupesaph.com/wp-content/uploads/2025/06/7.jpg",
    imageAlt: "DBH Services logo for computer reconditioning",
    title: "Reconditionnement informatique : valorisez vos anciens équipements avec SAPHELEC et DBH Services",
    category: "Actualité de l'entreprise",
    articleLink: "#",
    categoryLink: "#",
  },
];

const NewsCard = ({ article }: { article: NewsArticle }) => (
  <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-[#F2F3F5] flex flex-col h-full transition-shadow duration-200 hover:shadow-2xl">
    <Link href={article.articleLink}>
        <div className="relative w-full aspect-[258/192]">
          <Image
            src={article.imageSrc}
            alt={article.imageAlt}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
    </Link>
    <div className="p-[30px] flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-dark-gray mb-[30px] flex-grow">
        <Link href={article.articleLink} className="hover:text-primary transition-colors">
            {article.title}
        </Link>
      </h3>
      <div className="mt-auto">
        <Link 
            href={article.categoryLink}
            className="text-primary border border-primary rounded-full px-[15px] py-2 text-[12.8px] font-medium leading-tight hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
        >
          {article.category}
        </Link>
      </div>
    </div>
  </div>
);

export default function NewsSection() {
  return (
    <section className="bg-white py-[50px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-[60px]">
          <h4 className="text-[13.6px] font-medium text-medium-gray uppercase tracking-[2.72px] mb-[15px]">
            LES DERNIÈRES NEWS SAPHELEC
          </h4>
          <h2 className="text-[40px] font-semibold text-dark-gray leading-[52px]">
            Nos actualités
          </h2>
          <p className="mt-[15px] text-base text-medium-gray max-w-3xl mx-auto">
            Retrouvez nos dernières actualités, des{" "}
            <a
              href="https://www.linkedin.com/company/saphelec/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              témoignages client
            </a>{" "}
            et nos prochains évènements !
          </p>
        </div>

        <div className="relative">
          <button
            aria-label="Previous slide"
            className="absolute top-[40%] -left-5 z-10 hidden lg:flex items-center justify-center w-[38px] h-[38px] bg-dark-gray text-white rounded-sm hover:bg-primary transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {newsData.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>

          <button
            aria-label="Next slide"
            className="absolute top-[40%] -right-5 z-10 hidden lg:flex items-center justify-center w-[38px] h-[38px] bg-dark-gray text-white rounded-sm hover:bg-primary transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}