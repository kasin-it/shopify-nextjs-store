function VariantWrapper({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}) {
  if (variant === "secondary") {
    return <div className="bg-muted">{children}</div>;
  }

  return <>{children}</>;
}

export default VariantWrapper;
