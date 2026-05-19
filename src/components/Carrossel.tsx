export function Carrossel() {
  return (
    <div className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth">
      {[
        { label: "Item 1", color: "bg-purple-500" },
        { label: "Item 2", color: "bg-pink-500" },
        { label: "Item 3", color: "bg-emerald-500" },
      ].map(({ label, color }) => (
        <div
          key={label}
          className={`
            snap-start flex h-40 min-w-[80vw] items-center justify-center
            rounded-2xl ${color} text-white shadow-lg
            sm:min-w-[260px]
          `}
        >
          {label}
        </div>
      ))}
    </div>
  );
}