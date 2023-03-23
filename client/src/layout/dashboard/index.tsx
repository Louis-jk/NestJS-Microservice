import Sidebar from '../../component/dashboard/Sidebar';

const DashboardLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
