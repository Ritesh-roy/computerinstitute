// ============================================================================
// WHATSAPP LEAD INTEGRATION
// All admission inquiries are routed to this WhatsApp number.
// ============================================================================

export const WHATSAPP_NUMBER = "919971541416";
export const PHONE_NUMBER = "+919971541416";
export const PHONE_DISPLAY = "+91 99715 41416";
export const CONTACT_EMAIL = "Qurbisecom1@gmail.com";
export const MAP_QUERY = "A-818, B Block Rd, near A-BLOCK, Mangol Puri, New Delhi, India 110083";
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`;
export const MAP_PLACE_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export type ContactLead = {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
};

export type AdmissionLead = {
  course: string;
  name: string;
  mobile: string;
  email: string;
  city: string;
};

/** Current date & time in a readable IST-friendly format. */
function nowStamp(): string {
  try {
    return new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return new Date().toLocaleString();
  }
}

/** Build the wa.me URL for an admission form submission. */
export function admissionWhatsappUrl(lead: AdmissionLead): string {
  const message = [
    "🎓 New Admission Inquiry",
    "",
    `Course: ${lead.course}`,
    `Name: ${lead.name}`,
    `Mobile: ${lead.mobile}`,
    `Email: ${lead.email}`,
    `City: ${lead.city}`,
    `Date & Time: ${nowStamp()}`,
    "",
    "Submitted from SK Institute Website",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Build the wa.me URL for an "Apply on WhatsApp" course button. */
export function courseWhatsappUrl(courseTitle: string): string {
  const message = [
    "🎓 New Admission Inquiry",
    "",
    `Course: ${courseTitle}`,
    `Date & Time: ${nowStamp()}`,
    "",
    "Submitted from SK Institute Website",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Generic chat link (no prefilled lead). */
export function whatsappChatUrl(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}

/** Build the wa.me URL for a Contact page inquiry. */
export function contactWhatsappUrl(lead: ContactLead): string {
  const message = [
    "📩 New Contact Inquiry",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    `Course: ${lead.course}`,
    `Message: ${lead.message}`,
    `Date & Time: ${nowStamp()}`,
    "",
    "Submitted from SK Institute Website",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
