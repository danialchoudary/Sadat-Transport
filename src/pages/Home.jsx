import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { ArrowRight, Calendar, Clock, CheckCircle2 } from "lucide-react";
import QuoteModal from "../components/QuoteModal";

const vehicles = [
  { name: "Mobile Cranes", capacity: "25, 50, 75, 100 & 200 Tons", desc: "Heavy lifting operations with premium stability.", tag: "Heavy Lift", image: "https://media.istockphoto.com/id/2067798617/photo/a-large-liebherr-truck-crane-standing-on-the-territory-of-the-seaport.jpg?s=612x612&w=0&k=20&c=WRbiBRRB07GRNsSa54aY30Ha__rUc287dDa6fU2l7AI=" },
  { name: "Flat Trailer", capacity: "40 Feet", desc: "Secure and expansive transport capability.", tag: "Transport", image: "https://media.istockphoto.com/id/2232967115/photo/unsafe-and-unsecured-loaded-truck-on-highway.jpg?s=612x612&w=0&k=20&c=49oAMV_bP-9hw4a_d7K9NJRoajn6pSo_JfVeF6YIOsA=" },
  { name: "Boomloader", capacity: "17 Meters", desc: "Extended reach for construction materials.", tag: "Reach", image: "https://media.istockphoto.com/id/2161041880/photo/yellow-front-loader-goes-to-a-construction-site-2.jpg?s=612x612&w=0&k=20&c=JThKx02ACQcqBipD8b92NLwsv8kiCAP6p11Do8BWPy8=" },
  { name: "JCB 3CX", capacity: "Multipurpose", desc: "Versatile backhoe loader for all terrains.", tag: "Earthmoving", image: "https://media.istockphoto.com/id/660360102/photo/pahang-malaysia-march-25-2017-hydraulic-excavator-working-in-the-construction-site.jpg?s=612x612&w=0&k=20&c=2HWWXa9zfaefu2q-eNA-GNwE9QWr3IBTPt6mldcUH48=" },
  { name: "Bobcat", capacity: "Compact", desc: "Agile performance for tight spaces.", tag: "Earthmoving", image: "https://media.istockphoto.com/id/1175172794/photo/close-up-of-a-bobcat-or-skid-loader.jpg?s=612x612&w=0&k=20&c=2AiYYomeSkvBSoJYusD3sAHK3tuZa0iVEi6uRmN_K8M=" },
  { name: "Manlift", capacity: "15 - 45 Meters", desc: "Safe elevated access for personnel.", tag: "Elevation", image: "https://media.istockphoto.com/id/2026886104/photo/equipment-for-working-at-height-aerial-working-platform-ot-awp.jpg?s=612x612&w=0&k=20&c=OBRQvIg_cFwu6vbC0_ISuQJcdW0qGweLDmNv_yT2jsA=" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const Home = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Helper to open WhatsApp directly
  const handleWhatsApp = () => {
    window.open("https://wa.me/971505426973", "_blank");
  };

  return (
    <div className="flex flex-col items-center">
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      
      {/* Hero Section */}
      <section className="w-full flex items-center justify-center min-h-[85vh] px-6 py-20 bg-background relative overflow-hidden">
        {/* Subtle noise/gradient background could go here for that premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-muted/10 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl max-auto text-center z-10"
        >
          <div className="inline-flex items-center space-x-2 bg-muted px-3 py-1 rounded-full text-xs font-medium text-muted-foreground mb-8 shadow-md">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Available for Immediate Dispatch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Heavy lifting, <br />
            <span className="text-muted-foreground">engineered for precision.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
            Premium equipment rental for construction and industrial transport. Available daily, weekly, and monthly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto group text-yellow-300 hover:scale-105 hover:opacity-90 transition-transform" onClick={() => setIsQuoteModalOpen(true)}>
              Request a Quote
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto hover:scale-105 hover:opacity-90 transition-transform" onClick={() => {
              document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' });
            }}>
              View Fleet
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Terms Section */}
      <section className="w-full py-16 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center border border-border shadow-sm mb-4">
                <Clock className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Daily</h3>
              <p className="text-sm text-muted-foreground">Short-term immediate requirements.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center border border-border shadow-sm mb-4">
                <Calendar className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Weekly</h3>
              <p className="text-sm text-muted-foreground">Flexible mid-range project solutions.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center border border-border shadow-sm mb-4">
                <CheckCircle2 className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Monthly</h3>
              <p className="text-sm text-muted-foreground">Cost-effective long-term deployments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section id="fleet" className="w-full py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Fleet</h2>
              <p className="text-muted-foreground max-w-xl text-balance">
                Meticulously maintained machinery ready to tackle the most demanding operational environments.
              </p>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{vehicle.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{vehicle.tag}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Capacity: {vehicle.capacity}</p>
                    <p className="text-sm text-muted-foreground">{vehicle.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-6 bg-foreground text-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to operate?</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10 opacity-80">
            Contact our Operations Manager directly to arrange dispatch and secure your equipment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-background text-foreground hover:bg-muted w-full sm:w-auto" onClick={() => window.open('tel:+971505426973')}>
              Call 050-5426973
            </Button>
            <Button size="lg" variant="outline" className="border-border text-background hover:bg-white/10 hover:text-white w-full sm:w-auto" onClick={handleWhatsApp}>
              Message on WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-border text-background hover:bg-white/10 hover:text-white w-full sm:w-auto" onClick={() => setIsQuoteModalOpen(true)}>
              Submit Inquiry Form
            </Button>
          </div>
        </div>
      </section>

      {/* Smooth Scrolling Behavior */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* Footer Section */}
      <footer className="w-full py-8 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">© 2026 Sadat Transport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;