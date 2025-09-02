import Image from "next/image";

type Props = { variant?: "dark" | "light"; withWordmark?: boolean; className?: string };

export default function SiteLogo({ variant = "dark", withWordmark = false, className = "h-6" }: Props) {
  const file = withWordmark
    ? (variant === "dark" ? "/logos/portpulse-wordmark-dark.svg" : "/logos/portpulse-wordmark-light.svg")
    : (variant === "dark" ? "/logos/portpulse-mark-dark.svg" : "/logos/portpulse-mark-light.svg");
  return (
    <span className={`inline-flex items-center ${className}`} aria-label="PortPulse">
      <Image src={file} alt="PortPulse" width={withWordmark ? 420 : 28} height={withWordmark ? 64 : 28} className="h-full w-auto" />
    </span>
  );
}
