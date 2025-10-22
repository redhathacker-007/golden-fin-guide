import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  Target,
  TrendingUp,
  CreditCard,
  Receipt,
  GraduationCap,
  User,
  Sparkles,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Budget & Cash Flow", url: "/budget", icon: Wallet },
  { title: "Savings & Goals", url: "/savings", icon: Target },
  { title: "Investment Planner", url: "/investments", icon: TrendingUp },
  { title: "Debt Manager", url: "/debt", icon: CreditCard },
  { title: "Tax & Insurance", url: "/tax", icon: Receipt },
  { title: "Education Hub", url: "/education", icon: GraduationCap },
  { title: "Profile & Settings", url: "/profile", icon: User },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-sidebar-accent text-sidebar-primary font-medium"
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground";

  return (
    <Sidebar className={open ? "w-64" : "w-16"}>
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {open && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-sidebar-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-sidebar-foreground">FinMate</span>
          </div>
        )}
        <SidebarTrigger className="text-sidebar-foreground hover:bg-sidebar-accent" />
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 px-4">
            {open && "Main Menu"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={getNavCls}
                    >
                      <item.icon className={open ? "mr-3 h-5 w-5" : "h-5 w-5"} />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {open && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="bg-sidebar-accent rounded-lg p-3">
            <p className="text-xs text-sidebar-foreground/80">
              Premium Financial Intelligence
            </p>
            <p className="text-[10px] text-sidebar-foreground/60 mt-1">
              Powered by AI
            </p>
          </div>
        </div>
      )}
    </Sidebar>
  );
}
