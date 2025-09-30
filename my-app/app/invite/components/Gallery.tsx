"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  src: string;
  alt: string;
  w?: number;
  h?: number;
}

const images: GalleryImage[] = [
  { src: "/coffee_1.jpeg", alt: "sai coffee image 1" },
  { src: "/coffee_2.jpeg", alt: "sai coffee image 2" },
  { src: "/coffee_3.png", alt: "sai coffee image 3" },
  { src: "/coffee_4.jpeg", alt: "sai coffee image 4" },
  { src: "/coffee_5.jpeg", alt: "sai coffee image 5" },
  { src: "/coffee_6.jpeg", alt: "sai coffee image 6" },
];

export function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className='grid grid-cols-3 gap-1 mt-6'>
        {images.map((img, i) => (
          <button
            key={img.src}
            type='button'
            onClick={() => setIndex(i)}
            className='relative aspect-square overflow-hidden rounded-sm bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#0d2d55]/50'
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes='33vw'
              className='object-cover transition duration-300 scale-105 hover:scale-100'
              priority={i === 0}
            />
          </button>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        /** 모바일에서 UX 향상을 위한 옵션 (필요시 추가 커스터마이즈 가능) */
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        carousel={{ finite: true }}
      />
    </>
  );
}
