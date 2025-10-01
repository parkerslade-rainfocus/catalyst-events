"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/button'

function readVar(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name) || ''
}

export default function TokenCheckerPage() {
  const [dark, setDark] = useState(false)
  const [values, setValues] = useState<Record<string, string>>({})

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
    refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    const isDark = document.documentElement.classList.contains('dark')
    setDark(isDark)
    refresh()
  }

  function refresh() {
    const vars = [
      '--content-primary',
      '--content-secondary',
      '--background-primary',
      '--background-secondary',
      '--border-primary',
      '--spacing',
      '--radius-lg',
    ]
    const map: Record<string, string> = {}
    for (const v of vars) map[v] = readVar(v).trim()
    setValues(map)
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">Token checker</h1>
      <div className="flex gap-3 mb-4">
        <Button onClick={toggleTheme} color="indigo">
          Toggle {dark ? 'Light' : 'Dark'}
        </Button>
        <Button onClick={refresh} color="zinc">
          Refresh
        </Button>
      </div>

      <section className="mb-6">
        <h2 className="font-semibold mb-2">Semantic values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {Object.entries(values).map(([k, v]) => (
            <div key={k} className="rounded p-3 border" style={{ background: 'var(--background-secondary)' }}>
              <div className="text-sm text-zinc-600">{k}</div>
              <div className="font-mono mt-1">{v || '<unset>'}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-semibold mb-2">Preview</h2>
        <div className="flex gap-3 items-center">
          <Button color="indigo">Primary</Button>
          <Button color="cyan">Accent</Button>
          <Button outline>Outline</Button>
          <div className="p-4 rounded" style={{ background: 'var(--background-primary)' }}>
            <div style={{ color: 'var(--content-primary)' }}>Card with semantic tokens</div>
          </div>
        </div>
      </section>
    </main>
  )
}
