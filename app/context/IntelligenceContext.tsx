"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of our data
export interface CustomerData {
  id: string;
  gender: string;
  age: number;
  income: number;
  spendingScore: number;
  cluster: number; // 0-indexed cluster ID from K-Means
  ltv: number; // Synthesized LTV (Income * SpendingScore * Multiplier)
}

export interface ClusterCentroid {
  id: number;
  income: number;
  spendingScore: number;
  size: number;
  name: string; // e.g. "Champions", "At Risk"
  color: string; // e.g. "primary", "secondary"
}

export interface AnalysisSummary {
  totalCustomers: number;
  avgIncome: number;
  avgSpending: number;
  avgLtv: number;
  totalRevenue: number;
}

export interface IntelligenceState {
  isAnalyzed: boolean;
  customers: CustomerData[];
  clusters: ClusterCentroid[];
  summary: AnalysisSummary | null;
  setAnalysisData: (customers: CustomerData[], clusters: ClusterCentroid[], summary: AnalysisSummary) => void;
  resetAnalysis: () => void;
}

const IntelligenceContext = createContext<IntelligenceState | undefined>(undefined);

export function IntelligenceProvider({ children }: { children: ReactNode }) {
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [customers, setCustomers] = useState<CustomerData[]>([]);
  const [clusters, setClusters] = useState<ClusterCentroid[]>([]);
  const [summary, setSummary] = useState<AnalysisSummary | null>(null);

  const setAnalysisData = (newCustomers: CustomerData[], newClusters: ClusterCentroid[], newSummary: AnalysisSummary) => {
    setCustomers(newCustomers);
    setClusters(newClusters);
    setSummary(newSummary);
    setIsAnalyzed(true);
  };

  const resetAnalysis = () => {
    setCustomers([]);
    setClusters([]);
    setSummary(null);
    setIsAnalyzed(false);
  };

  return (
    <IntelligenceContext.Provider value={{ isAnalyzed, customers, clusters, summary, setAnalysisData, resetAnalysis }}>
      {children}
    </IntelligenceContext.Provider>
  );
}

export function useIntelligence() {
  const context = useContext(IntelligenceContext);
  if (context === undefined) {
    throw new Error('useIntelligence must be used within an IntelligenceProvider');
  }
  return context;
}
