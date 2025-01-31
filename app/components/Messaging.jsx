import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export default function Messaging() {
  return (
    (<div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Messaging</h2>
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <p className="font-semibold">Alice:</p>
                <p>Hey, have you started working on the project?</p>
              </div>
              <div className="bg-green-100 p-2 rounded-lg text-right">
                <p className="font-semibold">You:</p>
                <p>Yes, I've begun researching. Let's discuss our approach.</p>
              </div>
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
      </div>
    </div>)
  );
}

