"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Document {
  id: string;
  name: string;
  path: string;
}

interface DocumentViewerProps {
  document: Document;
  onClose: () => void;
}

const downloadFile = async (url: string, fileName: string): Promise<void> => {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function DocumentViewer({ document, onClose }: DocumentViewerProps) {
  const router = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const documentUrl = `https://dhqsh-asset.decagonhq.com/${document.path}`;

  const handleClose = () => {
    onClose();
    router.push('/community');
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const documentUrl = `https://dhqsh-asset.decagonhq.com/${document.path}`;
      const fileName = `${document.name.replace(/[/\\?%*:|"<>]/g, '-')}.docx`;
      await downloadFile(documentUrl, fileName);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download document. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="flex items-center justify-between p-4 border-b bg-white sticky top-0">
        <h2 className="text-lg font-medium truncate">{document.name}</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 inline-flex items-center ${
              isDownloading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Downloading...
              </>
            ) : (
              'Download'
            )}
          </button>
          <button
            onClick={handleClose}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close viewer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {isLoading && (
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}
      
      <iframe
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${documentUrl}`}
        className={`w-full h-[calc(100vh-4rem)] ${isLoading ? 'hidden' : ''}`}
        title={document.name}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}