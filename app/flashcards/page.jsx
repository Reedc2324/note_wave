import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const flashcardDecks = [
  { id: 1, title: "Spanish Vocabulary", cardCount: 50 },
  { id: 2, title: "Biology Terms", cardCount: 30 },
  { id: 3, title: "Historical Dates", cardCount: 25 },
]

export default function Flashcards() {
  return (
    (<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Flashcards</h1>
        <Button>Create New Deck</Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {flashcardDecks.map((deck) => (
          <Card key={deck.id}>
            <CardHeader>
              <CardTitle>{deck.title}</CardTitle>
              <CardDescription>{deck.cardCount} cards</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">Study</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>)
  );
}

