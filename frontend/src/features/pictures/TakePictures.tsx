import { Button } from '@/components/ui/button.tsx';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import Webcam from 'react-webcam';

type TakePicturesProps = {
  prevStage: () => void;
  nextStage: () => void;
};

export const TakePictures = ({ prevStage, nextStage }: TakePicturesProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Webcam mirrored />
      <div className="flex flex-row justify-between">
        <Button variant="outline" onClick={prevStage}><IconArrowLeft />Back</Button>
        <Button onClick={nextStage}>Next<IconArrowRight /></Button>
      </div>
    </div>
  );
};