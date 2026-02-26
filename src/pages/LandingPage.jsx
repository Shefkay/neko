import DAppCard from "../components/features/DAppCard";
import Button from "../components/common/Button"

function LandingPage() {
  const dapps = [
    {
      id: 1,
      title: "BIG EYES",
      likes: "4.4K",
      author: "Carl Pei",
      imageUrl:
        "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=500",
    },
    {
      id: 2,
      title: "TICTAP PLAY",
      likes: "3K",
      author: "Keith",
      imageUrl:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=500",
    },
    {
      id: 3,
      title: "F1 SCHEDULE",
      likes: "2.1K",
      author: "Heydooxan",
      imageUrl:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=500",
    },
    {
      id: 4,
      title: "MOON PHASE",
      likes: "1.7K",
      author: "Ava",
      imageUrl:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=500",
    },
  ];

  return (
    <section className="relative min-h-screen items-center bg-background text-white">
      <div className="container mx-auto px-6 pt-32 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column */}
          <div>
            <img src="./images/mascot3.png" alt="mascot" />
          </div>

          {/* right column */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Come to play with Essential. Your digital Playground awaits.
            </h1>
            <p className="text-lg text-surface max-w-lg">
              Join thousands of creators to build something uniquely yours, and
              discover the creativity of the Nothing Community.
            </p>
          </div>
        </div>

        {/* Essential */}
        <div className="py-32">
          <div className="grid lg:grid-cols-2 gap-4 mb-8">
            <div>
              <h2 className="text-4xl mb-6">Essential Apps (Beta)</h2>
              <p>Make your homescreen yours - build apps and browse community creations.</p>
            </div>
            <div className="flex items-center gap-8">
              <Button className="" size="full">Create your app</Button>
              <Button className="" size="full">See all</Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dapps.slice(0, 4).map((dapp) => (
              <DAppCard key={dapp.id} {...dapp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage;