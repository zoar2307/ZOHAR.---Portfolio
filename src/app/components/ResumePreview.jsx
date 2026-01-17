'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download } from 'lucide-react'

export default function ResumePreview({ isOpen, onClose }) {
    const cvPath = '/ZOHAR%20YEVELKIN%20-%20CV.pdf' // URL-encoded path
    const cvFileName = 'ZOHAR YEVELKIN - CV.pdf'

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY
            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}px`
            document.body.style.width = '100%'
            document.body.style.overflow = 'hidden'
        } else {
            const scrollY = document.body.style.top
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
            document.body.style.overflow = ''
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1)
            }
        }
        return () => {
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.width = ''
            document.body.style.overflow = ''
        }
    }, [isOpen])

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose()
            }
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen, onClose])

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = cvPath
        link.download = cvFileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden"
            style={{
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)',
                willChange: 'auto'
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-neutral-50 flex-shrink-0">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Resume Preview</h2>
                <div className="flex items-center gap-3">
                    {/* Download Button */}
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-4 py-2 bg-[var(--Dark2)] text-white rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--Dark2)] focus:ring-offset-2"
                        aria-label="Download resume PDF"
                    >
                        <Download className="w-4 h-4" />
                        <span className="text-sm sm:text-base">Download</span>
                    </button>
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="p-2 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                        aria-label="Close resume preview"
                    >
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* PDF Preview */}
            <div
                className="flex-1 bg-gray-100"
                style={{
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >
                <iframe
                    src={`${cvPath}#toolbar=0&navpanes=0&scrollbar=1`}
                    className="absolute inset-0 w-full h-full border-0"
                    style={{
                        transform: 'translateZ(0)',
                        WebkitTransform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        willChange: 'auto'
                    }}
                    title="Resume Preview"
                    aria-label="Resume PDF preview"
                    loading="eager"
                />
            </div>
        </div>
    )
}

