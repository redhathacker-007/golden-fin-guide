import { Plus, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const savingsGoals = [
  {
    id: 1,
    name: "Emergency Fund",
    description: "6 months of expenses",
    target: 20000,
    current: 12000,
    deadline: "Dec 2025",
    priority: "high",
    category: "Essential",
  },
  {
    id: 2,
    name: "Dream Vacation",
    description: "Europe trip",
    target: 5000,
    current: 3000,
    deadline: "Jun 2025",
    priority: "medium",
    category: "Lifestyle",
  },
  {
    id: 3,
    name: "New Car",
    description: "Down payment",
    target: 30000,
    current: 15000,
    deadline: "Dec 2026",
    priority: "medium",
    category: "Major Purchase",
  },
  {
    id: 4,
    name: "Home Renovation",
    description: "Kitchen remodel",
    target: 15000,
    current: 4500,
    deadline: "Mar 2026",
    priority: "low",
    category: "Home",
  },
  {
    id: 5,
    name: "Retirement Fund",
    description: "Long-term savings",
    target: 500000,
    current: 125000,
    deadline: "2045",
    priority: "high",
    category: "Retirement",
  },
];

const Savings = () => {
  const totalTarget = savingsGoals.reduce((sum, goal) => sum + goal.target, 0);
  const totalCurrent = savingsGoals.reduce((sum, goal) => sum + goal.current, 0);
  const overallProgress = (totalCurrent / totalTarget) * 100;

  const priorityColors = {
    high: "destructive",
    medium: "warning",
    low: "secondary",
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold mb-2">Savings & Goals</h1>
          <p className="text-muted-foreground">
            Track progress towards your financial goals
          </p>
        </div>
        <Button className="gradient-accent">
          <Plus className="mr-2 h-4 w-4" />
          New Goal
        </Button>
      </div>

      {/* Overall Progress */}
      <Card className="gradient-card border-2 border-primary/20 card-hover">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-1">Overall Goal Progress</h3>
              <p className="text-muted-foreground">
                You've saved ${totalCurrent.toLocaleString()} of your $
                {totalTarget.toLocaleString()} target
              </p>
            </div>
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
          </div>
          <Progress value={overallProgress} className="h-4 mb-2" />
          <p className="text-sm text-muted-foreground text-right">
            {overallProgress.toFixed(1)}% Complete
          </p>
        </CardContent>
      </Card>

      {/* Individual Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {savingsGoals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          const monthsRemaining = Math.ceil(
            (new Date(goal.deadline).getTime() - new Date().getTime()) /
              (1000 * 60 * 60 * 24 * 30)
          );
          const monthlyTarget = Math.ceil(remaining / monthsRemaining);

          return (
            <Card key={goal.id} className="card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="mb-2">{goal.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {goal.description}
                    </p>
                  </div>
                  <Badge variant={priorityColors[goal.priority] as any}>
                    {goal.priority}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Progress</span>
                    <span className="text-muted-foreground">
                      ${goal.current.toLocaleString()} / $
                      {goal.target.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  <p className="text-xs text-muted-foreground">
                    {progress.toFixed(1)}% complete
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Remaining</p>
                    <p className="font-semibold">${remaining.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Deadline</p>
                    <p className="font-semibold">{goal.deadline}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Monthly</p>
                    <p className="font-semibold">${monthlyTarget}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {goal.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Savings Tips */}
      <Card className="gradient-accent border-none">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2">
            💡 Smart Savings Tip
          </h3>
          <p className="text-white/90 text-sm">
            Automate your savings! Set up automatic transfers on payday to reach
            your goals faster. Based on your income, you can save an additional
            $500/month without impacting your lifestyle.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Savings;
