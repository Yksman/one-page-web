'use client';

import { Laptop } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onStartTrial: () => void;
}

export function HeroSection({ onStartTrial }: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container px-4 mx-auto text-center">
        <Laptop className="w-16 h-16 mx-auto mb-8 text-primary" />
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Product Name
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          혁신적인 소프트웨어 솔루션으로 비즈니스를 혁신하세요
        </p>
        <Button size="lg" className="mt-8" onClick={onStartTrial}>
          무료체험 시작하기
        </Button>
      </div>
    </section>
  );
}