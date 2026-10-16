import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types/article';

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = 'Frequently Asked Questions'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="my-10 border-t border-neutral-800 pt-8" aria-label="Frequently Asked Questions">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="h-5 w-5 text-red-500" />
        <h2 className="text-2xl font-bold text-white font-display tracking-tight">
          {title}
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-lg border border-neutral-800 bg-neutral-900/60 overflow-hidden transition"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-4 text-left text-sm font-semibold text-white hover:text-red-400 transition cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-red-500' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-neutral-800/80 bg-neutral-950/70 p-4 text-xs leading-relaxed text-neutral-300">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
