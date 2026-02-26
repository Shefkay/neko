import DAppCard from "../components/features/DAppCard";

function Essential() {
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
        <div className="space-y-4 text-center">
          <h1 className="text-7xl">Essential Apps (Beta)</h1>
          <p>Make your homescreen yours - build apps and browse community creations.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-32">
          {dapps.map((dapp) => (
            <DAppCard key={dapp.id} {...dapp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Essential;