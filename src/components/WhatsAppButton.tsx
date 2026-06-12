import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '923705105203';
  const message = encodeURIComponent('Hi Muhammad Ali, I came across your portfolio and would like to connect!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 touch-manipulation group"
      style={{
        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
      }}
    >
      <FaWhatsapp size={28} />
      
      {/* Tooltip on hover (desktop only) */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#1e2330] text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-[rgba(255,255,255,0.1)] hidden md:block">
        Chat with me
      </div>
      
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 animate-[ping_2s_ease-in-out_infinite]" />
    </a>
  );
}
