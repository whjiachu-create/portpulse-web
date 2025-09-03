"use client";
import { useMemo } from "react";
const FREE_DOMAINS = /(gmail|yahoo|hotmail|outlook|live|icloud|qq|163|126)\./i;
const ENABLED = process.env.NEXT_PUBLIC_REQUIRE_BIZ_EMAIL === "1";
export function useBusinessEmailHint(email: string) {
  return useMemo(() => {
    if (!ENABLED) return null;
    if (!email) return null;
    return FREE_DOMAINS.test(email) ? "Please use a business email address." : null;
  }, [email]);
}
