"use client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-base-200">
      <div className="drawer lg:drawer-open h-full">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        
        <div className="drawer-content flex flex-col h-full">

        
          <div className="navbar bg-base-100 border-b px-4 shrink-0">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="dashboard-drawer"
                className="btn btn-square btn-ghost"
              >
                ☰
              </label>
            </div>

            <div className="flex-1">
              <h1 className="text-lg font-semibold">
                AI Interview Platform
              </h1>
            </div>

            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-8 rounded-full bg-primary text-white flex items-center justify-center">
                    B
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
                >
                  <li><a>Profile</a></li>
                  <li><a className="text-error">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
         
          <main className="flex-1 overflow-y-auto bg-base-200">
           <div className="max-w-7xl mx-auto px-4 py-6">
            {children}
           </div>
          </main>

        </div>

        <div className="drawer-side h-full">
          <label
            htmlFor="dashboard-drawer"
            className="drawer-overlay"
          ></label>

          <aside className="w-64 bg-base-100 border-r h-full">
            <div className="p-4 font-bold text-lg">
              Dashboard
            </div>

            <ul className="menu p-2">
              <li><a href="/dashboard">Workspaces</a></li>
              <li><a href="/dashboard/candidates">Candidates</a></li>
              <li><a href="/dashboard/interviews">Interviews</a></li>
              <li><a href="/dashboard/job-descriptions">Job Descriptions</a></li>
              <li><a href="/dashboard/questions">Questions</a></li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
