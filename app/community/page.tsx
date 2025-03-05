"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DocumentViewer from '@/components/DocumentViewer';
import LoadingState from '@/components/community/LoadingState';
import ErrorState from '@/components/community/ErrorState';

interface Document {
  id: string;
  name: string;
  path: string;
}

const documents: Document[] = [
  {
    id: "sterling-loan-repayment-guide",
    name: "GUIDELINE FOR LOAN REPAYMENT STERLING BANK",
    path: "dhq.sh/sterling-loan-repayment-guide"
  },
  {
    id: "access-loan-repayment-guide",
    name: "GUIDELINE FOR LOAN REPAYMENT ACCESS BANK",
    path: "dhq.sh/access-loan-repayment-guide"
  },
  {
    id: "sterling-loan-liquidation-template",
    name: "FULL LOAN LIQUIDATION TEMPLATE STERLING BANK",
    path: "dhq.sh/sterling-loan-liquidation-template"
  },
  {
    id: "guarantor-acknowledgment",
    name: "Guarantor Acknowledgment and Undertaking For Certificate C",
    path: "dhq.sh/guarantor-acknowledgment"
  },
  {
    id: "insurance-claim-request",
    name: "INSURANCE CLAIM REQUEST",
    path: "dhq.sh/insurance-claim-request"
  },
  {
    id: "certificate-collection-attestation",
    name: "LETTER OF ATTESTATION FOR CERTIFICATE COLLECTION (Loan repayment Completed)",
    path: "dhq.sh/certificate-collection-attestation"
  },
  {
    id: "certificate-collection-undertaking",
    name: "LETTER OF UNDERTAKING FOR CERTIFICATE COLLECTION (Loan repayment Ongoing)",
    path: "dhq.sh/certificate-collection-undertaking"
  },
  {
    id: "access-loan-liquidation-template",
    name: "Loan Liquidation template Access bank",
    path: "dhq.sh/access-loan-liquidation-template"
  },
  {
    id: "sterling-loan-restructuring",
    name: "Loan Restructuring Request Sterling bank",
    path: "dhq.sh/sterling-loan-restructuring"
  },
  {
    id: "letter-of-non-indebtedness",
    name: "REQUEST FOR LETTER OF NON-INDEBTEDNESS",
    path: "dhq.sh/letter-of-non-indebtedness"
  },
  {
    id: "sterling-partial-liquidation",
    name: "Partial Loan liquidation template Sterling bank",
    path: "dhq.sh/sterling-partial-liquidation"
  },
  {
    id: "loan-insurance-claim",
    name: "Request For Loan Insurance Claim",
    path: "dhq.sh/loan-insurance-claim"
  },
  {
    id: "loan-restructuring-request",
    name: "Request for Loan restructuring",
    path: "dhq.sh/loan-restructuring-request"
  },
  {
    id: "access-guarantee-release",
    name: "Request for Release of Guarantee documents Access bank",
    path: "dhq.sh/access-guarantee-release"
  },
  {
    id: "sterling-guarantee-release",
    name: "Request for Release of Guarantee documents Sterling Bank",
    path: "dhq.sh/sterling-guarantee-release"
  },
  {
    id: "sterling-halt-moratorium",
    name: "Request to halt Moratorium sterling bank",
    path: "dhq.sh/sterling-halt-moratorium"
  }
];

const downloadFile = async (url: string, fileName: string): Promise<void> => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',  // Add CORS mode
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to download: ${response.statusText}`);
    }

    // Get the blob directly from the response
    const blob = await response.blob();
    
    // Create download link
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = downloadUrl;
    a.download = fileName;

    // Trigger download
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    window.URL.revokeObjectURL(downloadUrl);
    document.body.removeChild(a);
  } catch (error) {
    console.error('Download error:', error);
    throw new Error('Download failed. Please try again.');
  }
};

function CommunityContent() {
  const searchParams = useSearchParams();
  const documentId = searchParams.get('doc');
  const [selectedDoc, setSelectedDoc] = React.useState(
    documents.find(d => d.id === documentId) || null
  );

  const handleDownload = async (doc: Document) => {
    try {
      const documentUrl = `https://dhqsh-asset.decagonhq.com/${doc.path}`;
      const fileName = doc.name.replace(/[/\\?%*:|"<>]/g, '-') + '.docx';
      
      // Add loading state for better UX
      const button = document.querySelector(`button[data-doc-id="${doc.id}"]`);
      if (button) button.setAttribute('disabled', 'true');
      
      await downloadFile(documentUrl, fileName);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download document. Please try again.');
    } finally {
      // Reset loading state
      const button = document.querySelector(`button[data-doc-id="${doc.id}"]`);
      if (button) button.removeAttribute('disabled');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900">Community Resources</h1>
            <p className="mt-2 text-gray-600">Access and view important documents</p>

            <div className="mt-8 grid gap-6">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div 
                    className="flex items-center cursor-pointer flex-1"
                    onClick={() => setSelectedDoc(doc)}
                  >
                    <div className="flex-shrink-0">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h2 className="text-lg font-medium text-gray-900">{doc.name}</h2>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(doc);
                    }}
                    data-doc-id={doc.id}
                    className="ml-4 p-2 text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Download document"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedDoc && (
        <DocumentViewer
          document={selectedDoc}
          onClose={() => setSelectedDoc(null)}
        />
      )}
    </main>
  );
}

// Main export
export default function Community() {
  return (
    <Suspense fallback={<LoadingState />}>
      <CommunityContent />
    </Suspense>
  );
}