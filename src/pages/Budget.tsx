import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, TrendingDown, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const monthlyTrend = [
  { month: "Jan", budget: 4000, actual: 3800 },
  { month: "Feb", budget: 4000, actual: 4200 },
  { month: "Mar", budget: 4000, actual: 3900 },
  { month: "Apr", budget: 4000, actual: 4100 },
  { month: "May", budget: 4000, actual: 3700 },
  { month: "Jun", budget: 4000, actual: 3500 },
];

const categories = [
  { name: "Housing", budget: 1200, spent: 1200, alert: false },
  { name: "Groceries", budget: 600, spent: 550, alert: false },
  { name: "Transportation", budget: 400, spent: 480, alert: true },
  { name: "Entertainment", budget: 300, spent: 350, alert: true },
  { name: "Utilities", budget: 200, spent: 180, alert: false },
  { name: "Healthcare", budget: 250, spent: 200, alert: false },
  { name: "Shopping", budget: 400, spent: 420, alert: true },
  { name: "Others", budget: 650, spent: 620, alert: false },
];

const Budget = () => {
  const totalBudget = categories.reduce((sum, cat) => sum + cat.budget, 0);
  const totalSpent = categories.reduce((sum, cat) => sum + cat.spent, 0);
  const remaining = totalBudget - totalSpent;

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Budget & Cash Flow</h1>
        <p className="text-muted-foreground">
          Track your spending and manage your monthly budget
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Monthly Budget</p>
            <h3 className="text-3xl font-bold">${totalBudget.toLocaleString()}</h3>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Total Spent</p>
            <h3 className="text-3xl font-bold text-primary">
              ${totalSpent.toLocaleString()}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {((totalSpent / totalBudget) * 100).toFixed(1)}% of budget
            </p>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Remaining</p>
            <h3
              className={`text-3xl font-bold ${
                remaining > 0 ? "text-success" : "text-destructive"
              }`}
            >
              ${Math.abs(remaining).toLocaleString()}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              {remaining > 0 ? (
                <TrendingDown className="h-4 w-4 text-success" />
              ) : (
                <TrendingUp className="h-4 w-4 text-destructive" />
              )}
              <p className="text-sm text-muted-foreground">
                {remaining > 0 ? "Under budget" : "Over budget"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Budget Trend */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Budget vs Actual Spending (6 Months)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="budget"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Category Budget Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categories}>
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
              <Bar dataKey="budget" fill="hsl(var(--muted))" radius={[8, 8, 0, 0]} />
              <Bar dataKey="spent" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Detailed Categories */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Spending by Category</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {categories.map((category) => {
            const percentage = (category.spent / category.budget) * 100;
            const isOverBudget = category.spent > category.budget;

            return (
              <div key={category.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{category.name}</span>
                    {category.alert && (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        Alert
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ${category.spent} / ${category.budget}
                  </span>
                </div>
                <Progress
                  value={Math.min(percentage, 100)}
                  className={`h-2 ${isOverBudget ? "[&>div]:bg-destructive" : ""}`}
                />
                <p className="text-xs text-muted-foreground">
                  {percentage.toFixed(1)}% of budget used
                </p>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Budget;
