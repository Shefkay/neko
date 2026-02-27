function Button({ className = "", size = "default", color = "primary", children }) {
  const baseClass = `relative overflow-hidden rounded-full text-white/90 cursor-pointer font-medium` + `focus:outline-none focus-visible:ring-2 focus-visible:ring-${color} transition-transform duration-300`;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-2 text-base",
    lg: "px-8 py-2 text-lg",
    full: "flex-1 px-4 py-2 text-lg text-left",
  };

  const classes = `${baseClass} ${sizeClasses[size] || ""} ${className}`.trim();
  return (
    <button className={classes}>
      {children}
    </button>
  );
}

export default Button;