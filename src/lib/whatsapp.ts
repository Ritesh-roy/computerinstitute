// ============================================================================
// WHATSAPP LEAD INTEGRATION
// All admission inquiries are routed to this WhatsApp number.
// ============================================================================

export const WHATSAPP_NUMBER = "919971541416";
export const PHONE_NUMBER = "+919971541416";
export const PHONE_DISPLAY = "+91 99715 41416";
export const CONTACT_EMAIL = "skinstitute@example.com";

export type AdmissionLead = {
  course: string;
  name: string;
  mobile: string;
  email: string;
  city: string;
};

/** Build the wa.me URL for an admission form submission. */
export function admissionWhatsappUrl(lead: AdmissionLead): string {
  const message = [
    "New Admission Inquiry",
    "",
    `Course: ${lead.course}`,
    `Name: ${lead.name}`,
    `Mobile: ${lead.mobile}`,
    `Email: ${lead.email}`,
    `City: ${lead.city}`,
    "",
    "Source: Website Admission Form",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Build the wa.me URL for an "Apply on WhatsApp" course button. */
export function courseWhatsappUrl(courseTitle: string): string {
  const message = [
    "New Admission Inquiry",
    "",
    `Course: ${courseTitle}`,
    "",
    "Source: Website Course Page",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Generic chat link (no prefilled lead). */
export function whatsappChatUrl(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}
