export const ADMISSION_EVENT = "sk:open-admission";

/** Opens the global admission form modal from anywhere in the app. */
export function openAdmission() {
  window.dispatchEvent(new CustomEvent(ADMISSION_EVENT));
}
