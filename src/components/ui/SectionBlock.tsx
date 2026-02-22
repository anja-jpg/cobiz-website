import ScrollFadeIn from './ScrollFadeIn';

type SectionTheme = 'white' | 'mint' | 'dark';

interface SectionBlockProps {
  theme?: SectionTheme;
  children: React.ReactNode;
  className?: string;
  /** Max-width class: 'max-w-7xl', 'max-w-5xl', 'max-w-4xl', 'max-w-3xl', etc. */
  maxWidth?: string;
  /** Add id for anchor links */
  id?: string;
  /** Disable fade-in animation */
  noFade?: boolean;
}

const themeClasses: Record<SectionTheme, string> = {
  white: 'bg-white',
  mint: 'bg-cobiz-mint',
  dark: 'bg-cobiz-dark',
};

export default function SectionBlock({
  theme = 'white',
  children,
  className = '',
  maxWidth = 'max-w-5xl',
  id,
  noFade = false,
}: SectionBlockProps) {
  const content = (
    <section
      id={id}
      className={`section-padding ${themeClasses[theme]} ${id ? 'scroll-mt-24' : ''} ${className}`}
    >
      <div className={`mx-auto ${maxWidth}`}>{children}</div>
    </section>
  );

  if (noFade) return content;

  return (
    <ScrollFadeIn>
      {content}
    </ScrollFadeIn>
  );
}
