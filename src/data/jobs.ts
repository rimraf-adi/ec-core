// Job descriptions collected from on-campus interviews.
// Add a new entry to `jobs` to publish another JD; pages are generated from it.

export type JobSection = {
  heading: string;
  text?: string;
  items?: string[];
};

export type Job = {
  slug: string;
  company: string;
  title: string;
  summary: string;
  facts: { label: string; value: string }[];
  // Slugs from src/data/arsenal.ts domains that this role draws on.
  domains: string[];
  sections: JobSection[];
  note?: string;
};

export const jobs: Job[] = [
  {
    slug: "nvidia-system-software-engineer",
    company: "NVIDIA",
    title: "System Software Engineer",
    summary:
      "GPU / Tegra system software: drivers, graphics, video and ISP stacks for Windows and Linux.",
    facts: [
      { label: "Team", value: "System Software Team, GPU / Tegra" },
      { label: "Role", value: "Full-time, in-person" },
      { label: "Degrees", value: "BTech / MTech / Dual Degree in CS, ECE, EEE, EE" },
    ],
    domains: ["embedded", "digital-vlsi"],
    note: "The file is named “Intern – Spring 2027”, but the JD text itself lists the role as full-time.",
    sections: [
      {
        heading: "About the role",
        text: "Support the design and development of software solutions in the areas of Chip Resource Manager, Graphics, Video, 2D and 3D graphics under OpenGL and DirectX, ISP, and driver stacks for Windows and Linux. Improve existing software and microcode, and suggest modifications to hardware acceleration solutions. Work side by side with NVIDIA engineers around the world as an equal member of a multi-site project team, on driver modules, features, tools and performance.",
      },
      {
        heading: "Who they want",
        text: "Candidates passionate about working at the intersection of leading-edge graphics, multimedia and operating system software; highly motivated, enthusiastic and pro-active in delivering high-quality software.",
      },
      {
        heading: "Areas you will work in",
        items: [
          "Principles of hardware operation: CPU and memory architecture, buses and interconnects",
          "Operating system fundamentals: multi-processing and scheduling, memory management, privilege modes, file systems and device drivers",
          "Algorithms and data structures",
          "Principles of parallel computing",
          "C and/or C++ programming",
          "Python / Perl (preferred)",
        ],
      },
      {
        heading: "What they look for",
        items: [
          "Strong academic background",
          "Good understanding of programming languages and processor architecture",
          "Good understanding of operating system fundamentals; Linux kernel knowledge is a plus",
          "Strong C/C++ programming skills",
          "Scripting in Perl or Python is a plus",
          "Solid background in operating systems and algorithm development",
          "Object-oriented programming in C/C++ or Java is highly valued",
          "Aptitude for innovative and optimal designs",
          "Good communication skills and the desire to work as a team player (a must)",
        ],
      },
      {
        heading: "Preferred exposure",
        items: [
          "Digital systems",
          "Computer architecture",
          "Computer arithmetic",
          "Software engineering",
          "C and C++, assembly language programming",
          "System-level integration and system-level programming",
        ],
      },
    ],
  },
  {
    slug: "qualcomm-hardware-engineer",
    company: "Qualcomm",
    title: "Hardware Engineer",
    summary:
      "College-graduate hardware roles across SoC design, verification, physical design, DFT and RF/analog IC design.",
    facts: [
      { label: "Job area", value: "Engineering" },
      {
        label: "Locations",
        value: "Bangalore, Hyderabad, Chennai, Noida, Pune",
      },
      {
        label: "Degrees",
        value: "Masters or Bachelors in Electrical Engineering, VLSI, Embedded and VLSI, ECE",
      },
    ],
    domains: ["digital-vlsi", "analog-vlsi", "rf", "communications", "dsp", "embedded"],
    note: "Two of the files you shared (“nvidia_hardware_JD” and “Hardware Engineer”) contain the same Qualcomm JD, so they appear here once.",
    sections: [
      {
        heading: "About the role",
        text: "Qualcomm is looking for an energetic, creative and self-driven engineer to work in Modem, Multimedia, Connectivity, Computer Vision and Image Processing, software implementation and hardware acceleration. The work directly influences subsystems within the SoC. You will perform detailed technical analysis, translate ideas into models, software and/or hardware, and work closely with other teams to deliver real products. Many of Qualcomm's employees join straight out of school.",
      },
      {
        heading: "Hiring areas",
        items: [
          "SoC and hard macro physical design",
          "SoC validation and debug",
          "RF and analog layout",
          "RF / analog / mixed-signal / power IC design",
          "Low power design",
          "Board and FPGA design",
          "Digital ASIC design",
          "Design / SoC verification",
          "CAD solution engineer",
          "Design for test (DFT)",
          "CPU design",
        ],
      },
      {
        heading: "Required background (one or more)",
        items: [
          "Verifying SoCs with embedded RISC/DSP processors and communications/networking ASICs",
          "Verilog or VHDL, C/C++, Tcl/Perl/shell scripting",
          "RTL design experience and/or strong object-oriented programming knowledge",
          "PLL, LNA, op-amp, CMOS, ADC/DAC, Cadence, SpectreRF or layout (required for RF / analog / mixed-signal IC design)",
        ],
      },
      {
        heading: "Plus points",
        items: [
          "Knowledge of wireless or wired communications and protocols",
          "Knowledge of graphics or video multimedia",
        ],
      },
      {
        heading: "Soft skills",
        items: [
          "Excellent analytical and problem-solving skills",
          "Ability to collaborate and work in teams",
          "Good verbal and written communication",
        ],
      },
    ],
  },
  {
    slug: "morphle-control-systems-intern",
    company: "Morphle Labs (YC W20)",
    title: "Control Systems Engineering Intern",
    summary:
      "Robotics and control for cancer-diagnostics medical devices, from R&D through production and field deployment.",
    facts: [
      { label: "Location", value: "Bangalore HQ, office-based" },
      { label: "Type", value: "Internship, with a PPO path based on performance" },
      { label: "Eligibility", value: "Undergraduate students only (no Master's, M.Tech or PhD)" },
      {
        label: "Degrees",
        value: "Electrical, Electronics, Electronics & Communication or related",
      },
    ],
    domains: ["controls", "embedded"],
    sections: [
      {
        heading: "The company",
        text: "YC-funded startup by IIT alumni building medical devices for cancer diagnostics; 140+ people in Bangalore, market leader in India with customers in the USA, Europe, Southeast Asia and the Middle East. Products: Morpholens and Hemolens (digital diagnostics workflows for cancer biopsies and blood disorders) and Robotome, a high-throughput robotic microtome.",
      },
      {
        heading: "The role",
        text: "See a product through its entire journey: R&D → Prototype → Validation → Process Development → Production → Deployment. Work on high-precision robotic systems across control systems, electronics, embedded systems and robotics, with R&D, Manufacturing and Operations.",
      },
      {
        heading: "Work: R&D and control systems",
        items: [
          "Assist in designing and testing high-precision robotic systems",
          "Work on control systems, feedback loops, sensors, actuators and motion systems",
          "Support embedded systems and custom PCB development",
          "Work with communication architectures for distributed control systems",
          "Contribute to robotic systems using ROS, computer vision and related tools",
          "Build prototypes, run experiments and validate system performance",
          "Troubleshoot hardware, electronics and software issues",
        ],
      },
      {
        heading: "Work: process and productization",
        items: [
          "Bridge experimental R&D builds and production-ready systems",
          "Develop and improve processes for assembly, testing, calibration and system integration",
          "Work with Manufacturing and Operations to make systems reliable and repeatable",
          "Identify issues in moving designs from prototype to production and help solve them",
          "Support documentation, testing procedures and deployment processes",
        ],
      },
      {
        heading: "Work: deployment and field support",
        items: [
          "Support deployment and integration of robotic systems at customer locations",
          "Assist with commissioning, troubleshooting and validation in real environments",
          "Interact with internal teams and customers to understand issues and requirements",
          "Convert field feedback into product and process improvements",
          "Support feature improvements based on real-world usage",
        ],
      },
      {
        heading: "What they look for",
        items: [
          "Currently pursuing a Bachelor's degree in EE, Electronics, E&C or a related discipline (UG only)",
          "Strong fundamentals in control systems, electronics, robotics or embedded systems",
          "Familiarity with ROS, OpenCV, robotic hardware or similar (preferred)",
          "Systems mindset across hardware, electronics, software and mechanical systems",
          "Willingness to work hands-on with hardware and test systems in real environments",
          "Strong problem-solving and debugging skills",
          "Comfortable when requirements and solutions evolve quickly",
          "Strong communication across technical and non-technical teams",
          "Enjoys taking a system apart and figuring out how to make it better",
        ],
      },
      {
        heading: "What you gain",
        items: [
          "Exposure to the complete product lifecycle, from prototype to deployment",
          "Hands-on work across control systems, robotics, electronics, embedded and automation",
          "How an R&D prototype becomes a reliable, repeatable product",
          "Manufacturing, system integration, validation and deployment exposure",
          "Real robotic medical devices used in cancer diagnostics",
          "A steep learning curve on problems a textbook does not solve",
        ],
      },
      {
        heading: "The opportunity",
        text: "Internship intended as a pathway to a Pre-Placement Offer (PPO) based on performance and conversion. The best interns take ownership, ask questions, understand the problem deeply and build things that make a real difference.",
      },
    ],
  },
];
