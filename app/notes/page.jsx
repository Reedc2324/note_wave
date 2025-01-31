import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
    (<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Notes</h1>
        <Button>Create New Note</Button>
      </div>
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
    </div>)
  );
}

