import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Roadmap = () => {
  const phases = [
    {
      title: "Q4 2024 – Launch Phase",
      milestones: [
        {
          text: "Collection Drop (October 27-28): Release the Start Head NFT collection with 800 unique digital collectibles on the Solana blockchain.",
          icon: <i className="fas fa-rocket text-[#FFD800]" />,
        },
        {
          text: "Community Building: Build a dedicated community around the Start Head ecosystem.",
          icon: <i className="fas fa-star text-[#FFD800]" />,
        },
        {
          text: "Discord Expansion: Set up Discord channels for conversations, fan art submissions, giveaways, and sneak peeks.",
          icon: <i className="fas fa-comments text-[#FFD800]" />,
        },
        {
          text: "Airdrop Planning: Explore the potential of offering a future airdrop.",
          icon: <i className="fas fa-gift text-[#FFD800]" />,
        },
      ],
    },
    {
      title: "Q1 2025 – Growth Phase",
      milestones: [
        {
          text: "Governance Introduction: Roll out community-driven governance.",
          icon: <i className="fas fa-balance-scale text-[#0e7490]" />,
        },
        {
          text: "Exclusive Access: Provide NFT holders early access to events.",
          icon: <i className="fas fa-key text-[#0e7490]" />,
        },
        {
          text: "Partnership Expansion: Form partnerships with decentralized startups.",
          icon: <i className="fas fa-link text-[#0e7490]" />,
        },
        {
          text: "Blockchain Exploration: Conduct research into creating our own layer-2 blockchain.",
          icon: <i className="fas fa-thumbs-up text-[#0e7490]" />,
        },
      ],
    },
    {
      title: "Q2 2025 – Decentralized Accelerator Launch",
      milestones: [
        {
          text: "Start Head Accelerator Launch: Officially transition to a decentralized startup accelerator.",
          icon: <i className="fas fa-bullhorn text-[#FFD800]" />,
        },
        {
          text: "DAO Formation: Establish a decentralized autonomous organization.",
          icon: <i className="fas fa-users text-[#FFD800]" />,
        },
        {
          text: "Seed Funding Program: Open an exclusive seed funding round for early-stage decentralized startups.",
          icon: <i className="fas fa-dollar-sign text-[#FFD800]" />,
        },
      ],
    },
    {
      title: "Q3 2025 – Scaling & Innovation",
      milestones: [
        {
          text: "Start Head Accelerator Expansion: Scale the decentralized accelerator.",
          icon: <i className="fas fa-expand text-[#0e7490]" />,
        },
        {
          text: "Fundraising: Open fundraising for startups starting in March 2025.",
          icon: <i className="fas fa-hand-holding-usd text-[#0e7490]" />,
        },
        {
          text: "NFT Utility Expansion: Introduce new utilities for NFT holders.",
          icon: <i className="fas fa-cogs text-[#0e7490]" />,
        },
        {
          text: "Ecosystem Growth: Continue growing the Start Head ecosystem.",
          icon: <i className="fas fa-globe text-[#0e7490]" />,
        },
      ],
    },
  ];

  return (
    <div>
      {phases.map((phase, index, key) => {
        const ref = useRef(null);
        const inView = useInView(ref, { once: true }); // Trigger once when in view

        return (
            <motion.div
              animate={inView ? { 
                x: ["0%", "-1%", "1%", "0%"], // Keyframes for shaking
                transition: { 
                  duration: 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 5,
                },
              } : {}}
            >
          <motion.div
            ref={ref}
            className="bg-neutral-900 border border-primary p-8 rounded-lg mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            key={index}
          >
            <motion.h2
              className="text-2xl font-bold text-[#FFD800] mb-4"
            >
              {phase.title}
            </motion.h2>
            <ul className="list-disc list-inside">
              {phase.milestones.map((milestone, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center mb-2 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  {milestone.icon}
                  <span className="ml-2">{milestone.text}</span>
                </motion.li>
              ))}
            </ul>
            {/* Shaking effect */}
            
          </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Roadmap;
