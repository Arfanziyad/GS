import { HardHat, Briefcase } from "lucide-react";
import { ManpowerRole } from "@/types";
import SectionWrapper from "./SectionWrapper";

interface ManpowerSectionProps {
  technicalRoles: ManpowerRole[];
  supportRoles: ManpowerRole[];
}

function RoleCard({ title, index }: { title: string; index: number }) {
  return (
    <li className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center">
        <span className="text-[10px] font-bold text-brand-blue">{index + 1}</span>
      </span>
      <span className="text-sm font-medium text-gray-800 leading-snug">{title}</span>
    </li>
  );
}

export default function ManpowerSection({
  technicalRoles,
  supportRoles,
}: ManpowerSectionProps) {
  return (
    <SectionWrapper id="manpower" variant="alt">
      {/* ── Section Header ────────────────────────────────── */}
      <div className="text-center mb-14">
        <p className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
          <span className="w-6 h-px bg-brand-blue inline-block" />
          Subdivision
          <span className="w-6 h-px bg-brand-blue inline-block" />
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Manpower Services
        </h2>
        <p className="max-w-xl mx-auto text-base text-gray-500 leading-relaxed">
          Certified Workforce for Industrial &amp; Construction Projects
        </p>
        <div className="mt-6 w-14 h-1 bg-brand-red mx-auto rounded-full" />
      </div>

      {/* ── Two Column Grid ────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Technical */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center">
              <HardHat size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">Technical &amp; Certified Roles</h3>
              <p className="text-xs text-gray-400 mt-0.5">Specialized field personnel</p>
            </div>
          </div>
          <ul className="flex flex-col gap-3">
            {technicalRoles.map((role, i) => (
              <RoleCard key={role.id} title={role.title} index={i} />
            ))}
          </ul>
        </div>

        {/* Right: Support */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-brand-footer flex items-center justify-center">
              <Briefcase size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">Support &amp; Administrative Roles</h3>
              <p className="text-xs text-gray-400 mt-0.5">Office and operational support</p>
            </div>
          </div>
          <ul className="flex flex-col gap-3">
            {supportRoles.map((role, i) => (
              <RoleCard key={role.id} title={role.title} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
