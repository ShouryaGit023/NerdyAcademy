import { useState } from 'react';
import { toast } from "sonner";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);

    // Web3Forms Access Key
    object.access_key = "9f076ecd-42a7-4efc-9580-dcdaa05b14c6";
    object.subject = `New Enquiry from ${object.name}`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(object)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        toast.success("Enquiry sent successfully!", {
          description: "We'll reach out within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Submission failed:", result);
        toast.error("Form submission failed", {
          description: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Connection error", {
        description: "Please check your network and try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-background pt-[100px] px-6 md:px-[60px] pb-0">
      <span className="text-[0.65rem] tracking-[6px] uppercase text-primary mb-[14px] block reveal">Get In Touch</span>
      <h2 className="font-heading text-[clamp(38px,6vw,78px)] leading-[0.95] mb-[60px] reveal">
        READY TO <span className="text-primary">START?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
        {/* Info side */}
        <div className="bg-[#111] p-[58px_48px] border-t-4 border-primary">
          <h3 className="font-heading text-[clamp(26px,4vw,48px)] leading-[0.95] mb-[38px]">
            LET'S BUILD YOUR <span className="text-primary">FUTURE.</span>
          </h3>

          {[
            { label: 'HEADQUARTERS', value: '22 A, Street Number 4, beside 22 A,Sector 2, Bhilai', href: 'https://maps.app.goo.gl/FRQ44RMezFmD2JBs6' },
            { label: 'PHONE', value: '+91 8225855200', href: 'tel:8225855200' },
            { label: 'PHONE 2', value: '+91 7828399992', href: 'tel:7828399992' },
            { label: 'EMAIL', value: 'shreysuryamishra@gmail.com', href: 'mailto:shreysuryamishra@gmail.com' },
            { label: 'INSTAGRAM', value: '@NERDY.ACADEMY', href: 'https://www.instagram.com/nerdy.academy' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 no-underline text-foreground p-[16px_22px] mb-[3px] bg-primary/[0.07] border-l-[3px] border-primary hover:bg-primary/20 hover:translate-x-[6px] transition-all"
            >
              <div>
                <div className="text-[0.52rem] tracking-[4px] text-foreground/30 mb-[3px]">{link.label}</div>
                <div className="font-heading text-[1.2rem] tracking-[2px] text-primary">{link.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Form side */}
        <div className="bg-[#0d0d0d] p-[58px_48px] border-t-4 border-accent">
          <form onSubmit={handleSubmit}>
            <label className="text-[0.55rem] tracking-[3px] uppercase text-foreground/35 block mb-2">FULL NAME *</label>
            <input name="name" required placeholder="Your full name" className="w-full bg-white/[0.04] border border-white/10 text-foreground p-[14px_16px] font-body text-[0.9rem] outline-none focus:border-accent transition-colors mb-[14px]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
              <div>
                <label className="text-[0.55rem] tracking-[3px] uppercase text-foreground/35 block mb-2">EMAIL *</label>
                <input name="email" required type="email" placeholder="you@email.com" className="w-full bg-white/[0.04] border border-white/10 text-foreground p-[14px_16px] font-body text-[0.9rem] outline-none focus:border-accent transition-colors mb-[14px]" />
              </div>
              <div>
                <label className="text-[0.55rem] tracking-[3px] uppercase text-foreground/35 block mb-2">PHONE *</label>
                <input name="phone" required type="tel" placeholder="+91 00000 00000" className="w-full bg-white/[0.04] border border-white/10 text-foreground p-[14px_16px] font-body text-[0.9rem] outline-none focus:border-accent transition-colors mb-[14px]" />
              </div>
            </div>

            <label className="text-[0.55rem] tracking-[3px] uppercase text-foreground/35 block mb-2">CITY *</label>
            <input name="city" required placeholder="Your city" className="w-full bg-white/[0.04] border border-white/10 text-foreground p-[14px_16px] font-body text-[0.9rem] outline-none focus:border-accent transition-colors mb-[14px]" />

            <label className="text-[0.55rem] tracking-[3px] uppercase text-foreground/35 block mb-2">LEARNING MODE *</label>
            <select name="mode" required defaultValue="" className="w-full bg-[#141414] border border-white/10 text-foreground p-[14px_16px] font-body text-[0.9rem] outline-none focus:border-accent transition-colors mb-[14px]">
              <option value="" disabled>— Select mode —</option>
              <option value="Online">Online</option>
              <option value="Classroom (Bhilai)">Classroom (Bhilai)</option>
            </select>

            <label className="text-[0.55rem] tracking-[3px] uppercase text-foreground/35 block mb-2">COURSE PREFERENCE *</label>
            <select name="course" required defaultValue="" className="w-full bg-[#141414] border border-white/10 text-foreground p-[14px_16px] font-body text-[0.9rem] outline-none focus:border-accent transition-colors mb-[14px]">
              <option value="" disabled>— Select course type —</option>
              <option value="Batch (₹20,000)">Batch (₹20,000) — Online / Classroom</option>
              <option value="1:1 Personal (₹55,000)">1:1 Personal (₹55,000) — Online / Classroom</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>

            <label className="text-[0.55rem] tracking-[3px] uppercase text-foreground/35 block mb-2">MESSAGE (OPTIONAL)</label>
            <textarea name="message" rows={3} placeholder="Any questions or specific goals..." className="w-full bg-white/[0.04] border border-white/10 text-foreground p-[14px_16px] font-body text-[0.9rem] outline-none focus:border-accent transition-colors mb-[14px] resize-y" />

            <button
              type="submit"
              className="bg-primary text-foreground border-none p-[20px_40px] font-heading text-[1.3rem] tracking-[4px] clip-skew hover:bg-[#ff1010] hover:-translate-y-[2px] transition-all mt-[6px] w-full btn-shine"
              disabled={sending}
            >
              {sending ? 'SENDING...' : 'SEND ENQUIRY →'}
            </button>

            {submitted && (
              <div className="mt-3 bg-[rgba(0,200,80,0.08)] border border-[rgba(0,200,80,0.3)] p-[14px_18px] text-[0.8rem] tracking-[2px] text-[#4ade80] text-center">
                ✓ SENT! WE'LL REACH OUT WITHIN 24 HOURS.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
