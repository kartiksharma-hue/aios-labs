/**
 * Inquiry validation, shared by the form and the route handler so both enforce
 * exactly the same rules. Client-side validation is a convenience; the server
 * revalidates because it must never trust the browser.
 */

export type ContactField =
  | "name"
  | "email"
  | "company"
  | "website"
  | "improve"
  | "spend"
  | "service"
  | "context";

export type ContactSubmission = Record<ContactField, string>;

export type FieldErrors = Partial<Record<ContactField, string>>;

export const emptySubmission: ContactSubmission = {
  name: "",
  email: "",
  company: "",
  website: "",
  improve: "",
  spend: "",
  service: "",
  context: "",
};

/** Required fields, kept to the three that make an inquiry answerable. */
export const requiredFields: readonly ContactField[] = [
  "name",
  "email",
  "improve",
];

// Deliberately permissive: the job is to catch typos, not to police which
// provider someone's address is with.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateSubmission(values: ContactSubmission): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please tell us your name.";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Please enter an email address we can reply to.";
  } else if (!EMAIL.test(email)) {
    errors.email = "That doesn't look like a complete email address.";
  }

  const improve = values.improve.trim();
  if (!improve) {
    errors.improve = "Tell us what you are trying to improve.";
  } else if (improve.length < 12) {
    errors.improve = "A sentence or two helps — what is getting stuck?";
  }

  const website = values.website.trim();
  if (website && !/^([a-z][\w+.-]*:\/\/)?[^\s.]+\.[^\s]{2,}$/i.test(website)) {
    errors.website = "Enter a full address, for example aioslabs.in.";
  }

  return errors;
}

export function hasErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
