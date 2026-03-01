'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQContent } from '@/lib/content';

export default function HomeFAQ({ content }: { content: FAQContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-cobiz-mint section-padding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-cobiz-dark sm:mb-12 sm:text-3xl md:text-4xl">
          {content.title}
        </h2>

        <div className="space-y-3">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl transition-all duration-300 ${
                  isOpen
                    ? 'bg-white shadow-lg border-2 border-cobiz-green/30'
                    : 'bg-white/80 shadow-sm border-2 border-transparent hover:border-cobiz-green/10 hover:shadow-md'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center gap-4 p-5 text-left font-semibold text-cobiz-dark transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-cobiz-green text-white' : 'bg-cobiz-green/10 text-cobiz-green'
                  }`}>
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <span className="flex-1">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-cobiz-green transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-cobiz-green/10 px-5 pb-5 pt-3 pl-[4.5rem]">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
