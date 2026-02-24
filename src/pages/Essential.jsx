import DAppCard from "../components/features/DAppCard";

function Essential() {

  return (
    <section className="relative min-h-screen items-center bg-background text-white">
      <div className="container mx-auto px-6 pt-32 pb-20 relative">
        <div className="space-y-4 text-center">
          <h1 className="text-7xl">Essential Apps (Beta)</h1>
          <p>Make your homescreen yours - build apps and browse community creations.</p>
        </div>
        <div className="grid grid-cols-4 gap-3 py-32">
          <DAppCard />
          <DAppCard />
          <DAppCard />
          <DAppCard />
          <DAppCard />
          <DAppCard />
          <DAppCard />
          <DAppCard />
        </div>
      </div>
    </section>
  )
}

export default Essential;