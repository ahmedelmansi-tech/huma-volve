const Button = ({ text, onClick, variant = "primary", disabled = false }) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-error",
  };

  const variantClass = variants[variant] || "btn-primary";
  return (
    <button
      className={`btn ${variantClass} btn-soft p-2 `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
