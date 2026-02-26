import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from './redux/uiSlice';
import './App.scss';

const componentSections = [
  { id: 'button', label: 'Button' },
  { id: 'modal', label: 'Modal' },
  { id: 'card', label: 'Card' },
  { id: 'table', label: 'Table' },
  { id: 'input', label: 'Input' },
  { id: 'search', label: 'Search' },
  { id: 'dashboard', label: 'Dashboard Example' },
  { id: 'login', label: 'Login Example' },
];

function App() {
  const dispatch = useDispatch();
  const activeSection = useSelector((state) => state.ui.activePage);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'button':
        return (
          <section className="component-card" aria-label="button component section">
            <h2>Button Component</h2>
            <p>Reusable button styles with clear visual hierarchy and state support.</p>
            <div className="button-row">
              <button className="ui-btn ui-btn-primary">Primary</button>
              <button className="ui-btn ui-btn-secondary">Secondary</button>
              <button className="ui-btn ui-btn-outline">Outline</button>
            </div>
          </section>
        );
      case 'modal':
        return (
          <section className="component-card" aria-label="modal component section">
            <h2>Modal Component</h2>
            <p>Use this for confirmations, forms, and other focused interactions.</p>
            <button className="ui-btn ui-btn-primary" onClick={() => setIsModalOpen(true)}>
              Open Modal
            </button>
            {isModalOpen && (
              <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="example modal">
                <div className="modal-content">
                  <h3>Modern Modal</h3>
                  <p>Composable container with clear call-to-action controls.</p>
                  <div className="button-row">
                    <button className="ui-btn ui-btn-outline" onClick={() => setIsModalOpen(false)}>
                      Cancel
                    </button>
                    <button className="ui-btn ui-btn-primary" onClick={() => setIsModalOpen(false)}>
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        );
      case 'card':
        return (
          <section className="component-card" aria-label="card component section">
            <h2>Card + Alert Styles</h2>
            <p>Cards can host reusable content, badges, and alert-style states.</p>
            <div className="example-grid">
              <article className="info-card">
                <h3>Stats Card</h3>
                <p>Monthly signups increased by 12.4%.</p>
              </article>
              <article className="alert-card success">
                <strong>Success</strong>
                <p>Profile settings were saved successfully.</p>
              </article>
              <article className="alert-card warning">
                <strong>Warning</strong>
                <p>Your plan is nearing its storage limit.</p>
              </article>
            </div>
          </section>
        );
      case 'table':
        return (
          <section className="component-card" aria-label="table component section">
            <h2>Table Component</h2>
            <p>Responsive table styles for structured data views.</p>
            <div className="table-wrap">
              <table className="ui-table">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Status</th>
                    <th>Theme</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Button</td>
                    <td>Ready</td>
                    <td>Primary</td>
                  </tr>
                  <tr>
                    <td>Modal</td>
                    <td>Ready</td>
                    <td>Light</td>
                  </tr>
                  <tr>
                    <td>Dashboard</td>
                    <td>Example</td>
                    <td>Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        );
      case 'input':
        return (
          <section className="component-card" aria-label="input component section">
            <h2>Input Component</h2>
            <p>Consistent form control styles for text and email input fields.</p>
            <div className="input-stack">
              <label>
                Full Name
                <input type="text" placeholder="Jordan Smith" />
              </label>
              <label>
                Email Address
                <input type="email" placeholder="name@company.com" />
              </label>
            </div>
          </section>
        );
      case 'search':
        return (
          <section className="component-card" aria-label="search component section">
            <h2>Search Component</h2>
            <p>Reusable search bar with inline action button.</p>
            <div className="search-bar">
              <input type="search" placeholder="Search components..." />
              <button className="ui-btn ui-btn-primary">Search</button>
            </div>
          </section>
        );
      case 'dashboard':
        return (
          <section className="component-card" aria-label="dashboard example section">
            <h2>Dashboard Page Example</h2>
            <p>Combined cards, table rows, and quick action buttons.</p>
            <div className="dashboard-grid">
              <article className="info-card">
                <h3>$48,920</h3>
                <p>Revenue This Month</p>
              </article>
              <article className="info-card">
                <h3>1,284</h3>
                <p>Active Users</p>
              </article>
              <article className="info-card">
                <h3>96.4%</h3>
                <p>Service Uptime</p>
              </article>
            </div>
          </section>
        );
      case 'login':
        return (
          <section className="component-card" aria-label="login example section">
            <h2>Login Page Example</h2>
            <p>Simple modern login form using reusable input and button styles.</p>
            <form className="login-form">
              <label>
                Username
                <input type="text" placeholder="Enter username" />
              </label>
              <label>
                Password
                <input type="password" placeholder="Enter password" />
              </label>
              <button type="button" className="ui-btn ui-btn-primary">
                Sign In
              </button>
            </form>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-shell">
      <aside className="left-nav" aria-label="component navigation">
        <h1>ClearUI</h1>
        <p>Reusable Components</p>
        <nav>
          {componentSections.map((section) => (
            <button
              key={section.id}
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => dispatch(setActivePage(section.id))}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="content-area">{renderSection()}</main>
    </div>
  );
}

export default App;
