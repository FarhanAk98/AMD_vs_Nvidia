/* Achal Boniface Sood */

function recommendGPU(cards, { useCase, resolution, rayTracing, budget }) {
  if (!cards || !Array.isArray(cards)) return [];

  const rtPref = rayTracing?.toLowerCase();

  // Step 1: Ray tracing filter (soft rule)
  let filtered = cards.filter((gpu) => {
    if (rtPref === "true") return gpu.rayTracing === true;
    if (rtPref === "false") return gpu.rayTracing === false;
    return true;
  });

  // Step 2: Budget filter
  let withinBudget = filtered.filter((gpu) => typeof gpu.priceUSD === 'number' && gpu.priceUSD <= budget);
  if (withinBudget.length === 0) {
    withinBudget = cards.filter((gpu) => typeof gpu.priceUSD === 'number' && gpu.priceUSD <= budget);
  }

  // Step 3: Scoring all budget-eligible cards
  let candidates = withinBudget.map((gpu) => {
    const useCaseScore = gpu.productivityPerformance?.[useCase] || 0;
    const resolutionScore = gpu.gamingPerformance?.[resolution] || 0;
    const rayTracingScore = gpu.gamingPerformance?.rayTracing || 0;
    const rasterScore = gpu.gamingPerformance?.rasterization || 0;

    let weightRT = rtPref === "true" ? 1.2 : 1;
    let weightRaster = rtPref === "false" ? 1.2 : 1;
    let weightBalanced = (!rtPref || rtPref === "any") ? 1.1 : 1;

    const performanceScore =
      (useCaseScore * 1.1 + resolutionScore * 1.1 +
        rayTracingScore * weightRT + rasterScore * weightRaster) * weightBalanced / 4;

    const priceUtilization = gpu.priceUSD / budget;
    const budgetEfficiency = 0.2 + 0.8 * priceUtilization;

    const finalScore = performanceScore * budgetEfficiency;

    return { ...gpu, matchScore: finalScore };
  });

  // Step 4: Sort and return top 2
  candidates.sort((a, b) => b.matchScore - a.matchScore);

  return candidates.slice(0, 2);
}

export default recommendGPU;
