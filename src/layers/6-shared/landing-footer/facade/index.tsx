interface LandingFooterProps {
  actionElement: React.ReactNode;
}

export const LandingFooter = ({ actionElement }: LandingFooterProps) => {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-3xl font-bold">Ready to Become a ClipIt Star?</h2>
      {actionElement}
    </section>
  );
};
