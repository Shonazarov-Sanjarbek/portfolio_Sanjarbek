import React from "react";

function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled,
  className = "",
  type = "button",
}) {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      type={!href ? type : undefined}
      className={`btn btn-${variant} btn-${size} ${className}`}
      href={href}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
}

export default Button;
