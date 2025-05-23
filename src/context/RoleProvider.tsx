// Update the RoleContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type Role =
  | "admin"
  | "executive"
  | "designer"
  | "legal/qa"
  | "strategist"
  | "copywriter";

interface RoleContextType {
  role: Role;
  setRole: (role: Role) => void;
  rolePermissions: {
    canEdit: boolean;
    canAccessAdmin: boolean;
    canManageContent: boolean;
    canAccessStrategist: boolean;
    canAccessVisualStudio: boolean;
    canAccessPublishZone: boolean;
    canAccessSignals: boolean;
  };
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>("admin"); // Default role is "admin"

  // Define permissions based on role
  const rolePermissions = {
    canEdit:
      role === "legal/qa" ||
      role === "strategist" ||
      role === "copywriter" ||
      role === "admin" ||
      role === "executive",
    canAccessAdmin: role === "admin" || role === "executive",
    canManageContent:
      role === "designer" ||
      role === "legal/qa" ||
      role === "strategist" ||
      role === "copywriter" ||
      role === "admin" ||
      role === "executive",
    canAccessStrategist: role === "strategist" || role === "legal/qa",
    canAccessVisualStudio: role === "designer",
    canAccessPublishZone: role === "copywriter",
    canAccessSignals:
      role === "designer" ||
      role === "legal/qa" ||
      role === "strategist" ||
      role === "copywriter" ||
      role === "admin" ||
      role === "executive",
  };

  return (
    <RoleContext.Provider value={{ role, setRole, rolePermissions }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
};
