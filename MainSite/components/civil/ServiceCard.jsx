export default function ServiceCard({ image, title, description, items, tall }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl shadow-lg ${
        tall ? "h-96 lg:h-105" : "h-72 lg:h-80"
      } cursor-default`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/10 transition-opacity duration-300 group-hover:from-black/90" />
      <div className="relative h-full flex flex-col justify-end p-6 lg:p-7">
        <h3 className="text-lg font-bold text-white mb-2 leading-snug">{title}</h3>
        {description && (
          <p className="text-sm text-gray-300 leading-relaxed mb-3">{description}</p>
        )}
        {items && items.length > 0 && (
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-gray-300">
                <span className="w-1 h-1 rounded-full bg-[#0B5ED7] shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
