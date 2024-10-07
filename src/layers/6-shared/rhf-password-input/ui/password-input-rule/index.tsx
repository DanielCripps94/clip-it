import { CheckCircle, XCircle } from "lucide-react";

export const PasswordRule = ({ met, text }: { met: boolean; text: string }) => (
  <div
    className={`flex items-center space-x-2 ${
      met ? "text-green-500" : "text-red-500"
    }`}
  >
    {met ? <CheckCircle size={16} /> : <XCircle size={16} />}
    <span className="text-xs">{text}</span>
  </div>
);
