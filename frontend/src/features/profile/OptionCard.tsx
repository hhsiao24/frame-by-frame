import { Card, CardContent } from '@/components/ui/card.tsx';
import { H3 } from '@/components/ui/typography.tsx';

type OptionCardProps = {
  title: string;
  img: string;
}

export const OptionCard = ({ title, img }: OptionCardProps) => {
  return (
    <Card className="cursor-pointer">
      <CardContent className="flex flex-col items-center gap-4">
        <H3>{title}</H3>
        <img src={img} alt={`Image for ${title}`} className="max-h-48" />
      </CardContent>
    </Card>
  );
};