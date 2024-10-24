import { ReviewCard } from '@/components/review-card';

const reviews = [
  {
    text: "이 소프트웨어를 도입한 후 우리 팀의 업무 효율이 30% 이상 향상되었습니다. 특히 자동화 기능이 정말 인상적이에요. 덕분에 반복적인 작업에 들이는 시간을 크게 줄일 수 있었습니다.",
    rating: 5,
    nickname: "효율맨",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    attachedImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop"
  },
  {
    text: "처음에는 새로운 시스템 도입이 걱정됐는데, 직관적인 인터페이스 덕분에 팀원들 모두가 빠르게 적응했어요. 고객 지원팀의 친절하고 신속한 응대도 큰 도움이 되었습니다.",
    rating: 5,
    nickname: "테크리더",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    attachedImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop"
  },
  {
    text: "안정적인 성능과 뛰어난 확장성이 정말 마음에 듭니다. 특히 데이터 분석 기능이 훌륭해서 의사결정을 내리는 데 많은 도움이 되고 있어요. 강력 추천합니다!",
    rating: 4,
    nickname: "데이터맥스",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    attachedImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          고객 후기
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}