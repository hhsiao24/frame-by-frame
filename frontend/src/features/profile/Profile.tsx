import { H1, H2 } from '@/components/ui/typography.tsx';
import { OptionCard } from '@/features/profile/OptionCard.tsx';
import { Grid } from '@/components/ui/grid.tsx';
import { Button } from '@/components/ui/button.tsx';
import { IconArrowRight, IconLogout } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { googleLogout } from '@react-oauth/google';

export const Profile = () => {
  const nav = useNavigate();
  const userToken = localStorage.getItem('userToken');
  const [name, setName] = useState();

  const getUser = async () => {
    try {
      const res = await axios.get(import.meta.env.VITE_BACKEND_URL + '/profile', {
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
      });
      setName(res.data.name);
    } catch (e) {
      // token may not be valid
      localStorage.removeItem('userToken');
      nav('/login');
    }
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    googleLogout();
    nav('/');
  };

  useEffect(() => {
    if (!userToken) {
      // not logged in
      nav('/');
    }

    getUser();
  }, []);

  return (
    <div className="flex flex-col w-screen p-15 gap-16">
      <div className="flex flex-col gap-4 items-start bg-stone-100">
        <Grid container className="flex justify-between items-center w-full">
          <H2>Hi,</H2>
          <Button variant="outline" className="flex items-center gap-2" onClick={logout}>
            Logout
            <IconLogout />
          </Button>
        </Grid>
        <H1>{name}!</H1>
      </div>
      <Grid container className="gap-8">
        <Grid item span={{ sm: 12, md: 6, lg: 4 }}>
          <Link to="/picture">
            <OptionCard title="Take Pictures" img="/take-photo.png" />
          </Link>
        </Grid>
        <Grid item span={{ sm: 12, md: 6, lg: 4 }}>
          <OptionCard title="Upload Photos" img="/upload-photo.png" />
        </Grid>
        <Grid item span={{ sm: 12, md: 6, lg: 4 }}>
          <OptionCard title="View Gallery" img="/view-gallery.png" />
        </Grid>
      </Grid>
      <Grid container className="flex justify-between items-center w-full">
        <H2 className="font-bold">Your Frames</H2>
        <Button variant="outline" className="flex items-center gap-2">
          View More
          <IconArrowRight />
        </Button>
      </Grid>
    </div>
  );
};