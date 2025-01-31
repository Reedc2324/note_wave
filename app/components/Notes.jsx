import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const notes = [
  { id: 1, title: "Introduction to React", content: "React is a JavaScript library for building user interfaces..." },
  { id: 2, title: "Python Basics", content: "Python is a high-level, interpreted programming language..." },
  {
    id: 3,
    title: "World History: Renaissance",
    content: "The Renaissance was a period of cultural, artistic, political...",
  },
]

export default function Notes() {
  return (
    (<div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Featured Notes</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <Card key={note.id}>
              <CardHeader>
                <CardTitle>{note.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{note.content.substring(0, 100)}...</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>)
  );
}

