import { ExternalLink } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const internalLinks = [
  {
    title: "시작 가이드",
    description: "제품 사용을 위한 상세 가이드",
    href: "/guides"
  },
  {
    title: "기술 문서",
    description: "개발자를 위한 API 문서",
    href: "/docs"
  }
];

const backlinks = [
  {
    title: "소프트웨어 리뷰 플랫폼 A",
    href: "https://example1.com/review"
  },
  {
    title: "기업용 소프트웨어 디렉토리 B",
    href: "https://example2.com/directory"
  },
  {
    title: "테크 뉴스 C",
    href: "https://example3.com/news"
  },
  {
    title: "소프트웨어 비교 플랫폼 D",
    href: "https://example4.com/compare"
  },
  {
    title: "IT 전문 블로그 E",
    href: "https://example5.com/blog"
  }
];

export function LinksSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          유용한 정보
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="space-y-8">
              {/* Internal Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">서비스 안내</h3>
                <div className="grid gap-4">
                  {internalLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.href}
                      className="block group hover:bg-muted/50 p-4 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <ExternalLink className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <h4 className="font-medium group-hover:text-primary">
                            {link.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Backlinks */}
              <div>
                <h3 className="text-xl font-semibold mb-4">관련 리소스</h3>
                <ul className="grid gap-2">
                  {backlinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{link.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}