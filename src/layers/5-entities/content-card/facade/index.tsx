import { Card, CardContent } from "@/components/ui/card";

interface CardContentProps {
  header: React.ReactNode;
  subHeader: React.ReactNode;
  icon: React.ReactNode;
}

export const LandingCardContent = ({
  header,
  subHeader,
  icon,
}: CardContentProps) => {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="pt-6 text-center">
        {icon}
        <h3 className="text-xl font-semibold text-white mb-2">{header}</h3>
        <p className="text-gray-300">{subHeader}</p>
      </CardContent>
    </Card>
  );
};
