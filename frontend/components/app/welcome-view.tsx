import Hero from './hero';
import Navbar from './navbar';

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} className='h-screen'>
      <Navbar/>
      <Hero onStartCall={onStartCall}/>
    </div>
  );
};
