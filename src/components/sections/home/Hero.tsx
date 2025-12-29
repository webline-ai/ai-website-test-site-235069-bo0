'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Technology Made Simple',
  subtitle: 'Clean, intuitive solutions that work seamlessly for everyone',
  description:
    'We believe the best technology disappears into the background, letting you focus on what matters most. Our streamlined approach removes complexity without sacrificing power.',
  ctaText: 'Get Started',
  ctaHref: '/start',
  secondaryCtaText: 'Learn More',
  secondaryCtaHref: '/about',
  features: ['Effortless to use', 'Smart by design', 'Accessible for all'],
  stats: [
    { label: 'Users', value: '10K+' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Support', value: '24/7' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section
      id="hero"
      className="bg-background text-foreground min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              <span data-editable="title">{config.title}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-medium transition-all duration-200"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              {config.features.map((feature, idx) => (
                <Card
                  key={idx}
                  className="bg-card text-card-foreground border-border hover:bg-accent/50 transition-colors duration-200"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {idx === 0 && <Zap className="h-8 w-8 text-primary" />}
                      {idx === 1 && <Sparkles className="h-8 w-8 text-primary" />}
                      {idx === 2 && <Shield className="h-8 w-8 text-primary" />}
                    </div>
                    <p className="font-medium text-lg">
                      <span data-editable={`features[${idx}]`}>{feature}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subtle Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
