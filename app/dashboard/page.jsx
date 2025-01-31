import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Book, Share2, MessageCircle } from "lucide-react"

export default function Dashboard() {
  return (
    (<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Notes
            </CardTitle>
            <CardDescription>5 recent notes</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/notes">View All Notes</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="mr-2" />
              Flashcards
            </CardTitle>
            <CardDescription>3 decks</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/flashcards">View All Flashcards</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Share2 className="mr-2" />
              Files
            </CardTitle>
            <CardDescription>10 shared files</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/files">View All Files</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="mr-2" />
              Messages
            </CardTitle>
            <CardDescription>2 unread messages</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/messages">View All Messages</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>)
  );
}

