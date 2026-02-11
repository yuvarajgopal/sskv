export default function Marquee({ items }) {
  const text = items.map(item => `${item.date} - ${item.title}`).join('   |   ');

  return (
    <div className="bg-accent-400 overflow-hidden py-2.5">
      <div className="animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
        <span className="text-sm font-semibold text-primary-900 font-body">
          {text}   |   {text}
        </span>
      </div>
    </div>
  );
}
