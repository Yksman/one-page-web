'use client';

import { Button } from "@/components/ui/button";

interface HeaderSectionProps {
  onContact: () => void;
}

export function HeaderSection({ onContact }: HeaderSectionProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container h-full px-4 mx-auto">
        <div className="flex items-center justify-between h-full">
          <div className="flex-1" /> {/* Spacer for centering */}
          <div className="text-lg font-semibold">
            Your Product Name
          </div>
          <div className="flex-1 flex justify-end">
            <Button variant="ghost" onClick={onContact}>
              문의하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}