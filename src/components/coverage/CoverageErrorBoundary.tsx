"use client";
import React from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; message?: string };

export default class CoverageErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(err: unknown): State {
    return { hasError: true, message: err instanceof Error ? err.message : String(err) };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    // 这里也会被 Sentry/Logfire 捕获（若已接入）
    console.error("[Coverage] render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="my-3 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          Coverage table failed to render. Please reload the page.
        </div>
      );
    }
    return this.props.children;
  }
}
