import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/catalog/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/catalog/$id"!</div>
}
