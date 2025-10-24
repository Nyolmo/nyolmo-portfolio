import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, message } = data;
    const text = `Hello Rodney Nyolmo, I'm ${name} (${email}). ${message}`;
    const encodedText = encodeURIComponent(text);
    const phone = "254736015154"; 

    toast.success("Redirecting to WhatsApp...");
    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${encodedText}`, "_blank");
      reset();
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <Toaster position="top-center" />
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <textarea
          placeholder="Your Message"
          rows="5"
          {...register("message", { required: "Message is required" })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send via WhatsApp
        </motion.button>
      </form>
    </motion.div>
  );
}