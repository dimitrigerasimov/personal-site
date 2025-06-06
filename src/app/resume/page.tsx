"use client";

import { useState } from 'react';
import { Download, ExternalLink, ZoomIn, ZoomOut } from 'lucide-react';

export default function ResumePage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Dimitri_Gerasimov_Resume.pdf';
    link.click();
  };

  const handleNewTab = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background shadow-sm border-b border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dimitri Gerasimov</h1>
              <p className="text-foreground/70 mt-1">Professional Resume</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Download size={18} />
                Download PDF
              </button>
              <button
                onClick={handleNewTab}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm"
              >
                <ExternalLink size={18} />
                Open in New Tab
              </button>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
              >
                {isFullscreen ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <div className={`transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'max-w-6xl mx-auto p-6'}`}>
        {isFullscreen && (
          <div className="flex justify-between items-center p-4 bg-background border-b border-foreground/10">
            <h2 className="text-lg font-semibold text-foreground">Dimitri Gerasimov - Resume</h2>
            <button
              onClick={() => setIsFullscreen(false)}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Exit Fullscreen
            </button>
          </div>
        )}
        
        <div className={`bg-background rounded-xl shadow-lg overflow-hidden border border-foreground/10 ${isFullscreen ? 'h-full' : ''}`}>
          {/* PDF Viewer */}
          <div className="relative">
            <iframe
              src="/resume.pdf"
              className={`w-full border-0 ${isFullscreen ? 'h-screen' : 'h-[900px]'}`}
              title="Dimitri Gerasimov Resume"
            />
            
            {/* Fallback for browsers that don't support iframe PDF viewing */}
            <div className="absolute inset-0 flex items-center justify-center bg-background/95 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-background p-6 rounded-lg shadow-lg text-center pointer-events-auto border border-foreground/20">
                <p className="text-foreground/70 mb-4">Having trouble viewing the PDF?</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Download PDF
                  </button>
                  <button
                    onClick={handleNewTab}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Open in New Tab
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {!isFullscreen && (
          <div className="mt-6 text-center">
            <p className="text-foreground/60 text-sm">
              For the best viewing experience, try the fullscreen mode or download the PDF directly.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}