export type TtextHoverProps = {
   titile1: string;
   titile2: string;
};

export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: string | number | any;
};

export type TMarqueeProps = {
   title: string;
   className: string;
};

export type TLinkHoverProps = {
   title: React.ReactNode;
   href: string;
   className?: string;
};

export type TButtonProps = {
   title: string;
   href: string;
};

export type TRoundedProps = {
   children: React.ReactNode;
   className?: string;
   backgroundColor: string;
};
declare global {
   interface Window {
      _fluidSimulationInitialized?: boolean;
      ga?: (...args: any[]) => void;
   }
   var ga: any;
}