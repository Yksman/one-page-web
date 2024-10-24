import { Star } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from 'next/image';

interface ReviewCardProps {
  review: {
    text: string;
    rating: number;
    nickname: string;
    profileImage: string;
    attachedImage: string;
  }
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={review.profileImage} alt={review.nickname} />
          <AvatarFallback>{review.nickname[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{review.nickname}</p>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-muted-foreground">{review.text}</p>
      
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={review.attachedImage}
          alt="Review image"
          fill
          className="object-cover"
        />
      </div>
    </Card>
  );
}