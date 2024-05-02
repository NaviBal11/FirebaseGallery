function Button({ children, onClick, className = "", ...props }) {
  return (
    <button
      className={`rounded-md text-white p-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
