import { CreditCard, TrendingDown, Calendar, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const debts = [
  {
    id: 1,
    name: "Home Loan",
    type: "Mortgage",
    total: 250000,
    remaining: 180000,
    emi: 1850,
    rate: 3.5,
    nextDue: "15 Jan 2025",
    status: "On Track",
  },
  {
    id: 2,
    name: "Car Loan",
    type: "Auto",
    total: 30000,
    remaining: 12000,
    emi: 650,
    rate: 5.2,
    nextDue: "20 Jan 2025",
    status: "On Track",
  },
  {
    id: 3,
    name: "Credit Card",
    type: "Credit",
    total: 5000,
    remaining: 2500,
    emi: 250,
    rate: 18.9,
    nextDue: "10 Jan 2025",
    status: "High Interest",
  },
  {
    id: 4,
    name: "Student Loan",
    type: "Education",
    total: 45000,
    remaining: 28000,
    emi: 420,
    rate: 4.5,
    nextDue: "25 Jan 2025",
    status: "On Track",
  },
];

const repaymentSchedule = [
  { month: "Jan", principal: 1800, interest: 1370 },
  { month: "Feb", principal: 1850, interest: 1320 },
  { month: "Mar", principal: 1900, interest: 1270 },
  { month: "Apr", principal: 1950, interest: 1220 },
  { month: "May", principal: 2000, interest: 1170 },
  { month: "Jun", principal: 2050, interest: 1120 },
];

const Debt = () => {
  const totalDebt = debts.reduce((sum, debt) => sum + debt.remaining, 0);
  const totalEMI = debts.reduce((sum, debt) => sum + debt.emi, 0);
  const totalPaid = debts.reduce((sum, debt) => sum + (debt.total - debt.remaining), 0);
  const overallProgress = (totalPaid / debts.reduce((sum, d) => sum + d.total, 0)) * 100;

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Debt & Loan Manager</h1>
        <p className="text-muted-foreground">
          Track your loans and plan debt reduction strategy
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Total Debt</p>
                <h3 className="text-3xl font-bold">${totalDebt.toLocaleString()}</h3>
                <Progress value={overallProgress} className="h-2 mt-3" />
                <p className="text-xs text-muted-foreground mt-1">
                  {overallProgress.toFixed(1)}% paid off
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Monthly EMI</p>
                <h3 className="text-3xl font-bold">${totalEMI.toLocaleString()}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  4 active loans
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Total Paid</p>
                <h3 className="text-3xl font-bold text-success">
                  ${totalPaid.toLocaleString()}
                </h3>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingDown className="h-4 w-4 text-success" />
                  <p className="text-sm text-success">Debt reducing</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Repayment Schedule */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Repayment Schedule Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={repaymentSchedule}>
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
              <Bar dataKey="principal" fill="hsl(var(--success))" radius={[8, 8, 0, 0]} />
              <Bar dataKey="interest" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-sm text-muted-foreground">Principal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <span className="text-sm text-muted-foreground">Interest</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Debts */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Active Loans</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {debts.map((debt) => {
            const progress = ((debt.total - debt.remaining) / debt.total) * 100;
            const statusColor =
              debt.status === "High Interest"
                ? "destructive"
                : "success";

            return (
              <div
                key={debt.id}
                className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{debt.name}</h4>
                      <Badge variant="secondary">{debt.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Interest Rate: {debt.rate}% | Next Due: {debt.nextDue}
                    </p>
                  </div>
                  <Badge variant={statusColor as any}>{debt.status}</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Remaining</span>
                    <span className="font-medium">
                      ${debt.remaining.toLocaleString()} / $
                      {debt.total.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {progress.toFixed(1)}% paid off
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-sm text-muted-foreground">Monthly EMI</span>
                  <span className="text-lg font-bold">${debt.emi}</span>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card className="gradient-primary border-none">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            💡 Debt Reduction Strategy
          </h3>
          <ul className="space-y-2 text-white/90 text-sm">
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>
                Prioritize paying off your Credit Card debt first - it has the
                highest interest rate at 18.9%
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>
                Consider refinancing your car loan to reduce your interest rate and
                save $1,200 over the loan period
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>
                Making one extra payment per year on your home loan could save you
                $15,000 in interest
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Debt;
