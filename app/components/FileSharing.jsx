import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"

const files = [
  { id: 1, name: "Project Proposal.pdf", size: "2.4 MB" },
  { id: 2, name: "Research Paper.docx", size: "1.8 MB" },
  { id: 3, name: "Presentation Slides.pptx", size: "5.2 MB" },
]

export default function FileSharing() {
  return (
    (<div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Shared Files</h2>
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
      </div>
    </div>)
  );
}

