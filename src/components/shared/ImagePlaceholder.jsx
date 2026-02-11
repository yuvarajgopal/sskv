export default function ImagePlaceholder({ text, icon: Icon, aspectRatio = '16/9', className = '', color = '#1e3a5f' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg ${className}`}
      style={{
        aspectRatio,
        background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      }}
    >
      {Icon && <Icon className="text-4xl text-white/60 mb-2" />}
      {text && <span className="text-white/60 text-sm font-body">{text}</span>}
    </div>
  );
}
