function Button({ className = "", size = "default", children }) {
  const baseClass = "relative overflow-hidden bg-primary rounded-full text-white/90 cursor-pointer font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-primary/95 shadow-lg shadow-primary/25";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-2 text-base",
    lg: "px-8 py-2 tet-lg",
  };
  const classes = `${baseClass} ${sizeClasses[size]}`
  return (
    <button className={classes}>
      {children}
    </button>
  )
}

export default Button;