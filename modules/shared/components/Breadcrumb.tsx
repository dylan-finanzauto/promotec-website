import Link from "next/link";
import React from "react";
import { ChevronRightDoubleIcon, ChevronRightIcon } from "./SVGIcons";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center">
            {item.href && idx !== items.length - 1 ? (
              <Link href={item.href} className="text-text-4">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-blue-primary">{item.label}</span>
            )}
            {idx < items.length - 1 && (
              <ChevronRightIcon className={`mx-2 size-3 ${idx !== items.length - 2 ? "text-text-4" : "text-blue-primary"}`} />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;