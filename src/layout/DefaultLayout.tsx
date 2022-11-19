import { AppContent, AppFooter, AppHeader } from "src/components/layout/index";

const DefaultLayout = () => {
  return (
    <div>
      <div>
        <AppHeader />
        <div>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
