
import { ReactNode } from "react";
import ManagerCards from "./components/ManagerCard";

export default function LayoutManager({
  children,
  count,
}: {
  children: ReactNode;
  count: ReactNode;
}) {
  return (
    <>
      <div className="w-4/12 h-[90vh] max-h-[90vh] overflow-hidden px-5 overflow-y-auto">
        <ManagerCards />
      </div>
      <div className="w-7/12 flex flex-col items-center justify-center gap-10">
        <div>{children}</div>
        <div>{count}</div>
      </div>
    </>
  );
}
