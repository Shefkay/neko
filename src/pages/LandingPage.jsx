function LandingPage() {
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
      </div>
    </section>
  )
}

export default LandingPage;