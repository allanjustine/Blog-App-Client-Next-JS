export default function Button({ icon, color, hoverColor, ...props }: any) {
  return (
    <button {...props} className="rounded-full flex items-center">
      <i
        className={`fas fa-${icon} text-2xl text-${color} hover:text-${hoverColor}`}
      />
    </button>
  );
}
