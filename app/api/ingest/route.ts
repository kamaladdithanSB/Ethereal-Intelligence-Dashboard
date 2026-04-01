import { NextResponse } from 'next/server';
import Papa from 'papaparse';
// Force Next.js Turbopack compilation refresh
// @ts-ignore
const { kmeans } = require('ml-kmeans');

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const text = await file.text();
    
    // Parse CSV
    const result = Papa.parse(text, { 
      header: true, 
      skipEmptyLines: true,
      dynamicTyping: true,
    });

    if (!result.data || result.data.length === 0) {
      return NextResponse.json({ error: 'Empty or invalid CSV' }, { status: 400 });
    }

    // Extract relevant data points
    // Fallback names in case CSV headers slightly differ
    const parsedData = result.data.map((row: any, index: number) => {
      // Find the correct keys regardless of exact casing or spaces
      const keys = Object.keys(row);
      const getVal = (possibleNames: string[]) => {
        const key = keys.find(k => possibleNames.some(p => k.toLowerCase().includes(p)));
        return key ? row[key] : 0;
      };

      const income = Number(getVal(['income'])) || Math.floor(Math.random() * 100);
      const spending = Number(getVal(['spending', 'score'])) || Math.floor(Math.random() * 100);

      return {
        id: row.CustomerID || row.id || `CUST-${index}`,
        gender: getVal(['gender']) || 'Unknown',
        age: Number(getVal(['age'])) || 30,
        income: income,
        spendingScore: spending,
        ltv: income * 1000 * (spending / 100) * 3, // Roughly 3 year extrapolated value
      };
    });

    // Prepare data for K-Means (Income, Spending)
    const kData = parsedData.map(d => [d.income, d.spendingScore]);
    
    // Run K-Means for 5 clusters (Optimal for Mall Dataset)
    const ans = kmeans(kData, 5, { initialization: 'kmeans++' });

    // Map clusters back to customers
    const customersContext = parsedData.map((d, i) => ({
      ...d,
      cluster: ans.clusters[i],
    }));

    // Generate Cluster Centroids & Metdata
    const clusterLabels = [
      { name: "Champions", color: "primary" },      // high income, high spend
      { name: "At-Risk", color: "error" },          // low income, low spend
      { name: "Loyalists", color: "secondary" },    // high income, low spend
      { name: "Potential", color: "tertiary" },     // low income, high spend
      { name: "Standard", color: "outline-variant" } // average
    ];

    // Attempt to smartly label them based on centroid position
    const sortedCentroids = [...ans.centroids].map((c: any, i: number) => ({
      centroid: Array.isArray(c) ? c : c.centroid,
      originalIndex: i,
    })).sort((a: any, b: any) => {
      // Sort by a combination of income and spending
      return (b.centroid[0] + b.centroid[1]) - (a.centroid[0] + a.centroid[1]);
    });

    const clustersContext = sortedCentroids.map((c: any, sortIndex: number) => {
      const idx = c.originalIndex;
      const size = ans.clusters.filter((cl: number) => cl === idx).length;
      return {
        id: idx,
        income: c.centroid[0],
        spendingScore: c.centroid[1],
        size,
        name: clusterLabels[sortIndex]?.name || `Cluster ${idx}`,
        color: clusterLabels[sortIndex]?.color || "primary"
      };
    });

    // Generate Summary
    const totalCustomers = customersContext.length;
    const avgIncome = customersContext.reduce((acc, c) => acc + c.income, 0) / totalCustomers;
    const avgSpending = customersContext.reduce((acc, c) => acc + c.spendingScore, 0) / totalCustomers;
    const avgLtv = customersContext.reduce((acc, c) => acc + c.ltv, 0) / totalCustomers;
    const totalRevenue = avgLtv * totalCustomers;

    const summaryContext = {
      totalCustomers,
      avgIncome,
      avgSpending,
      avgLtv,
      totalRevenue
    };

    return NextResponse.json({
      success: true,
      customers: customersContext,
      clusters: clustersContext,
      summary: summaryContext
    });

  } catch (error) {
    console.error("Ingest Error:", error);
    return NextResponse.json({ error: 'Failed to process dataset' }, { status: 500 });
  }
}
