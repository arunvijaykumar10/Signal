import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AIConfig from "../admin-tools/aiconfig/AiCofig";
import AiConfigure from "../admin-tools/aiconfig/AiConfigure";
import AiSettings from "../admin-tools/aiconfig/AiSettings";
import Assistant from "../CreateZone/Assistant";
import Editor from "../CreateZone/Editor";
import Launcher from "../CreateZone/Launcher";
import Validator from "../CreateZone/Validator";
import VisualStudio from "../CreateZone/VisualStudio";
import Dashboard from "../Dashboard";
import DashboardContent from "../DashboardContent";
import DriftInsightDashboard from "../memory-zone/DriftInsightDashboard";
import GovernanceCenter from "../memory-zone/GovernanceCenterSimple";
import PromptLibrary from "../memory-zone/PromptLibraryFixed";
import SemanticMemoryEngine from "../memory-zone/SemanticMemoryEngine";
import SnippetManager from "../memory-zone/SnippetManager";
import SignalExportHub from "../public-zone/ExportHub";
import IntegrationLayer from "../public-zone/Integration";
import SignalObjectProtocolViewer from "../public-zone/ProtocolViewer";
import UserProfileWireframe from "../user-settings/UserSettings";
import TeamManagement from "../admin-tools/team/TeamManagement";
import CLISDKPanel from "../public-zone/SDK";
import SystemOverview from "../SystemOverview";
import RoleBasedAccessControl from "../admin-tools/access-control/RoleBasedAccessControl";
import CreateNewBoard from "../admin-tools/onboarding-wizard/CreateNewBoard";
import ToneAndGovernanceSetup from "../admin-tools/onboarding-wizard/ToneAndGovernanceSetup";
import PromptSnippetImport from "../admin-tools/onboarding-wizard/PromptSnippetImport";
import IntegrationSetup from "../admin-tools/onboarding-wizard/IntegrationSetup";
import TeamInvitesSetup from "../admin-tools/onboarding-wizard/TeamInvitesSetup";
import WorkspaceSummary from "../admin-tools/onboarding-wizard/WorkspaceSummary";
import MemoryManagement from "../admin-tools/memoryManagement/MemoryManagement";
import MemoryOptimizationSettings from "../admin-tools/memoryManagement/memory-optimization-settings";
import ManualMemoryCleanup from "../admin-tools/memoryManagement/manual-memory-cleanup";
import ArchivedMemoryVault from "../admin-tools/memoryManagement/archived-memory-vault";
import DataRetentionExpiry from "../admin-tools/memoryManagement/data-retention-wireframe";
import AuditTrailView from "../analytics/AuditTrails";
import ContentManagementWorkspace from "../signals/Signals";
import UsageDashboard from "../analytics/UsageDashboard";
import ContentDetailView from "../signals/ContentDetails";
import UserDashboard from "../analytics/UserDashboard";
import UserInvites from "../admin-tools/onboarding-wizard/UserInvites";
import { RoleProvider } from "../context/RoleProvider";

const Main = () => {
  return (
    <RoleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />

          {/* Dashboard Layout with Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardContent />} />
            <Route path="overview" element={<SystemOverview />} />
            {/* Creatzone */}
            <Route path="launcher" element={<Launcher />} />
            <Route path="createzone/editor" element={<Editor />} />
            <Route path="visualstudio" element={<VisualStudio />} />
            <Route path="createzone/validator" element={<Validator />} />
            <Route path="createzone/assistant" element={<Assistant />} />
            {/* Memoryzone */}
            <Route
              path="memoryzone/semanticengine"
              element={<SemanticMemoryEngine />}
            />
            <Route
              path="memoryzone/governance"
              element={<GovernanceCenter />}
            />
            <Route path="memoryzone/prompts" element={<PromptLibrary />} />
            <Route path="memoryzone/snippets" element={<SnippetManager />} />
            <Route path="drift" element={<DriftInsightDashboard />} />
            {/* PubliceZone */}
            <Route path="publishzone/export" element={<SignalExportHub />} />
            <Route
              path="publishzone/integration"
              element={<IntegrationLayer />}
            />
            <Route path="publishzone/cli" element={<CLISDKPanel />} />
            <Route
              path="publishzone/protocol"
              element={<SignalObjectProtocolViewer />}
            />
            <Route path="settings" element={<UserProfileWireframe />} />
            {/* Analytics */}
            <Route path="analytics" element={<UsageDashboard />} />
            <Route path="userdashboard" element={<UserDashboard />} />
            <Route path="analytics/audittrail" element={<AuditTrailView />} />

            {/* Admin Tools */}
            <Route
              path="admintools/memorymanageement"
              element={<MemoryManagement />}
            />
            <Route
              path="admintools/memorymanageement/memoryoptimization"
              element={<MemoryOptimizationSettings />}
            />
            <Route
              path="admintools/memorymanageement/manualmemory"
              element={<ManualMemoryCleanup />}
            />
            <Route
              path="admintools/memorymanageement/retention"
              element={<DataRetentionExpiry />}
            />
            <Route
              path="admintools/memorymanageement/archivedmemory"
              element={<ArchivedMemoryVault />}
            />
            <Route path="admintools/team" element={<TeamManagement />} />
            <Route path="admintools/aiconfig" element={<AIConfig />} />
            <Route
              path="admintools/aiconfig/settings"
              element={<AiSettings />}
            />
            <Route
              path="admintools/aiconfig/configure"
              element={<AiConfigure />}
            />
            <Route
              path="admintools/access"
              element={<RoleBasedAccessControl />}
            />
            <Route path="userinvites" element={<UserInvites />} />
            <Route
              path="admintools/access/wizard"
              element={<CreateNewBoard />}
            />
            <Route
              path="admintools/access/wizard/tone"
              element={<ToneAndGovernanceSetup />}
            />
            <Route
              path="admintools/access/wizard/prompt"
              element={<PromptSnippetImport />}
            />
            <Route
              path="admintools/access/wizard/intergations"
              element={<IntegrationSetup />}
            />
            <Route
              path="admintools/access/wizard/teaminvites"
              element={<TeamInvitesSetup />}
            />
            <Route
              path="admintools/access/wizard/summary"
              element={<WorkspaceSummary />}
            />
            <Route
              path="signals/contentmanagement"
              element={<ContentManagementWorkspace />}
            />
            <Route
              path="contentmanagement/details"
              element={<ContentDetailView />}
            />
          </Route>
        </Routes>
      </Router>
    </RoleProvider>
  );
};

export default Main;
