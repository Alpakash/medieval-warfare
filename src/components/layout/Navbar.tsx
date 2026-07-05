import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/features/auth/LoginButton";
import LogoutButton from "@/components/features/auth/LogoutButton";
import { useStore } from "@/store";
import logo from "@/assets/images/logo-cross-swords.png";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const user = useStore((state) => state.user);
  const showDialog = useStore((state) => state.showDialog);

  return (
    <nav className="bg-primary text-primary-foreground border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            width="30"
            height="30"
            alt="Medieval Warfare logo"
            className="inline-block"
          />
          <span className="font-semibold text-lg">Medieval Warfare</span>
        </div>

        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Home
            </Link>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => showDialog(true)}
            >
              Buy
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-primary-foreground/80">
                {user.balance} gold
              </span>
              <span className="text-primary-foreground font-medium">
                {user.name}
              </span>
            </div>
            <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
};

export default Navbar;