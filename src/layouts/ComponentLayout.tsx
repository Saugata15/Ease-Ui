import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { Menu, X } from "lucide-react";

const components = [
  { label: "Button", path: "button" },
  { label: "Card", path: "card" },
  { label: "Modal", path: "modal" },
  { label: "Input", path: "input" },
  { label: "Navbar", path: "navbar" },
  { label: "Tooltip", path: "tooltip" },
  { label: "Table", path: "table" },
  { label: "Skeleton", path: "skeleton" },
  { label: "Badge", path: "badge" },
  { label: "Progress", path: "progress" },
  { label: "Toast", path: "toast" },
  { label: "Spinner", path: "spinner" },
  { label: "Tabs", path: "tabs" },
];

const ComponentLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="relative flex h-full min-h-0 overflow-x-hidden bg-(--bg-color) text-(--text-color)">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={closeSidebar}
          className="fixed inset-0 z-20 bg-black/40 backdrop-blur-[1px] md:hidden"
        />
      )}

      {/* Mobile Menu Button */}
      <button
        type="button"
        aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={sidebarOpen}
        onClick={() => setSidebarOpen((prev) => !prev)}
        className=
          {`fixed top-20 z-35
          flex h-9 w-9 items-center justify-center
          rounded-lg border border-(--border-color)
          bg-(--card-bg)
          text-(--text-color)
          shadow-sm
          transition-all
          hover:bg-(--hover-bg)
          active:scale-95
          md:hidden ${sidebarOpen ? `left-40` : `left-4`}`}
      >
        {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed overflow-y-scroll left-0 top-16 bottom-0 z-30 w-56 lg:w-64 border-r border-(--border-color) px-4 py-6
          transition-transform duration-300 ease-in-out md:top-16 md:translate-x-0 bg-(--bg-color)
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="mb-6 px-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-(--muted-text)">
            Documentation
          </p>

          <h2 className="mt-1 text-base font-semibold text-(--heading-color)">
            Components
          </h2>
        </div>

        {/* Navigation */}
        <nav aria-label="Component navigation">
          <ul className="space-y-1">
            {components.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `group flex items-center rounded-lg px-3 py-2.5 text-sm transition-all duration-200
                    ${
                      isActive
                        ? `bg-(--primary-soft) font-medium text-(--primary-color)`
                        : `text-(--muted-text) hover:bg-(--hover-bg) hover:text-(--text-color)`
                    }
                  `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active indicator */}
                      <span
                        className={`
                          mr-3 h-1.5 w-1.5 rounded-full transition-all
                          ${
                            isActive
                              ? "bg-(--primary-color)"
                              : "bg-transparent group-hover:bg-(--border-color)"
                          }
                        `}
                      />

                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 overflow-y-auto md:ml-56 lg:ml-64">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 md:px-8 lg:px-10 lg:py-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ComponentLayout;
