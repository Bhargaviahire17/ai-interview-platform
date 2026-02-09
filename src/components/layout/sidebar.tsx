"use client";

import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Workspaces" },
  { href: "/dashboard/candidates", label: "Candidates" },
  { href: "/dashboard/interviews", label: "Interviews" },
  { href: "/dashboard/job-descriptions", label: "Job Descriptions" },
  { href: "/dashboard/questions", label: "Questions" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-base-100 border-r h-full">
      <div className="p-4 font-bold text-lg">Dashboard</div>

      <ul className="menu p-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={
                pathname === link.href
                  ? "active bg-primary text-primary-content"
                  : ""
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
