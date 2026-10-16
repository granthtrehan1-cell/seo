import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface DirectAnswerBoxProps {
  question: string;
  answer: string;
  keyTakeaways: string[];
}

export const DirectAnswerBox: React.FC<DirectAnswerBoxProps> = ({
  question,
  answer,
  keyTakeaways
}) => {
  return (
    <section
      aria-label="Quick Answer and Key Takeaways"
      className="my-8 rounded-xl border border-red-900/50 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 shadow-sm"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 mb-2">
        <Sparkles className="h-4 w-4" />
        <span>Direct Answer / Quick Summary</span>
      </div>

      <h2 className="text-lg font-bold text-white mb-2 font-display">
        {question}
      </h2>

      <p className="text-sm font-medium leading-relaxed text-neutral-200 bg-neutral-950/70 p-4 rounded-lg border border-neutral-800/80">
        {answer}
      </p>

      {keyTakeaways && keyTakeaways.length > 0 && (
        <div className="mt-5 border-t border-neutral-800/80 pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 block">
            Key Takeaways & Core Rules
          </span>
          <ul className="space-y-2 text-xs text-neutral-300">
            {keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
                <span className="leading-normal">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
