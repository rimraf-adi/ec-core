import { syllabus } from "./syllabus";

export type Level = "foundation" | "core" | "advanced";

export type Resource = { title: string; url?: string; kind?: string };

// Fill `subtopics` and `resources` on any topic to replace its syllabus placeholder.
export type Topic = {
  name: string;
  level: Level;
  note?: string;
  subtopics?: string[];
  resources?: Resource[];
};

export type Tool = { name: string; kind: string; use: string };

export type Domain = {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  blurb: string;
  topics: Topic[];
  tools: Tool[];
  labs: string[];
};

const baseDomains: Domain[] = [
  {
    slug: "controls",
    code: "CTL",
    name: "Controls",
    tagline: "Make systems behave.",
    blurb:
      "From transfer functions to state-space and digital implementation on real hardware.",
    topics: [
      { name: "Laplace, transfer functions, block diagrams", level: "foundation" },
      { name: "Time response and steady-state error", level: "foundation" },
      { name: "Root locus, Bode, Nyquist", level: "core" },
      { name: "PID tuning (Ziegler-Nichols, loop shaping)", level: "core" },
      { name: "State-space, controllability, observability", level: "core" },
      { name: "Observers and Kalman filter", level: "advanced" },
      { name: "Digital control and discretisation", level: "advanced" },
      { name: "LQR and model predictive control", level: "advanced" },
      { name: "Optimal control", level: "advanced" },
      { name: "Stochastic control", level: "advanced" },
    ],
    tools: [
      { name: "MATLAB / Simulink", kind: "Sim", use: "Design and simulate loops" },
      { name: "python-control", kind: "Lib", use: "Open-source control toolbox" },
      { name: "Scilab / Xcos", kind: "Sim", use: "Free Simulink alternative" },
    ],
    labs: [
      "Tune a PID on a DC motor",
      "Self-balancing robot with an IMU",
      "Kalman-filter a noisy sensor",
    ],
  },
  {
    slug: "embedded",
    code: "EMB",
    name: "Embedded Systems",
    tagline: "Code that touches the world.",
    blurb:
      "Microcontrollers, peripherals, RTOS and the protocols that glue devices together.",
    topics: [
      { name: "C, bit manipulation, memory map", level: "foundation" },
      { name: "GPIO, timers, interrupts, ADC/DAC", level: "foundation" },
      { name: "UART, SPI, I2C", level: "core" },
      { name: "CAN, USB, Ethernet", level: "core" },
      { name: "RTOS (FreeRTOS, Zephyr)", level: "core" },
      { name: "Low-power design and sleep modes", level: "advanced" },
      { name: "Bootloaders and linker scripts", level: "advanced" },
      { name: "Embedded Linux and device drivers", level: "advanced" },
    ],
    tools: [
      { name: "STM32CubeIDE / PlatformIO", kind: "IDE", use: "Build and flash firmware" },
      { name: "Logic analyzer (Saleae / sigrok)", kind: "HW", use: "Decode buses" },
      { name: "OpenOCD + GDB", kind: "Debug", use: "On-chip debugging" },
    ],
    labs: [
      "Blink with registers only, no HAL",
      "Sensor hub over I2C/SPI with FreeRTOS",
      "CAN bus node pair",
    ],
  },
  {
    slug: "analog-vlsi",
    code: "AVL",
    name: "Analog VLSI",
    tagline: "Where physics shows through.",
    blurb:
      "Device-level circuit design: amplifiers, references, data converters and PLLs.",
    topics: [
      { name: "MOSFET small-signal model", level: "foundation" },
      { name: "Single-stage amplifiers and current mirrors", level: "foundation" },
      { name: "Differential pairs, op-amp design", level: "core" },
      { name: "Frequency response and compensation", level: "core" },
      { name: "Bandgap references and LDOs", level: "core" },
      { name: "Noise analysis", level: "advanced" },
      { name: "ADC / DAC architectures", level: "advanced" },
      { name: "PLL, CDR, layout and matching", level: "advanced" },
    ],
    tools: [
      { name: "Cadence Virtuoso / Spectre", kind: "EDA", use: "Industry standard flow" },
      { name: "ngspice + xschem + Magic", kind: "EDA", use: "Open-source analog flow" },
      { name: "SKY130 PDK", kind: "PDK", use: "Open process for practice" },
    ],
    labs: [
      "Two-stage op-amp on SKY130",
      "Bandgap across PVT corners",
      "Ring-oscillator VCO",
    ],
  },
  {
    slug: "digital-vlsi",
    code: "DVL",
    name: "Digital VLSI",
    tagline: "RTL to silicon.",
    blurb:
      "Logic design, verification, timing and physical implementation.",
    topics: [
      { name: "Combinational and sequential design", level: "foundation" },
      { name: "Verilog / SystemVerilog RTL", level: "foundation" },
      { name: "FSMs, FIFOs, clock domain crossing", level: "core" },
      { name: "Static timing analysis", level: "core" },
      { name: "Verification: SV testbenches and UVM", level: "advanced" },
      { name: "DFT: scan, ATPG, BIST", level: "advanced" },
      { name: "Synthesis and physical design (PnR)", level: "advanced" },
      { name: "Low-power techniques", level: "advanced" },
    ],
    tools: [
      { name: "Verilator / Icarus / cocotb", kind: "Sim", use: "Open-source simulation" },
      { name: "Yosys + OpenROAD", kind: "EDA", use: "RTL-to-GDS open flow" },
      { name: "Vivado / Quartus", kind: "FPGA", use: "FPGA implementation" },
    ],
    labs: [
      "UART + FIFO with a self-checking testbench",
      "RISC-V core on FPGA",
      "RTL-to-GDS via OpenLane",
    ],
  },
  {
    slug: "communications",
    code: "COM",
    name: "Communications",
    tagline: "Bits through noise.",
    blurb:
      "Analog and digital modulation, coding, channels and modern wireless systems.",
    topics: [
      { name: "AM / FM and sampling theory", level: "foundation" },
      { name: "Probability, random processes, noise", level: "foundation" },
      { name: "Digital modulation (PSK, QAM) and BER", level: "core" },
      { name: "Matched filter, ISI, equalisation", level: "core" },
      { name: "Information theory and channel capacity", level: "core" },
      { name: "Error-correcting codes (LDPC, Turbo, Polar)", level: "advanced" },
      { name: "OFDM and MIMO", level: "advanced" },
      { name: "4G/5G NR, Wi-Fi, BLE basics", level: "advanced" },
    ],
    tools: [
      { name: "GNU Radio", kind: "SDR", use: "Flowgraph prototyping" },
      { name: "RTL-SDR / ADALM-Pluto", kind: "HW", use: "Cheap real radios" },
      { name: "MATLAB Comm Toolbox", kind: "Sim", use: "Link-level simulation" },
    ],
    labs: [
      "Simulate BER curves for QPSK / 16-QAM",
      "FM receiver with an RTL-SDR",
      "OFDM transceiver in Python",
    ],
  },
  {
    slug: "rf",
    code: "RF",
    name: "RF & Microwave",
    tagline: "High frequency, no excuses.",
    blurb:
      "Transmission lines, matching, S-parameters and RF front-end blocks.",
    topics: [
      { name: "Transmission lines and Smith chart", level: "foundation" },
      { name: "S-parameters and impedance matching", level: "core" },
      { name: "LNA, mixer, PA design", level: "core" },
      { name: "Oscillators and phase noise", level: "advanced" },
      { name: "Filters and couplers", level: "advanced" },
      { name: "Link budget and receiver architecture", level: "advanced" },
      { name: "Antenna fundamentals", level: "advanced" },
    ],
    tools: [
      { name: "Keysight ADS / AWR", kind: "EDA", use: "RF circuit simulation" },
      { name: "NanoVNA", kind: "HW", use: "Cheap vector network analyser" },
      { name: "scikit-rf", kind: "Lib", use: "S-parameter analysis in Python" },
    ],
    labs: [
      "Match a load with stub and L-network",
      "Measure an antenna with a NanoVNA",
      "Design a 2.4 GHz LNA",
    ],
  },
  {
    slug: "dsp",
    code: "DSP",
    name: "Signals & DSP",
    tagline: "The math under everything.",
    blurb:
      "The cross-cutting foundation: LTI systems, transforms, filters and multirate processing.",
    topics: [
      { name: "LTI systems, convolution, Fourier series", level: "foundation" },
      { name: "DTFT, DFT, FFT", level: "foundation" },
      { name: "FIR / IIR filter design", level: "core" },
      { name: "Multirate: decimation and interpolation", level: "core" },
      { name: "Adaptive filters (LMS, RLS)", level: "advanced" },
      { name: "Image and video processing", level: "advanced" },
      { name: "Fixed-point implementation on FPGA / MCU", level: "advanced" },
    ],
    tools: [
      { name: "NumPy / SciPy", kind: "Lib", use: "Prototype algorithms" },
      { name: "MATLAB Signal Toolbox", kind: "Sim", use: "Filter design apps" },
      { name: "CMSIS-DSP", kind: "Lib", use: "Optimised kernels on Cortex-M" },
    ],
    labs: [
      "Design and compare FIR vs IIR filters",
      "Real-time FFT spectrum on an MCU",
      "LMS noise canceller",
    ],
  },
  {
    slug: "em-antennas",
    code: "EMA",
    name: "EM & Antennas",
    tagline: "Fields before circuits.",
    blurb:
      "Maxwell, waveguides, radiation and radar; the base RF design sits on.",
    topics: [
      { name: "Maxwell's equations and wave propagation", level: "foundation" },
      { name: "Waveguides and cavities", level: "core" },
      { name: "Antenna parameters and arrays", level: "core" },
      { name: "Patch and microstrip antennas", level: "advanced" },
      { name: "Radar fundamentals", level: "advanced" },
      { name: "Satellite link design", level: "advanced" },
    ],
    tools: [
      { name: "Ansys HFSS / CST", kind: "EM", use: "3D full-wave simulation" },
      { name: "openEMS / Sonnet Lite", kind: "EM", use: "Free field solvers" },
    ],
    labs: [
      "Simulate a 2.4 GHz patch antenna",
      "Array factor explorer",
    ],
  },
  {
    slug: "devices",
    code: "DEV",
    name: "Devices & Fabrication",
    tagline: "Where chips come from.",
    blurb:
      "Semiconductor physics, MOS devices and process flow; the foundation for both VLSI tracks.",
    topics: [
      { name: "Band theory, carriers, PN junction", level: "foundation" },
      { name: "MOS capacitor and MOSFET operation", level: "foundation" },
      { name: "Short-channel effects, FinFET", level: "core" },
      { name: "CMOS process flow", level: "core" },
      { name: "TCAD basics", level: "advanced" },
      { name: "Memory and emerging devices", level: "advanced" },
    ],
    tools: [
      { name: "Sentaurus / Silvaco TCAD", kind: "TCAD", use: "Device simulation" },
      { name: "Python band-structure notebooks", kind: "Lib", use: "Build intuition" },
    ],
    labs: ["Plot MOSFET I-V from first principles", "PN junction in TCAD"],
  },
  {
    slug: "power-photonics",
    code: "PWR",
    name: "Power & Photonics",
    tagline: "Energy and light.",
    blurb:
      "SMPS, drives and PMICs, plus optical communication and photonics.",
    topics: [
      { name: "Buck / boost / flyback converters", level: "core" },
      { name: "Motor drives and gate drivers", level: "core" },
      { name: "Fibre optics and optical links", level: "core" },
      { name: "Lasers and photodetectors", level: "advanced" },
      { name: "Silicon photonics", level: "advanced" },
    ],
    tools: [
      { name: "LTspice", kind: "Sim", use: "Power-stage simulation" },
      { name: "PLECS", kind: "Sim", use: "Power electronics sim" },
    ],
    labs: ["Design a 12 V to 3.3 V buck", "Optical link power budget"],
  },
];

// Merge detailed syllabus content (src/data/syllabus.ts) into each topic by name.
export const domains: Domain[] = baseDomains.map((d) => ({
  ...d,
  topics: d.topics.map((t) => ({ ...t, ...syllabus[t.name] })),
}));

export const crossSkills = [
  { name: "C and Python", why: "Every domain scripts or ships code." },
  { name: "Linux, shell and git", why: "EDA and embedded toolchains live here." },
  { name: "MATLAB", why: "Standard in controls, DSP and comms." },
  { name: "PCB, SI/PI and EMC", why: "Where prototypes meet reality." },
  { name: "Lab instruments", why: "Scope, VNA, spectrum analyser, logic analyzer." },
  { name: "FPGA flow", why: "Bridge between RTL, DSP and embedded." },
];

export const roadmap = [
  {
    phase: "01",
    title: "Foundations",
    items: ["Circuits and signals", "Device physics", "C + Python", "Linux and git"],
  },
  {
    phase: "02",
    title: "Core tracks",
    items: ["DSP", "Digital design with RTL", "Analog fundamentals", "Embedded basics"],
  },
  {
    phase: "03",
    title: "Specialise",
    items: [
      "Pick one: VLSI (verif / PD), RF-comms, or embedded",
      "Go deep with tools from that domain",
    ],
  },
  {
    phase: "04",
    title: "Ship projects",
    items: ["RTL-to-GDS tapeout flow", "SDR link", "STM32 + sensors board"],
  },
];

export const levelOrder: Level[] = ["foundation", "core", "advanced"];
