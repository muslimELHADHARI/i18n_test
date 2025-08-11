import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getDictionary } from "@/lib/dictionaries"

export default async function HomePage({
  params,
}: {
  params: { locale: string }
}) {
  const dict = await getDictionary(params.locale)

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{dict.home.title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{dict.home.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>{dict.home.features.feature1.title}</CardTitle>
            <CardDescription>{dict.home.features.feature1.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href={`/${params.locale}/profile`}>{dict.home.features.feature1.action}</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{dict.home.features.feature2.title}</CardTitle>
            <CardDescription>{dict.home.features.feature2.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline">{dict.home.features.feature2.action}</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{dict.home.features.feature3.title}</CardTitle>
            <CardDescription>{dict.home.features.feature3.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary">{dict.home.features.feature3.action}</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
