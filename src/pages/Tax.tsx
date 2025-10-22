import { Receipt, Shield, AlertCircle, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const taxDeductions = [
  { name: "80C - Tax Saving Investments", limit: 150000, used: 120000 },
  { name: "80D - Health Insurance", limit: 25000, used: 18000 },
  { name: "80E - Education Loan Interest", limit: 0, used: 15000 },
  { name: "24B - Home Loan Interest", limit: 200000, used: 180000 },
];

const insurancePolicies = [
  {
    type: "Life Insurance",
    provider: "MetLife",
    coverage: 500000,
    premium: 12000,
    status: "Active",
  },
  {
    type: "Health Insurance",
    provider: "BlueCross",
    coverage: 300000,
    premium: 18000,
    status: "Active",
  },
  {
    type: "Vehicle Insurance",
    provider: "StateFarm",
    coverage: 50000,
    premium: 6000,
    status: "Renewal Due",
  },
];

const taxSavingOptions = [
  {
    name: "PPF (Public Provident Fund)",
    returns: "7.1%",
    lockIn: "15 years",
    taxBenefit: "80C",
    recommended: true,
  },
  {
    name: "ELSS Mutual Funds",
    returns: "12-15%",
    lockIn: "3 years",
    taxBenefit: "80C",
    recommended: true,
  },
  {
    name: "National Pension Scheme",
    returns: "9-12%",
    lockIn: "Till 60",
    taxBenefit: "80CCD",
    recommended: false,
  },
  {
    name: "Tax Saver FD",
    returns: "5.5-7%",
    lockIn: "5 years",
    taxBenefit: "80C",
    recommended: false,
  },
];

const Tax = () => {
  const estimatedTax = 85000;
  const taxSaved = 45000;

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Tax & Insurance Planner</h1>
        <p className="text-muted-foreground">
          Optimize your tax liabilities and insurance coverage
        </p>
      </div>

      {/* Tax Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="card-hover gradient-card">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Estimated Tax Liability
                </p>
                <h3 className="text-3xl font-bold">
                  ${estimatedTax.toLocaleString()}
                </h3>
                <p className="text-sm text-warning mt-2">For FY 2024-25</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                <Receipt className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Tax Saved</p>
                <h3 className="text-3xl font-bold text-success">
                  ${taxSaved.toLocaleString()}
                </h3>
                <p className="text-sm text-success mt-2">
                  Through deductions
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                <Check className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tax Deductions */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Tax Deduction Utilization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {taxDeductions.map((deduction) => {
            const usagePercent = deduction.limit
              ? (deduction.used / deduction.limit) * 100
              : 100;
            const remaining = deduction.limit - deduction.used;

            return (
              <div key={deduction.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{deduction.name}</span>
                  {deduction.limit > 0 && remaining > 0 && (
                    <Badge variant="secondary">
                      ${remaining.toLocaleString()} remaining
                    </Badge>
                  )}
                </div>
                <Progress value={Math.min(usagePercent, 100)} className="h-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${deduction.used.toLocaleString()} used</span>
                  {deduction.limit > 0 && (
                    <span>Limit: ${deduction.limit.toLocaleString()}</span>
                  )}
                  {deduction.limit === 0 && <span>No limit</span>}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Tax Saving Options */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Tax Saving Investment Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {taxSavingOptions.map((option, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  option.recommended
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold">{option.name}</h4>
                  {option.recommended && (
                    <Badge className="bg-accent text-accent-foreground">
                      Recommended
                    </Badge>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Returns:</span>
                    <span className="font-medium">{option.returns}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lock-in:</span>
                    <span className="font-medium">{option.lockIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Section:</span>
                    <Badge variant="outline">{option.taxBenefit}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insurance Coverage */}
      <Card className="card-hover">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Insurance Coverage</CardTitle>
            <Button variant="outline" size="sm">
              Add Policy
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {insurancePolicies.map((policy, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{policy.type}</h4>
                    <p className="text-sm text-muted-foreground">
                      {policy.provider}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={
                    policy.status === "Active" ? "secondary" : "destructive"
                  }
                >
                  {policy.status}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Coverage</p>
                  <p className="font-semibold">
                    ${policy.coverage.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Annual Premium
                  </p>
                  <p className="font-semibold">
                    ${policy.premium.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      <Card className="gradient-accent border-none">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                Tax Optimization Tips
              </h3>
              <ul className="space-y-2 text-white/90 text-sm">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    You still have $30,000 remaining in 80C deductions - invest
                    before March to save $9,000 in taxes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    Consider increasing your health insurance coverage to maximize
                    80D benefits
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>
                    Your vehicle insurance renewal is due - renew early to avoid
                    penalties
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

export default Tax;
