interface LandingHeaderProps {
  headerElement: React.ReactNode;
  subElement: React.ReactNode;
  actionElement: React.ReactNode;
}

export function LandingHeader({
  headerElement,
  actionElement,
}: LandingHeaderProps) {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-5xl font-bold leading-tight"></h1>
      <h1 className="text-5xl font-bold leading-tight">
        Share Your Epic Gaming Moments
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Upload your best clips, get votes from the community, and win monthly
        prizes!
      </p>
      {actionElement}
    </section>
  );
}
