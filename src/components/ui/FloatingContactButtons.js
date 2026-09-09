"use client";

import { Phone, MessageCircle } from "lucide-react";

import advocate from "@/data/advocate";

export default function FloatingContactButtons() {
  const whatsappNumber = advocate.whatsapp?.number;

  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : "#";

  return (
    <div className="floating-contact-buttons">
      <a
        href={advocate.phone.href}
        className="floating-call"
        aria-label="Call Advocate Shrinivas Talawar"
      >
        <Phone size={21} />
        <span>Call</span>
      </a>

      <a
        href={whatsappHref}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={21} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}