import Link from "next/link"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
                <Link href="/" className="absolute top-4 left-4 text-sm text-gray-500 hover:text-gray-700"> 
            &larr; Back to Home
        </Link>
        <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
