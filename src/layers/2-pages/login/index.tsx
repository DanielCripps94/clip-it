import { LoginFormWidget } from "@/layers/3-widgets/login-form-widget/facade";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginFormWidget />;
    </Suspense>
  );
}
