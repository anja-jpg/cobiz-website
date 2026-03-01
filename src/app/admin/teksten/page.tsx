'use client'

import { useEffect, useState, useCallback } from 'react'
import { Save, Plus, Trash2, ChevronDown, ChevronRight, Loader2 } from 'lucide-react'
import { sectionLabels, pageLabels } from '@/lib/content-config'

type SectionData = Record<string, unknown>
type PageData = Record<string, SectionData>

const pages = ['home', 'banners', 'overons'] as const

export default function TekstenPage() {
  const [activePage, setActivePage] = useState<string>('home')
  const [data, setData] = useState<PageData | null>(null)
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())
  const [saving, setSaving] = useState<string | null>(null)
  const [savedMsg, setSavedMsg] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/content?page=${activePage}`)
      const json = await res.json()
      setData(json)
    } catch {
      // keep data as null
    }
    setLoading(false)
  }, [activePage])

  useEffect(() => { fetchData() }, [fetchData])

  function toggleSection(section: string) {
    setOpenSections(prev => {
      const next = new Set(prev)
      next.has(section) ? next.delete(section) : next.add(section)
      return next
    })
  }

  async function saveSection(section: string) {
    if (!data) return
    setSaving(section)
    setSavedMsg(null)
    try {
      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: activePage,
          section,
          content: data[section],
        }),
      })
      if (res.ok) {
        setSavedMsg(section)
        setTimeout(() => setSavedMsg(null), 3000)
      }
    } catch {
      // silently fail
    }
    setSaving(null)
  }

  function updateField(section: string, key: string, value: unknown) {
    setData(prev => {
      if (!prev) return prev
      return {
        ...prev,
        [section]: { ...(prev[section] as Record<string, unknown>), [key]: value },
      }
    })
  }

  function updateArrayItem(section: string, key: string, index: number, field: string, value: string) {
    setData(prev => {
      if (!prev) return prev
      const sectionData = prev[section] as Record<string, unknown>
      const arr = [...(sectionData[key] as Record<string, string>[]) ]
      arr[index] = { ...arr[index], [field]: value }
      return { ...prev, [section]: { ...sectionData, [key]: arr } }
    })
  }

  function addArrayItem(section: string, key: string, template: Record<string, string>) {
    setData(prev => {
      if (!prev) return prev
      const sectionData = prev[section] as Record<string, unknown>
      const arr = [...(sectionData[key] as Record<string, string>[]), { ...template }]
      return { ...prev, [section]: { ...sectionData, [key]: arr } }
    })
  }

  function removeArrayItem(section: string, key: string, index: number) {
    setData(prev => {
      if (!prev) return prev
      const sectionData = prev[section] as Record<string, unknown>
      const arr = (sectionData[key] as Record<string, string>[]).filter((_, i) => i !== index)
      return { ...prev, [section]: { ...sectionData, [key]: arr } }
    })
  }

  function updateStringList(section: string, key: string, index: number, value: string) {
    setData(prev => {
      if (!prev) return prev
      const sectionData = prev[section] as Record<string, unknown>
      const arr = [...(sectionData[key] as string[])]
      arr[index] = value
      return { ...prev, [section]: { ...sectionData, [key]: arr } }
    })
  }

  function addStringListItem(section: string, key: string) {
    setData(prev => {
      if (!prev) return prev
      const sectionData = prev[section] as Record<string, unknown>
      const arr = [...(sectionData[key] as string[]), '']
      return { ...prev, [section]: { ...sectionData, [key]: arr } }
    })
  }

  function removeStringListItem(section: string, key: string, index: number) {
    setData(prev => {
      if (!prev) return prev
      const sectionData = prev[section] as Record<string, unknown>
      const arr = (sectionData[key] as string[]).filter((_, i) => i !== index)
      return { ...prev, [section]: { ...sectionData, [key]: arr } }
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-cobiz-green" />
      </div>
    )
  }

  if (!data) {
    return <p className="text-center text-gray-500 py-20">Kon content niet laden.</p>
  }

  const sections = sectionLabels[activePage] || {}

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-cobiz-dark">Teksten bewerken</h2>
        <p className="mt-1 text-sm text-gray-500">
          Klik op een sectie om te bewerken
        </p>
      </div>

      {/* Page selector tabs */}
      <div className="mb-6 flex gap-2 border-b border-gray-200 pb-3">
        {pages.map(page => (
          <button
            key={page}
            type="button"
            onClick={() => { setActivePage(page); setOpenSections(new Set()) }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activePage === page
                ? 'bg-cobiz-green text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {pageLabels[page] || page}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {Object.entries(sections).map(([section, label]) => {
          const isOpen = openSections.has(section)
          const sectionContent = data[section] as Record<string, unknown> | undefined

          if (!sectionContent) return null

          return (
            <div key={section} className="rounded-xl border border-gray-200 bg-white shadow-sm">
              {/* Section header */}
              <button
                type="button"
                onClick={() => toggleSection(section)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-cobiz-dark">{label}</span>
                {isOpen
                  ? <ChevronDown className="h-5 w-5 text-gray-400" />
                  : <ChevronRight className="h-5 w-5 text-gray-400" />}
              </button>

              {/* Section body */}
              {isOpen && (
                <div className="border-t border-gray-100 p-5 space-y-5">
                  {renderSection(section, sectionContent)}

                  {/* Save button */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => saveSection(section)}
                      disabled={saving === section}
                      className="flex items-center gap-2 rounded-lg bg-cobiz-green px-5 py-2.5 text-sm font-medium text-white hover:bg-cobiz-green/90 disabled:opacity-50"
                    >
                      {saving === section
                        ? <Loader2 className="h-4 w-4 animate-spin" />
                        : <Save className="h-4 w-4" />}
                      Opslaan
                    </button>
                    {savedMsg === section && (
                      <span className="text-sm text-green-600">Opgeslagen!</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )

  // ── Render helpers ─────────────────────────────────────────

  function renderSection(section: string, content: Record<string, unknown>) {
    // Banner sections (all have title + subtitle)
    if (activePage === 'banners') {
      return renderBanner(section, content)
    }
    // Over Ons sections
    if (activePage === 'overons') {
      switch (section) {
        case 'story': return renderOverOnsStory(content)
        case 'expertise': return renderOverOnsExpertise(content)
        case 'values': return renderOverOnsValues(content)
        case 'mission': return renderOverOnsMission(content)
        default: return null
      }
    }
    // Home sections
    switch (section) {
      case 'hero': return renderHero(content)
      case 'problem': return renderProblem(content)
      case 'products': return renderProducts(content)
      case 'about': return renderAbout(content)
      case 'difference': return renderDifference(content)
      case 'testimonials': return renderTestimonials(content)
      case 'faq': return renderFAQ(content)
      case 'finalcta': return renderFinalCTA(content)
      default: return null
    }
  }

  function renderHero(c: Record<string, unknown>) {
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField('hero', 'title', v)} />
        <Field label="Ondertitel" value={c.subtitle as string} onChange={v => updateField('hero', 'subtitle', v)} />
        <TextArea label="SEO tekst" value={c.seoText as string} onChange={v => updateField('hero', 'seoText', v)} />
      </>
    )
  }

  function renderProblem(c: Record<string, unknown>) {
    const problems = c.problems as string[]
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField('problem', 'title', v)} />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Herkenningspunten</label>
          {problems.map((p, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                type="text"
                value={p}
                onChange={e => updateStringList('problem', 'problems', i, e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
              />
              <button onClick={() => removeStringListItem('problem', 'problems', i)}
                className="text-red-400 hover:text-red-600 p-2"><Trash2 className="h-4 w-4" /></button>
            </div>
          ))}
          <button onClick={() => addStringListItem('problem', 'problems')}
            className="flex items-center gap-1 text-sm text-cobiz-green hover:underline mt-1">
            <Plus className="h-4 w-4" /> Punt toevoegen
          </button>
        </div>
        <TextArea label="Beschrijving onder de punten" value={c.ctaDescription as string}
          onChange={v => updateField('problem', 'ctaDescription', v)} />
      </>
    )
  }

  function renderProducts(c: Record<string, unknown>) {
    const items = c.items as Record<string, string>[]
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField('products', 'title', v)} />
        <Field label="Ondertitel" value={c.subtitle as string} onChange={v => updateField('products', 'subtitle', v)} />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Diensten</label>
          {items.map((item, i) => (
            <div key={i} className="mb-4 rounded-lg border border-gray-200 p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Dienst {i + 1}</span>
                <button onClick={() => removeArrayItem('products', 'items', i)}
                  className="text-red-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
              </div>
              <SmallField label="Badge" value={item.badge} onChange={v => updateArrayItem('products', 'items', i, 'badge', v)} />
              <SmallField label="Titel" value={item.title} onChange={v => updateArrayItem('products', 'items', i, 'title', v)} />
              <SmallField label="Beschrijving" value={item.description} onChange={v => updateArrayItem('products', 'items', i, 'description', v)} />
              <SmallField label="Prijs" value={item.price} onChange={v => updateArrayItem('products', 'items', i, 'price', v)} />
              <SmallField label="Details" value={item.details} onChange={v => updateArrayItem('products', 'items', i, 'details', v)} />
              <SmallField label="Knoptekst" value={item.ctaLabel} onChange={v => updateArrayItem('products', 'items', i, 'ctaLabel', v)} />
              <SmallField label="Link" value={item.ctaHref} onChange={v => updateArrayItem('products', 'items', i, 'ctaHref', v)} />
            </div>
          ))}
          <button onClick={() => addArrayItem('products', 'items', { badge: '', title: '', description: '', price: '', details: '', ctaLabel: '', ctaHref: '' })}
            className="flex items-center gap-1 text-sm text-cobiz-green hover:underline mt-1">
            <Plus className="h-4 w-4" /> Dienst toevoegen
          </button>
        </div>
      </>
    )
  }

  function renderAbout(c: Record<string, unknown>) {
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField('about', 'title', v)} />
        <TextArea label="Paragraaf 1" value={c.paragraph1 as string} onChange={v => updateField('about', 'paragraph1', v)} />
        <TextArea label="Citaat" value={c.quote as string} onChange={v => updateField('about', 'quote', v)} />
        <TextArea label="Paragraaf 2" value={c.paragraph2 as string} onChange={v => updateField('about', 'paragraph2', v)} />
      </>
    )
  }

  function renderDifference(c: Record<string, unknown>) {
    const items = c.items as Record<string, string>[]
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField('difference', 'title', v)} />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Punten</label>
          {items.map((item, i) => (
            <div key={i} className="mb-3 rounded-lg border border-gray-200 p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Punt {i + 1}</span>
                <button onClick={() => removeArrayItem('difference', 'items', i)}
                  className="text-red-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
              </div>
              <SmallField label="Titel" value={item.title} onChange={v => updateArrayItem('difference', 'items', i, 'title', v)} />
              <SmallField label="Tekst" value={item.text} onChange={v => updateArrayItem('difference', 'items', i, 'text', v)} />
            </div>
          ))}
          <button onClick={() => addArrayItem('difference', 'items', { title: '', text: '' })}
            className="flex items-center gap-1 text-sm text-cobiz-green hover:underline mt-1">
            <Plus className="h-4 w-4" /> Punt toevoegen
          </button>
        </div>
      </>
    )
  }

  function renderTestimonials(c: Record<string, unknown>) {
    const items = c.items as Record<string, string>[]
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField('testimonials', 'title', v)} />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Reviews</label>
          {items.map((item, i) => (
            <div key={i} className="mb-3 rounded-lg border border-gray-200 p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Review {i + 1}</span>
                <button onClick={() => removeArrayItem('testimonials', 'items', i)}
                  className="text-red-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
              </div>
              <SmallTextArea label="Citaat" value={item.quote} onChange={v => updateArrayItem('testimonials', 'items', i, 'quote', v)} />
              <SmallField label="Naam" value={item.name} onChange={v => updateArrayItem('testimonials', 'items', i, 'name', v)} />
              <SmallField label="Bron" value={item.source} onChange={v => updateArrayItem('testimonials', 'items', i, 'source', v)} />
            </div>
          ))}
          <button onClick={() => addArrayItem('testimonials', 'items', { quote: '', name: '', source: '' })}
            className="flex items-center gap-1 text-sm text-cobiz-green hover:underline mt-1">
            <Plus className="h-4 w-4" /> Review toevoegen
          </button>
        </div>
      </>
    )
  }

  function renderFAQ(c: Record<string, unknown>) {
    const items = c.items as Record<string, string>[]
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField('faq', 'title', v)} />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Vragen & antwoorden</label>
          {items.map((item, i) => (
            <div key={i} className="mb-3 rounded-lg border border-gray-200 p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Vraag {i + 1}</span>
                <button onClick={() => removeArrayItem('faq', 'items', i)}
                  className="text-red-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
              </div>
              <SmallField label="Vraag" value={item.question} onChange={v => updateArrayItem('faq', 'items', i, 'question', v)} />
              <SmallTextArea label="Antwoord" value={item.answer} onChange={v => updateArrayItem('faq', 'items', i, 'answer', v)} />
            </div>
          ))}
          <button onClick={() => addArrayItem('faq', 'items', { question: '', answer: '' })}
            className="flex items-center gap-1 text-sm text-cobiz-green hover:underline mt-1">
            <Plus className="h-4 w-4" /> Vraag toevoegen
          </button>
        </div>
      </>
    )
  }

  function renderFinalCTA(c: Record<string, unknown>) {
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField('finalcta', 'title', v)} />
        <Field label="Ondertitel" value={c.subtitle as string} onChange={v => updateField('finalcta', 'subtitle', v)} />
      </>
    )
  }

  // ── Banner renderers ─────────────────────────────────────────

  function renderBanner(section: string, c: Record<string, unknown>) {
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField(section, 'title', v)} />
        <Field label="Ondertitel" value={c.subtitle as string} onChange={v => updateField(section, 'subtitle', v)} />
      </>
    )
  }

  // ── Over Ons renderers ───────────────────────────────────────

  function renderOverOnsStory(c: Record<string, unknown>) {
    return (
      <>
        <TextArea label="Paragraaf 1" value={c.paragraph1 as string} onChange={v => updateField('story', 'paragraph1', v)} />
        <TextArea label="Paragraaf 2" value={c.paragraph2 as string} onChange={v => updateField('story', 'paragraph2', v)} />
        <TextArea label="Citaat" value={c.quote as string} onChange={v => updateField('story', 'quote', v)} />
      </>
    )
  }

  function renderOverOnsExpertise(c: Record<string, unknown>) {
    const items = c.items as Record<string, string>[]
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField('expertise', 'title', v)} />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Expertises</label>
          {items.map((item, i) => (
            <div key={i} className="mb-3 rounded-lg border border-gray-200 p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Expertise {i + 1}</span>
                <button onClick={() => removeArrayItem('expertise', 'items', i)}
                  className="text-red-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
              </div>
              <SmallField label="Titel" value={item.title} onChange={v => updateArrayItem('expertise', 'items', i, 'title', v)} />
              <SmallField label="Tekst" value={item.text} onChange={v => updateArrayItem('expertise', 'items', i, 'text', v)} />
            </div>
          ))}
          <button onClick={() => addArrayItem('expertise', 'items', { title: '', text: '' })}
            className="flex items-center gap-1 text-sm text-cobiz-green hover:underline mt-1">
            <Plus className="h-4 w-4" /> Expertise toevoegen
          </button>
        </div>
      </>
    )
  }

  function renderOverOnsValues(c: Record<string, unknown>) {
    const items = c.items as Record<string, string>[]
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField('values', 'title', v)} />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Waarden</label>
          {items.map((item, i) => (
            <div key={i} className="mb-3 rounded-lg border border-gray-200 p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Waarde {i + 1}</span>
                <button onClick={() => removeArrayItem('values', 'items', i)}
                  className="text-red-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
              </div>
              <SmallField label="Titel" value={item.title} onChange={v => updateArrayItem('values', 'items', i, 'title', v)} />
              <SmallField label="Beschrijving" value={item.description} onChange={v => updateArrayItem('values', 'items', i, 'description', v)} />
            </div>
          ))}
          <button onClick={() => addArrayItem('values', 'items', { title: '', description: '' })}
            className="flex items-center gap-1 text-sm text-cobiz-green hover:underline mt-1">
            <Plus className="h-4 w-4" /> Waarde toevoegen
          </button>
        </div>
      </>
    )
  }

  function renderOverOnsMission(c: Record<string, unknown>) {
    return (
      <>
        <Field label="Titel" value={c.title as string} onChange={v => updateField('mission', 'title', v)} />
        <TextArea label="Paragraaf 1" value={c.paragraph1 as string} onChange={v => updateField('mission', 'paragraph1', v)} />
        <TextArea label="Paragraaf 2" value={c.paragraph2 as string} onChange={v => updateField('mission', 'paragraph2', v)} />
      </>
    )
  }
}

// ── Reusable form components ────────────────────────────────

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-cobiz-green focus:ring-1 focus:ring-cobiz-green"
      />
    </div>
  )
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={4}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-cobiz-green focus:ring-1 focus:ring-cobiz-green"
      />
    </div>
  )
}

function SmallField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-3">
      <label className="w-24 shrink-0 text-xs font-medium text-gray-500">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="flex-1 rounded-md border border-gray-300 px-2 py-1.5 text-sm focus:border-cobiz-green focus:ring-1 focus:ring-cobiz-green"
      />
    </div>
  )
}

function SmallTextArea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={3}
        className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm focus:border-cobiz-green focus:ring-1 focus:ring-cobiz-green"
      />
    </div>
  )
}
