import Image from "next/image";
import Link from "next/link";
import { Gallery } from "./components/Gallery";

// 간단한 모바일 전용 초대 페이지
// 추후: 사진 파일을 public/ 폴더에 넣고 파일명 변경 가능
// 예: public/cafe-front-day.jpg, public/cafe-front-night.jpg

const KAKAO_MAP_URL = "https://place.map.kakao.com/1467306095";

export const metadata = {
  title: "sai coffee 초대장",
  description: "sai coffee 방문 초대",
};

//  { src: "/coffee_1.jpeg", alt: "sai coffee image 1" },
//   { src: "/coffee_2.png", alt: "sai coffee image 2" },
//   { src: "/coffee_3.png", alt: "sai coffee image 3" },
//   { src: "/coffee_4.jpeg", alt: "sai coffee image 4" },
//   { src: "/coffee_5.jpeg", alt: "sai coffee image 5" },
//   { src: "/coffee_6.jpeg", alt: "sai coffee image 6" },
export default function InvitePage() {
  const heroImages = [
    "/coffee_2.jpeg",
    "/coffee_3.png",
    "/coffee_4.jpeg",
    "/coffee_5.jpeg",
    "/coffee_6.jpeg",
  ];

  return (
    <div className='min-h-screen w-full bg-white text-[#0d2d55] font-sans flex flex-col'>
      {/* Hero 슬라이더 (페이드) */}
      <div className='relative w-full aspect-[9/16] overflow-hidden'>
        {/* 이미지 레이어 */}
        <div className='absolute inset-0 animate-[fadeCycle_18s_linear_infinite]'>
          {heroImages.map((src, i) => (
            <div
              key={src}
              className='absolute inset-0 opacity-0 [animation:fadeImage_18s_linear_infinite]'
              style={{ animationDelay: `${i * 6}s` }}
            >
              <Image
                src={src}
                alt='sai coffee hero'
                fill
                priority={i === 0}
                sizes='100vw'
                className='object-cover'
              />
              <div className='absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0.15))]' />
            </div>
          ))}
        </div>
        {/* 텍스트 */}
        <div className='relative z-10 flex flex-col justify-end h-full p-6 text-white'>
          <h1 className='text-4xl font-semibold tracking-tight mb-3 drop-shadow-sm'>
            sai coffee
          </h1>
        </div>
      </div>

      {/* 본문 */}
      <div className='flex-1 px-6 pt-8'>
        <section className='mb-10'>
          <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5f9ff] via-white to-[#eef2f8] border border-[#0d2d55]/10 shadow-sm p-5'>
            <div className='flex items-center gap-2 mb-3'>
              <span className='h-2 w-2 rounded-full bg-[#0d2d55]/70 animate-pulse' />
              <h2 className='text-xs font-semibold tracking-[0.25em] text-[#0d2d55]/70 uppercase'>
                About
              </h2>
            </div>
            <div className='flex gap-4'>
              <figure className='relative w-28 shrink-0 aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-[#0d2d55]/10 shadow-sm'>
                <Image
                  src={"/슬기.jpeg"}
                  alt='슬기'
                  fill
                  sizes='30vw'
                  className='object-cover'
                  priority
                />
              </figure>
              <div className='flex flex-col justify-center text-sm leading-relaxed text-neutral-700'>
                <p className='font-medium text-[#0d2d55] mb-1'>
                  슬기 아빠의 작은 로스터리
                </p>
                <p>
                  슬기아빠가 정성 들여 준비한{" "}
                  <span className='font-semibold'>sai coffee</span> 오픈! 편하게
                  놀러오세요 ☕️
                </p>
              </div>
            </div>
            {/* 장식 효과 */}
            <div className='pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#0d2d55]/5 blur-2xl' />
            <div className='pointer-events-none absolute -left-6 bottom-0 h-24 w-24 rounded-full bg-amber-100/40 blur-xl' />
          </div>
        </section>
        <section className='mb-8'>
          <h2 className='text-xs font-semibold tracking-[0.2em] text-[#0d2d55]/70 mb-3 uppercase'>
            Signature
          </h2>
          <div className='grid grid-cols-3 gap-3 text-center text-[11px]'>
            {[
              { name: "숲티\n크림 라떼", color: "bg-emerald-50" },
              { name: "아몬드\n크림 라떼", color: "bg-amber-50" },
              { name: "아몬드\n크림 모카", color: "bg-rose-50" },
            ].map((m) => (
              <div
                key={m.name}
                className={`${m.color} rounded-md px-2 py-3 leading-tight flex items-center justify-center whitespace-pre-line border border-black/5 shadow-sm`}
              >
                {m.name}
              </div>
            ))}
          </div>
        </section>
        <section className='mb-10'>
          <h2 className='text-xs font-semibold tracking-[0.2em] text-[#0d2d55]/70 mb-2 uppercase'>
            Gallery
          </h2>
          <Gallery />
        </section>
        <section className='mb-12'>
          <h2 className='text-xs font-semibold tracking-[0.2em] text-[#0d2d55]/70 mb-2 uppercase'>
            Visit
          </h2>
          <p className='text-sm text-neutral-700 mb-4'>
            카카오맵에서 위치와 길찾기를 바로 확인하세요.
          </p>
          <Link
            href={KAKAO_MAP_URL}
            target='_blank'
            className='block w-full rounded-full bg-[#0d2d55] text-white text-center py-4 text-sm font-medium shadow-md active:scale-[0.97] transition'
          >
            카카오맵 열기 ↗
          </Link>
        </section>
      </div>
    </div>
  );
}
