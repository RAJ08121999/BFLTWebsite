import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/designs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/designs/"!</div>
}
