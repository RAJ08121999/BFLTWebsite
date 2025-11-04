import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/designs/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/designs/$id"!</div>
}
