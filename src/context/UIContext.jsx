import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const UIContext = createContext(null);

export function UIProvider({ children }) {
  // dark mode — mirrors original script.js localStorage('dark-mode') behavior
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'enabled';
  });

  // sidebar open/close (mobile uses body.active too, desktop sidebar is always visible
  // unless toggled closed via menu-btn / close-btn, matching original .side-bar.active class)
  const [sideBarActive, setSideBarActive] = useState(false);

  // search form toggle (mobile dropdown) and profile dropdown — only one open at a time,
  // exactly like original script.js (#search-btn / #user-btn handlers)
  const [searchActive, setSearchActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('dark-mode', darkMode ? 'enabled' : 'disabled');
  }, [darkMode]);

  useEffect(() => {
    document.body.classList.toggle('active', sideBarActive);
  }, [sideBarActive]);

  const toggleDarkMode = useCallback(() => setDarkMode((d) => !d), []);

  const toggleSideBar = useCallback(() => setSideBarActive((s) => !s), []);
  const closeSideBar = useCallback(() => setSideBarActive(false), []);

  const toggleSearch = useCallback(() => {
    setSearchActive((s) => !s);
    setProfileActive(false);
  }, []);

  const toggleProfile = useCallback(() => {
    setProfileActive((p) => !p);
    setSearchActive(false);
  }, []);

  // original script.js: window.onscroll closes profile/search dropdowns always,
  // and closes the sidebar too if window is narrower than 1200px
  useEffect(() => {
    const onScroll = () => {
      setProfileActive(false);
      setSearchActive(false);
      if (window.innerWidth < 1200) {
        setSideBarActive(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const value = {
    darkMode,
    toggleDarkMode,
    sideBarActive,
    toggleSideBar,
    closeSideBar,
    searchActive,
    toggleSearch,
    profileActive,
    toggleProfile,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used within a UIProvider');
  return ctx;
}
