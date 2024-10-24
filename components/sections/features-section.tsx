import { Card } from "@/components/ui/card";

const features = [
  {
    title: "손쉬운 사용성",
    description: "직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다."
  },
  {
    title: "강력한 성능",
    description: "최신 기술을 적용하여 빠르고 안정적인 서비스를 제공합니다."
  },
  {
    title: "24/7 지원",
    description: "언제든지 필요할 때 전문가의 도움을 받을 수 있습니다."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          왜 우리 제품인가요?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}