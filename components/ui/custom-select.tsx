"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface CustomSelectOption {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: CustomSelectOption[];
  className?: string;
  buttonClassName?: string;
  listClassName?: string;
  ariaLabel?: string;
}

export default function CustomSelect({
  value,
  onChange,
  options,
  className,
  buttonClassName,
  listClassName,
  ariaLabel = "Select option",
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = useMemo(
    () => options.find((o) => o.value === value) || options[0],
    [options, value]
  );

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex w-full items-center justify-between rounded-xl border border-zinc-300 bg-white px-3 py-2 text-left text-sm shadow-sm transition-colors hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-ring",
          "[box-shadow:inset_0px_-2px_0px_0px_#e4e4e7,_0px_1px_6px_0px_rgba(228,_228,_231,_30%)]",
          buttonClassName
        )}
      >
        <span className="truncate" title={selected?.label}>{selected?.label}</span>
        <svg
          className="ml-2 h-4 w-4 shrink-0 text-zinc-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className={cn(
            "absolute z-50 mt-2 max-h-72 w-full overflow-auto rounded-xl border border-zinc-200 bg-white p-1 shadow-lg",
            listClassName
          )}
        >
          {options.map((opt) => {
            const isActive = opt.value === value;
            return (
              <li key={opt.value} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full cursor-pointer items-center rounded-lg px-3 py-2 text-left text-sm",
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-zinc-900 hover:bg-zinc-100"
                  )}
                  title={opt.label}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}


