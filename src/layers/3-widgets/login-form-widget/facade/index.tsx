import { CreateAccountAction } from "@/layers/4-features/create-account-action";
import { LoginForm } from "@/layers/4-features/login-form/facade";
import { LoginSubmitButton } from "@/layers/4-features/login-submit-button";
import { AuthFormContainer } from "@/layers/6-shared/auth-form-container";
import { AuthFormFooter } from "@/layers/6-shared/auth-form-container/ui/auth-form-footer";

export const LoginFormWidget = () => {
  return (
    <AuthFormContainer
      authTitle="ClipIt"
      authSubtitle="Access the best gaming content instantly"
      footerElement={
        <AuthFormFooter
          footerActionElement={
            <CreateAccountAction
              header={"New to ClipIt?"}
              href="/signup"
              buttonText={"Create an account"}
            />
          }
        />
      }
    >
      <LoginForm submitFormElement={<LoginSubmitButton text={"Login"} />} />
    </AuthFormContainer>
  );
};
