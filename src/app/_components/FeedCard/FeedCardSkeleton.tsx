import { Card } from "@/ui/Card";

export const FeedCardSkeleton = () => {
  return (
    <Card>
      <div className="flex items-center gap-2 p-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-24 h-4 bg-blue-500 rounded-full animate-pulse"></div>
      </div>

      <div className="px-4 py-3">
        <div className="h-28 bg-blue-500 rounded-lg animate-pulse"></div>
      </div>

      <div className="flex px-4 py-6 gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-blue-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-4 bg-blue-500 rounded animate-pulse"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-blue-500 rounded-lg animate-pulse"></div>
          <div className="w-12 h-4 bg-blue-500 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-6">
        <div className="w-full h-10 bg-blue-500 rounded-lg animate-pulse"></div>
      </div>
    </Card>
  )
}