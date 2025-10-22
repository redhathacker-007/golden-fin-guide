import { Wallet, TrendingUp, Target, PiggyBank, Lightbulb } from "lucide-react";
import { MetricCard } from "@/components/shared/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyData = [
  { name: "Jan", income: 5000, expenses: 3200 },
  { name: "Feb", income: 5200, expenses: 3400 },
  { name: "Mar", income: 5100, expenses: 3100 },
  { name: "Apr", income: 5300, expenses: 3600 },
  { name: "May", income: 5400, expenses: 3300 },
  { name: "Jun", income: 5500, expenses: 3500 },
];

const expenseData = [
  { name: "Housing", value: 1200, color: "hsl(var(--primary))" },
  { name: "Food", value: 600, color: "hsl(var(--accent))" },
  { name: "Transport", value: 400, color: "hsl(var(--success))" },
  { name: "Entertainment", value: 300, color: "hsl(var(--warning))" },
  { name: "Others", value: 500, color: "hsl(var(--muted))" },
];

const goals = [
  { name: "Emergency Fund", current: 12000, target: 20000 },
  { name: "Vacation", current: 3000, target: 5000 },
  { name: "New Car", current: 15000, target: 30000 },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Welcome back! 👋</h1>
        <p className="text-muted-foreground">
          Here's your financial overview for today
        </p>
      </div>

      {/* AI Tip of the Day */}
      <Card className="gradient-accent border-none">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">
                AI Financial Tip of the Day
              </h3>
              <p className="text-white/90 text-sm">
                You're spending 15% more on dining out this month. Consider meal
                prepping to save approximately $200 monthly.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Net Worth"
          value="$124,500"
          change="+8.2% from last month"
          changeType="positive"
          icon={TrendingUp}
          gradient
        />
        <MetricCard
          title="Total Savings"
          value="$45,300"
          change="+$2,400 this month"
          changeType="positive"
          icon={PiggyBank}
        />
        <MetricCard
          title="Monthly Expenses"
          value="$3,500"
          change="-5% from last month"
          changeType="positive"
          icon={Wallet}
        />
        <MetricCard
          title="Goal Progress"
          value="68%"
          change="3 active goals"
          changeType="neutral"
          icon={Target}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income vs Expenses */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="income" fill="hsl(var(--success))" radius={[8, 8, 0, 0]} />
                <Bar dataKey="expenses" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Expense Breakdown */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Goals Progress */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Active Goals Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {goals.map((goal) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <div key={goal.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{goal.name}</span>
                  <span className="text-muted-foreground">
                    ${goal.current.toLocaleString()} / $
                    {goal.target.toLocaleString()}
                  </span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
