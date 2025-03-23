import { H1, H2 } from '@/components/ui/typography.tsx';
import { OptionCard } from '@/features/profile/OptionCard.tsx';
import { Grid } from '@/components/ui/grid.tsx';

export const Profile = () => {
  return (
    <div className="flex flex-col w-screen p-15 gap-16">
      <div className="flex flex-col gap-4 items-start bg-stone-100">
        <H2>Hi,</H2>
        <H1>Snowy!</H1>
      </div>
      <Grid container className="gap-8">
        <Grid item span={{ sm: 12, md: 6, lg: 4 }}>
          <OptionCard title="Take Pictures" img="/take-photo.png" />
        </Grid>
        <Grid item span={{ sm: 12, md: 6, lg: 4 }}>
          <OptionCard title="Upload Photos" img="/upload-photo.png" />
        </Grid>
        <Grid item span={{ sm: 12, md: 6, lg: 4 }}>
          <OptionCard title="View Gallery" img="/view-gallery.png" />
        </Grid>
      </Grid>
    </div>
  );
};