"use client";
import { useMemo } from "react";

export default function ContactPage() {
  const mailHref = useMemo(() => {
    const to = "sales@useportpulse.com";
    const subject = encodeURIComponent("PortPulse 演示/报价咨询");
    const body = encodeURIComponent(
      [
        "请简单描述需求：",
        "- 关注的港口（UN/LOCODE）：",
        "- 场景（趋势/停时/告警/快照 等）：",
        "- 预估请求量与预算：",
        "",
        "来自官网表单",
      ].join("\n")
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact us</h1>
      <p className="mt-2 text-gray-600">我们会在 1 个工作日内回复（Pro/Enterprise 更快）。</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a href={mailHref} className="rounded-xl border p-5 hover:bg-gray-50">
          <div className="font-medium">Email</div>
          <div className="mt-1 text-sm text-gray-600">sales@useportpulse.com</div>
          <div className="mt-2 inline-flex rounded-md bg-gray-900 px-3 py-1.5 text-white">发送邮件</div>
        </a>

        <a href="https://cal.com/yourhandle/portpulse-demo" target="_blank" className="rounded-xl border p-5 hover:bg-gray-50">
          <div className="font-medium">预约演示</div>
          <div className="mt-1 text-sm text-gray-600">选择你的时段（通过 Cal/Calendly）</div>
          <div className="mt-2 inline-flex rounded-md border px-3 py-1.5">打开日程</div>
        </a>

        <a href="https://docs.useportpulse.com/EXAMPLES.md" className="rounded-xl border p-5 hover:bg-gray-50">
          <div className="font-medium">先试用</div>
          <div className="mt-1 text-sm text-gray-600">Quickstart（cURL / Python / JS）</div>
          <div className="mt-2 inline-flex rounded-md border px-3 py-1.5">查看文档</div>
        </a>

        <a href="https://status.useportpulse.com/" className="rounded-xl border p-5 hover:bg-gray-50">
          <div className="font-medium">Status</div>
          <div className="mt-1 text-sm text-gray-600">服务状态 & 历史事件</div>
          <div className="mt-2 inline-flex rounded-md border px-3 py-1.5">打开</div>
        </a>
      </div>
    </div>
  );
}
