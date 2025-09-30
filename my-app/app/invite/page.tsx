import Contents from "./components/Contents";

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
  return <Contents />;
}
