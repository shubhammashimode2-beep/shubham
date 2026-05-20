import { useState, useEffect } from "react";
import { Info, RefreshCw, Smartphone, TrendingUp, Dumbbell } from "lucide-react";

export default function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState<"metric" | "imperial">("metric");
  
  // Metric States
  const [cmHeight, setCmHeight] = useState<number>(175);
  const [kgWeight, setKgWeight] = useState<number>(70);

  // Imperial States
  const [ftHeight, setFtHeight] = useState<number>(5);
  const [inHeight, setInHeight] = useState<number>(8);
  const [lbsWeight, setLbsWeight] = useState<number>(154);

  // Calculated state
  const [bmi, setBmi] = useState<number>(22.86);
  const [category, setCategory] = useState<string>("Normal");
  const [tip, setTip] = useState<string>("Keep staying active with standard consistency!");

  useEffect(() => {
    let heightM = 0;
    let weightKg = 0;

    if (unitSystem === "metric") {
      heightM = cmHeight / 100;
      weightKg = kgWeight;
    } else {
      // Imperial: (ft * 12 + in) -> total inches * 0.0254 -> meters
      const totalInches = ftHeight * 12 + inHeight;
      heightM = totalInches * 0.0254;
      weightKg = lbsWeight * 0.45359237;
    }

    if (heightM > 0 && weightKg > 0) {
      const calculatedBmi = weightKg / (heightM * heightM);
      setBmi(calculatedBmi);

      // Category & tips mapping
      if (calculatedBmi < 18.5) {
        setCategory("Underweight");
        setTip("We recommend focus on high-quality carbohydrate/protein calorie grids paired with standard local strength lifts.");
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setCategory("Normal");
        setTip("Perfect biological baseline! We recommend standard heavy iron progression and dynamic speed endurance training to boost stamina.");
      } else if (calculatedBmi >= 24.9 && calculatedBmi < 29.9) {
        setCategory("Overweight");
        setTip("We recommend targeted metabolic calorie burns, focused high-protein diets, and structured HIIT cardiovascular circuits.");
      } else {
        setCategory("Obese");
        setTip("We recommend low-impact joint protection cardiovascular drills (such as ellipticals/spin) coupled with guided weight routines.");
      }
    }
  }, [cmHeight, kgWeight, ftHeight, inHeight, lbsWeight, unitSystem]);

  // Color Mapping helper for Visual range gauge
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Underweight":
        return "text-sky-400 border-sky-400 bg-sky-400/10";
      case "Normal":
        return "text-green-500 border-green-500 bg-green-500/10";
      case "Overweight":
        return "text-amber-500 border-amber-500 bg-amber-500/10";
      default:
        return "text-primary-red border-primary-red bg-primary-red/10";
    }
  };

  const getMeterMarkerPercentage = () => {
    // Math mapping: BMI values 15 to 35 on a 0-100% scale
    const cappedBmi = Math.max(15, Math.min(35, bmi));
    const percentage = ((cappedBmi - 15) / 20) * 100;
    return `${percentage}%`;
  };

  return (
    <section id="bmi" className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Absolute ambient backgrounds */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-red-600/5 filter blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-red font-mono font-bold tracking-[0.25em] uppercase text-xs">
            Health Analytics
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase text-white mt-3 tracking-tight">
            Check Your <span className="text-primary-red">BMI Level</span>
          </h2>
          <div className="w-16 h-1 bg-primary-red mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed">
            Quickly measure your body mass index to determine healthy baselines. Use our integrated guide below to track standard categories!
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Input Form Grid (7cols) */}
          <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/[0.04] shadow-2xl relative">
            
            {/* Unit System Selector Tab */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <h3 className="font-display font-bold text-sm sm:text-base uppercase tracking-wider text-gray-200">
                Calculator Input Grid
              </h3>
              
              <div className="bg-[#1c1c1c] p-0.5 rounded-lg flex items-center">
                <button
                  onClick={() => setUnitSystem("metric")}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                    unitSystem === "metric"
                      ? "bg-primary-red text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Metric (cm / kg)
                </button>
                <button
                  onClick={() => setUnitSystem("imperial")}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                    unitSystem === "imperial"
                      ? "bg-primary-red text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Imperial (ft / lbs)
                </button>
              </div>
            </div>

            {/* Metric Input Field Block */}
            {unitSystem === "metric" ? (
              <div className="space-y-6">
                {/* CM slider & Input */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                      Target Height
                    </label>
                    <span className="text-white font-display font-extrabold text-lg">
                      {cmHeight} <span className="text-xs text-primary-red">CM</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="120"
                    max="220"
                    value={cmHeight}
                    onChange={(e) => setCmHeight(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary-red"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1 font-semibold">
                    <span>120 CM</span>
                    <span>170 CM</span>
                    <span>220 CM</span>
                  </div>
                </div>

                {/* KG slider & Input */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                      Current Weight
                    </label>
                    <span className="text-white font-display font-extrabold text-lg">
                      {kgWeight} <span className="text-xs text-primary-red">KG</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="35"
                    max="150"
                    value={kgWeight}
                    onChange={(e) => setKgWeight(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary-red"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1 font-semibold">
                    <span>35 KG</span>
                    <span>92 KG</span>
                    <span>150 KG</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Imperial Input Field Block */
              <div className="space-y-6">
                {/* Height row */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Target Height
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#181818] px-4 py-3.5 rounded-xl border border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono text-gray-500 font-bold uppercase">Feet</span>
                      <input
                        type="number"
                        min="3"
                        max="8"
                        value={ftHeight}
                        onChange={(e) => setFtHeight(Math.max(3, Math.min(8, parseInt(e.target.value, 10) || 3)))}
                        className="text-right text-white font-display font-extrabold text-lg w-12 bg-transparent focus:outline-none"
                      />
                    </div>
                    <div className="bg-[#181818] px-4 py-3.5 rounded-xl border border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono text-gray-500 font-bold uppercase">Inches</span>
                      <input
                        type="number"
                        min="0"
                        max="11"
                        value={inHeight}
                        onChange={(e) => setInHeight(Math.max(0, Math.min(11, parseInt(e.target.value, 10) || 0)))}
                        className="text-right text-white font-display font-extrabold text-lg w-12 bg-transparent focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Weight row */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                      Current Weight
                    </label>
                    <span className="text-white font-display font-extrabold text-lg">
                      {lbsWeight} <span className="text-xs text-primary-red">LBS</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="350"
                    value={lbsWeight}
                    onChange={(e) => setLbsWeight(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary-red"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1 font-semibold">
                    <span>80 LBS</span>
                    <span>215 LBS</span>
                    <span>350 LBS</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick reset/default triggers */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-gray-500 font-sans">
                Calculations based on standard clinical algorithms.
              </span>
              <button
                onClick={() => {
                  setCmHeight(175);
                  setKgWeight(70);
                  setFtHeight(5);
                  setInHeight(8);
                  setLbsWeight(154);
                }}
                className="flex items-center space-x-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="h-3 w-3 text-primary-red" />
                <span>Reset Values</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Result Gauge card (5cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/[0.04] shadow-2xl flex flex-col justify-between">
              
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold block mb-1">
                  CALCULATED SCORE
                </span>
                
                <div className="flex items-baseline space-x-2">
                  <h4 className="font-display font-black text-white text-5xl sm:text-6xl tracking-tight">
                    {bmi.toFixed(1)}
                  </h4>
                  <span className="text-xs font-mono tracking-wider font-semibold uppercase text-primary-red">
                    POINTS
                  </span>
                </div>

                {/* Dynamic Classification Label pill */}
                <div className={`mt-4 inline-block px-3 py-1.5 rounded-lg border text-xs font-mono font-bold uppercase ${getCategoryColor(category)}`}>
                  Status: {category}
                </div>
              </div>

              {/* Range gauge meter */}
              <div className="mt-8">
                <div className="flex justify-between text-[9px] text-gray-500 font-mono uppercase tracking-wider mb-2 font-bold">
                  <span>15.0</span>
                  <span>18.5</span>
                  <span>25.0</span>
                  <span>30.0</span>
                  <span>35.0</span>
                </div>
                
                {/* Colorful segmented container representing categories */}
                <div className="relative h-2.5 bg-zinc-950 rounded-full overflow-hidden flex">
                  <div className="w-[17.5%] h-full bg-sky-500/80" /> {/* Underweight */}
                  <div className="w-[32.5%] h-full bg-green-500/80" /> {/* Normal */}
                  <div className="w-[25%] h-full bg-amber-500/80" /> {/* Overweight */}
                  <div className="w-[25%] h-full bg-red-600/80" /> {/* Obese */}

                  {/* Meter absolute cursor bubble marker pointer pin */}
                  <div
                    className="absolute top-0 bottom-0 w-1.5 bg-white border border-black shadow"
                    style={{ left: getMeterMarkerPercentage(), transform: "translate(-50%)" }}
                  />
                </div>
              </div>

              {/* Dynamic workout advice block based on category outputs */}
              <div className="mt-8 bg-white/5 p-4 rounded-xl border border-white/5">
                <h5 className="font-display font-bold text-white text-xs uppercase tracking-wide flex items-center space-x-2">
                  <Dumbbell className="h-3.5 w-3.5 text-primary-red" />
                  <span>Fitness Recommendation</span>
                </h5>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  {tip}
                </p>
              </div>

            </div>

            {/* General guide information grid */}
            <div className="bg-zinc-950 p-5 rounded-xl border border-white/5 flex items-start space-x-3.5">
              <Info className="h-4.5 w-4.5 text-primary-red shrink-0 mt-0.5" />
              <div>
                <h5 className="font-display font-bold text-xs uppercase text-white tracking-wider">
                  HEALTH BASELINES DATA
                </h5>
                <p className="text-[10px] text-gray-400 mt-1 leading-normal">
                  BMI scale targets: <span className="text-sky-400">Underweight</span> &lt; 18.5 | <span className="text-green-500">Healthy range</span> 18.5–24.9 | <span className="text-amber-500">Overweight</span> 25.0–29.9 | <span className="text-red-500">Obese</span> &ge; 30.0.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
