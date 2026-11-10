import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  ArrowUpRight,
  Check,
  Plus,
  Minus,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
} from "lucide-react";

const glass =
  "rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8]";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const avatars = [
  "https://i.pravatar.cc/48?img=1",
  "https://i.pravatar.cc/48?img=2",
  "https://i.pravatar.cc/48?img=3",
];

const faqs = [
  {
    q: "How does vacuum sealing preserve freshness?",
    a: "Vacuum sealing removes oxygen from packaging, dramatically slowing oxidation and bacterial growth. Our proprietary multi-layer film creates an airtight barrier that keeps produce, meat, and dairy fresh 3–5× longer than conventional packaging.",
  },
  {
    q: "What is your average delivery time?",
    a: "We guarantee delivery within 24 hours of sealing for all metro areas. Rural and extended zones receive packages within 48 hours via our refrigerated last-mile network. All deliveries are tracked in real-time.",
  },
  {
    q: "Can I customise my order or choose specific seals?",
    a: "Absolutely. Choose from our S-05, S-10, S-14, and S-15 seal grades depending on product type, desired shelf life, and temperature requirements. Our subscription tiers also allow fully custom pack configurations.",
  },
  {
    q: "What happens if a seal fails?",
    a: "Our seal failure rate is just 0.04%. In the rare event of a compromised seal, our smart sensors detect pressure loss and flag the pack before shipment. You receive an automatic replacement at no charge within 12 hours.",
  },
  {
    q: "Is VACUO's packaging eco-friendly?",
    a: "Yes. Our films are made from 60% post-consumer recycled materials and are fully recyclable through our take-back programme. We are targeting 100% bio-based packaging by 2027 without compromising seal integrity.",
  },
];

const steps = [
  {
    num: "01",
    title: "Source",
    desc: "Partner farms harvested at peak ripeness.",
  },
  {
    num: "02",
    title: "Seal",
    desc: "Industrial vacuum sealing within 2 hours of harvest.",
  },
  {
    num: "03",
    title: "Ship",
    desc: "Temperature-controlled cold chain from farm to door.",
  },
  {
    num: "04",
    title: "Savor",
    desc: "Arrive fresh. Taste the difference.",
  },
];

const stats = [
  { val: "98%", label: "Freshness retention" },
  { val: "24h", label: "Average delivery time" },
  { val: "2M+", label: "Packages delivered" },
  { val: "0.04%", label: "Seal failure rate" },
];

export default function Vacuo() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{
        fontFamily: "'Inter', sans-serif",
        color: "white",
        background: "hsl(0 0% 0%)",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        :root {
          --background: hsl(0 0% 0%);
          --foreground: hsl(0 0% 100%);
          --primary: hsl(0 0% 100%);
          --muted-foreground: hsl(0 0% 55%);
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .muted { color: var(--muted-foreground); }
        .label { font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--muted-foreground); }
        .glass {
          border-radius: 1rem;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(24px) saturate(1.8);
          border: 1px solid rgba(255,255,255,0.15);
        }
        .step-card:hover .step-line { transform: scaleX(1); }
        .step-line {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.25,0.1,0.25,1);
        }
        .hover-arrow:hover svg { transform: rotate(45deg); }
        .hover-arrow svg { transition: transform 0.3s ease; }
      `}</style>

      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-[0.9]"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260212_043536_e0d3c69f-5c0c-4533-8395-fbe962587446.mp4"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">

        {/* ── NAVBAR ── */}
        <nav className="px-8 md:px-16 py-6 flex items-center justify-between">
          <span
            className="font-display text-2xl font-bold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
          >
            VACUO
          </span>
          <div className="hidden md:flex gap-8 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            {["Home", "About", "Products", "Contacts"].map((l) => (
              <a
                key={l}
                href="#"
                className="hover:text-white transition-colors"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {l}
              </a>
            ))}
          </div>
          <button
            className="p-3 rounded-full"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}
          >
            <ShoppingCart size={18} color="white" />
          </button>
        </nav>

        {/* ── HERO ── */}
        <section className="px-8 md:px-16 py-24 min-h-screen flex flex-col justify-center">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex-1"
            >
              <p className="label mb-4">Emily Harper — Founder & CEO</p>
              <h2
                className="font-display text-sm font-medium uppercase tracking-widest mb-8"
                style={{ fontFamily: "'Space Grotesk',sans-serif", maxWidth: "220px", lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}
              >
                Vacuum packs keep flavor alive to your door
              </h2>
            </motion.div>

            {/* Right — Make order button (opacity-0 as specified) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              className="flex-1 flex justify-end"
            >
              <button
                className="font-display text-lg font-semibold px-10 py-5 rounded-full"
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  background: "white",
                  color: "black",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Make order
              </button>
            </motion.div>
          </div>

          {/* Massive headline — opacity-0 intentionally */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            className="font-display font-bold uppercase"
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "clamp(3rem, 12vw, 10rem)",
              letterSpacing: "-0.03em",
              lineHeight: 0.9,
              marginTop: "2rem",
            }}
          >
            Fresh Delivery
          </motion.h1>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {/* Left card */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="glass p-8"
            >
              <div className="flex items-center mb-6">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="rounded-full border-2"
                    style={{
                      width: 44,
                      height: 44,
                      borderColor: "black",
                      marginLeft: i === 0 ? 0 : -12,
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
              <p
                className="font-display font-bold"
                style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "2.5rem", lineHeight: 1 }}
              >
                15K+
              </p>
              <p className="muted text-sm mt-2">Clients trusting our vacuum tech</p>
              <div
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full text-xs font-medium"
                style={{ background: "rgba(255,255,255,0.08)", color: "white" }}
              >
                <Check size={12} /> Trusted by farmers
              </div>
            </motion.div>

            {/* Right card */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="glass p-8 flex flex-col justify-between"
            >
              <div>
                <p className="label mb-3">Precision vacuum sealing</p>
                <p
                  className="font-display font-bold mt-2"
                  style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "3rem", lineHeight: 1 }}
                >
                  (04%)
                </p>
                <p className="muted text-sm mt-2">Seal failure rate</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm mt-8 hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
              >
                Learn how it works <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── MARQUEE / FEATURE ── */}
        <section className="px-8 md:px-16 py-24 relative">
          <motion.h2
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display font-bold uppercase mb-16"
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "clamp(2.5rem,7vw,6rem)",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
            }}
          >
            Simple / Smart / <span style={{ color: "white" }}>Sealing</span>
          </motion.h2>

          {/* Fresh Pack Awards badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute top-24 right-8 md:right-16 hidden md:flex items-center justify-center rounded-full text-center"
            style={{
              width: 120,
              height: 120,
              background: "white",
              color: "black",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              lineHeight: 1.4,
              padding: "1rem",
            }}
          >
            Fresh Pack<br />Awards<br />2026
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat card */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass p-8"
            >
              <p className="label mb-4">Freshness retained</p>
              <p
                className="font-display font-bold"
                style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "4rem", lineHeight: 1 }}
              >
                25%
              </p>
              <p className="muted text-sm mt-2">more than standard packs</p>
              <button
                className="mt-8 px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-white hover:text-black"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "white", background: "transparent", cursor: "pointer" }}
              >
                Learn more
              </button>
            </motion.div>

            {/* Checklist */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass p-8"
            >
              <p className="label mb-6">Features</p>
              {[
                { label: "Preserve", checked: false },
                { label: "Fast Seal", checked: true },
                { label: "Ship", checked: false },
                { label: "Track", checked: false },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-center justify-between py-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-sm">{f.label}</span>
                  {f.checked && (
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      ✓
                    </span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass p-8 flex flex-col justify-between"
            >
              <p
                className="font-display font-semibold"
                style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.25rem", lineHeight: 1.4 }}
              >
                Start your order and get a free vacuum starter kit
              </p>
              <button
                className="mt-8 p-4 rounded-full self-start hover-arrow"
                style={{ background: "white", color: "black", border: "none", cursor: "pointer" }}
              >
                <ArrowUpRight size={20} color="black" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="px-8 md:px-16 py-24">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="label mb-4">What we offer</p>
            <h2
              className="font-display font-bold uppercase"
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: "clamp(2rem,5vw,4rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Vacuum <span style={{ color: "white" }}>Supply</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="muted text-sm leading-relaxed mb-6">
                VACUO is a Premier Freshness Distributor connecting farms, processors, and consumers through precision vacuum technology.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all"
                style={{ color: "white", textDecoration: "none" }}
              >
                Learn More <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Center */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col gap-4"
            >
              <div className="glass p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <Check size={14} />
                  </div>
                  <p className="font-medium text-sm">Certified Vacuum Materials</p>
                </div>
                <p className="muted text-xs mt-1">FDA-grade multi-layer film</p>
              </div>
              <div className="glass p-6">
                <p className="font-medium text-sm mb-4">Sealing Service</p>
                <div className="flex gap-2 flex-wrap">
                  {["S-05", "S-10", "S-14", "S-15"].map((c) => (
                    <span
                      key={c}
                      className="text-xs px-3 py-1 rounded-full font-mono"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="label mb-3">Since 2014</p>
              <p
                className="font-display font-semibold mb-4"
                style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.1rem" }}
              >
                Trusted expert
              </p>
              <p className="muted text-sm leading-relaxed">
                Over a decade of innovation in food preservation. Our engineers have developed proprietary seal grades trusted by 800+ farms across 22 countries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="px-8 md:px-16 py-24">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <p className="label mb-4">How it works</p>
            <h2
              className="font-display font-bold uppercase"
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: "clamp(2rem,5vw,4rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              The Process<br />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>From harvest to your table</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass p-8 step-card relative overflow-hidden"
              >
                {/* Top border line */}
                <div
                  className="step-line absolute top-0 left-0 right-0 h-px"
                  style={{ background: "white" }}
                />
                <p
                  className="font-mono text-xs mb-6"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}
                >
                  {s.num}
                </p>
                <p
                  className="font-display font-bold text-xl mb-3"
                  style={{ fontFamily: "'Space Grotesk',sans-serif" }}
                >
                  {s.title}
                </p>
                <p className="muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="px-8 md:px-16 py-24">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="label mb-12 text-center"
          >
            By the numbers
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.val}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="text-center"
              >
                <p
                  className="font-display font-bold"
                  style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontSize: "clamp(3rem,7vw,5rem)",
                    lineHeight: 1,
                    color: "white",
                  }}
                >
                  {s.val}
                </p>
                <p className="muted text-sm mt-3">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="px-8 md:px-16 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Left */}
            <div>
              <p className="label mb-4">FAQ</p>
              <h2
                className="font-display font-bold"
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: "2rem",
                  lineHeight: 1.2,
                }}
              >
                Common questions
              </h2>
            </div>

            {/* Right accordion */}
            <div className="md:col-span-2">
              {faqs.map((f, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left"
                    style={{ background: "transparent", border: "none", color: "white", cursor: "pointer" }}
                  >
                    <span className="font-medium text-sm pr-4">{f.q}</span>
                    {openFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="muted text-sm pb-6 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-8 md:px-16 py-24 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="label mb-6">Ready to start?</p>
            <h2
              className="font-display font-bold uppercase"
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: "clamp(2.5rem,8vw,7rem)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                marginBottom: "3rem",
              }}
            >
              Let's keep it <span style={{ color: "white" }}>fresh</span>
            </h2>
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-sm hover-arrow"
              style={{ background: "white", color: "black", border: "none", cursor: "pointer", fontFamily: "'Inter',sans-serif" }}
            >
              Get started <ArrowUpRight size={16} color="black" />
            </motion.button>
          </motion.div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="px-8 md:px-16 py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <p
                className="font-display font-bold text-xl mb-3"
                style={{ fontFamily: "'Space Grotesk',sans-serif" }}
              >
                VACUO
              </p>
              <p className="muted text-xs leading-relaxed">
                Premium vacuum-sealed fresh food delivery. Farm to door, sealed to perfection.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: "Product",
                links: ["How it works", "Pricing", "Seal grades", "API"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Press", "Blog"],
              },
              {
                title: "Support",
                links: ["Help center", "Contact", "Status", "Privacy"],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="label mb-4">{col.title}</p>
                <div className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <a
                      key={l}
                      href="#"
                      className="muted text-xs hover:text-white transition-colors"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="muted text-xs">© 2026 Vacuo. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {[
                { icon: <Twitter size={14} />, label: "Twitter" },
                { icon: <Linkedin size={14} />, label: "LinkedIn" },
                { icon: <Instagram size={14} />, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="inline-flex items-center gap-1 muted text-xs hover:text-white transition-colors"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {s.label} <ArrowUpRight size={10} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
