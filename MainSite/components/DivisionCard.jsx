/**
 * DivisionCard — large image card with dark gradient overlay.
 * Props: title, description, href, image, comingSoon
 */
export default function DivisionCard({ title, description, href, image, comingSoon = false }) {
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-sm block aspect-4/3 bg-gray-900 shadow-md hover:shadow-2xl transition-shadow duration-500"
      aria-label={`${title} division`}
    >
      {/* Background image with zoom on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />

      {/* Permanent dark gradient — bottom-heavy */}
      <div
        className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-90"
        aria-hidden="true"
      />

      {/* Blue accent line — left edge, appears on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
        aria-hidden="true"
      />

      {/* Coming Soon badge */}
      {comingSoon && (
        <div className="absolute top-4 right-4 px-2.5 py-1 bg-brand-blue/90 rounded-sm">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">
            Coming Soon
          </span>
        </div>
      )}

      {/* Content — pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
        {/* Arrow icon */}
        <div className="mb-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <div className="w-8 h-8 rounded-sm border border-white/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <h3 className="text-white font-bold text-lg lg:text-xl leading-snug mb-2 group-hover:text-blue-100 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>

        {/* Bottom divider line — grows on hover */}
        <div className="mt-4 h-px bg-brand-blue w-8 group-hover:w-full transition-all duration-500" />
      </div>
    </a>
  );
}
