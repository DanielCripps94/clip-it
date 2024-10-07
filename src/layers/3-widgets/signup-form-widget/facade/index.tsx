"use client";
import { AuthFormContainer } from "@/layers/6-shared/auth-form-container/facade";
import { AuthFormFooter } from "@/layers/6-shared/auth-form-container/ui/auth-form-footer";
import { SignupSubmitButton } from "@/layers/4-features/signup-submit-button/facade";
import { CreateAccountAction } from "@/layers/4-features/create-account-action/facade";
import { SignUpForm } from "@/layers/4-features/signup-form/facade";

export function SignUpFormWidget() {
  return (
    <AuthFormContainer
      authTitle="ClipIt"
      authSubtitle="Access the best gaming content instantly"
      footerElement={
        <AuthFormFooter
          footerActionElement={
            <CreateAccountAction
              header={"Already have an account?"}
              href="/login"
              buttonText={"Log in"}
            />
          }
        />
      }
    >
      <SignUpForm
        submitFormElement={<SignupSubmitButton text={"Create Account"} />}
      />
    </AuthFormContainer>
  );
}
