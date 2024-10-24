import { Building } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="bg-background py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Building className="w-6 h-6" />
            <span className="font-semibold">Your Company Name</span>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>사업자등록번호: 123-45-67890</p>
            <p>대표: 홍길동</p>
            <p>주소: 서울특별시 강남구 테헤란로 123</p>
            <p>이메일: contact@example.com</p>
            <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}