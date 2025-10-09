'use client';

const PRICES: Record<string, string | undefined> = {
  PRICE_LITE_MONTH: process.env.NEXT_PUBLIC_PRICE_LITE_MONTH,
  PRICE_STARTER_MONTH: process.env.NEXT_PUBLIC_PRICE_STARTER_MONTH,
  // 如启用年付，可继续加：
  PRICE_LITE_YEAR: process.env.NEXT_PUBLIC_PRICE_LITE_YEAR,
  PRICE_STARTER_YEAR: process.env.NEXT_PUBLIC_PRICE_STARTER_YEAR,
};

type Props = { priceEnvVar: keyof typeof PRICES; label: string };

export default function CheckoutButton({ priceEnvVar, label }: Props) {
  async function start() {
    const priceId = PRICES[priceEnvVar];
    if (!priceId) {
      alert('Price not configured');
      return;
    }

    // 可选：从页面上读取 email
    const emailInput = document.getElementById('email') as HTMLInputElement | null;
    const email = emailInput?.value || '';

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ priceId, email, intent: priceEnvVar }),
    });

    if (!res.ok) {
      alert('Failed to start checkout');
      return;
    }
    const { url } = await res.json();
    window.location.href = url;
  }

  return (
    <button
      onClick={start}
      className="mt-5 inline-block rounded-xl bg-[#0B2740] text-white px-4 py-2 text-sm hover:opacity-90"
    >
      {label}
    </button>
  );
}