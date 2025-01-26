import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const PasswordResetForm = () => {
  return (
    <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
      <h3 className="text-xl font-semibold text-white mb-4">Reset Password</h3>
      <p className="text-purple-200/80 mb-4">
        Enter your email to receive password reset instructions.
      </p>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="resetEmail" className="text-purple-200">
            Email
          </Label>
          <Input
            id="resetEmail"
            type="email"
            className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
          />
        </div>
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          Send Reset Link
        </Button>
      </form>
    </Card>
  );
};

export default PasswordResetForm;
