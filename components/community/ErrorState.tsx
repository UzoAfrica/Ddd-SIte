interface ErrorStateProps {
    error: Error;
    reset: () => void;
}

export default function ErrorState({ error, reset }: ErrorStateProps) {
return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
        Try again
        </button>
    </div>
    </div>
);
}