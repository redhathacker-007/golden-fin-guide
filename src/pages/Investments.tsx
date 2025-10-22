import { TrendingUp, PieChart as PieChartIcon, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const portfolioData = [
  { name: "Stocks", value: 45000, allocation: 45, color: "hsl(var(--primary))" },
  { name: "Bonds", value: 20000, allocation: 20, color: "hsl(var(--accent))" },
  { name: "ETFs", value: 15000, allocation: 15, color: "hsl(var(--success))" },
  { name: "Mutual Funds", value: 12000, allocation: 12, color: "hsl(var(--warning))" },
  { name: "Real Estate", value: 8000, allocation: 8, color: "hsl(var(--muted))" },
];

const performanceData = [
  { month: "Jan", value: 95000 },
  { month: "Feb", value: 97000 },
  { month: "Mar", value: 96500 },
  { month: "Apr", value: 98000 },
  { month: "May", value: 99500 },
  { month: "Jun", value: 100000 },
];

const holdings = [
  { name: "Tech Growth ETF", value: 25000, change: 12.5, risk: "Medium" },
  { name: "S&P 500 Index", value: 20000, change: 8.2, risk: "Low" },
  { name: "Government Bonds", value: 20000, change: 3.1, risk: "Low" },
  { name: "Emerging Markets", value: 15000, change: -2.3, risk: "High" },
  { name: "Real Estate Fund", value: 12000, change: 6.7, risk: "Medium" },
  { name: "Corporate Bonds", value: 8000, change: 4.2, risk: "Low" },
];

const Investments = () => {
  const totalValue = portfolioData.reduce((sum, item) => sum + item.value, 0);
  const totalReturn = 15.8; // Mock data

  const riskColors = {
    Low: "success",
    Medium: "warning",
    High: "destructive",
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Investment Planner</h1>
        <p className="text-muted-foreground">
          Manage and optimize your investment portfolio
        </p>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover gradient-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Portfolio Value</p>
            <h3 className="text-3xl font-bold">${totalValue.toLocaleString()}</h3>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-4 w-4 text-success" />
              <p className="text-sm text-success">+{totalReturn}% overall</p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Risk Profile</p>
            <h3 className="text-3xl font-bold">Moderate</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Balanced risk-reward ratio
            </p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Diversification</p>
            <h3 className="text-3xl font-bold">Good</h3>
            <Progress value={75} className="h-2 mt-2" />
            <p className="text-sm text-muted-foreground mt-1">75% optimal</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Allocation */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Portfolio Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={portfolioData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, allocation }) => `${name} ${allocation}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {portfolioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: any) => `$${value.toLocaleString()}`}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {portfolioData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Chart */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>6-Month Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  formatter={(value: any) => `$${value.toLocaleString()}`}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--success))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--success))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Holdings Table */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Your Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {holdings.map((holding, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold">{holding.name}</h4>
                    <Badge variant={riskColors[holding.risk as keyof typeof riskColors] as any}>
                      {holding.risk} Risk
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    ${holding.value.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      holding.change > 0 ? "text-success" : "text-destructive"
                    }`}
                  >
                    {holding.change > 0 ? "+" : ""}
                    {holding.change}%
                  </p>
                  <p className="text-xs text-muted-foreground">6M return</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card className="gradient-primary border-none">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <PieChartIcon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                AI Investment Suggestions
              </h3>
              <ul className="space-y-2 text-white/90 text-sm">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    Consider rebalancing: Your stocks allocation is higher than
                    recommended for your risk profile
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    Emerging Markets fund showing volatility - monitor closely or
                    consider reducing position
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    Good time to increase bond allocation for better diversification
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Investments;
