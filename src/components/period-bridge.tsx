"use client"

import { useId, useState } from 'react'
import { Listbox, ListboxOption, ListboxLabel } from '@/components/listbox'

const PERIODS = [
  { id: 'last_week', label: 'Last week' },
  { id: 'last_two', label: 'Last two weeks' },
  { id: 'last_month', label: 'Last month' },
  { id: 'last_quarter', label: 'Last quarter' },
]

export function PeriodBridge({ className }: { className?: string }) {
  const id = useId()
  const [value, setValue] = useState(PERIODS[0].id)

  function openListbox() {
    const container = document.getElementById(`period-listbox-${id}`)
    const control = container?.querySelector('[data-slot="control"]') as HTMLElement | null
    control?.click()
  }

  const label = PERIODS.find((p) => p.id === value)?.label ?? 'Last week'

  return (
    <>
      {/* Visible control that looks/behaves like the Select control */}
      <button
        type="button"
        onClick={openListbox}
        className={
          className ??
          'group relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden focus:outline-hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset has-data-focus:after:ring-2 has-data-focus:after:ring-blue-500 has-data-disabled:opacity-50'
        }
        aria-haspopup="listbox"
        aria-label="Select reporting period"
      >
        <span className="relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)] pr-[calc(--spacing(10)-1px)] pl-[calc(--spacing(3.5)-1px)] text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white truncate">
          {label}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="size-5 stroke-zinc-500 sm:size-4 dark:stroke-zinc-400 forced-colors:stroke-[CanvasText]"
            viewBox="0 0 16 16"
            aria-hidden="true"
            fill="none"
          >
            <path d="M5.75 10.75L8 13L10.25 10.75" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.25 5.25L8 3L5.75 5.25" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {/* Hidden Listbox instance we trigger programmatically. It's visually hidden but present in DOM. */}
      <div id={`period-listbox-${id}`} className="sr-only">
        <Listbox value={value} onChange={(v: string) => setValue(v)} aria-label="period-listbox">
          {PERIODS.map((p) => (
            <ListboxOption key={p.id} value={p.id}>
              <ListboxLabel>{p.label}</ListboxLabel>
            </ListboxOption>
          ))}
        </Listbox>
      </div>
    </>
  )
}
