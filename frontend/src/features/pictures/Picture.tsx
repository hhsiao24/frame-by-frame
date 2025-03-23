import { Grid } from '@/components/ui/grid.tsx';
import { H3 } from '@/components/ui/typography.tsx';
import { useState } from 'react';
import { SelectFrames } from '@/features/pictures/SelectFrames.tsx';
import { TakePictures } from '@/features/pictures/TakePictures.tsx';
import { Button } from '@/components/ui/button.tsx';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router';

export const Picture = () => {
  const [stage, setStage] = useState(0);
  const [size, setSize] = useState(1);

  const nextStage = () => {
    setStage(stage + 1);
  };

  const prevStage = () => {
    setStage(stage - 1);
  };

  const stages = [
    {
      name: 'Select Number of Frames',
      component: <SelectFrames size={size} setSize={setSize} nextStage={nextStage} />,
    },
    { name: 'Take Pictures', component: <TakePictures prevStage={prevStage} nextStage={nextStage} /> },
    { name: 'Select Pictures', component: <></> },
    { name: 'Edit + Customize', component: <></> },
  ];

  return (
    <Grid container className="w-screen p-16 gap-4 md:gap-16 ">
      <Grid item span={{ sm: 12, md: 4 }} className="flex flex-col gap-2 items-start">
        <Link to="/profile">
          <Button variant="ghost"><IconArrowLeft />Back</Button>
        </Link>
        <div className="flex flex-col items-start p-8 gap-4 bg-neutral-50 rounded-xl">
          <H3 className="font-bold">How Does This Work?</H3>
          {stages.map(({ name }, index) => (
            <Grid item container key={index} className="flex items-center gap-4">
              <Grid item span={{ sm: 4 }}>
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${index == stage ? 'bg-black text-neutral-200' : 'bg-neutral-200 text-black'}`}>
                  {index + 1}
                </div>
              </Grid>
              <Grid item span={{ sm: 8 }}>
                <H3>{name}</H3>
              </Grid>
            </Grid>
          ))}
        </div>
      </Grid>
      <Grid item span={{ sm: 12, md: 8 }}>
        {stages[stage].component}
      </Grid>
    </Grid>
  );
};