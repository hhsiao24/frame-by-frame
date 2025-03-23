import {H1, P} from '@/components/ui/typography.tsx';
import {Button} from '@/components/ui/button.tsx';
import {Link} from "react-router";

export const Home = () => {
    return (
        <div className="flex flex-col w-screen min-h-screen items-center px-8 pt-32 gap-4 bg-stone-100">
            <H1>Frame By Frame</H1>
            <P className="text-center max-w-xl">
                <b className="text-black">Ready to capture unforgettable moments, one frame at a time? 📸</b>
                Snap, pose, and create memories with our interactive props 🎭, instant prints 🖼️, and fun filters 🎨.
                With <b
                className="text-black">Frame by Frame</b>, every picture is a new chapter in your celebration! 🎉 It’s
                the
                perfect way to add a burst of joy ✨ to any occasion — because every moment deserves its frame! 💖
            </P>
            <Link to='/login'><Button>Get Started!</Button></Link>
            <img src="/cat-camera.png" alt="Cat in camera" className="max-w-sm w-11/12 pt-16"/>
        </div>
    );
};