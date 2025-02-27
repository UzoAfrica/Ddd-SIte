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
    path: "GUIDELINE%20FOR%20LOAN%20REPAYMENT%20STERLING%20BANK.docx"
  },
  {
    id: "access-loan-repayment-guide",
    name: "GUIDELINE FOR LOAN REPAYMENT ACCESS BANK",
    path: "GUIDELINE%20FOR%20LOAN%20REPAYMENT%20ACCESS%20BANK%20(1).docx"
  },
  {
    id: "sterling-loan-liquidation-template",
    name: "FULL LOAN LIQUIDATION TEMPLATE STERLING BANK",
    path: "FULL%20LOAN%20LIQUIDATION%20TEMPLATE%20STERLING%20BANK.docx"
  },
  {
    id: "guarantor-acknowledgment",
    name: "Guarantor Acknowledgment and Undertaking For Certificate C",
    path: "Guarantor's%20Acknowledgment%20and%20Undertaking%20For%20Certificate%20C.docx"
  },
  {
    id: "insurance-claim-request",
    name: "INSURANCE CLAIM REQUEST",
    path: "INSURANCE%20CLAIM%20REQUEST.docx"
  },
  {
    id: "certificate-collection-attestation",
    name: "LETTER OF ATTESTATION FOR CERTIFICATE COLLECTION (Loan repayment Completed)",
    path: "LETTER%20OF%20ATTESTATION%20%20FOR%20CERTIFICATE%20COLLECTION%20(Loan%20repayment%20%20Completed%20)%20(2).docx"
  },
  {
    id: "certificate-collection-undertaking",
    name: "LETTER OF UNDERTAKING FOR CERTIFICATE COLLECTION (Loan repayment Ongoing)",
    path: "LETTER%20OF%20UNDERTAKING%20FOR%20CERTIFICATE%20COLLECTION%20(Loan%20repayment%20Ongoing)%20(2)%20(1).docx"
  },
  {
    id: "access-loan-liquidation-template",
    name: "Loan Liquidation template Access bank",
    path: "Loan%20Liquidation%20template%20Access%20bank.docx"
  },
  {
    id: "sterling-loan-restructuring",
    name: "Loan Restructuring Request Sterling bank",
    path: "Loan%20Restructuring%20Request%20Sterling%20bank.docx"
  },
  {
    id: "sterling-partial-liquidation",
    name: "Partial Loan liquidation template Sterling bank",
    path: "Partial%20Loan%20liquidation%20template%20Sterling%20bank.docx"
  },
  {
    id: "loan-insurance-claim",
    name: "Request For Loan Insurance Claim",
    path: "Request%20For%20Loan%20Insurance%20Claim.docx"
  },
  {
    id: "loan-restructuring-request",
    name: "Request for Loan restructuring",
    path: "Request%20for%20Loan%20restructuring.docx"
  },
  {
    id: "access-guarantee-release",
    name: "Request for Release of Guarantee documents Access bank",
    path: "Request%20for%20Realease%20of%20Guarantee%20documents%20%20Access%20bank.docx"
  },
  {
    id: "sterling-guarantee-release",
    name: "Request for Release of Guarantee documents Sterling Bank",
    path: "Request%20for%20Realease%20of%20Guarantee%20documents%20Sterling%20Bank.docx"
  },
  {
    id: "sterling-halt-moratorium",
    name: "Request to halt Moratorium sterling bank",
    path: "Request%20to%20halt%20Moratorium%20sterling%20%20bank.docx"
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