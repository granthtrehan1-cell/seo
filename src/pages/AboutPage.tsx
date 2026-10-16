import React from 'react';
import { ShieldCheck, Award, Flag, Users, Cpu, FileCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  const teamMembers = [
    {
      name: 'Marcus Vance',
      role: 'Chief Motorcycle Safety Lead',
      bio: 'Former AMA Supersport racer and Motorcycle Safety Foundation (MSF) certified RiderCoach with 18 years of instructional experience.',
      focus: 'Defensive riding psychology, emergency braking dynamics, and beginner ergonomics.'
    },
    {
      name: 'Devon Kross',
      role: 'Superbike Performance Analyst',
      bio: 'Automotive test engineer with 50,000+ track miles across Laguna Seca, Circuit of the Americas, and Mugello.',
      focus: 'Chassis rigidity, 6-axis IMU traction systems, and suspension valving telemetry.'
    },
    {
      name: 'Elena Rostova',
      role: 'Powertrain & Efficiency Specialist',
      bio: 'Mechanical engineer specialized in internal combustion thermal efficiency, electric motorcycle battery packs, and endurance touring.',
      focus: 'Fuel stoichiometry, electric EV range modeling, and long-distance rally logistics.'
    }
  ];

  return (
    <div className="py-10">
      <SEOHead
        title="About MotoGuide: Independent Motorcycle Testing & Standards"
        description="Learn about MotoGuide's independent motorcycle testing standards, dyno verifications, and certified editorial team committed to unbiased rider journalism."
        canonicalPath="/about/"
        schemaType="AboutPage"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} navigate={navigate} />

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500">
            About MotoGuide
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mt-1">
            INDEPENDENT. EMPIRICAL. OBSESSED WITH THE MACHINE.
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-300">
            MotoGuide was founded on a simple premise: modern motorcycle journalism has devolved into regurgitated press releases and paid influencer trips. We set out to build the definitive, technical, fluff-free resource for riders who care about physics, safety, and mechanical longevity.
          </p>
        </div>

        {/* 3 Core Editorial Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500 mb-3">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              01. Dyno & VBOX Verification
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-400">
              We do not accept manufacturer horsepower claims at face value. Every bike evaluated is tested on a Dynojet 250i chassis dyno and measured with 20Hz GPS VBOX data.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500 mb-3">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              02. Safety First Architecture
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-400">
              Every gear recommendation is grounded in third-party impact testing standards (ECE 22.06, FIM Homologation, CE EN 1621-1/2 armor standards) rather than marketing claims.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/10 text-red-500 mb-3">
              <FileCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              03. Zero Paid Reviews
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-400">
              Our editorial staff never accepts manufacturer cash or payment for reviews. If a bike has poor throttle mapping or inadequate brakes, we publish the telemetry.
            </p>
          </div>
        </div>

        {/* Editorial Team */}
        <section className="my-12">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500">
            Meet the Staff
          </span>
          <h2 className="text-2xl font-bold text-white font-display tracking-tight mt-1 mb-6">
            OUR TECHNICAL WRITERS & TEST PILOTS
          </h2>

          <div className="space-y-4">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-600/10 text-red-500 font-bold text-xl">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white font-display">
                      {member.name}
                    </h3>
                    <span className="text-[11px] text-neutral-400">· {member.role}</span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
                    {member.bio}
                  </p>
                  <p className="mt-2 text-[11px] text-red-400 font-medium">
                    Technical Focus: {member.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testing Facility */}
        <section className="my-12 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h3 className="text-xl font-bold text-white font-display mb-2">
            THE MOTOGUIDE TESTING PROVING GROUNDS
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed mb-4">
            Our long-term test fleet operates out of Willow Springs Raceway and high-altitude canyon routes in the San Gabriel mountains. This dual environment exposes motorcycles to extreme thermal loading, high-speed asphalt transitions, and sub-freezing elevation shifts.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border-t border-neutral-800 pt-4">
            <div>
              <div className="text-xl font-bold text-white font-display tabular-nums">2.5 Miles</div>
              <div className="text-[11px] text-neutral-500">Track Circuit</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white font-display tabular-nums">1,200 HP</div>
              <div className="text-[11px] text-neutral-500">Dyno Capacity</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white font-display tabular-nums">20 Hz</div>
              <div className="text-[11px] text-neutral-500">GPS Sampling</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white font-display tabular-nums">100%</div>
              <div className="text-[11px] text-neutral-500">Editorial Independence</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-6 border-t border-neutral-800">
          <p className="text-xs text-neutral-400 mb-4">
            Looking for a specific motorcycle comparison or have a technical correction?
          </p>
          <button
            onClick={() => navigate('/contact/')}
            className="rounded-lg bg-red-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition cursor-pointer"
          >
            Contact Editorial Staff
          </button>
        </div>
      </div>
    </div>
  );
};
