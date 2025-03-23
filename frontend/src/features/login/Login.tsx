import { H2, P } from '@/components/ui/typography.tsx';
import { Button } from '@/components/ui/button.tsx';
import { IconBrandGoogleFilled, IconArrowLeft } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router';
import { useGoogleLogin } from '@react-oauth/google';

export const Login = () => {
  const nav = useNavigate();
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse);
      nav('/profile');
    },
  });

  return (
    <div className="flex flex-row gap-4 items-center bg-stone-100 w-screen min-h-screen justify-center">
      <img src="/side-eye-cat.png" alt="side eye cat" className="max-w-[250px] w-1/2 pt-16" />
      <div className="flex flex-col items-start px-8 gap-4">
        <H2>Login</H2>
        <P className="text-left max-w-md"> Login with Google to save and access all your
          frames in one place! With an account,
          you can keep track of your designs, pick up where you left off, and easily manage all your
          creations.
          Get started now and never lose your progress!</P>
        <Button onClick={() => login()}>
          <IconBrandGoogleFilled />
          Login with Google
        </Button>
        <Link to="/">
          <Button variant="outline">
            <IconArrowLeft />
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};
