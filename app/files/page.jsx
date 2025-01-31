import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

const files = [
  { id: 1, name: "Project Proposal.pdf", size: "2.4 MB" },
  { id: 2, name: "Research Paper.docx", size: "1.8 MB" },
  { id: 3, name: "Presentation Slides.pptx", size: "5.2 MB" },
]

export default function Files() {
  return (
    (<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Files</h1>
        <Button>Upload New File</Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {files.map((file) => (
          <Card key={file.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2" />
                {file.name}
              </CardTitle>
              <CardDescription>{file.size}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>)
  );
}

