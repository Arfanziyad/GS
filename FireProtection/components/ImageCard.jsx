/**
 * ImageCard — Visual card with gradient background, SVG icon, and title.
 * Used in: Fire Detection Systems, Fire Suppression Systems
 *
 * Props:
 *  title       — system name
 *  gradient    — Tailwind gradient classes string, e.g. "from-blue-900 to-slate-900"
 *  icon        — SVG JSX element (large, white)
 *  accent      — 'blue' | 'red' (border + hover accent color)
 */
export default function ImageCard({
  title,
  gradient = 'from-blue-900 to-slate-900',
  icon,
  accent = 'blue',
}) {
  const accentBorder =
    accent === 'red'
      ? 'group-hover:border-brand-red'
      : 'group-hover:border-brand-blue';

  const accentTag =
    accent === 'red'
      ? 'bg-red-900/60 text-red-200 border-red-700/40'
      : 'bg-blue-900/60 text-blue-200 border-blue-700/40';

  return (
    <div
      className={`group relative overflow-hidden rounded-sm border border-transparent ${accentBorder} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-default`}
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-all duration-500 group-hover:scale-105`}
        aria-hidden="true"
      />

      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 min-h-[200px] text-center gap-4">
        {/* Icon */}
        <div className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-sm sm:text-base leading-snug tracking-wide">
          {title}
        </h3>

        {/* Accent tag */}
        <span
          className={`text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm border ${accentTag} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        >
          {accent === 'red' ? 'Suppression' : 'Detection'}
        </span>
      </div>

      {/* Bottom accent bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
          accent === 'red' ? 'bg-brand-red' : 'bg-brand-blue'
        } scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
        aria-hidden="true"
      />
    </div>
  );
}
