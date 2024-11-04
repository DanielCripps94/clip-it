import { useState, useEffect } from "react";

enum PasswordRuleKey {
  Length = "length",
  Uppercase = "uppercase",
  Lowercase = "lowercase",
  Number = "number",
  Special = "special",
}

interface PasswordRules {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  special: boolean;
}

type PasswordRuleConfig = {
  [key in PasswordRuleKey]: {
    validate: (password: string) => boolean;
    message: string;
  };
};

const PASSWORD_RULE_CONFIG: PasswordRuleConfig = {
  [PasswordRuleKey.Length]: {
    validate: (password) => password.length >= 8 && password.length <= 20,
    message: "8-20 characters",
  },
  [PasswordRuleKey.Uppercase]: {
    validate: (password) => /[A-Z]/.test(password),
    message: "At least one uppercase letter",
  },
  [PasswordRuleKey.Lowercase]: {
    validate: (password) => /[a-z]/.test(password),
    message: "At least one lowercase letter",
  },
  [PasswordRuleKey.Number]: {
    validate: (password) => /[0-9]/.test(password),
    message: "At least one number",
  },
  [PasswordRuleKey.Special]: {
    validate: (password) => /[!@#$%^&*]/.test(password),
    message: "At least one special character",
  },
};

export function usePasswordValidation(password: string) {
  const [passwordRules, setPasswordRules] = useState<PasswordRules>(
    Object.keys(PASSWORD_RULE_CONFIG).reduce(
      (rules, rule) => ({ ...rules, [rule]: false }),
      {} as PasswordRules
    )
  );

  useEffect(() => {
    const updatedRules = Object.keys(PASSWORD_RULE_CONFIG).reduce(
      (rules, key) => {
        const ruleKey = key as PasswordRuleKey;
        rules[ruleKey] = PASSWORD_RULE_CONFIG[ruleKey].validate(password);
        return rules;
      },
      {} as PasswordRules
    );

    setPasswordRules(updatedRules);
  }, [password]);

  const passwordRuleList = Object.keys(passwordRules).map((ruleKey) => ({
    met: passwordRules[ruleKey as PasswordRuleKey],
    text: PASSWORD_RULE_CONFIG[ruleKey as PasswordRuleKey].message,
  }));

  return { passwordRuleList };
}
