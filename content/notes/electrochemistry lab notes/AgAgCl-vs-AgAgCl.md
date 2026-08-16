---
created: 2026-07-20
title: The potential of an electrochemical cell consisting of two Ag|AgCl electrodes
---
In our routine work, it is sometimes necessary to test Ag/AgCl reference electrodes. This document presents the calculation of the theoretical potential difference for a cell consisting of a saturated KCl Ag/AgCl reference electrode and a 3 M KCl Ag/AgCl test electrode. Both electrodes were immersed in a 3M KCl electrolyte.
# Potential Difference Between Ag/AgCl Electrodes Containing Saturated KCl and 3 M KCl at 298 K

Consider the electrochemical cell
Ag|AgCl|KCl(sat.) || KCl(3,M)|AgCl|Ag     at T=298 K.

## **1. Electrode reaction**

For each silver–silver chloride electrode, the reduction half-reaction is

$$
\mathrm{AgCl(s)+e^- \rightleftharpoons Ag(s)+Cl^-(aq)}  
$$

The Nernst equation is

$$  
E=E^\circ-\frac{RT}{F}\ln a_{\mathrm{Cl^-}},  
$$

because the activities of the pure solids Ag and AgCl are equal to unity.

At 298 K,

$$  
E=E^\circ-0.05916\log a_{\mathrm{Cl^-}}.  
$$

Here, ($E^\circ$) is the thermodynamic standard potential of the AgCl/Ag electrode reaction.

## **2. Electrode containing saturated KCl**

For the Ag/AgCl electrode containing saturated KCl,

$$
E_{\mathrm{sat}}= E^\circ - \frac{RT}{F}  
\ln a_{\mathrm{Cl^-}}^{\mathrm{sat}}.  
$$

Because saturated KCl has a relatively high chloride-ion activity, this electrode has the lower reduction potential.

At 298 K, its commonly tabulated potential relative to the standard hydrogen electrode is approximately

$$  
E_{\mathrm{sat}}\approx +0.197\ \mathrm{V\ vs.\ SHE}.  
$$

## **3. Electrode containing 3M KCl**

For the Ag/AgCl electrode containing 3 M KCl,

$$E_{3\mathrm{M}}=E^\circ - \frac{RT}{F}  
\ln a_{\mathrm{Cl^-}}^{3\mathrm{M}}.  
$$

The chloride-ion activity in 3 M KCl is lower than that in saturated KCl. Therefore,

$$  
E_{3\mathrm{M}}>E_{\mathrm{sat}}.  
$$

At 298 K, the commonly tabulated value is approximately

$$  
E_{3\mathrm{M}}\approx +0.210\ \mathrm{V\ vs.\ SHE}.  
$$

## **4. Potential difference of the cell**

For the cell written as

$$  
\mathrm{Ag|AgCl|KCl(sat.)||KCl(3M)|AgCl|Ag},  
$$

the cell potential is defined as

$$E_{\mathrm{cell}}=E_{\mathrm{right}}-E_{\mathrm{left}}.  
$$

Thus,

$$E_{\mathrm{cell}}=E_{3\mathrm{M}}-E_{\mathrm{sat}}.  
$$

Using the tabulated electrode potentials,

$$E_{\mathrm{cell}}= 0.210-0.197.  
$$

Therefore,

$$  
\boxed{E_{\mathrm{cell}}\approx +0.013\ \mathrm{V}\approx +13\ \mathrm{mV}}  
$$

The 3 M KCl electrode is the positive electrode, and the saturated-KCl electrode is the negative electrode.

## **5. Equivalent derivation using chloride-ion activities**

Starting from the two Nernst equations,

$$E_{3\mathrm{M}}=E^\circ-\frac{RT}{F}  
\ln a_{\mathrm{Cl^-}}^{3\mathrm{M}},  
$$

and

$$E_{\mathrm{sat}}= E^\circ-\frac{RT}{F}  
\ln a_{\mathrm{Cl^-}}^{\mathrm{sat}},  
$$

their difference is

$$E_{\mathrm{cell}}= E_{3\mathrm{M}}-E_{\mathrm{sat}}.  
$$

Therefore,

$$E_{\mathrm{cell}}=

\frac{RT}{F}  
\ln  
\left(  
\frac{a_{\mathrm{Cl^-}}^{\mathrm{sat}}}  
{a_{\mathrm{Cl^-}}^{3\mathrm{M}}}  
\right).  
$$

At 298K,


$$\boxed{E_{\mathrm{cell}} = 0.05916  
\log  
\left(  
\frac{a_{\mathrm{Cl^-}}^{\mathrm{sat}}}  
{a_{\mathrm{Cl^-}}^{3\mathrm{M}}}  
\right)  
}.  
$$

The activities cannot be replaced reliably by the numerical concentrations 4M and 3M, because concentrated KCl solutions are strongly non-ideal. The activity coefficients are significantly different from unity. Using tabulated Ag/AgCl reference-electrode potentials automatically accounts for this non-ideal behavior.

## **6. Liquid-junction potential**

The notation

$$  
\mathrm{KCl(sat.)||KCl(3M)}  
$$

also implies a liquid junction between two KCl solutions of different concentrations.

The experimentally measured voltage is therefore

$$E_{\mathrm{measured}} = E_{3\mathrm{M}}

E_{\mathrm{sat}}  
+  
E_{\mathrm{junction}}.  
$$

Because the ionic mobilities of ($\mathrm{K^+}$) and ($\mathrm{Cl^-}$) are similar, the liquid-junction potential is usually relatively small, but it is not strictly zero.

Thus, neglecting the junction potential,

$$  
\boxed{E_{\mathrm{cell}}\approx +13\ \mathrm{mV}\quad\text{at }298\ \mathrm{K}}.  
$$

## **Appendix: Using Other Ag/AgCl Reference Electrodes**

The derivation presented above is general and can be applied to any Ag/AgCl reference electrode containing KCl of a known concentration.

At 25 °C (298 K), the commonly accepted electrode potentials versus the Standard Hydrogen Electrode (SHE) are approximately:

|**Filling solution**|**Electrode potential (V vs. SHE)**|
|---|---|
|Saturated KCl|+0.197 V|
|4 M KCl|+0.199 V|
|3 M KCl|+0.210 V|
|1 M KCl|+0.235 V|

If a different Ag/AgCl reference electrode is used, **no changes to the derivation are required**. The only modification is to replace the corresponding electrode potential in the final calculation.

Thus, for a cell consisting of a reference electrode and a test electrode,

$$  
E_{\mathrm{cell}} = E_{\mathrm{test}} - E_{\mathrm{reference}},  
$$

where ($E_{\mathrm{test}}$) and ($E_{\mathrm{reference}}$) are the tabulated potentials for the corresponding KCl filling solutions.

For example:

- Saturated KCl vs. 4 M KCl:  
    $$  
    E_{\mathrm{cell}} = 0.199 - 0.197 = 2\ \mathrm{mV}  
    $$
- Saturated KCl vs. 1 M KCl:  
    $$  
    E_{\mathrm{cell}} = 0.235 - 0.197 = 38\ \mathrm{mV}  
    $$

The same procedure applies to any other KCl concentration, provided that the corresponding Ag/AgCl electrode potential is known.