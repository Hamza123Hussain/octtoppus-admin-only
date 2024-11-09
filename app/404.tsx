import Link from 'next/link'
import { useRouter } from 'next/router'
import { AlertCircle } from 'lucide-react'

const Custom404 = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f4f6] text-gray-700">
      <div className="text-center">
        <AlertCircle size={50} className="text-[#5925da] mb-5" />
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <div className="space-x-4">
          {/* Go back to previous page */}
          <button
            onClick={() => router.back()}
            className="bg-[#8D6ED9] text-white py-2 px-4 rounded-lg shadow hover:bg-[#5925da] transition-all"
          >
            Go Back
          </button>

          {/* Go to the Admin Dashboard */}
          <Link
            href="/"
            className="bg-[#5925da] text-white py-2 px-4 rounded-lg shadow hover:bg-[#8D6ED9] transition-all"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Custom404
