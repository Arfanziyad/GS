/**
 * ServiceCard — Clean card with SVG icon, title, and description.
 * Used in: Consultancy & Design, Installation & Execution, Maintenance & Compliance
 *
 * Props:
 *  icon        — SVG JSX element
 *  title       — card heading
 *  description — supporting text (optional)
 *  variant     — 'default' | 'compact'
 */
export default function ServiceCard({
  icon,
  title,
  description,
  variant = 'default',
}) {
  return (
    <div
      className={`card-base group flex flex-col gap-4 p-6 ${
        variant === 'compact' ? 'p-5' : 'p-6 sm:p-7'
      }`}
    >
      {/* Icon container */}
      <div className="flex-shrink-0 w-11 h-11 rounded-sm bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue">
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-brand-blue transition-colors duration-200">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        )}
      </div>

      {/* Bottom accent on hover */}
      <div className="mt-auto pt-3 border-t border-transparent group-hover:border-blue-100 transition-colors duration-300">
        <span className="text-xs text-transparent group-hover:text-brand-blue font-semibold tracking-wide uppercase transition-colors duration-300 flex items-center gap-1.5">
          Learn More
          <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}
