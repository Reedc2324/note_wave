import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

const messages = [
  { id: 1, sender: "Alice", content: "Hey, have you started working on the project?" },
  { id: 2, sender: "You", content: "Yes, I've begun researching. Let's discuss our approach." },
]

export default function Messages() {
  return (
    (<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Messages</h1>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Chat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-2 rounded-lg ${message.sender === "You" ? "bg-blue-100 text-right" : "bg-gray-100"}`}>
                <p className="font-semibold">{message.sender}:</p>
                <p>{message.content}</p>
              </div>
            ))}
          </div>
          <div className="flex">
            <Input className="flex-grow mr-2" placeholder="Type your message..." />
            <Button>
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>)
  );
}

