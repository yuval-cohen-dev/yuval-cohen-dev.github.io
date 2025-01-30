import ContactForm from "@/components/ContactForm";
import { CONTACT_DESCRIPTION, CONTACT_TITLE } from "@constants";

export default function Page() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-800">
      <ContactForm
        description={CONTACT_DESCRIPTION}
        title={CONTACT_TITLE}
      />
    </div>
  );
}
