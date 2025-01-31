import { FileText, Book, Share2, MessageCircle } from "lucide-react"

const features = [
  {
    name: "Notes",
    description: "Create and share detailed notes on any subject.",
    icon: FileText,
  },
  {
    name: "Flashcards",
    description: "Build interactive flashcard decks for effective studying.",
    icon: Book,
  },
  {
    name: "File Sharing",
    description: "Easily share documents, presentations, and more.",
    icon: Share2,
  },
  {
    name: "Messaging",
    description: "Connect with peers and collaborate in real-time.",
    icon: MessageCircle,
  },
]

export default function Features() {
  return (
    (<div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to excel
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            NoteWave provides all the tools you need to create, share, and collaborate on your learning journey.
          </p>
        </div>

        <div className="mt-10">
          <dl
            className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>)
  );
}

