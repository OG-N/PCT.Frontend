import React from "react";

import async from "./components/Async";

// All pages that rely on 3rd party components (other than MUI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";
import PresentationLayout from "./layouts/Presentation";
import PSALayout from "./layouts/PSALayout";

// Guards
import AuthGuard from "./components/guards/AuthGuard";

// Auth components
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";
import Page404 from "./pages/auth/Page404";
import Page500 from "./pages/auth/Page500";
import SurveyResults from "./pages/manage/SurveyResults";
import RegionalOperationsTeam from "./pages/manage/RegionalOperationsTeam";
import DeliverableSubmissions from "./pages/manage/DeliverableSubmissions";
import AnnualSurvey from "./pages/manage/AnnualSurvey";
import WorkPlanStatus from "./pages/manage/WorkPlanStatus";
import SalaryApprovalRequests from "./pages/manage/SalaryApprovalRequests";
import TravelApprovalRequests from "./pages/manage/TravelApprovalRequests";

// Dashboard components
const Default = async(() => import("./pages/dashboards/Default"));
const Products = async(() => import("./pages/dashboards/products"));

const CustomerOrders = async(() => import("./pages/dashboards/Default/OutboundPO"));
const CustomerOrdersValidated = async(() => import("./pages/dashboards/Default/CustomerOrdersValidated"));
const CustomerOrdersProducts = async(() => import("./pages/dashboards/products"));


// const Analytics = async(() => import("./pages/dashboards/Analytics"));
// const SaaS = async(() => import("./pages/dashboards/SaaS"));
const Home = async(() => import("./pages/home"));
const HomePage = async(() => import("./pages/home/Home"));
const LandingPage = async(() => import("./pages/home/LandingPage"));
const ControlTower = async (() => import("./pages/control-tower"));
const CustomerUploadPage = async (() => import("./pages/control-tower/OutboundUpload"));
// const HomeAnalytics = async(() => import("./pages/analytics/HomeAnalytics"));
const Inbound = async(() => import("./pages/dashboards/dwh/Inbound"));
const Outbound = async(() => import("./pages/dashboards/dwh/Outbound"));
const Monitoring = async(() => import("./pages/dashboards/dwh/Monitoring"));
const Costing = async(() => import("./pages/dashboards/dwh/Costing"));
const TenderingAndContracting = async(() => import("./pages/dashboards/dwh/TenderingAndContracting"));
const TransportationAndDistribution = async(() => import("./pages/dashboards/dwh/TransportationAndDistribution"));
const ChainOfCustody = async(() => import("./pages/dashboards/dwh/ChainOfCustody"));
const Manage = async(() => import("./pages/manage/index"));
const HqStartUpstatus = async(() => import("./pages/manage/HqStartUpstatus"));
const BuyInStatus = async(() => import("./pages/manage/BuyInStatus"));
const StaffingLevelsHQ = async(() => import("./pages/manage/StaffingLevelsHQ"));
const StaffingLevelsCountries = async(() => import("./pages/manage/StaffingLevelsCountries"));
const KPIDashboard = async(() => import("./pages/manage/KPIDashboard"));
const IncrementalObligationManagement = async(() => import("./pages/manage/IncrementalObligationManagement"));
const DistributionCostAnalysis = async(() => import("./pages/manage/DistributionCostAnalysis"));
const WarehousingCostAnalysis = async(() => import("./pages/manage/WarehousingCostAnalysis"));
const TotalLandedCostsAnalysis = async(() => import("./pages/manage/TotalLandedCostsAnalysis"));
const GlobalFund = async(() => import("./pages/manage/GlobalFund"));
const LetterOfCredit = async(() => import("./pages/manage/LetterOfCredit"));
const Plan = async(() => import("./pages/plan/index"));

const Source = async(() => import("./pages/source/index"));
const SourceProducts = async(() => import("./pages/source/SourceProducts"));
const Warehousing = async(() => import("./pages/source/Warehousing"));

const QuantificationReports = async(() => import("./pages/plan/QuantificationReports"));
const Store = async(() => import("./pages/store/index"));
const Deliver = async(() => import("./pages/deliver"));
const CommodityTracking = async(() => import("./pages/deliver/CommodityTracking"));

const Enable = async(() => import("./pages/enable"));
const CommodityTracker = async(() => import("./pages/enable/CommodityTracker"));
const GreenHouseGasMonitoring = async(() => import("./pages/enable/GreenHouseGasMonitoring"));
const Demand = async(() => import("./pages/enable/Demand"));
const KPMGDeliver = async(() => import("./pages/enable/Deliver"));
const MISAdministration = async(() => import("./pages/MISAdministration"));
const ProfileGeneric = async(() => import("./pages/home/ProfileGeneric"));
const ProfileDanRhodes = async(() => import("./pages/home/ProfileDanRhodes"));
const ProfileJabuNyenwa = async(() => import("./pages/home/ProfileJabuNyenwa"));
const ProfileSeanLockhead = async(() => import("./pages/home/ProfileSeanLockhead"));
const ProfileMarilynNoguera = async(() => import("./pages/home/ProfileMarilynNoguera"));
const MacroEyes = async(() => import("./pages/home/MacroEyes"));
const IncidentManagement = async(() => import("./pages/home/IncidentManagement"));
const MiddleWareStatus = async(() => import("./pages/MISAdministration/MiddleWareStatus"));
const VendorScoreCard = async(() => import("./pages/store/VendorScoreCard"));
const About = async(() => import("./pages/MISAdministration/About"));
const Parsyl = async(() => import("./pages/store/Parsyl"));
const InventoryAnalysis = async(() => import("./pages/store/InventoryAnalysis"));
const SmallBusiness = async(() => import("./pages/manage/SmallBusiness"));
const Shipment = async(() => import("./pages/enable/Shipment"));
const CustomsClearance = async(() => import("./pages/plan/CustomsClearance"));
const OutboundPOValidated = async(() => import("./pages/dashboards/Default/OutboundPOValidated"));
const PSAInboundProductMonitoring = async(() => import("./pages/plan/PSAInboundProductMonitoring"));
const CustomReports = async(() => import("./pages/enable/CustomReports"));
const UserRegistry = async(() => import("./pages/MISAdministration/UserRegistry"));
const NewUserForm = async(() => import("./pages/MISAdministration/NewUserForm"));
const AssignUserRole = async(() => import("./pages/MISAdministration/AssignUserRole"));
const Warehouse = async(() => import("./pages/enable/Warehouse"));
const Transport = async(() => import("./pages/enable/Transport"));
const Inventory = async(() => import("./pages/enable/Inventory"));
const OperationalPlanning = async(() => import("./pages/plan/OperationalPlanning"));
const OutboundMilestoneMonitoring = async(() => import("./pages/plan/OutboundMilestoneMonitoring"));
const InboundMilestoneMonitoring = async(() => import("./pages/plan/InboundMilestoneMonitoring"));
const InventoryOnHand = async(() => import("./pages/plan/InventoryOnHand"));
const InsuranceMonitoring = async(() => import("./pages/plan/InsuranceMonitoring"));
const InsuranceMonitoringAlert = async(() => import("./pages/store/InsuranceMonitoringAlert"));
const StockBalancing = async(() => import("./pages/plan/StockBalancing"));
const HistoricalOrders = async(() => import("./pages/plan/HistoricalOrders"));
const DeliveryPlanning = async(() => import("./pages/plan/DeliveryPlanning"));
const InboundInventoryMonitoring = async(() => import("./pages/plan/InboundInventoryMonitoring"));
const ForecastedOrders = async(() => import("./pages/plan/ForecastedOrders"));
const SupplyAndDemand = async(() => import("./pages/plan/SupplyAndDemand"));
const CMSContentRegistry = async(() => import("./pages/MISAdministration/CMSContentRegistry"));
const CMSContentImpactCreate = async(() => import("./pages/MISAdministration/CMSContentImpact-create"));
const CMSContentImpactList = async(() => import("./pages/MISAdministration/CMSContentImpact-list"));
const CMSContentLeadershipCreate = async(() => import("./pages/MISAdministration/CMSContentLeadership-create"));
const CMSContentLeadershipList = async(() => import("./pages/MISAdministration/CMSContentLeadership-list"));
const UMUsersList = async(() => import("./pages/MISAdministration/UMUsers-list"));
const UMRolesList = async(() => import("./pages/MISAdministration/UMRoles-list"));
const UMOptionRoutesList = async(() => import("./pages/MISAdministration/UMOptionRoutes-List"));
const UMRoleOptionsList = async(() => import("./pages/MISAdministration/UMRoleOptions-List"));
const UMUserRolesList = async(() => import("./pages/MISAdministration/UMUserRoles-List"));
const CustomsRequirements = async(() => import("./pages/plan/CustomsRequirements"));
const StakeholderRegister = async(() => import("./pages/manage/StakeholderRegister"));
const ProofOfDelivery = async(() => import("./pages/deliver/ProofOfDelivery"));
const VendorRegistry = async(() => import("./pages/source/VendorRegistry"));
const NetworkDesign = async(() => import("./pages/source/NetworkDesign"));
const StandardReports = async(() => import("./pages/home/StandardReports"));
const UKHSOTDashboards = async(() => import("./pages/home/UKHSOTDashboards"));
const Distribution = async(()=> import("./pages/source/Distribution"));
const GlobalMonitoring = async(() => import("./pages/enable/GlobalMonitoring"));
const CountryMonitoring = async(() => import("./pages/enable/CountryMonitoring"));
const FreightBillAudit = async(() => import("./pages/home/FreightBillAudit"));
const QuarterlySupplyPlans = async(() => import("./pages/plan/QuarterlySupplyPlans"));
const InsuranceRequirements = async(() => import("./pages/store/InsuranceRequirements"));
const MasterDataRegistry = async(() => import("./pages/master-data-registry/index"));
const Locations = async(() => import("./pages/master-data-registry/locations/index"));
const NewProduct = async(() => import("./pages/master-data-registry/products/NewProduct"));
const MasterDataRegistryProducts = async(() => import("./pages/master-data-registry/products"));
const NewLocation = async(() => import("./pages/master-data-registry/locations/NewLocation"));
const Vendors = async(() => import("./pages/master-data-registry/vendors/index"));
const NewVendor = async(() => import("./pages/master-data-registry/vendors/NewVendor"));
const Carriers = async(() => import("./pages/master-data-registry/carriers/index"));
const NewCarrier = async(() => import("./pages/master-data-registry/carriers/NewCarrier"));
const Unit = async(() => import("./pages/master-data-registry/unit/index"));
const NewUnit = async(() => import("./pages/master-data-registry/unit/NewUnit"));
const Category = async(() => import("./pages/master-data-registry/category/index"));
const NewCategory = async(() => import("./pages/master-data-registry/category/NewCategory"));
const PSA = async(() => import("./pages/psa/index"));
const CreateNewOrder = async(() => import("./pages/psa/order-management/CreateNewOrder"));
const ProductDetails = async(() => import("./pages/psa/order-management/ProductDetails"));
const RequisitionOrderForm = async(() => import("./pages/psa/order-management/RequisitionOrderForm"));

const routes = [
  {
    path: "/",
    element: (
        <AuthGuard>
          <PresentationLayout />
        </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/home",
    element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
         path: "leadership-profile",
         element: <ProfileGeneric />,
      },    
      //{
      //  path: "/dan-rhodes",
      //  element: <ProfileDanRhodes />,
      //},
      //{
      //  path: "/jabu-nyenwa",
      //  element: <ProfileJabuNyenwa />,
      //},
      //{
      //  path: "/sean-lockhead",
      //  element: <ProfileSeanLockhead />,
      //},
      //{
      //  path: "/marilyn-noguera",
      //  element: <ProfileMarilynNoguera />,
      //},
      {
        path: "macro-eyes",
        element: <MacroEyes />,
      },
      {
        path: "incident-management",
        element: <IncidentManagement />,
      },
      {
        path: "standard-reports",
        element: <StandardReports />,
      },
      {
        path: "freight-bill-audit",
        element: <FreightBillAudit />,
      },
      {
        path: "uk-hsot-dashboards",
        element: <UKHSOTDashboards />,
      },
    ],
  },
  {
    path: "/manage",
    element: (<DashboardLayout />),
    children: [
      {
        path: "",
        element: <Manage />
      },
      {
        path: "hq-start-up-status",
        element: <HqStartUpstatus />,
      },
      {
        path: "buy-in-status",
        element: <BuyInStatus />,
      },
      {
        path: "staffing-levels-hq",
        element: <StaffingLevelsHQ />,
      },
      {
        path: "staffing-levels-countries",
        element: <StaffingLevelsCountries />,
      },
      {
        path: "kpi-dashboard",
        element: <KPIDashboard />,
      },
      {
        path: "incremental-obligation-management",
        element: <IncrementalObligationManagement />,
      },
      {
        path: "distribution-cost-analysis",
        element: <DistributionCostAnalysis />,
      },
      {
        path: "warehousing-cost-analysis",
        element: <WarehousingCostAnalysis />,
      },
      {
        path: "total-landed-costs-analysis",
        element: <TotalLandedCostsAnalysis />,
      },
      {
        path: "global-fund",
        element: <GlobalFund />,
      },
      {
        path: "letter-of-credit",
        element: <LetterOfCredit />,
      },
      {
        path: "performance-monitoring",
        element: <Home />,
      },
      {
        path: "survey-results",
        element: <SurveyResults />
      },
      {
        path: "regional-operations-team",
        element: <RegionalOperationsTeam />
      },
      {
        path: "small-business",
        element: <SmallBusiness />,
      },
      {
        path: "deliverable-submissions",
        element: <DeliverableSubmissions />,
      },
      {
        path: "annual-survey",
        element: <AnnualSurvey />,
      },
      {
        path: "work-plan-status",
        element: <WorkPlanStatus />,
      },
      {
        path: "salary-approval-requests",
        element: <SalaryApprovalRequests />,
      },
      {
        path: "travel-approval-requests",
        element: <TravelApprovalRequests />,
      },
      {
        path: "stakeholder-register",
        element: <StakeholderRegister />,
      }
    ],
  },
  {
    path: "/plan",
    element: (<DashboardLayout />),
    children: [
      {
        path: "",
        element: <Plan />
      },
      {
        path: "quantification-reports",
        element: <QuantificationReports />
      },
      {
        path: "psa-inbound-product-monitoring",
        element: <PSAInboundProductMonitoring />,
      },
      {
        path: "customs-clearance",
        element: <CustomsClearance />,
      },
      {
        path: "operational-planning",
        element: <OperationalPlanning />,
      },
      {
        path: "outbound-milestone-monitoring",
        element: <OutboundMilestoneMonitoring />
      },
      {
        path: "inbound-milestone-monitoring",
        element: <InboundMilestoneMonitoring />,
      },
      {
        path: "inventory-on-hand",
        element: <InventoryOnHand />,
      },
      {
        path: "insurance-monitoring",
        element: <InsuranceMonitoring />,
      },
      {
        path: "stock-balancing",
        element: <StockBalancing />,
      },
      {
        path: "historical-orders",
        element: <HistoricalOrders />,
      },
      {
        path: "delivery-planning",
        element: <DeliveryPlanning />,
      },
      {
        path: "inbound-inventory-monitoring",
        element: <InboundInventoryMonitoring />,
      },
      {
        path: "forecasted-orders",
        element: <ForecastedOrders />,
      },
      {
        path: "supply-and-demand",
        element: <SupplyAndDemand />,
      },
      {
        path: "custom-requirements",
        element: <CustomsRequirements />,
      },
      {
        path: "quarterly-supply-plans",
        element: <QuarterlySupplyPlans />,
      }
    ],
  },
  {
    path: "/source",
    element: (<DashboardLayout />),
    children: [
      {
        path: "",
        element: <Source />,
      },
      {
        path: "products",
        element: <SourceProducts />,
      },
      {
        path: "warehousing",
        element: <Warehousing />,
      },
      {
        path: "vendor-registry",
        element: <VendorRegistry />,
      },
      {
        path: "network-design",
        element: <NetworkDesign />,
      },
      {
        path: "distribution",
        element: <Distribution />,
      }
    ],
  },
  {
    path: "/store",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Store />,
      },
      {
        path: "vendor-score-card",
        element: <VendorScoreCard />,
      },
      {
        path: "parsyl",
        element: <Parsyl />
      },
      {
        path: "inventory-analysis",
        element: <InventoryAnalysis />,
      },
      {
        path: "insurance-monitoring",
        element: <InsuranceMonitoringAlert />,
      },
      {
        path: "insurance-requirements",
        element: <InsuranceRequirements />,
      },
    ],
  },
  {
    path: "deliver",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Deliver />,
      },
      {
        path: "commodity-tracking",
        element: <CommodityTracking />,
      },
      {
        path: "proof-of-delivery",
        element: <ProofOfDelivery />,
      }
    ],
  },
  {
    path: "enable",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Enable />,
      },
      {
        path: "commodity-tracker",
        element: <CommodityTracker />,
      },
      {
        path: "green-house-gas-monitoring",
        element: <GreenHouseGasMonitoring />,
      },
      {
        path: "demand",
        element: <Demand />,
      },
      {
        path: "deliver",
        element: <KPMGDeliver />,
      },
      {
        path: "shipment",
        element: <Shipment />,
      },
      {
        path: "custom-reports",
        element: <CustomReports />,
      },
      {
        path: "warehousing",
        element: <Warehouse />,
      },
      {
        path: "transportation",
        element: <Transport />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "global-monitoring",
        element: <GlobalMonitoring />,
      },
      {
        path: "country-monitoring",
        element: <CountryMonitoring />,
      },
    ],
  },
  {
    path: "MISAdministration",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <MISAdministration />,
      },
      {
        path: "middle-ware-status",
        element: <MiddleWareStatus />
      },
    // {
    //   path: "user-registry",
    //   element: <UserRegistry />,
    // },
    // {
    //   path: "new-user-form",
    //   element: <NewUserForm />,
    // },
    // {
    //   path: "assign-user-role",
    //   element: <AssignUserRole />,
    // },
      {
        path: "content-registry",
        element: <CMSContentRegistry />,
      },
      {
        path: "content-impact-create",
        element: <CMSContentImpactCreate />,
      },
      {
        path: "content-impact-list",
        element: <CMSContentImpactList />,
      },
      {
        path: "content-leadership-create",
        element: <CMSContentLeadershipCreate />,
      },
      {
        path: "content-leadership-list",
        element: <CMSContentLeadershipList />,
      },
      {
        path: "users-list",
        element: <UMUsersList />,
      },
      {
        path: "roles-list",
        element: <UMRolesList />,
      },
      {
        path: "optionroutes-List",
        element: <UMOptionRoutesList />,
      },
      {
        path: "roleoptions-List",
        element: <UMRoleOptionsList />,
      },
      {
        path: "userroles-list",
        element: <UMUserRolesList />,
      }
    ],
  },
  {
    path: "about",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <About />,
      },
    ],
  },
  {
    path: "shipment",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "pos",
        element: <Default />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "pos-validated",
        element: <OutboundPOValidated />,
      }
    ]
  },
  {
    path: "customer-orders",
    element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
    ),
    children: [
      {
        path: "pos",
        element: <CustomerOrders />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "pos-validated",
        element: <CustomerOrdersValidated />,
      }
    ]
  },
  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "inbound",
        element: <Inbound />,
      },
      {
        path: "outbound",
        element: <Outbound />,
      },
      {
        path: "monitoring",
        element: <Monitoring />,
      },
      {
        path: "costing",
        element: <Costing />,
      },
      {
        path: "tendering-contracting",
        element: <TenderingAndContracting />,
      },
      {
        path: "ePOD",
      },
      {
        path: "transportation-distribution",
        element: <TransportationAndDistribution />,
      },
      {
        path: "chain-of-custody",
        element: <ChainOfCustody />,
      },
    ],
  },
  {
    path: "control-tower",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <ControlTower />,
      },
    ],
  },
  {
    path: "customer-order-upload",
    element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <CustomerUploadPage />,
      },
    ],
  },
  {
    path: "master-data-registry",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <MasterDataRegistry />,
      },
      {
        path: "products",
        element: <MasterDataRegistryProducts />
      },
      {
        path: "products/new-product",
        element: <NewProduct />,
      },
      {
        path: "products/new-product/:id",
        element: <NewProduct />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "locations/new-location",
        element: <NewLocation />,
      },
      {
        path: "locations/new-location/:id",
        element: <NewLocation />,
      },
      {
        path: "vendors",
        element: <Vendors />,
      },
      {
        path: "vendors/new-vendor",
        element: <NewVendor />,
      },
      {
        path: "vendors/new-vendor/:id",
        element: <NewVendor />,
      },
      {
        path: "carriers",
        element: <Carriers />,
      },
      {
        path: "carriers/new-carrier",
        element: <NewCarrier />
      },
      {
        path: "carriers/new-carrier/:id",
        element: <NewCarrier />
      },
      {
        path: "units",
        element: <Unit />
      },
      {
        path: "units/new-unit",
        element: <NewUnit />,
      },
      {
        path: "units/new-unit/:id",
        element: <NewUnit />,
      },
      {
        path: "categories",
        element: <Category />,
      },
      {
        path: "categories/new-category",
        element: <NewCategory />,
      },
      {
        path: "categories/new-category/:id",
        element: <NewCategory />,
      },
    ],
  },
  {
    path: "psa",
    element: (
        <AuthGuard>
          <PSALayout />
        </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <PSA />,
      },
      {
        path: "create-new-order",
        element: <CreateNewOrder />,
      },
      {
        path: "product-details",
        element: <ProductDetails />,
      },
      {
        path: "requisition-order-form",
        element: <RequisitionOrderForm />
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];


export default routes;
