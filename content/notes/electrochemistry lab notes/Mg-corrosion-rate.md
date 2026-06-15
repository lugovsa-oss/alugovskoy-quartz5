---
title: "Determination of Corrosion Rate of Magnesium Alloys: Five Methods"
---

## Method 1: Weight Loss Measurement

### Principle

A specimen of known dimensions and mass is exposed to the corrosive medium for a defined period. The mass lost due to corrosion is converted into a penetration rate assuming uniform corrosion across the exposed surface.

### Procedure

1. Measure initial mass ($m_0$) of the specimen on an analytical balance (±0.1 mg).
2. Measure the exposed surface area $A$ (cm²) precisely — for a rectangular coupon, $A = 2(lw + lh + wh)$, or for one-sided exposure, $A = l \times w$.
3. Immerse in the test solution (e.g., 3.5% NaCl) for time $t$.
4. Remove specimen, clean corrosion products per ASTM G1 (chromic acid or appropriate method for Mg — note: avoid chromate cleaning for Mg in modern protocols; use boiling chromic acid alternative or careful mechanical/ultrasonic cleaning to avoid substrate removal).
5. Dry and re-weigh to obtain final mass ($m_1$).
6. $\Delta m = m_0 - m_1$ (mass loss, mg or g).

### Conversion to Penetration Rate (mm/year)

The mass loss corresponds to a uniform layer of metal of thickness $d$ removed from the surface:

$$\Delta m = \rho \cdot A \cdot d$$

where $\rho$ is the alloy density (g/cm³, ~1.74–1.84 g/cm³ for Mg alloys depending on composition).

Therefore:

$$d = \frac{\Delta m}{\rho \cdot A}$$

This thickness $d$ (cm) was lost over time $t$. Annualizing:

$$CR , (\text{mm/yr}) = \frac{\Delta m}{\rho \cdot A \cdot t} \times 365 \times 10$$

where $\Delta m$ in g, $\rho$ in g/cm³, $A$ in cm², $t$ in days, and the factor 10 converts cm → mm.

**Consolidated formula (ASTM G1 form):**

$$CR , (\text{mm/yr}) = \frac{87.6 \cdot \Delta m}{\rho \cdot A \cdot t}$$

where $\Delta m$ in mg, $\rho$ in g/cm³, $A$ in cm², $t$ in hours. The constant 87.6 = $\frac{24 \times 365}{1000} \times 10$, consolidating unit conversions (hours→years, mg→g, cm→mm).

### Notes for the student

- Always verify the actual specimen dimensions after machining; do not assume nominal dimensions.
- Mass loss gives an **average** rate over the whole exposure — it cannot show how the rate evolved over time (e.g., faster initial attack followed by a protective-film-slowed regime).
- For Mg, surface films (Mg(OH)₂, MgO, MgCO₃ depending on environment) can be substantial. Under-cleaning leaves residual film mass that partially compensates the loss (rate appears too low); over-cleaning attacks the substrate (rate appears too high).

-----

## Method 2: Hydrogen Evolution Method

### Principle

Magnesium corrosion in aqueous near-neutral or acidic media proceeds with hydrogen evolution as the dominant cathodic reaction. Overall:

$$Mg + 2H_2O \rightarrow Mg(OH)_2 + H_2\uparrow$$

Anodic half-reaction:

$$Mg \rightarrow Mg^{2+} + 2e^-$$

Cathodic half-reaction:

$$2H_2O + 2e^- \rightarrow H_2 + 2OH^-$$

By Faraday’s law, both half-reactions involve 2 electrons, giving a **1:1 molar ratio** between Mg dissolved and H₂ evolved — provided hydrogen evolution is the dominant cathodic process (a reasonable assumption for Mg in near-neutral aqueous solutions, where oxygen reduction is negligible at the typically active corrosion potentials).

### Procedure

1. Set up an inverted graduated burette (eudiometer) over the immersed specimen to collect evolved gas.
2. Record volume of H₂ collected, $V_{H_2}$ (mL), as a function of time $t$.
3. Correct $V_{H_2}$ to standard conditions if precision is required (ideal gas law correction for lab temperature/pressure, water vapor pressure correction if collected over water).

### Stoichiometric Derivation

- Molar mass of Mg: $M_{Mg} = 24.305$ g/mol
- Molar volume of ideal gas: $V_m = 22{,}414$ mL/mol at STP (or 24,465 mL/mol at 25°C, 1 atm — use whichever matches your gas correction)

Moles of H₂ evolved:

$$n_{H_2} = \frac{V_{H_2}}{V_m}$$

By 1:1 stoichiometry, moles of Mg corroded:

$$n_{Mg} = n_{H_2}$$

Mass of Mg corroded:

$$\Delta m_{Mg} = n_{Mg} \cdot M_{Mg} = \frac{V_{H_2}}{V_m} \cdot M_{Mg}$$

### Conversion to Penetration Rate (mm/year)

Substitute $\Delta m_{Mg}$ into the same geometric relationship as Method 1:

$$\Delta m_{Mg} = \rho \cdot A \cdot d \quad \Rightarrow \quad d = \frac{\Delta m_{Mg}}{\rho \cdot A} = \frac{V_{H_2} \cdot M_{Mg}}{V_m \cdot \rho \cdot A}$$

Annualized:

$$CR , (\text{mm/yr}) = \frac{V_{H_2} \cdot M_{Mg}}{V_m \cdot \rho \cdot A \cdot t} \times 365 \times 10$$

with $t$ in days, $V_{H_2}$ in mL, $\rho$ in g/cm³, $A$ in cm².

This can be written as $CR = K \cdot \dfrac{V_{H_2}}{A \cdot t}$, where $K$ lumps $M_{Mg}$, $V_m$, $\rho$, and unit-conversion factors. **The student should derive $K$ explicitly rather than treat it as a black box.**

### Notes for the student

- This method gives a **continuous, real-time** measure: plot $V_{H_2}$ vs. $t$ and take the slope — a major advantage over weight loss.
- The 1:1 stoichiometric relationship between total H₂ evolved and total Mg dissolved is generally robust for correlation with weight loss. Do **not** confuse this with the (false) expectation that H₂-derived $i_{corr}$ should match the electrochemically measured $i_{corr}$ — the negative difference effect (NDE) means more H₂ is evolved than corresponds to the measured anodic current.
- Temperature and barometric pressure corrections matter for precise work.

-----

## Method 3: Linear Polarization Resistance (LPR)

### Principle

Near the open-circuit potential (OCP), the relationship between applied overpotential ($\eta$) and resulting current density ($i$) is approximately linear for small perturbations (typically ±10–20 mV). The slope of this region is the polarization resistance:

$$R_p = \left(\frac{d\eta}{di}\right)_{\eta \to 0}$$

The Stern–Geary equation relates $R_p$ to the corrosion current density:

$$i_{corr} = \frac{B}{R_p}$$

where

$$B = \frac{\beta_a \cdot \beta_c}{2.303(\beta_a + \beta_c)}$$

with $\beta_a$, $\beta_c$ the anodic and cathodic Tafel slopes (V/decade).

### Procedure

1. Stabilize the specimen at OCP (monitor until potential drift < 1 mV/min, or for a defined time per protocol).
2. Apply a potential sweep from approximately −10 mV to +10 mV (or −20 to +20 mV) relative to OCP, at a slow scan rate (0.1–0.5 mV/s) to maintain quasi-steady-state conditions.
3. Plot $i$ vs. $E$; determine the slope $dE/di$ in the linear region around OCP — this is $R_p$ (Ω·cm² if normalized to area).
4. Determine $\beta_a$ and $\beta_c$ independently (from full Tafel scans on a separate specimen, or use literature/assumed values — flag this as an approximation if used).

### Calculation of $i_{corr}$

$$i_{corr} = \frac{B}{R_p}$$ (A/cm² if $R_p$ in Ω·cm²)

### Conversion to Penetration Rate (mm/year)

Faraday’s law gives the mass-loss rate per unit area:

$$\frac{dm}{dt} = \frac{i_{corr} \cdot M}{n \cdot F}$$

where $M = 24.305$ g/mol (Mg), $n = 2$ (electrons per Mg atom), $F = 96{,}485$ C/mol.

Dividing by density gives the linear penetration rate:

$$\frac{dh}{dt} = \frac{i_{corr} \cdot M}{n \cdot F \cdot \rho}$$

(cm/s). Converting to mm/year (×10 for cm→mm, × $3.1536 \times 10^7$ for s→yr):

$$CR , (\text{mm/yr}) = \frac{i_{corr} \cdot M \cdot 3.1536 \times 10^7 \times 10}{n \cdot F \cdot \rho}$$

**Standard consolidated formula (ASTM G102-style, $n=2$):**

$$CR , (\text{mm/yr}) = 3.27 \times 10^{-3} \cdot \frac{i_{corr} \cdot M}{n \cdot \rho}$$

where $i_{corr}$ in μA/cm², $M = 24.305$ g/mol, $n = 2$, $\rho$ in g/cm³. **The student should derive the constant $3.27 \times 10^{-3}$ from first principles** — that is the actual exercise.

### Notes for the student

- Strict application of Stern–Geary requires independently measured Tafel slopes. Using “typical” $B$ values (e.g., ~26 mV for actively corroding systems, ~52 mV under other assumptions) without justification is a common error — flag it.
- For Mg, LPR-derived $i_{corr}$ is known to be **non-quantitative** due to the negative difference effect and the mixed electrochemical/chemical dissolution mechanism. The “true” rate from H₂ evolution or weight loss is often several times higher. Quantify and discuss this discrepancy by comparing with Methods 1 and 2.
- Solution resistance $R_s$ must be subtracted from the measured $R_p$ (obtainable from the high-frequency EIS intercept), otherwise $R_p$ is overestimated and $i_{corr}$ underestimated.

-----

## Method 4: Tafel Extrapolation

### Principle

At higher overpotentials (typically ±50 to ±250 mV from $E_{corr}$), the Butler–Volmer equation reduces to linear log|i| vs. $E$ behavior (“Tafel regions”) with slopes $\beta_a$ and $\beta_c$. Extrapolating these linear segments back to $E_{corr}$ yields $i_{corr}$ at their intersection.

### Procedure

1. Stabilize at OCP/$E_{corr}$ as in LPR.
2. Run a potentiodynamic polarization scan over a wide range (e.g., −250 mV to +250 mV vs. $E_{corr}$, or asymmetric ranges if anodic/cathodic behavior differs substantially).
3. Plot log|i| vs. $E$ (Tafel plot).
4. Identify the linear Tafel region(s) — typically the cathodic branch is most reliable for Mg (see notes).
5. Extrapolate the linear segment(s) to $E = E_{corr}$. The current density at the intersection is $i_{corr}$.
6. The slopes of the linear segments give $\beta_c$ (and $\beta_a$ if available).

### Conversion to Penetration Rate (mm/year)

Identical to Method 3, once $i_{corr}$ is obtained:

$$CR , (\text{mm/yr}) = 3.27 \times 10^{-3} \cdot \frac{i_{corr} \cdot M}{n \cdot \rho}$$

with $i_{corr}$ in μA/cm², $M = 24.305$ g/mol, $n = 2$, $\rho$ in g/cm³.

### Notes for the student

- For Mg alloys, the anodic Tafel region is frequently **not well-defined** — the anodic branch often shows near-vertical or breakdown-type behavior rather than a clean Tafel line, especially in chloride solutions, due to the NDE. In practice, $i_{corr}$ is often obtained primarily from the **cathodic** branch extrapolated to $E_{corr}$.
- As with LPR, Tafel-derived $i_{corr}$ for Mg systematically **underestimates** the true corrosion rate compared to weight loss or H₂ evolution (well documented by Atrens and co-workers). Compute the ratio $CR_{\text{weight-loss or H}*2} / CR*{\text{Tafel}}$ and discuss its physical origin.
- IR-drop compensation is important, either via the instrument’s IR compensation feature or post-hoc correction using $R_s$ from high-frequency EIS (Method 5), especially at higher current densities.

-----

## Method 5: Electrochemical Impedance Spectroscopy (EIS)

### Principle

EIS applies a small-amplitude sinusoidal potential perturbation (typically 5–10 mV) over a range of frequencies (e.g., 100 kHz down to 10 mHz or lower) and measures the complex impedance $Z(\omega) = Z’ + jZ’’$. For a simple corroding metal/electrolyte interface, a common equivalent circuit is:

$$R_s ;\text{in series with}; \big[R_{ct} ;|; \text{CPE (or } C_{dl}\text{)}\big]$$

where:

- $R_s$ = solution (electrolyte) resistance
- $R_{ct}$ = charge-transfer resistance (analogous to $R_p$ in the simple case)
- CPE = constant phase element representing non-ideal double-layer capacitance

(Note: real Mg systems often require more complex models — additional R-C/R-CPE elements for surface films, or a low-frequency inductive loop associated with film breakdown/pitting/relaxation. The problem assumes $R_{ct}$ can be determined, so we proceed with the simple Randles-type interpretation.)

### Procedure

1. Stabilize specimen at OCP.
2. Apply sinusoidal perturbation (5–10 mV amplitude), sweeping frequency from high (e.g., 100 kHz) to low (e.g., 10 mHz or lower).
3. Record $Z’$, $Z’’$ (or $|Z|$ and phase angle $\theta$) at each frequency.
4. Plot the Nyquist diagram ($-Z’’$ vs. $Z’$) and/or Bode plots (log$|Z|$ vs. log $f$, $\theta$ vs. log $f$).
5. Fit to the equivalent circuit model (ZView, EIS Spectrum Analyser, or equivalent) to extract $R_s$ and $R_{ct}$.
- Graphical shortcut: $R_s \approx Z’$ at the high-frequency real-axis intercept; $R_s + R_{ct} \approx Z’$ at the low-frequency real-axis intercept. Thus $R_{ct} = (\text{low-f intercept}) - (\text{high-f intercept})$.

### Relating $R_{ct}$ to $i_{corr}$

By analogy with Stern–Geary ($R_{ct}$ plays the role of $R_p$):

$$i_{corr} = \frac{B}{R_{ct}}$$

where $B = \dfrac{\beta_a \cdot \beta_c}{2.303(\beta_a + \beta_c)}$, requiring independently determined or assumed Tafel slopes, exactly as in Method 3.

### Conversion to Penetration Rate (mm/year)

Same final formula as Methods 3 and 4:

$$CR , (\text{mm/yr}) = 3.27 \times 10^{-3} \cdot \frac{i_{corr} \cdot M}{n \cdot \rho} = 3.27 \times 10^{-3} \cdot \frac{B \cdot M}{R_{ct} \cdot n \cdot \rho}$$

with $R_{ct}$ in Ω·cm² (i.e., already area-normalized — if the raw fitted resistance is in Ω, multiply by electrode area $A$ in cm² to normalize: $R_{ct}(\Omega \cdot \text{cm}^2) = R_{ct}(\Omega) \times A$).

### Notes for the student

- Walk through the full chain explicitly with units at every step: Nyquist plot → equivalent circuit fit → $R_{ct}$ (Ω, raw) → normalize by area → $R_{ct}$ (Ω·cm²) → Stern–Geary with $B$ → $i_{corr}$ → Faraday’s law/density conversion → $CR$ (mm/yr).
- As with LPR and Tafel, EIS-derived $i_{corr}$ for Mg alloys is subject to the same NDE-related underestimation relative to weight-loss/H₂-evolution rates. Quantify and discuss this.
- Real Mg-alloy spectra commonly show depressed/distorted semicircles (CPE rather than pure $C$), additional time constants (surface films, diffusion), and low-frequency inductive loops. The “simple Randles circuit with clean $R_{ct}$” given here is a pedagogical simplification — note where real data would deviate and how that would affect the extracted $R_{ct}$.

-----

## Summary Table

|Method      |Primary measured quantity|Key relationship                          |Typical result for Mg                                   |
|------------|-------------------------|------------------------------------------|--------------------------------------------------------|
|Weight loss |$\Delta m$               |$CR = \dfrac{87.6,\Delta m}{\rho A t}$    |“True” average rate, includes chemical dissolution      |
|H₂ evolution|$V_{H_2}$                |$CR$ via 1:1 Mg:H₂ stoichiometry          |“True” rate, real-time, correlates well with weight loss|
|LPR         |$R_p$                    |$i_{corr} = B/R_p \rightarrow CR$         |Typically underestimates true rate                      |
|Tafel       |$i_{corr}$ (extrapolated)|$CR = 3.27\times10^{-3},i_{corr}M/(n\rho)$|Typically underestimates; anodic branch often unreliable|
|EIS         |$R_{ct}$                 |$i_{corr} = B/R_{ct} \rightarrow CR$      |Typically underestimates; model-dependent               |

**Final task for the student:** Compute $CR$ by all five methods on the same specimen/system, tabulate the results, and discuss the discrepancy between the gravimetric/volumetric methods (1, 2) and the electrochemical methods (3, 4, 5) in terms of the negative difference effect characteristic of Mg corrosion (cf. Atrens et al., and published data on Mg alloy corrosion in NaCl).