'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Upload, Check, AlertCircle, ImageIcon } from 'lucide-react'

export default function InstellingenPage() {
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [currentPhoto, setCurrentPhoto] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [cacheKey, setCacheKey] = useState(Date.now())

  useEffect(() => {
    fetch('/api/admin/upload')
      .then(res => res.json())
      .then(data => setCurrentPhoto(data.url || '/anja-dirk.jpg'))
      .catch(() => setCurrentPhoto('/anja-dirk.jpg'))
  }, [])

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      // Validate client-side
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        setMessage({ type: 'error', text: 'Alleen JPG, PNG en WebP bestanden zijn toegestaan.' })
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'Bestand is te groot (max 5 MB).' })
        return
      }
      setPreview(URL.createObjectURL(file))
      setMessage(null)
    }
  }

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const file = fileInputRef.current?.files?.[0]
    if (!file) return

    setUploading(true)
    setMessage(null)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('filename', 'anja-dirk.jpg')

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (data.success) {
        setMessage({ type: 'success', text: 'Foto succesvol geüpload!' })
        setCurrentPhoto(data.url)
        setCacheKey(Date.now())
        setPreview(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
      } else {
        setMessage({ type: 'error', text: data.error || 'Upload mislukt.' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Er ging iets mis bij het uploaden.' })
    }

    setUploading(false)
  }

  return (
    <div>
      <h2 className="mb-8 text-2xl font-bold text-cobiz-dark">Instellingen</h2>

      {/* Photo upload section */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobiz-green/10">
            <ImageIcon className="h-5 w-5 text-cobiz-green" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cobiz-dark">
              Foto &quot;Over Ons&quot;
            </h3>
            <p className="text-sm text-gray-500">
              Deze foto wordt getoond op de &quot;Over Ons&quot; pagina
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Current photo */}
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600">Huidige foto:</p>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              {currentPhoto ? (
                <Image
                  src={`${currentPhoto}?v=${cacheKey}`}
                  alt="Anja Warrot en Dirk Colman"
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-gray-400">
                  Laden...
                </div>
              )}
            </div>
          </div>

          {/* Upload form */}
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600">Nieuwe foto uploaden:</p>
            <form onSubmit={handleUpload}>
              {/* Preview or drop area */}
              <label
                htmlFor="photo-upload"
                className="flex aspect-[4/3] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-cobiz-green hover:bg-cobiz-mint"
              >
                {preview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 p-4 text-center">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <p className="text-sm font-medium text-gray-600">
                      Klik om een foto te kiezen
                    </p>
                    <p className="text-xs text-gray-400">
                      JPG, PNG of WebP &mdash; max 5 MB
                    </p>
                  </div>
                )}
              </label>
              <input
                id="photo-upload"
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                className="hidden"
              />

              {/* Message */}
              {message && (
                <div
                  className={`mt-4 flex items-center gap-2 rounded-lg p-3 text-sm ${
                    message.type === 'success'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-red-50 text-red-600'
                  }`}
                >
                  {message.type === 'success' ? (
                    <Check className="h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0" />
                  )}
                  {message.text}
                </div>
              )}

              {/* Upload button */}
              {preview && (
                <button
                  type="submit"
                  disabled={uploading}
                  className="btn-primary mt-4 w-full disabled:opacity-50"
                >
                  {uploading ? 'Bezig met uploaden...' : 'Foto opslaan'}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
