import { useMemo, useState } from 'react';
import {
  BookOpen, Brain, ChartNoAxesCombined, Check, ChevronDown, CircleHelp,
  Clock3, FileText, Flame, GraduationCap, Languages, LayoutDashboard,
  Menu, MessageCircle, Search, Settings, Sparkles, Target, Trophy,
  X, Zap, ClipboardList, NotebookPen, CalendarDays, Library,
} from 'lucide-react';

type ToolItem = { title: string; description: string; icon: typeof Brain; tone: string; tag?: string };

const tools: ToolItem[] = [
  { title: 'AI Study Chat', description: 'Understand any topic with a personal AI tutor.', icon: MessageCircle, tone: 'violet', tag: 'Popular' },
  { title: 'Notes Generator', description: 'Create clear, exam-ready notes chapter by chapter.', icon: NotebookPen, tone: 'blue' },
  { title: 'MCQ Practice', description: 'Generate questions and learn from every answer.', icon: Target, tone: 'green' },
  { title: 'Mock Tests', description: 'Attempt timed tests and review your performance.', icon: ClipboardList, tone: 'orange' },
  { title: 'Ask Your PDF', description: 'Chat with your own notes, books and study material.', icon: FileText, tone: 'pink', tag: 'New' },
  { title: 'Flashcards', description: 'Remember key facts with quick revision cards.', icon: Brain, tone: 'yellow' },
  { title: 'Study Planner', description: 'Build a realistic daily plan for your goals.', icon: CalendarDays, tone: 'cyan' },
  { title: 'My Library', description: 'Keep your saved notes and learning material together.', icon: Library, tone: 'indigo' },
];

const navigation = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'AI Study Tools', icon: Sparkles },
  { label: 'My Learning', icon: BookOpen },
  { label: 'Progress', icon: ChartNoAxesCombined },
];

function App() {
  const [active, setActive] = useState('Overview');
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('English');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const filteredTools = useMemo(
    () => tools.filter((tool) => (tool.title + ' ' + tool.description).toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  const chooseTool = (title: string) => {
    setActive(title);
    setNotice(title + ' is part of the StudyMind AI build. Its learning workflow will be connected in the next development stage.');
  };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <div className="brand-mark"><GraduationCap size={23} /></div>
          <div><strong>StudyMind<span> AI</span></strong><small>YOUR LEARNING SPACE</small></div>
          <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={19} /></button>
        </div>
        <div className="workspace-label">WORKSPACE</div>
        <nav className="nav-list">
          {navigation.map((item) => {
            const Icon = item.icon;
            return <button key={item.label} className={`nav-item ${active === item.label ? 'active' : ''}`} onClick={() => { setActive(item.label); setMobileOpen(false); setNotice(''); }}>
              <Icon size={18} /><span>{item.label}</span>{item.label === 'AI Study Tools' && <span className="nav-count">8</span>}
            </button>;
          })}
        </nav>
        <div className="sidebar-divider" />
        <div className="workspace-label">YOUR STUDY</div>
        <button className="nav-item" onClick={() => chooseTool('My Syllabus')}><BookOpen size={18} /><span>My Syllabus</span></button>
        <button className="nav-item" onClick={() => chooseTool('Saved Notes')}><FileText size={18} /><span>Saved Notes</span></button>
        <button className="nav-item" onClick={() => chooseTool('Study Planner')}><CalendarDays size={18} /><span>Study Planner</span></button>
        <div className="sidebar-spacer" />
        <div className="upgrade-card">
          <div className="upgrade-icon"><Zap size={17} /></div>
          <strong>Learning without limits</strong>
          <p>Start with free tools made for your study journey.</p>
          <span className="free-pill">FREE ACCESS</span>
        </div>
        <button className="nav-item settings-link" onClick={() => chooseTool('Settings')}><Settings size={18} /><span>Settings</span></button>
        <div className="profile-mini"><div className="avatar">S</div><div><strong>Student</strong><small>Free account</small></div><ChevronDown size={16} /></div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="icon-button menu-trigger" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu size={21} /></button>
          <div className="breadcrumb">Workspace <span>/</span> <strong>{active}</strong></div>
          <div className="top-actions">
            <label className="language-select"><Languages size={16} /><select value={language} onChange={(e) => setLanguage(e.target.value)} aria-label="Language"><option>English</option><option>हिन्दी</option></select></label>
            <button className="help-button" onClick={() => setNotice('Help centre will be available as the app modules are completed.')}><CircleHelp size={17} /><span>Help</span></button>
            <div className="avatar top-avatar">S</div>
          </div>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div><div className="eyebrow"><Sparkles size={14} /> YOUR PERSONAL LEARNING COMPANION</div>
              <h1>Make today a <span>smart study day.</span></h1>
              <p>Small steps every day. Big results over time.</p>
            </div>
            <div className="date-chip"><CalendarDays size={16} /> Your learning dashboard</div>
          </section>

          <section className="hero-card">
            <div className="hero-copy">
              <div className="hero-label"><span className="live-dot" /> YOUR NEXT STEP STARTS HERE</div>
              <h2>Learn at your pace.<br /><em>Grow with confidence.</em></h2>
              <p>Your study space for clear explanations, focused practice and better preparation.</p>
              <button className="primary-button" onClick={() => { setActive('AI Study Tools'); setNotice('Choose a study tool below to explore the StudyMind AI learning modules.'); }}>Explore study tools <span>→</span></button>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="art-glow" /><div className="book-illustration"><BookOpen size={68} strokeWidth={1.25} /></div>
              <div className="floating-note note-one"><Sparkles size={17} /><span>Learn smarter</span></div>
              <div className="floating-note note-two"><Check size={17} /><span>Stay on track</span></div>
              <div className="floating-dot dot-one" /><div className="floating-dot dot-two" />
            </div>
          </section>

          <section className="stats-grid">
            <div className="stat-card"><div className="stat-icon purple"><Flame size={18} /></div><div><small>Study streak</small><strong>Start today</strong><span>Build your daily habit</span></div></div>
            <div className="stat-card"><div className="stat-icon blue"><Clock3 size={18} /></div><div><small>Study time</small><strong>Ready when you are</strong><span>Your progress appears here</span></div></div>
            <div className="stat-card"><div className="stat-icon green"><Trophy size={18} /></div><div><small>Learning goal</small><strong>Set your first goal</strong><span>One step at a time</span></div></div>
          </section>

          <section className="tools-section">
            <div className="section-heading"><div><div className="eyebrow">LEARN • PRACTISE • IMPROVE</div><h2>Study tools for every step</h2><p>Everything you need to make learning more effective.</p></div>
              <div className="search-box"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Find a study tool..." aria-label="Search study tools" /></div>
            </div>
            {notice && <div className="notice"><Sparkles size={17} /><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Dismiss"><X size={16} /></button></div>}
            <div className="tools-grid">
              {filteredTools.map((tool) => { const Icon = tool.icon; return <button className="tool-card" key={tool.title} onClick={() => chooseTool(tool.title)}>
                <div className={`tool-icon ${tool.tone}`}><Icon size={21} /></div>
                <div className="tool-text"><div className="tool-title">{tool.title}{tool.tag && <span className="tool-tag">{tool.tag}</span>}</div><p>{tool.description}</p></div><span className="tool-arrow">↗</span>
              </button>; })}
              {filteredTools.length === 0 && <div className="empty-state">No tools match “{query}”. Try another search.</div>}
            </div>
          </section>
          <footer className="footer"><span>© 2026 StudyMind AI</span><span>Built for curious minds <span className="footer-heart">♥</span></span><span>Learn Smarter. Prepare Better. Achieve More.</span></footer>
        </div>
      </main>
    </div>
  );
}

export default App;
