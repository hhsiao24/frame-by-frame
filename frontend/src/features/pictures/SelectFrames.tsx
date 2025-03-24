import { Button } from '@/components/ui/button.tsx';
import { Grid } from '@/components/ui/grid.tsx';
import { H2, P } from '@/components/ui/typography.tsx';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

type SelectFramesProps = {
  size: number;
  setSize: (size: number) => void;
  nextStage: () => void;
}

export const SelectFrames = ({ size: selectedSize, setSize: setSelectedSize, nextStage }: SelectFramesProps) => {
  const sizes = [
    { label: 1, img: 'one-frame.png' },
    { label: 2, img: 'two-frames.png' },
    { label: 4, img: 'three-frames.png' },
  ];

  return (
    <div className="w-full flex flex-col gap-8">
      <H2>Select Number of Frames</H2>
      <P>Choose how many frames you want for your photobooth pictures! 📸✨ Whether you’re going for a classic single shot
        or a fun multi-frame collage, pick the perfect layout to capture your best moments! 🎞️🎉</P>
      <Grid container className="w-full gap-4">
        {sizes.map((size, i) => (
          <Grid item span={{ sm: 12, md: 6, lg: 4 }} key={i} className="flex flex-col items-center cursor-pointer gap-4"
                onClick={() => setSelectedSize(size.label)}>
            <Button className="w-11/12" variant={selectedSize === size.label ? 'default' : 'outline'}>
              {size.label}
            </Button>
            <div
              className={`${selectedSize === size.label && 'bg-neutral-50 !drop-shadow-md'} rounded-xl h-full transition-all`}>
              <img src={size.img} alt={`Sample image for photoshoot ${size.label} frames`}
                   className={selectedSize !== size.label ? 'opacity-70' : undefined} />
            </div>
          </Grid>
        ))}
      </Grid>
      <div className="flex flex-row justify-between">
        <Button disabled variant="outline"><IconArrowLeft />Back</Button>
        <Button onClick={nextStage}>Next<IconArrowRight /></Button>
      </div>
    </div>
  );
};