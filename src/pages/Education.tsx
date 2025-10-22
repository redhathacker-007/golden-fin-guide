import { BookOpen, Award, TrendingUp, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const modules = [
  {
    id: 1,
    title: "Financial Basics",
    description: "Understanding income, expenses, and budgeting",
    lessons: 8,
    completed: 8,
    duration: "45 min",
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "Smart Saving Strategies",
    description: "Build emergency funds and achieve your goals",
    lessons: 6,
    completed: 4,
    duration: "30 min",
    difficulty: "Beginner",
  },
  {
    id: 3,
    title: "Investment 101",
    description: "Introduction to stocks, bonds, and mutual funds",
    lessons: 10,
    completed: 2,
    duration: "60 min",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "Debt Management",
    description: "Strategies to pay off loans efficiently",
    lessons: 7,
    completed: 0,
    duration: "40 min",
    difficulty: "Beginner",
  },
  {
    id: 5,
    title: "Tax Planning",
    description: "Maximize deductions and minimize liability",
    lessons: 9,
    completed: 0,
    duration: "50 min",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "Retirement Planning",
    description: "Secure your future with smart planning",
    lessons: 12,
    completed: 0,
    duration: "75 min",
    difficulty: "Advanced",
  },
];

const tips = [
  {
    title: "The 50/30/20 Rule",
    description:
      "Allocate 50% to needs, 30% to wants, and 20% to savings. This simple rule helps maintain financial balance.",
    category: "Budgeting",
  },
  {
    title: "Emergency Fund Priority",
    description:
      "Build an emergency fund covering 6 months of expenses before aggressive investing. Financial security comes first.",
    category: "Savings",
  },
  {
    title: "Start Investing Early",
    description:
      "Thanks to compound interest, starting 10 years earlier can result in 2-3x more wealth at retirement.",
    category: "Investment",
  },
  {
    title: "Avoid Lifestyle Inflation",
    description:
      "When income increases, avoid proportionally increasing expenses. Save the difference to build wealth faster.",
    category: "Behavior",
  },
];

const achievements = [
  { name: "First Budget", icon: Target, unlocked: true },
  { name: "Savings Started", icon: TrendingUp, unlocked: true },
  { name: "Investment Basics", icon: Award, unlocked: false },
  { name: "Debt Free", icon: Target, unlocked: false },
];

const Education = () => {
  const totalLessons = modules.reduce((sum, mod) => sum + mod.lessons, 0);
  const completedLessons = modules.reduce((sum, mod) => sum + mod.completed, 0);
  const overallProgress = (completedLessons / totalLessons) * 100;

  const difficultyColors: Record<string, string> = {
    Beginner: "success",
    Intermediate: "warning",
    Advanced: "destructive",
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Education Hub</h1>
        <p className="text-muted-foreground">
          Learn financial literacy and build better money habits
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="gradient-card border-2 border-primary/20 card-hover">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-1">Your Learning Progress</h3>
              <p className="text-muted-foreground">
                {completedLessons} of {totalLessons} lessons completed
              </p>
            </div>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>
          <Progress value={overallProgress} className="h-4 mb-2" />
          <p className="text-sm text-muted-foreground text-right">
            {overallProgress.toFixed(1)}% Complete
          </p>
        </CardContent>
      </Card>

      {/* Learning Modules */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Learning Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => {
            const progress = (module.completed / module.lessons) * 100;
            const isCompleted = module.completed === module.lessons;

            return (
              <Card key={module.id} className="card-hover">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="mb-2">{module.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {module.description}
                      </p>
                    </div>
                    <Badge
                      variant={
                        difficultyColors[module.difficulty] as any
                      }
                    >
                      {module.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">
                        {module.completed}/{module.lessons} lessons
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-muted-foreground">
                      ⏱️ {module.duration}
                    </span>
                    <Button
                      variant={isCompleted ? "outline" : "default"}
                      size="sm"
                      className={
                        !isCompleted && progress === 0
                          ? "gradient-accent"
                          : ""
                      }
                    >
                      {isCompleted
                        ? "Review"
                        : progress > 0
                        ? "Continue"
                        : "Start"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Financial Tips */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Financial Tips & Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">💡</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{tip.title}</h4>
                    <Badge variant="secondary" className="mb-2">
                      {tip.category}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Your Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    achievement.unlocked
                      ? "border-accent bg-accent/5"
                      : "border-border opacity-50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 ${
                      achievement.unlocked
                        ? "bg-accent/20"
                        : "bg-muted"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        achievement.unlocked
                          ? "text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <p className="text-xs font-medium">{achievement.name}</p>
                  {achievement.unlocked && (
                    <Badge variant="secondary" className="mt-1 text-[10px]">
                      Unlocked
                    </Badge>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Motivational Card */}
      <Card className="gradient-primary border-none">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2">
            Keep Learning! 🎯
          </h3>
          <p className="text-white/90 text-sm">
            Financial literacy is a journey, not a destination. Complete one
            lesson today to get closer to your financial goals. Knowledge is the
            best investment you can make.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
