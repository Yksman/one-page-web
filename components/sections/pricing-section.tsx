'use client';

import { Check } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingSectionProps {
  onTrialClick: () => void;
  onPurchaseClick: () => void;
}

const features = [
  "무제한 프로젝트 생성",
  "실시간 협업 기능",
  "고급 분석 대시보드",
  "우선 순위 기술 지원",
  "API 액세스",
  "맞춤형 통합 지원",
  "전용 계정 관리자",
  "99.9% 가동시간 SLA"
];

export function PricingSection({ onTrialClick, onPurchaseClick }: PricingSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            심플한 요금제
          </h2>
          <p className="text-lg text-muted-foreground">
            복잡한 선택은 그만, 필요한 모든 기능을 하나의 요금제로
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-2 border-primary">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-2">프리미엄 플랜</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">₩19,900</span>
                <span className="text-muted-foreground">/월</span>
              </div>
              <div className="flex gap-4 w-full mb-8">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={onTrialClick}
                >
                  7일 무료체험
                </Button>
                <Button 
                  className="flex-1"
                  onClick={onPurchaseClick}
                >
                  정기구독 신청
                </Button>
              </div>
              
              <div className="w-full text-left space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}