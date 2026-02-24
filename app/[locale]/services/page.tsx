import Services from "@/components/Services"

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <main className="w-full overflow-hidden">
      <Services />
    </main>
  )
}
