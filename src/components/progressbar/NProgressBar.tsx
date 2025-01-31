import { useEffect, useRef , memo} from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

interface ProgressBarProps {
  color?: string;
  startPosition?: number;
  stopDelayMs?: number;
  height?: number;
  showOnShallow?: boolean;
  options?: Partial<NProgress.NProgressOptions>;
}


const NProgressBar = ({
  startPosition = 0.3,
  stopDelayMs = 200,
  showOnShallow = true,
  options,
}: ProgressBarProps ) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (options) {
      NProgress.configure(options);
    }

    const handleStart = (_: string, { shallow }: { shallow: boolean }) => {
      if (!shallow || showOnShallow) {
        NProgress.set(startPosition);
        NProgress.start();
      }
    };

    const handleStop = (_: string, { shallow }: { shallow: boolean }) => {
      if (!shallow || showOnShallow) {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          NProgress.done(true);
        }, stopDelayMs);
      }
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleStop);
    Router.events.on('routeChangeError', handleStop);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleStop);
      Router.events.off('routeChangeError', handleStop);
    };
  }, [Router, showOnShallow, startPosition, stopDelayMs, options]);
  return null;
};


export default memo(NProgressBar);
