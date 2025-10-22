import { User, Mail, Phone, MapPin, Building, Calendar, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Profile & Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and preferences
        </p>
      </div>

      {/* Profile Info */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">John Doe</h3>
              <p className="text-muted-foreground">Premium Member</p>
              <Button variant="outline" size="sm" className="mt-3">
                Change Avatar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="name" defaultValue="John Doe" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  defaultValue="john.doe@email.com"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="dob"
                  type="date"
                  defaultValue="1990-05-15"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation">Occupation</Label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="occupation"
                  defaultValue="Software Engineer"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="location"
                  defaultValue="New York, USA"
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline">Cancel</Button>
            <Button className="gradient-accent">Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      {/* Financial Profile */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Financial Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="income">Annual Income</Label>
              <Input
                id="income"
                type="number"
                defaultValue="75000"
                placeholder="Enter amount"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="risk">Risk Tolerance</Label>
              <select
                id="risk"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option>Conservative</option>
                <option selected>Moderate</option>
                <option>Aggressive</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals">Primary Financial Goal</Label>
              <select
                id="goals"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option>Save for Retirement</option>
                <option selected>Buy a Home</option>
                <option>Start a Business</option>
                <option>Build Emergency Fund</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Investment Timeline</Label>
              <select
                id="timeline"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option>Short Term (1-3 years)</option>
                <option selected>Medium Term (3-10 years)</option>
                <option>Long Term (10+ years)</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* App Settings */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            App Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Receive updates about your finances
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Budget Alerts</p>
                <p className="text-sm text-muted-foreground">
                  Get notified when approaching budget limits
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Investment Updates</p>
                <p className="text-sm text-muted-foreground">
                  Weekly portfolio performance summaries
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">AI Recommendations</p>
                <p className="text-sm text-muted-foreground">
                  Personalized financial advice and tips
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Connected Accounts */}
      <Card className="card-hover">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Connected Bank Accounts</CardTitle>
            <Button variant="outline" size="sm">
              + Add Account
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Chase Checking</p>
                <p className="text-sm text-muted-foreground">****4532</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Disconnect
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Bank of America Savings</p>
                <p className="text-sm text-muted-foreground">****7891</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Disconnect
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="card-hover border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Export Data</p>
              <p className="text-sm text-muted-foreground">
                Download all your financial data
              </p>
            </div>
            <Button variant="outline">Export</Button>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-destructive/20">
            <div>
              <p className="font-medium text-destructive">Delete Account</p>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all data
              </p>
            </div>
            <Button variant="destructive">Delete</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
