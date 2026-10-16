import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ContactPageProps {
  navigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'technical_inquiry',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Please provide a detailed inquiry (minimum 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="py-10">
      <SEOHead
        title="Contact MotoGuide: Technical Inquiries & Rider Support"
        description="Get in touch with MotoGuide editors and test riders. Submit technical questions, editorial corrections, or motorcycle buying inquiries to our staff."
        canonicalPath="/contact/"
        schemaType="ContactPage"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} navigate={navigate} />

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500">
            Contact Editorial Staff
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mt-1">
            GET IN TOUCH WITH MOTOGUIDE
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-300">
            Have a motorcycle maintenance question, an inquiry about beginner bike fit, or a technical suggestion? Our team of mechanics and riders is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Information & Track Desk */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
              <h3 className="text-lg font-bold text-white font-display mb-4">
                EDITORIAL CONTACT DETAILS
              </h3>

              <div className="space-y-4 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-white">General Editorial Inquiries</strong>
                    <span className="text-neutral-400">editorial@motoguide.app</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-white">Technical Staff Desk</strong>
                    <span className="text-neutral-400">tech@motoguide.app</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-white">Proving Grounds & Workshop</strong>
                    <span className="text-neutral-400">
                      MotoGuide Testing Facility, Track Access Bay 4, Rosamond, CA 93560
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-neutral-800 pt-4 text-[11px] text-neutral-500">
                Typical response time for reader inquiries is within 24 to 48 hours.
              </div>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-500">
                Editorial Transparency Notice
              </span>
              <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                We do not accept unsolicited promotional hardware or commercial sponsorship for review scores. All inquiries undergo screening by our editorial board.
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="md:col-span-7">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-6">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    INQUIRY TRANSMITTED
                  </h3>
                  <p className="mt-2 text-xs text-neutral-300 max-w-sm mx-auto">
                    Thank you, {formData.name}. Your inquiry has been routed to our technical team. We will review your submission and reply to {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        topic: 'technical_inquiry',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="mt-6 rounded-lg bg-neutral-800 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-700 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-600 focus:border-red-600 focus:outline-none"
                    />
                    {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-600 focus:border-red-600 focus:outline-none"
                    />
                    {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Topic / Nature of Inquiry
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white focus:border-red-600 focus:outline-none"
                    >
                      <option value="technical_inquiry">Technical / Mechanical Question</option>
                      <option value="buying_advice">Motorcycle Buying Advice</option>
                      <option value="correction">Editorial Correction / Spec Adjustment</option>
                      <option value="press">Press & Media Licensing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Question regarding chain tension measurement"
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-600 focus:border-red-600 focus:outline-none"
                    />
                    {errors.subject && <p className="mt-1 text-[11px] text-red-500">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your motorcycle, riding experience, or question in detail..."
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs text-white placeholder-neutral-600 focus:border-red-600 focus:outline-none"
                    />
                    {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-red-600 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-red-950/40"
                  >
                    <span>Transmit Message</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
