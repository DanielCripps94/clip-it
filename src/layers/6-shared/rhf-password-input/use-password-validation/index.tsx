import { useState, useEffect } from "react";

interface PasswordRules {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  special: boolean;
}

export function usePasswordValidation(password: string) {
  const [passwordRules, setPasswordRules] = useState<PasswordRules>({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  useEffect(() => {
    setPasswordRules({
      length: password.length >= 8 && password.length <= 20,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password),
    });
  }, [password]);

  const passwordRuleList = [
    { met: passwordRules.length, text: "8-20 characters" },
    { met: passwordRules.uppercase, text: "At least one uppercase letter" },
    { met: passwordRules.lowercase, text: "At least one lowercase letter" },
    { met: passwordRules.number, text: "At least one number" },
    { met: passwordRules.special, text: "At least one special character" },
  ];

  return { passwordRuleList };
}
