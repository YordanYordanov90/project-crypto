import Link from 'next/link'


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
    <p className="text-lg text-gray-700 mb-6">
      Sorry, the page you’re looking for does not exist.
    </p>
    <Link className="text-blue-500 hover:underline text-lg" href="/">
      Go back to the homepage
    </Link>
  </div>
  )
}

export default NotFound