import { toggleTheme } from "@/features/ThemeSlice";
import { Menu, Moon, Search, Sun, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { defaultNavItems, searchItems, type NavbarProps } from "./navData";

const Navbar = ({
  logo = "EaseUi",
  navItems = defaultNavItems,
  showSearch = true,
  showThemeToggle = true,
}: NavbarProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSearchItems = searchItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSearchSelect = (path: string) => {
    setSearchQuery("");
    navigate(path);
  };

  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme,
  );

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="sticky top-0 z-[100] w-full h-16 border-b border-(--border-color) bg-(--bg-color)">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo + Search */}
        <div className="flex items-center gap-6 lg:gap-10">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-2xl sm:text-4xl font-bold tracking-tight text-(--heading-color)
              cursor-pointer select-none"
          >
            {logo === "EaseUi" ? (
              <>
                Ease<span className="text-(--primary-color)">Ui</span>
              </>
            ) : (
              logo
            )}
          </button>

          {/* Search */}
          {showSearch && (
            <div className="relative hidden sm:block w-48 md:w-64 lg:w-72">
              <div
                className="flex items-center w-full h-10 px-3 rounded-lg border border-(--border-color)
                bg-(--bg-box-light) focus-within:border-(--primary-color)"
              >
                <Search size={17} className="shrink-0 text-(--muted-text)" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search components..."
                  className="w-full ml-2 bg-transparent outline-none text-sm text-(--text-color) placeholder:text-(--placeholder-text)"
                />
              </div>

              {/* Search Results */}
              {searchQuery.trim() && (
                <div
                  className="absolute top-12 left-0 w-full max-h-80 overflow-y-auto rounded-lg
                  border border-(--border-color) bg-(--bg-color) shadow-xl p-1"
                >
                  {filteredSearchItems.length > 0 ? (
                    filteredSearchItems.map((item) => (
                      <button
                        key={item.path}
                        type="button"
                        onClick={() => handleSearchSelect(item.path)}
                        className="flex w-full items-center px-3 py-2.5 rounded-md text-left text-sm cursor-pointer
                        text-(--text-color) hover:bg-(--hover-bg) hover:text-(--primary-color) transition-colors"
                      >
                        {item.label}
                      </button>
                    ))
                  ) : (
                    <div className="px-3 py-3 text-sm text-(--muted-text)">
                      No components found.
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer
                    ${
                      isActive
                        ? "bg-(--hover-bg) text-(--primary-color)"
                        : "text-(--text-color) hover:bg-(--hover-bg)"
                    }
                  `
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Divider */}
          {showThemeToggle && (
            <div className="h-6 w-px bg-(--border-color) mx-3" />
          )}

          {/* Theme Toggle */}
          {showThemeToggle && (
            <button
              type="button"
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-(--border-color)
                bg-(--bg-box-light) text-(--text-color) hover:bg-(--hover-bg) cursor-pointer transition-colors"
            >
              {mode === "dark" ? (
                <Sun size={18} className="text-(--primary-color)" />
              ) : (
                <Moon size={18} className="text-(--muted-text)" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Theme Toggle */}
          {showThemeToggle && (
            <button
              type="button"
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-(--border-color)
                bg-(--bg-box-light) text-(--text-color) hover:bg-(--hover-bg) cursor-pointer"
            >
              {mode === "dark" ? (
                <Sun size={18} className="text-(--primary-color)" />
              ) : (
                <Moon size={18} className="text-(--muted-text)" />
              )}
            </button>
          )}

          {/* Menu */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex items-center justify-center w-9 h-9 rounded-md border border-(--border-color)
              bg-(--bg-box-light) text-(--text-color) hover:bg-(--hover-bg) cursor-pointer"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden absolute top-16 left-0 w-full px-4 py-4 bg-(--bg-color)
            border-b border-(--border-color) shadow-lg"
        >
          {/* Mobile Search */}
          {showSearch && (
            <div className="relative mb-4">
              <div
                className="flex items-center h-10 px-3 rounded-lg border border-(--border-color)
                bg-(--bg-box-light) focus-within:border-(--primary-color)"
              >
                <Search size={17} className="shrink-0 text-(--muted-text)" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search components..."
                  className="w-full ml-2 bg-transparent outline-none text-sm text-(--text-color) placeholder:text-(--placeholder-text)"
                />
              </div>

              {searchQuery.trim() && (
                <div
                  className="absolute top-12 left-0 w-full max-h-64 overflow-y-auto rounded-lg
                  border border-(--border-color) bg-(--bg-color) shadow-xl p-1 z-50"
                >
                  {filteredSearchItems.length > 0 ? (
                    filteredSearchItems.map((item) => (
                      <button
                        key={item.path}
                        type="button"
                        onClick={() => {
                          handleSearchSelect(item.path);
                          setIsMenuOpen(false);
                        }}
                        className="flex w-full items-center px-3 py-2.5 rounded-md text-left text-sm text-(--text-color)
                        hover:bg-(--hover-bg) hover:text-(--primary-color) transition-colors cursor-pointer"
                      >
                        {item.label}
                      </button>
                    ))
                  ) : (
                    <div className="px-3 py-3 text-sm text-(--muted-text)">
                      No components found.
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Mobile Links */}
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full px-4 py-3 rounded-md text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-(--hover-bg) text-(--primary-color)"
                      : "text-(--text-color) hover:bg-(--hover-bg)"
                  }
                `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
