import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    (<div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to NoteWave</span>
            <span className="block text-blue-600">Share Knowledge, Collaborate, Succeed</span>
          </h1>
          <p
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create, share, and collaborate on notes, flashcards, and files. Connect with others and elevate your
            learning experience.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button size="lg">Get started</Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

