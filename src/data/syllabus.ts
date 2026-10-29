// Detailed syllabus content, keyed by topic name from arsenal.ts.
// A topic with no entry here shows an empty syllabus slot until one is added.

type Res = { title: string; kind?: string; url?: string };
type Entry = { subtopics: string[]; resources?: Res[] };

const book = (title: string): Res => ({ title, kind: "book" });

export const syllabus: Record<string, Entry> = {
  // ---------- Controls ----------
  "Laplace, transfer functions, block diagrams": {
    subtopics: [
      "Laplace transform pairs, properties, inverse by partial fractions",
      "Transfer function, poles, zeros, DC gain",
      "Block-diagram algebra and signal-flow graphs (Mason's rule)",
      "Modelling electrical, mechanical and electromechanical systems",
    ],
    resources: [book("Ogata, Modern Control Engineering"), book("Nise, Control Systems Engineering")],
  },
  "Time response and steady-state error": {
    subtopics: [
      "First- and second-order step response, damping ratio, natural frequency",
      "Rise time, peak time, settling time, overshoot",
      "System type and steady-state error constants (Kp, Kv, Ka)",
      "Routh-Hurwitz stability criterion",
    ],
    resources: [book("Nise, Control Systems Engineering")],
  },
  "Root locus, Bode, Nyquist": {
    subtopics: [
      "Root-locus construction rules and design with added poles/zeros",
      "Bode plots, gain and phase margin",
      "Nyquist criterion and encirclements",
      "Lead, lag and lead-lag compensator design",
    ],
    resources: [book("Franklin, Powell & Emami-Naeini, Feedback Control of Dynamic Systems")],
  },
  "PID tuning (Ziegler-Nichols, loop shaping)": {
    subtopics: [
      "P, PI, PD, PID structures and effects of each term",
      "Ziegler-Nichols and Cohen-Coon tuning",
      "Integrator windup and anti-windup schemes",
      "Derivative filtering and setpoint weighting",
    ],
    resources: [book("Astrom & Murray, Feedback Systems")],
  },
  "State-space, controllability, observability": {
    subtopics: [
      "State-space models and conversion to/from transfer functions",
      "State-transition matrix and solution of state equations",
      "Controllability and observability tests (rank, Gramians)",
      "Pole placement by state feedback",
    ],
    resources: [book("Chen, Linear System Theory and Design"), book("Ogata, Modern Control Engineering")],
  },
  "Observers and Kalman filter": {
    subtopics: [
      "Luenberger observer design",
      "Separation principle and observer-based control",
      "Discrete Kalman filter: predict and update steps",
      "Extended Kalman filter and tuning Q and R",
    ],
    resources: [book("Simon, Optimal State Estimation"), book("Anderson & Moore, Optimal Filtering")],
  },
  "Digital control and discretisation": {
    subtopics: [
      "Sampling, zero-order hold, aliasing",
      "Z-transform and pulse transfer functions",
      "Discretisation methods: ZOH, Tustin, matched",
      "Digital PID and implementation on a microcontroller",
    ],
    resources: [book("Franklin, Powell & Workman, Digital Control of Dynamic Systems")],
  },
  "LQR and model predictive control": {
    subtopics: [
      "Quadratic cost, Riccati equation and LQR gain",
      "Choosing Q and R weights",
      "Receding-horizon principle and MPC formulation",
      "Constraints handling and QP solvers",
    ],
    resources: [book("Borrelli, Bemporad & Morari, Predictive Control"), book("Anderson & Moore, Optimal Control: Linear Quadratic Methods")],
  },

  "Optimal control": {
    subtopics: [
      "Problem formulation: cost functional, dynamics, constraints",
      "Calculus of variations and the Euler-Lagrange equation",
      "Pontryagin's minimum principle, Hamiltonian, costate equations",
      "Dynamic programming, Bellman principle and the HJB equation",
      "Finite- and infinite-horizon LQR, differential and algebraic Riccati equations",
      "Minimum-time and minimum-energy problems, bang-bang control",
      "Numerical methods: direct collocation, shooting, trajectory optimisation",
    ],
    resources: [
      book("Kirk, Optimal Control Theory: An Introduction"),
      book("Bertsekas, Dynamic Programming and Optimal Control"),
      book("Anderson & Moore, Optimal Control: Linear Quadratic Methods"),
      book("Bryson & Ho, Applied Optimal Control"),
    ],
  },
  "Stochastic control": {
    subtopics: [
      "Probability refresher: Markov processes, Wiener process, white noise",
      "Stochastic differential equations and Ito calculus",
      "Stochastic dynamic programming and the stochastic HJB equation",
      "LQG: LQR plus Kalman filter, separation principle",
      "Partially observed systems and information states",
      "Markov decision processes and link to reinforcement learning",
      "Stochastic MPC and chance constraints",
      "Numerical methods: Markov chain approximation, approximate DP",
    ],
    resources: [
      book("Astrom, Introduction to Stochastic Control Theory"),
      book("Bertsekas, Dynamic Programming and Optimal Control"),
      book("Fleming & Soner, Controlled Markov Processes and Viscosity Solutions"),
      book("Kumar & Varaiya, Stochastic Systems"),
    ],
  },

  // ---------- Embedded ----------
  "C, bit manipulation, memory map": {
    subtopics: [
      "Pointers, structs, unions, volatile and const",
      "Bit masking, shifting, register access macros",
      "Memory layout: text, data, bss, stack, heap",
      "Endianness, alignment, fixed-width types",
    ],
    resources: [book("Kernighan & Ritchie, The C Programming Language"), book("White, Making Embedded Systems")],
  },
  "GPIO, timers, interrupts, ADC/DAC": {
    subtopics: [
      "GPIO modes, pull-ups, debouncing",
      "Timers: PWM, input capture, output compare",
      "Interrupt vector table, priorities, ISR best practices",
      "ADC sampling, resolution, reference, DMA transfers",
    ],
    resources: [book("Yiu, The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors")],
  },
  "UART, SPI, I2C": {
    subtopics: [
      "UART framing, baud rate, flow control",
      "SPI modes (CPOL/CPHA), chip select, multi-slave",
      "I2C addressing, clock stretching, pull-up sizing",
      "Choosing a bus and debugging with a logic analyzer",
    ],
  },
  "CAN, USB, Ethernet": {
    subtopics: [
      "CAN frames, arbitration, error handling, CAN FD",
      "USB device classes: CDC, HID, MSC",
      "Descriptors and enumeration basics",
      "Ethernet MAC/PHY and lightweight IP stacks (lwIP)",
    ],
  },
  "RTOS (FreeRTOS, Zephyr)": {
    subtopics: [
      "Tasks, scheduling, priorities, context switch",
      "Queues, semaphores, mutexes, priority inversion",
      "Software timers and event groups",
      "Zephyr devicetree and Kconfig basics",
    ],
    resources: [book("Barry, Mastering the FreeRTOS Real Time Kernel")],
  },
  "Low-power design and sleep modes": {
    subtopics: [
      "Power budgeting and duty cycling",
      "Sleep, stop and standby modes; wake-up sources",
      "Clock gating and dynamic voltage scaling",
      "Measuring current with a power profiler",
    ],
  },
  "Bootloaders and linker scripts": {
    subtopics: [
      "Reset sequence and startup code",
      "Linker script sections and memory regions",
      "Bootloader design, DFU and over-the-air updates",
      "Image signing and secure boot basics",
    ],
  },
  "Embedded Linux and device drivers": {
    subtopics: [
      "Yocto / Buildroot and the boot chain (U-Boot, kernel, rootfs)",
      "Device tree",
      "Character drivers and kernel modules",
      "User-space I/O: sysfs, GPIO, I2C/SPI from Linux",
    ],
    resources: [book("Corbet et al., Linux Device Drivers"), book("Simmonds, Mastering Embedded Linux Programming")],
  },

  // ---------- Analog VLSI ----------
  "MOSFET small-signal model": {
    subtopics: [
      "Square-law model and regions of operation",
      "gm, gds, gmb and the hybrid-pi model",
      "Channel-length modulation and body effect",
      "Parasitic capacitances",
    ],
    resources: [book("Razavi, Design of Analog CMOS Integrated Circuits")],
  },
  "Single-stage amplifiers and current mirrors": {
    subtopics: [
      "Common-source, common-gate, source follower",
      "Cascode and folded-cascode stages",
      "Simple, cascode and Wilson current mirrors",
      "Biasing and output swing",
    ],
    resources: [book("Razavi, Design of Analog CMOS Integrated Circuits"), book("Sedra & Smith, Microelectronic Circuits")],
  },
  "Differential pairs, op-amp design": {
    subtopics: [
      "Differential pair: large- and small-signal analysis, CMRR",
      "Active load and two-stage op-amp",
      "Gain, swing, offset and slew rate",
      "Fully differential op-amps and CMFB",
    ],
    resources: [book("Allen & Holberg, CMOS Analog Circuit Design"), book("Gray, Hurst, Lewis & Meyer, Analysis and Design of Analog Integrated Circuits")],
  },
  "Frequency response and compensation": {
    subtopics: [
      "Miller effect and open-circuit time constants",
      "Pole-zero analysis of multistage amplifiers",
      "Feedback topologies and stability",
      "Miller and cascode compensation, phase margin",
    ],
  },
  "Bandgap references and LDOs": {
    subtopics: [
      "PTAT and CTAT voltages, curvature",
      "Bandgap topologies and trimming",
      "LDO architecture, dropout, PSRR",
      "Load regulation and stability with output capacitor",
    ],
  },
  "Noise analysis": {
    subtopics: [
      "Thermal, flicker and shot noise models",
      "Input-referred noise of amplifier stages",
      "Noise bandwidth and noise figure",
      "Chopper stabilisation and correlated double sampling",
    ],
  },
  "ADC / DAC architectures": {
    subtopics: [
      "Specs: INL, DNL, SNDR, ENOB, SFDR",
      "Flash, SAR, pipeline ADCs",
      "Delta-sigma modulators and noise shaping",
      "Resistor-string and current-steering DACs",
    ],
    resources: [book("Murmann, ADC Performance Survey and lecture notes"), book("Johns & Martin, Analog Integrated Circuit Design")],
  },
  "PLL, CDR, layout and matching": {
    subtopics: [
      "PLL blocks: PFD, charge pump, loop filter, VCO, divider",
      "Loop dynamics, jitter and phase noise",
      "Clock and data recovery basics",
      "Layout: matching, common-centroid, guard rings, ESD",
    ],
    resources: [book("Razavi, Design of CMOS Phase-Locked Loops"), book("Hastings, The Art of Analog Layout")],
  },

  // ---------- Digital VLSI ----------
  "Combinational and sequential design": {
    subtopics: [
      "Boolean algebra, K-maps, minimisation",
      "Adders, multiplexers, decoders, ALU blocks",
      "Latches, flip-flops, registers, counters",
      "Setup, hold and metastability",
    ],
    resources: [book("Mano & Ciletti, Digital Design"), book("Harris & Harris, Digital Design and Computer Architecture")],
  },
  "Verilog / SystemVerilog RTL": {
    subtopics: [
      "Modules, ports, always blocks, blocking vs non-blocking",
      "Synthesizable vs non-synthesizable constructs",
      "Parameters, generate, interfaces",
      "Coding style for clean synthesis",
    ],
    resources: [book("Cummings, SystemVerilog papers (SNUG)"), book("Sutherland, SystemVerilog for Design")],
  },
  "FSMs, FIFOs, clock domain crossing": {
    subtopics: [
      "Moore and Mealy FSMs, encoding styles",
      "Synchronous and asynchronous FIFOs",
      "CDC: two-flop synchronizers, gray code, handshake",
      "Reset strategy and reset domain crossing",
    ],
  },
  "Static timing analysis": {
    subtopics: [
      "Setup and hold checks, slack",
      "Clock skew, jitter, uncertainty",
      "SDC constraints, false and multicycle paths",
      "OCV, corners and timing closure techniques",
    ],
    resources: [book("Bhasker & Chadha, Static Timing Analysis for Nanometer Designs")],
  },
  "Verification: SV testbenches and UVM": {
    subtopics: [
      "Constrained-random stimulus and coverage",
      "Assertions (SVA)",
      "UVM components: agent, driver, monitor, scoreboard",
      "Functional vs code coverage and sign-off",
    ],
    resources: [book("Spear & Tumbush, SystemVerilog for Verification"), book("Salemi, The UVM Primer")],
  },
  "DFT: scan, ATPG, BIST": {
    subtopics: [
      "Fault models: stuck-at, transition",
      "Scan chains and scan insertion",
      "ATPG and test compression",
      "Memory BIST and boundary scan (JTAG)",
    ],
    resources: [book("Bushnell & Agrawal, Essentials of Electronic Testing")],
  },
  "Synthesis and physical design (PnR)": {
    subtopics: [
      "Logic synthesis flow and constraints",
      "Floorplanning, power grid, placement",
      "Clock-tree synthesis and routing",
      "Signoff: DRC, LVS, IR drop, parasitic extraction",
    ],
    resources: [book("Weste & Harris, CMOS VLSI Design"), book("OpenROAD / OpenLane documentation")],
  },
  "Low-power techniques": {
    subtopics: [
      "Dynamic, short-circuit and leakage power",
      "Clock gating and operand isolation",
      "Multi-Vt, power gating, retention",
      "UPF and multi-voltage design",
    ],
  },

  // ---------- Communications ----------
  "AM / FM and sampling theory": {
    subtopics: [
      "AM, DSB-SC, SSB: spectra and demodulation",
      "FM and PM, Carson's rule",
      "Sampling theorem, aliasing, reconstruction",
      "PCM, quantisation noise",
    ],
    resources: [book("Haykin, Communication Systems"), book("Lathi & Ding, Modern Digital and Analog Communication Systems")],
  },
  "Probability, random processes, noise": {
    subtopics: [
      "Random variables, distributions, expectation",
      "Stationarity, autocorrelation, power spectral density",
      "Gaussian processes and white noise",
      "Noise through LTI systems",
    ],
    resources: [book("Papoulis & Pillai, Probability, Random Variables and Stochastic Processes")],
  },
  "Digital modulation (PSK, QAM) and BER": {
    subtopics: [
      "BPSK, QPSK, M-PSK, M-QAM constellations",
      "Optimal detection and decision regions",
      "BER/SER derivation and Q-function",
      "Coherent vs non-coherent detection",
    ],
    resources: [book("Proakis & Salehi, Digital Communications"), book("Sklar, Digital Communications")],
  },
  "Matched filter, ISI, equalisation": {
    subtopics: [
      "Matched filter and SNR maximisation",
      "Nyquist criterion and raised-cosine pulses",
      "ISI and eye diagrams",
      "Zero-forcing and MMSE equalisers",
    ],
  },
  "Information theory and channel capacity": {
    subtopics: [
      "Entropy, mutual information",
      "Source coding and Huffman codes",
      "Channel capacity and Shannon-Hartley",
      "Capacity of fading channels",
    ],
    resources: [book("Cover & Thomas, Elements of Information Theory")],
  },
  "Error-correcting codes (LDPC, Turbo, Polar)": {
    subtopics: [
      "Linear block codes, syndrome decoding",
      "Convolutional codes and the Viterbi algorithm",
      "Turbo and LDPC codes, iterative decoding",
      "Polar codes and 5G coding choices",
    ],
    resources: [book("Lin & Costello, Error Control Coding"), book("Richardson & Urbanke, Modern Coding Theory")],
  },
  "OFDM and MIMO": {
    subtopics: [
      "Multipath fading and delay spread",
      "OFDM: FFT implementation, cyclic prefix, PAPR",
      "MIMO capacity, spatial multiplexing, diversity",
      "Channel estimation and precoding",
    ],
    resources: [book("Tse & Viswanath, Fundamentals of Wireless Communication")],
  },
  "4G/5G NR, Wi-Fi, BLE basics": {
    subtopics: [
      "LTE and 5G NR physical layer overview",
      "Numerology, frame structure, beamforming",
      "Wi-Fi (802.11) PHY/MAC overview",
      "BLE and LoRa for low-power links",
    ],
    resources: [book("Dahlman, Parkvall & Skold, 5G NR: The Next Generation Wireless Access Technology")],
  },

  // ---------- RF ----------
  "Transmission lines and Smith chart": {
    subtopics: [
      "Telegrapher's equations, characteristic impedance",
      "Reflection coefficient, VSWR, return loss",
      "Smith chart for impedance and admittance",
      "Microstrip and coplanar lines",
    ],
    resources: [book("Pozar, Microwave Engineering")],
  },
  "S-parameters and impedance matching": {
    subtopics: [
      "S-parameters of one-, two- and N-ports",
      "L-network, stub and quarter-wave matching",
      "Broadband matching and Q",
      "Stability circles and gain definitions",
    ],
    resources: [book("Pozar, Microwave Engineering"), book("Gonzalez, Microwave Transistor Amplifiers")],
  },
  "LNA, mixer, PA design": {
    subtopics: [
      "Noise figure, linearity (P1dB, IIP3)",
      "LNA topologies and input matching",
      "Active and passive mixers, conversion gain",
      "PA classes A to F, efficiency vs linearity",
    ],
    resources: [book("Razavi, RF Microelectronics"), book("Lee, The Design of CMOS Radio-Frequency Integrated Circuits")],
  },
  "Oscillators and phase noise": {
    subtopics: [
      "Barkhausen criterion and LC oscillator types",
      "Leeson's model of phase noise",
      "VCO tuning range and varactors",
      "Reciprocal mixing and spurs",
    ],
  },
  "Filters and couplers": {
    subtopics: [
      "Butterworth, Chebyshev, elliptic prototypes",
      "Lumped and distributed filter realisation",
      "Directional couplers, hybrids, power dividers",
      "Duplexers and diplexers",
    ],
    resources: [book("Pozar, Microwave Engineering")],
  },
  "Link budget and receiver architecture": {
    subtopics: [
      "Friis equation, path loss, margin",
      "Superheterodyne, zero-IF, low-IF receivers",
      "Cascaded noise figure and dynamic range",
      "Image rejection and blockers",
    ],
  },
  "Antenna fundamentals": {
    subtopics: [
      "Gain, directivity, radiation pattern, efficiency",
      "Dipole, monopole, patch antennas",
      "Polarisation and bandwidth",
      "Measurement basics: anechoic chamber, S11",
    ],
    resources: [book("Balanis, Antenna Theory: Analysis and Design")],
  },

  // ---------- Signals & DSP ----------
  "LTI systems, convolution, Fourier series": {
    subtopics: [
      "Continuous and discrete-time signals, system properties",
      "Convolution and impulse response",
      "Fourier series and Fourier transform properties",
      "Frequency response of LTI systems",
    ],
    resources: [book("Oppenheim & Willsky, Signals and Systems")],
  },
  "DTFT, DFT, FFT": {
    subtopics: [
      "DTFT and its properties",
      "DFT, circular convolution, windowing and leakage",
      "Radix-2 FFT algorithm",
      "Spectral analysis and zero padding",
    ],
    resources: [book("Oppenheim & Schafer, Discrete-Time Signal Processing"), book("Lyons, Understanding Digital Signal Processing")],
  },
  "FIR / IIR filter design": {
    subtopics: [
      "Linear-phase FIR design: window and Parks-McClellan",
      "IIR design from analog prototypes (bilinear transform)",
      "Filter structures: direct, cascade, lattice",
      "Quantisation effects and stability",
    ],
    resources: [book("Proakis & Manolakis, Digital Signal Processing")],
  },
  "Multirate: decimation and interpolation": {
    subtopics: [
      "Up/down-sampling and spectral effects",
      "Polyphase decomposition",
      "CIC filters and sample-rate conversion",
      "Filter banks",
    ],
    resources: [book("Vaidyanathan, Multirate Systems and Filter Banks")],
  },
  "Adaptive filters (LMS, RLS)": {
    subtopics: [
      "Wiener filter and normal equations",
      "LMS and NLMS algorithms, convergence",
      "RLS algorithm",
      "Applications: echo cancellation, equalisation, noise cancelling",
    ],
    resources: [book("Haykin, Adaptive Filter Theory")],
  },
  "Image and video processing": {
    subtopics: [
      "2-D transforms and spatial filtering",
      "Edge detection, morphology, segmentation",
      "Image compression (JPEG, DCT) and video codecs",
      "Basics of feature extraction",
    ],
    resources: [book("Gonzalez & Woods, Digital Image Processing")],
  },
  "Fixed-point implementation on FPGA / MCU": {
    subtopics: [
      "Q-format arithmetic and overflow handling",
      "Quantisation noise and word-length selection",
      "Efficient FIR/FFT on FPGA (DSP slices, pipelining)",
      "CMSIS-DSP on Cortex-M",
    ],
  },

  // ---------- EM & Antennas ----------
  "Maxwell's equations and wave propagation": {
    subtopics: [
      "Vector calculus review, Maxwell's equations",
      "Plane waves in free space and lossy media",
      "Reflection and transmission at interfaces",
      "Poynting vector and polarisation",
    ],
    resources: [book("Griffiths, Introduction to Electrodynamics"), book("Cheng, Field and Wave Electromagnetics")],
  },
  "Waveguides and cavities": {
    subtopics: [
      "Rectangular waveguide modes (TE/TM)",
      "Cutoff frequency, dispersion, group velocity",
      "Dielectric waveguides and fibre modes",
      "Resonant cavities and Q factor",
    ],
    resources: [book("Pozar, Microwave Engineering")],
  },
  "Antenna parameters and arrays": {
    subtopics: [
      "Radiation integrals and far-field",
      "Directivity, gain, effective aperture",
      "Array factor, uniform and phased arrays",
      "Beam steering and sidelobe control",
    ],
    resources: [book("Balanis, Antenna Theory: Analysis and Design")],
  },
  "Patch and microstrip antennas": {
    subtopics: [
      "Rectangular patch: cavity and transmission-line models",
      "Feeding techniques and impedance matching",
      "Bandwidth enhancement",
      "Simulating in HFSS / CST",
    ],
  },
  "Radar fundamentals": {
    subtopics: [
      "Radar range equation",
      "Pulse, CW and FMCW radar",
      "Doppler and range resolution",
      "Detection theory and CFAR",
    ],
    resources: [book("Richards, Fundamentals of Radar Signal Processing"), book("Skolnik, Introduction to Radar Systems")],
  },
  "Satellite link design": {
    subtopics: [
      "Orbits and coverage",
      "Link budget: EIRP, G/T, rain fade",
      "Multiple access: FDMA, TDMA, CDMA",
      "Ground station and transponder basics",
    ],
  },

  // ---------- Devices & Fabrication ----------
  "Band theory, carriers, PN junction": {
    subtopics: [
      "Energy bands, effective mass, doping",
      "Carrier statistics and Fermi level",
      "Drift, diffusion, generation-recombination",
      "PN junction: depletion, I-V, capacitance, breakdown",
    ],
    resources: [book("Streetman & Banerjee, Solid State Electronic Devices"), book("Neamen, Semiconductor Physics and Devices")],
  },
  "MOS capacitor and MOSFET operation": {
    subtopics: [
      "MOS capacitor: accumulation, depletion, inversion",
      "Threshold voltage and C-V characteristics",
      "Long-channel MOSFET I-V",
      "Subthreshold conduction",
    ],
    resources: [book("Sze & Ng, Physics of Semiconductor Devices")],
  },
  "Short-channel effects, FinFET": {
    subtopics: [
      "Velocity saturation, DIBL, hot carriers",
      "Scaling rules and short-channel threshold roll-off",
      "FinFET and gate-all-around structure",
      "Variability and reliability (BTI, TDDB)",
    ],
    resources: [book("Taur & Ning, Fundamentals of Modern VLSI Devices")],
  },
  "CMOS process flow": {
    subtopics: [
      "Wafer growth, oxidation, lithography",
      "Etch, deposition, ion implantation, CMP",
      "Well, isolation (STI), gate, contact and metal steps",
      "Design rules and yield",
    ],
    resources: [book("Plummer, Deal & Griffin, Silicon VLSI Technology")],
  },
  "TCAD basics": {
    subtopics: [
      "Drift-diffusion and Poisson equations",
      "Meshing and boundary conditions",
      "Process and device simulation flow",
      "Calibration against measurement",
    ],
  },
  "Memory and emerging devices": {
    subtopics: [
      "SRAM, DRAM, Flash operation",
      "RRAM, MRAM, PCM",
      "Tunnel FETs and 2D materials",
      "Compute-in-memory concepts",
    ],
  },

  // ---------- Power & Photonics ----------
  "Buck / boost / flyback converters": {
    subtopics: [
      "Inductor volt-second balance and CCM/DCM",
      "Buck, boost, buck-boost, flyback analysis",
      "Small-signal modelling and compensation",
      "Component selection and losses",
    ],
    resources: [book("Erickson & Maksimovic, Fundamentals of Power Electronics"), book("Mohan, Undeland & Robbins, Power Electronics")],
  },
  "Motor drives and gate drivers": {
    subtopics: [
      "H-bridge and three-phase inverters",
      "BLDC and PMSM control, field-oriented control",
      "Gate-driver design, dead time, bootstrap",
      "Protection: overcurrent, shoot-through",
    ],
  },
  "Fibre optics and optical links": {
    subtopics: [
      "Total internal reflection, modes, attenuation, dispersion",
      "Single-mode vs multimode fibre",
      "Transmitter and receiver blocks",
      "Link power and rise-time budgets, WDM",
    ],
    resources: [book("Keiser, Optical Fiber Communications"), book("Agrawal, Fiber-Optic Communication Systems")],
  },
  "Lasers and photodetectors": {
    subtopics: [
      "LED and laser diode operation, threshold",
      "PIN and avalanche photodiodes",
      "Responsivity, noise and bandwidth",
      "Optical amplifiers (EDFA)",
    ],
  },
  "Silicon photonics": {
    subtopics: [
      "SOI waveguides and couplers",
      "Modulators, ring resonators, MZI",
      "Germanium photodetectors",
      "Co-packaged optics and integration",
    ],
  },
};
