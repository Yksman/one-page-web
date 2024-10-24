import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'trial' | 'purchase';
}

export function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
  const [contact, setContact] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    toast.success('신청이 완료되었습니다. 곧 담당자가 연락드리겠습니다.');
    setContact('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {type === 'trial' ? '7일 무료체험 신청' : '정기구독 신청'}
          </DialogTitle>
          <DialogDescription>
            {type === 'trial' 
              ? '무료체험 안내를 위해 연락처를 남겨주세요.'
              : '구독 신청을 위해 연락처를 남겨주세요.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="contact">연락처 또는 이메일</Label>
            <Input
              id="contact"
              type="text"
              placeholder="연락처 또는 이메일을 입력해주세요"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            {type === 'trial' ? '무료체험 신청하기' : '구독 신청하기'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}