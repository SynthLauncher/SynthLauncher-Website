import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SignInForm = () => {
  return (
    <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-white mb-4">Sign In</h3>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-purple-200">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-purple-200">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
          />
        </div>
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm text-purple-200 hover:text-purple-100">
            Forgot password?
          </a>
          <Button className="bg-purple-600 hover:bg-purple-700">Sign In</Button>
        </div>
      </form>
    </Card>
  );
};

export default SignInForm;
