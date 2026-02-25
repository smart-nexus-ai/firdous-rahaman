export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                {/* Spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-2 border-dark-800 rounded-full" />
                    <div className="absolute inset-0 border-2 border-transparent border-t-primary-500 rounded-full animate-spin" />
                </div>

                {/* Terminal loading text */}
                <div className="font-mono text-sm text-gray-500 flex items-center gap-1">
                    <span className="text-primary-500">$</span>
                    loading
                    <span className="animate-pulse">...</span>
                </div>
            </div>
        </div>
    );
}