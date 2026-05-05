import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";

const QuoteModal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-lg bg-card text-card-foreground rounded-3xl shadow-glass dark:shadow-glass-dark border border-border p-6 md:p-8 pointer-events-auto relative overflow-hidden"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight mb-2">Request a Quote</h2>
                <p className="text-muted-foreground text-sm">
                  Fill out your operational requirements. Mushahid will get back to you immediately.
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Company</label>
                    <Input placeholder="Acme Logistics" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Phone / WhatsApp</label>
                    <Input placeholder="+971 5X XXX XXXX" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Equipment Needed</label>
                    <select className="flex h-12 w-full rounded-xl border border-border bg-input/50 px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 appearance-none">
                      <option value="" disabled selected>Select equipment...</option>
                      <option value="crane">Mobile Crane</option>
                      <option value="trailer">Flat Trailer</option>
                      <option value="boomloader">Boomloader</option>
                      <option value="earthmoving">JCB / Bobcat</option>
                      <option value="manlift">Manlift</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Project Details & Duration</label>
                  <Textarea placeholder="E.g., We need a 50 Ton mobile crane for 3 weeks starting next Monday..." />
                </div>

                <div className="pt-4 flex items-center justify-end space-x-4">
                  <Button variant="ghost" onClick={onClose}>Cancel</Button>
                  <Button type="submit" className="group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Submit Request
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;