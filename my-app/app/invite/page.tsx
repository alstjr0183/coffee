import Image from "next/image";
import Link from "next/link";
import { Gallery } from "./components/Gallery";

// 간단한 모바일 전용 초대 페이지
// 추후: 사진 파일을 public/ 폴더에 넣고 파일명 변경 가능
// 예: public/cafe-front-day.jpg, public/cafe-front-night.jpg

const KAKAO_MAP_URL = "https://place.map.kakao.com/1467306095";

export const metadata = {
  title: "슬기 아빠의 사이커피 초대장 ☕️",
  description:
    "따뜻한 향 가득한 작은 로스터리, 슬기 아빠의 사이커피에 놀러오세요~ ☕️🐾",
  openGraph: {
    title: "슬기 아빠의 사이커피 초대장 ☕️",
    description: "편하게 들러 한 잔 하고 가세요~🐶",
    images: [
      {
        url: "/강아지.jpeg",
        alt: "슬기와 sai coffee",
      },
    ],
  },
};

export default function InvitePage() {
  const heroImages = [
    "/coffee_2.jpeg",
    "/coffee_3.png",
    "/coffee_4.jpeg",
    "/coffee_5.jpeg",
    "/coffee_6.jpeg",
  ];

  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-[#fdfefe] via-[#f4f9ff] to-[#eef7ff] text-[#0d2d55] font-sans flex flex-col relative overflow-hidden'>
      {/* Floating decorative blobs */}
      <div className='pointer-events-none absolute -top-10 -left-10 w-52 h-52 bg-gradient-to-br from-[#9dd9ff] via-[#e0f7ff] to-transparent rounded-full blur-3xl opacity-50 animate-[pulseBlob_9s_ease-in-out_infinite]'></div>
      <div className='pointer-events-none absolute -bottom-14 -right-10 w-60 h-60 bg-gradient-to-br from-[#ffe8d2] via-[#fff5eb] to-transparent rounded-full blur-3xl opacity-60 animate-[pulseBlob_11s_ease-in-out_infinite]'></div>
      {/* Hero 슬라이더 (페이드) */}
      <div className='relative w-full aspect-[4/5] overflow-hidden'>
        {/* 이미지 레이어 */}
        {/* 슬라이드 속도 변경: 총 9초 (이미지 5장 * 1.8초 간격 권장). */}
        <div className='absolute inset-0 animate-[fadeCycle_9s_linear_infinite]'>
          {heroImages.map((src, i) => (
            <div
              key={src}
              className='absolute inset-0 opacity-0 [animation:fadeImage_9s_linear_infinite] will-change-transform'
              style={{ animationDelay: `${i * 1.8}s` }}
            >
              <Image
                src={src}
                alt='sai coffee hero'
                fill
                priority={i === 0}
                sizes='100vw'
                className='object-cover scale-105 animate-[heroZoom_9s_linear_infinite]'
              />
              <div className='absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0.15))]' />
            </div>
          ))}
        </div>
        {/* 텍스트 */}
        <div className='relative z-10 flex flex-col justify-end h-full p-6 text-white'>
          <h1 className='text-4xl font-extrabold tracking-tight mb-3 drop-shadow-sm bg-clip-text text-transparent bg-[linear-gradient(90deg,#ffffff,#d0f0ff,#ffffff)] animate-[shineText_5s_linear_infinite]'>
            sai coffee
          </h1>
        </div>
      </div>

      {/* 본문 */}
      <div className='flex-1 px-6 pt-8'>
        <section className='mb-10'>
          <div className='relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#ffffffcc,#e6f3ffcc,#ffffffcc)] backdrop-blur-md border border-white/70 shadow-[0_8px_26px_-6px_rgba(0,60,120,0.25)] p-5 will-change-transform animate-[sectionRise_0.9s_ease_forwards] opacity-0'>
            <div className='flex items-center gap-2 mb-3'>
              <span className='h-2 w-2 rounded-full bg-[#0d2d55]/70 animate-pulse' />
              <h2 className='text-xs font-semibold tracking-[0.25em] text-[#0d2d55]/70 uppercase'>
                About 🐾
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
        <section className='mb-10 animate-[sectionRise_0.9s_ease_0.08s_forwards] opacity-0'>
          <h2 className='text-xs font-semibold tracking-[0.25em] text-[#0d2d55]/70 mb-4 uppercase flex items-center gap-2'>
            <span>Signature ✨</span>
            <span className='h-px flex-1 bg-gradient-to-r from-[#0d2d55]/30 to-transparent' />
          </h2>
          <div className='grid grid-cols-3 gap-3 text-center text-[11px]'>
            {[
              {
                name: "솔티\n크림 라떼 🧂",
                grad: "from-emerald-50/70 to-emerald-100/40 border-emerald-200/60",
              },
              {
                name: "아몬드\n크림 라떼 🌰",
                grad: "from-amber-50/80 to-amber-100/40 border-amber-200/60",
              },
              {
                name: "아몬드\n크림 모카 🍫",
                grad: "from-rose-50/80 to-rose-100/40 border-rose-200/60",
              },
            ].map((m) => (
              <div
                key={m.name}
                className={`group rounded-xl px-2 py-3 leading-tight flex items-center justify-center whitespace-pre-line border text-[#193959] bg-gradient-to-br ${m.grad} shadow-[0_2px_6px_-1px_rgba(0,40,80,0.15)] backdrop-blur-[2px] relative overflow-hidden`}
              >
                <span className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),rgba(255,255,255,0)_60%)] mix-blend-screen'></span>
                <span className='relative'>{m.name}</span>
              </div>
            ))}
          </div>
        </section>
        <section className='mb-10 animate-[sectionRise_0.9s_ease_0.16s_forwards] opacity-0'>
          <h2 className='text-xs font-semibold tracking-[0.2em] text-[#0d2d55]/70 mb-2 uppercase'>
            Gallery
          </h2>
          <Gallery />
        </section>
        <section className='mb-8 animate-[sectionRise_0.9s_ease_0.24s_forwards] opacity-0'>
          <div className='rounded-2xl p-5 bg-[linear-gradient(140deg,#ffffff,#e9f5ff_55%,#e2f0ff)] border border-white/70 shadow-[0_6px_22px_-6px_rgba(0,70,140,0.25)] relative overflow-hidden'>
            <h2 className='text-xs font-semibold tracking-[0.25em] text-[#0d2d55]/70 mb-3 uppercase flex items-center gap-2'>
              Visit 📍
              <span className='h-px flex-1 bg-gradient-to-r from-[#0d2d55]/30 to-transparent' />
            </h2>
            <p className='text-sm text-[#1d4160] mb-4'>
              길 찾고 바로 오세요. 첫 방문 커피 한 잔 반갑게 준비할게요!
            </p>
            <Link
              href={KAKAO_MAP_URL}
              target='_blank'
              className='group block w-full rounded-full bg-[#0d2d55] text-white text-center py-4 text-sm font-medium shadow-lg active:scale-[0.97] transition relative overflow-hidden'
            >
              <span className='absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent_70%)]'></span>
              카카오맵 열기 ↗
            </Link>
            <div className='pointer-events-none absolute -right-8 -bottom-10 w-40 h-40 rounded-full bg-[#0d2d55]/5 blur-2xl' />
          </div>
        </section>
      </div>
    </div>
  );
}
