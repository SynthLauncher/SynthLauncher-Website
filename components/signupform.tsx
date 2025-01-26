import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SignUpForm = () => {
  return (
    <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-white mb-4">Create Account</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-purple-200">
              First Name
            </Label>
            <Input
              id="firstName"
              className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-purple-200">
              Last Name
            </Label>
            <Input
              id="lastName"
              className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="signupEmail" className="text-purple-200">
            Email
          </Label>
          <Input
            id="signupEmail"
            type="email"
            className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signupPassword" className="text-purple-200">
            Password
          </Label>
          <Input
            id="signupPassword"
            type="password"
            className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
          />
        </div>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          Create Account
        </Button>
      </form>
    </Card>
  );
};

export default SignUpForm;
