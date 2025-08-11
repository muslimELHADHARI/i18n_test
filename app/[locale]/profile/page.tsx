import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { getDictionary } from "@/lib/dictionaries"

export default async function ProfilePage({
  params,
}: {
  params: { locale: string }
}) {
  const dict = await getDictionary(params.locale)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{dict.profile.title}</h1>
        <Button asChild variant="outline">
          <Link href={`/${params.locale}`}>{dict.profile.backToHome}</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{dict.profile.userInfo.title}</CardTitle>
            <CardDescription>{dict.profile.userInfo.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-muted-foreground">john.doe@example.com</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{dict.profile.userInfo.badges.developer}</Badge>
              <Badge variant="secondary">{dict.profile.userInfo.badges.designer}</Badge>
              <Badge variant="secondary">{dict.profile.userInfo.badges.creator}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{dict.profile.settings.title}</CardTitle>
            <CardDescription>{dict.profile.settings.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full">{dict.profile.settings.actions.editProfile}</Button>
            <Button variant="outline" className="w-full bg-transparent">
              {dict.profile.settings.actions.changePassword}
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              {dict.profile.settings.actions.notifications}
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{dict.profile.activity.title}</CardTitle>
          <CardDescription>{dict.profile.activity.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dict.profile.activity.items.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <Badge variant="outline">{item.date}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
