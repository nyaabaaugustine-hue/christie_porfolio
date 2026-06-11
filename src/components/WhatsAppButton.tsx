import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/233XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 z-50 w-12 h-12 sm:w-14 sm:h-14"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://res.cloudinary.com/dwsl2ktt2/image/upload/e_background_removal/v1778561984/download_c9fduz.png"
        alt="WhatsApp"
        className="w-full h-full object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778561984/download_c9fduz.jpg";
        }}
      />
    </motion.a>
  );
}
