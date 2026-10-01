import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';
import {
  retailCategoryData,
  retailRegionData,
  retailSegmentData,
  retailMonthlyTrend,
  sqlQueryExamples,
} from '../data/portfolioData';
import {
  BarChart2,
  PieChart as PieIcon,
  TrendingUp,
  MapPin,
  Database,
  CheckCircle,
  Copy,
  Terminal,
} from 'lucide-react';

export const VisualizationShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'category' | 'region' | 'segment' | 'seasonality' | 'sql'>('category');
  const [copiedQueryIndex, setCopiedQueryIndex] = useState<number | null>(null);

  const handleCopy = (sqlText: string, index: number) => {
    navigator.clipboard.writeText(sqlText);
    setCopiedQueryIndex(index);
    setTimeout(() => setCopiedQueryIndex(null), 2000);
  };

  const tabs = [
    { id: 'category', label: 'Category Revenue', icon: BarChart2 },
    { id: 'region', label: 'Regional Analysis', icon: MapPin },
    { id: 'segment', label: 'Customer Segments', icon: PieIcon },
    { id: 'seasonality', label: 'Monthly Seasonality', icon: TrendingUp },
    { id: 'sql', label: 'SQL Query Explorer', icon: Terminal },
  ];

  return (
    <section id="showcase" className="py-24 relative bg-[#070b16] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Interactive Analytics Explorer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Retail Sales <span className="text-gradient-emerald">EDA Dashboard</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Interactive visualizations and SQL queries representing the ~9,800 records retail dataset analyzed in Python & SQL.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-6 lg:mt-0 flex items-center gap-3 bg-slate-900/90 p-2 rounded-2xl border border-slate-800">
            <div className="px-4 py-2 text-center border-r border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Dataset Records</div>
              <div className="text-base font-bold text-cyan-400 font-mono">~9,800</div>
            </div>
            <div className="px-4 py-2 text-center">
              <div className="text-xs text-slate-400 font-mono">Total Sales Volume</div>
              <div className="text-base font-bold text-emerald-400 font-mono">$2.29M</div>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-8 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 w-fit">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dashboard Visual Container */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 min-h-[460px] flex flex-col justify-between">
          
          {/* TAB 1: Category Revenue */}
          {activeTab === 'category' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Sales & Orders by Product Category</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Technology drives the highest dollar value ($836k), whereas Office Supplies generates the highest order volume (3,840 units).
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 w-fit">
                  Python / Pandas Aggregation
                </span>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={retailCategoryData} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="category" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                    <YAxis
                      stroke="#94a3b8"
                      tick={{ fill: '#94a3b8', fontSize: 12 }}
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                      formatter={(value: any, name: any) => [
                        name === 'sales' ? `$${Number(value).toLocaleString()}` : `${value} units`,
                        name === 'sales' ? 'Total Sales' : 'Orders Count'
                      ]}
                    />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Bar dataKey="sales" name="Total Sales ($)" fill="#38bdf8" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="orders" name="Order Volume" fill="#818cf8" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                {retailCategoryData.map((cat) => (
                  <div key={cat.category} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xs text-slate-400 font-medium">{cat.category}</div>
                    <div className="text-lg font-bold text-white font-mono mt-1">${cat.sales.toLocaleString()}</div>
                    <div className="text-[11px] text-cyan-400 mt-0.5">{cat.percentage}% of overall revenue</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 2: Regional Performance */}
          {activeTab === 'region' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Geographic Sales by Region</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    West and East regions lead revenue generation ($725k & $678k), outperforming Central and South.
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 w-fit">
                  Region Breakdown
                </span>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={retailRegionData} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis
                      type="number"
                      stroke="#94a3b8"
                      tick={{ fill: '#94a3b8', fontSize: 12 }}
                      tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                    />
                    <YAxis dataKey="region" type="category" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                      formatter={(val: any) => [`$${Number(val).toLocaleString()}`, 'Total Sales']}
                    />
                    <Bar dataKey="sales" name="Regional Revenue" fill="#34d399" radius={[0, 8, 8, 0]}>
                      {retailRegionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                {retailRegionData.map((reg) => (
                  <div key={reg.region} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: reg.color }}></span>
                      {reg.region} Region
                    </div>
                    <div className="text-base font-bold text-white font-mono mt-1">${reg.sales.toLocaleString()}</div>
                    <div className="text-[11px] text-slate-400">{reg.orders} transactions</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: Customer Segments */}
          {activeTab === 'segment' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Customer Segment Share & Revenue</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Consumer accounts for 51.5% of total revenue, followed by Corporate (30.2%) and Home Office (18.3%).
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 w-fit">
                  Demographic Clustering
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={retailSegmentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={105}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {retailSegmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                        formatter={(val: any) => [`${val}%`, 'Segment Share']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="md:col-span-6 space-y-4">
                  {retailSegmentData.map((seg) => (
                    <div key={seg.segment} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: seg.color }} />
                        <div>
                          <div className="text-sm font-bold text-white">{seg.segment} Segment</div>
                          <div className="text-xs text-slate-400 font-mono mt-0.5">${seg.revenue.toLocaleString()} Gross</div>
                        </div>
                      </div>
                      <div className="text-xl font-extrabold text-white font-mono">{seg.value}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: Monthly Seasonality */}
          {activeTab === 'seasonality' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Monthly Sales Seasonality Analysis</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Clear upward progression culminating in fourth quarter peaks (November & December over $260k each), reflecting holiday demand.
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 w-fit">
                  Time-Series Trends
                </span>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={retailMonthlyTrend} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="month" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                    <YAxis
                      stroke="#94a3b8"
                      tick={{ fill: '#94a3b8', fontSize: 12 }}
                      tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                      formatter={(val: any) => [`$${Number(val).toLocaleString()}`, 'Monthly Sales']}
                    />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#38bdf8"
                      strokeWidth={3}
                      dot={{ r: 4, fill: '#38bdf8' }}
                      activeDot={{ r: 8, stroke: '#ffffff', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-cyan-400">Time-Series Key Insight:</span>
                <span>Peak Volume: December ($280,120) | Low Volume: February ($61,952)</span>
              </div>
            </motion.div>
          )}

          {/* TAB 5: SQL Query Explorer */}
          {activeTab === 'sql' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    <span>SQL Query Explorer & Analysis Outputs</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Real SQL queries authored to analyze the retail transactions dataset using MySQL aggregate functions, GROUP BY, HAVING, and CASE expressions.
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 w-fit">
                  MySQL 8.0 Tested
                </span>
              </div>

              <div className="space-y-8">
                {sqlQueryExamples.map((item, idx) => (
                  <div key={idx} className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
                    {/* Query header */}
                    <div className="px-5 py-3 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-cyan-300 font-mono">{item.title}</span>
                        <p className="text-[11px] text-slate-400">{item.description}</p>
                      </div>
                      <button
                        onClick={() => handleCopy(item.sql, idx)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300 transition-colors"
                        title="Copy SQL Query"
                      >
                        {copiedQueryIndex === idx ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Copy SQL</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Query Code */}
                    <div className="p-4 bg-[#0a0f1d] overflow-x-auto text-xs font-mono text-cyan-300">
                      <pre className="text-slate-300">{item.sql}</pre>
                    </div>

                    {/* Result Table Preview */}
                    <div className="p-4 bg-slate-950/40 border-t border-slate-800/80">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-1">
                        <Database className="w-3 h-3 text-cyan-400" />
                        <span>Query Execution Output Preview</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-mono">
                          <thead>
                            <tr className="border-b border-slate-800 text-slate-400">
                              {Object.keys(item.output[0]).map((col) => (
                                <th key={col} className="pb-2 pr-4 font-semibold capitalize">
                                  {col.replace('_', ' ')}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {item.output.map((row, rowIdx) => (
                              <tr key={rowIdx} className="border-b border-slate-900/60 text-slate-300 hover:bg-slate-900/30">
                                {Object.values(row).map((val: any, valIdx) => (
                                  <td key={valIdx} className="py-1.5 pr-4">
                                    {val}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
