import React, { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  FILES,
  FOLDERS,
  GITHUB,
  LINKEDIN,
  ProjectFile,
  SKILLS,
  pullRequestUrl,
} from './data';
import './App.css';

type Panel = 'file' | 'about';

const fileById = (id: string) => FILES.find((f) => f.id === id);

const readHash = (): { panel: Panel; id: string } => {
  const hash = window.location.hash.slice(1).toLowerCase();
  if (hash === 'about') return { panel: hash, id: FILES[0].id };
  return { panel: 'file', id: fileById(hash)?.id ?? FILES[0].id };
};

const isTyping = (el: Element | null) => el instanceof HTMLInputElement;

const isGoodStatus = (status: string) => /live|download|pypi|merged/i.test(status) && !/not /i.test(status);

const openExternal = (href: string) => window.open(href, '_blank', 'noopener,noreferrer');

function FileRow({
  file,
  selected,
  tabbable,
  onSelect,
  onOpen,
  buttonRef,
}: {
  file: ProjectFile;
  selected: boolean;
  tabbable: boolean;
  onSelect: () => void;
  onOpen: () => void;
  buttonRef: (el: HTMLButtonElement | null) => void;
}) {
  const label = [
    file.name,
    file.file,
    file.blurb,
    file.commits === null ? '' : `${file.commits} commits`,
    `last changed ${file.spokenDate}`,
  ]
    .filter(Boolean)
    .join(', ');
  return (
    <li>
      <button
        ref={buttonRef}
        type="button"
        className={`row${selected ? ' row--on' : tabbable ? ' row--rest' : ''}`}
        aria-current={selected ? 'true' : undefined}
        aria-label={label}
        tabIndex={tabbable ? 0 : -1}
        onClick={(e) => {
          // A keyboard press on the selected row opens it; a mouse uses double click.
          if (selected && e.detail === 0) onOpen();
          else onSelect();
        }}
        onDoubleClick={onOpen}
      >
        <span className="row__file">{file.file}</span>
        <span className="row__blurb">{file.blurb}</span>
        <span className="row__num">{file.commits ?? '-'}</span>
        <span className="row__date">{file.date}</span>
      </button>
    </li>
  );
}

function FileDetails({ file, onZoom }: { file: ProjectFile; onZoom: () => void }) {
  const [lead, ...rest] = file.text;
  return (
    <>
      <div className={`pv__first${file.shot || file.code ? ' pv__first--media' : ''}`}>
      {file.shot && (
        <button type="button" className="shot" onClick={onZoom} aria-label={`View ${file.name} screenshot full size`}>
          <img key={file.id} className="shot__img" src={file.shot.src} alt={file.shot.alt} style={{ objectPosition: file.shot.focus }} />
        </button>
      )}
      {file.code && (
        <pre className="code" tabIndex={0} aria-label={`${file.name} usage example`}>
          <code>{file.code}</code>
        </pre>
      )}
      <h3 className="pv__name">{file.name}</h3>
      <p className="pv__text">{lead}</p>
      <p className="pv__stack">Built with {file.stack}</p>
      {file.pullRequests && (
        <ul className="prs">
          {file.pullRequests.map((pr) => (
            <li key={pr.number}>
              <a href={pullRequestUrl(pr.number)} target="_blank" rel="noreferrer">
                #{pr.number}
              </a>{' '}
              {pr.title}
            </li>
          ))}
        </ul>
      )}
      </div>
      {rest.map((t) => (
        <p key={t} className="pv__text">
          {t}
        </p>
      ))}
      <dl className="facts">
        {file.commits !== null && (
          <>
            <dt>Commits</dt>
            <dd>{file.commits}</dd>
          </>
        )}
        <dt>Changed</dt>
        <dd>{file.spokenDate}</dd>
      </dl>
    </>
  );
}

function About() {
  return (
    <>
      <div className="pv__first">
        <h3 className="pv__name">Hi! I'm Kian.</h3>
        <p className="pv__text">
          I'm a full stack engineer at Sandfield in Auckland, New Zealand, where I was born and raised. I love solving
          problems and have a keen interest in all things computer hardware and software.
        </p>
        <p className="pv__text">
          Outside work I keep building things, a lot of them around cars. I'm always looking to level up my skills and
          love meeting and working with new people.
        </p>
      </div>
      <p className="pv__text">In my free time I enjoy travelling, cooking and eating delicious food, and playing video games.</p>
      <dl className="facts facts--stack">
        <dt>Languages and tools</dt>
        <dd>{SKILLS}</dd>
      </dl>
    </>
  );
}

function App() {
  const initial = useMemo(readHash, []);
  const [panel, setPanel] = useState<Panel>(initial.panel);
  const [selectedId, setSelectedId] = useState(initial.id);
  const [zoomed, setZoomed] = useState(false);
  const [command, setCommand] = useState('');
  const [reply, setReply] = useState('Type HELP for commands');
  const [hasMore, setHasMore] = useState(false);
  const moreRef = useRef<HTMLButtonElement>(null);

  const rows = useRef<Record<string, HTMLButtonElement | null>>({});
  const previewRef = useRef<HTMLElement>(null);
  const previewBody = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  const selected = fileById(selectedId) ?? FILES[0];

  const syncHash = useCallback((value: string) => {
    window.history.replaceState(null, '', `#${value}`);
  }, []);

  const select = useCallback(
    (id: string, focus = false) => {
      setSelectedId(id);
      setPanel('file');
      syncHash(id);
      if (focus) rows.current[id]?.focus();
    },
    [syncHash],
  );

  const showPanel = useCallback(
    (next: Panel) => {
      setPanel(next);
      syncHash(next);
    },
    [syncHash],
  );

  const scrollToPreview = useCallback(() => {
    if (window.matchMedia('(max-width: 899px), (max-height: 559px)').matches) {
      const instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      previewRef.current?.scrollIntoView({ behavior: instant ? 'auto' : 'smooth', block: 'start' });
    }
  }, []);

  const open = useCallback(
    (file: ProjectFile) => {
      if (file.shot) setZoomed(true);
      else if (file.links[0]) openExternal(file.links[0].href);
    },
    [],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (zoomed && !dialog.open) dialog.showModal();
    if (!zoomed && dialog.open) dialog.close();
  }, [zoomed]);

  useEffect(() => {
    previewBody.current?.scrollTo(0, 0);
  }, [panel, selectedId]);

  // The pager shows only while the preview still has content below the fold.
  useEffect(() => {
    const el = previewBody.current;
    if (!el) return undefined;
    const check = () => {
      const more = el.scrollTop + el.clientHeight < el.scrollHeight - 2;
      // Keep keyboard focus in the preview when the pager is about to disappear.
      if (!more && document.activeElement === moreRef.current) el.focus();
      setHasMore(more);
    };
    check();
    el.addEventListener('scroll', check);
    el.addEventListener('load', check, true);
    window.addEventListener('resize', check);
    return () => {
      el.removeEventListener('scroll', check);
      el.removeEventListener('load', check, true);
      window.removeEventListener('resize', check);
    };
  }, [panel, selectedId]);

  useEffect(() => {
    const onHash = () => {
      const next = readHash();
      setPanel(next.panel);
      setSelectedId(next.id);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    FILES.forEach((f) => {
      if (f.shot) new Image().src = f.shot.src;
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoomed || isTyping(document.activeElement) || e.altKey || e.ctrlKey || e.metaKey) return;
      const index = FILES.findIndex((f) => f.id === selectedId);
      const move = (to: number) => {
        e.preventDefault();
        select(FILES[(to + FILES.length) % FILES.length].id, true);
      };
      if (e.key === 'ArrowDown') move(index + 1);
      else if (e.key === 'ArrowUp') move(index - 1);
      else if (e.key === 'Home') move(0);
      else if (e.key === 'End') move(FILES.length - 1);
      else if (e.key === '1') showPanel('about');
      else if (e.key === '2') openExternal(GITHUB);
      else if (e.key === '3') openExternal(LINKEDIN);
      else if (/^[a-z]$/i.test(e.key)) document.getElementById('cmd')?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [select, selectedId, showPanel, zoomed]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const step = Math.round(((e.clientX / window.innerWidth) * 2 - 1) * 2);
      sceneRef.current?.style.setProperty('--step', String(step));
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  const runCommand = (e: FormEvent) => {
    e.preventDefault();
    const raw = command.trim().toLowerCase();
    setCommand('');
    if (!raw) return;
    const [verb, ...rest] = raw.split(/\s+/);
    const arg = rest.join(' ');
    const find = (term: string) =>
      FILES.find(
        (f) =>
          f.id === term ||
          f.file.toLowerCase() === term ||
          f.file.toLowerCase().split('.')[0] === term ||
          f.name.toLowerCase() === term,
      );

    if (verb === 'help') {
      setReply('DIR, CD <folder>, RUN <file>, ABOUT, GITHUB, LINKEDIN');
    } else if (verb === 'dir') {
      setReply(`${FILES.length} files in ${FOLDERS.length} folders`);
    } else if (verb === 'about' || raw === 'about.txt') {
      showPanel('about');
      setReply('Opened ABOUT.TXT');
    } else if (verb === 'github' || verb === 'linkedin') {
      openExternal(verb === 'github' ? GITHUB : LINKEDIN);
      setReply(`Opened ${verb.toUpperCase()}`);
    } else if (verb === 'cd') {
      const first = FILES.find((f) => f.folder.toLowerCase() === arg);
      if (first) {
        select(first.id);
        setReply(`Now in ${first.folder}`);
      } else {
        setReply('Invalid directory. Try SITES, GAMES or CODE');
      }
    } else if (verb === 'run' || find(raw)) {
      const target = verb === 'run' ? find(arg) : find(raw);
      if (target) {
        select(target.id);
        if (verb === 'run') open(target);
        setReply(`Opened ${target.file}`);
      } else {
        setReply('File not found. Type DIR to see what is here');
      }
    } else {
      setReply('Bad command or file name. Type HELP');
    }
  };

  const panelTitle = panel === 'about' ? 'ABOUT.TXT' : selected.file;
  const path = panel === 'file' ? `C:\\KIAN\\${selected.folder}>` : 'C:\\KIAN>';

  return (
    <div className="screen">
      <div className="scene" ref={sceneRef} aria-hidden="true">
        <div className="scene__rangitoto" />
        <div className="scene__city">
          <i className="scene__beacon" />
        </div>
      </div>

      <header className="masthead">
        <h1 className="masthead__name">KIAN JAZAYERI</h1>
        <p className="masthead__job">Full stack engineer at Sandfield, Auckland</p>
      </header>

      <p className="sr-only" aria-live="polite">
        {panel === 'file' ? '' : `Showing ${panelTitle}`}
      </p>

      <main className="desk">
        <section className="win win--files" aria-labelledby="files-title">
          <h2 className="win__bar" id="files-title">
            C:\KIAN
          </h2>
          <div className="cols" aria-hidden="true">
            <span>Name</span>
            <span />
            <span className="cols__num">Commits</span>
            <span>Date</span>
          </div>
          <div className="files">
            {FOLDERS.map((folder) => (
              <div key={folder} role="group" aria-labelledby={`dir-${folder}`}>
                <div className="dir">
                  <h3 id={`dir-${folder}`}>{folder}</h3>
                  <span aria-hidden="true">&lt;DIR&gt;</span>
                </div>
                <ul className="dir__files">
                  {FILES.filter((f) => f.folder === folder).map((file) => (
                    <FileRow
                      key={file.id}
                      file={file}
                      selected={panel === 'file' && file.id === selectedId}
                      tabbable={file.id === selectedId}
                      buttonRef={(el) => {
                        rows.current[file.id] = el;
                      }}
                      onSelect={() => {
                        select(file.id);
                        scrollToPreview();
                      }}
                      onOpen={() => open(file)}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="win win--preview" aria-labelledby="preview-title" ref={previewRef}>
          <div className="win__bar win__bar--split">
            <h2 id="preview-title">{panelTitle}</h2>
            {hasMore && (
              <button
                ref={moreRef}
                type="button"
                className="btn win__more"
                onClick={() => previewBody.current?.scrollBy({ top: previewBody.current.clientHeight * 0.8 })}
              >
                -- More --
              </button>
            )}
          </div>
          <div className="pv" ref={previewBody} tabIndex={0} aria-label={`${panelTitle} contents`}>
            {panel === 'file' && <FileDetails file={selected} onZoom={() => setZoomed(true)} />}
            {panel === 'about' && <About />}
          </div>
          {panel === 'file' && (
            <div className="strip">
              <p>
                <span className={isGoodStatus(selected.status) ? 'strip__ok' : ''}>{selected.status}</span>
                <span>Source: {selected.source}</span>
              </p>
              {selected.credit && <p>{selected.credit}</p>}
            </div>
          )}
          {panel === 'file' && selected.links.length > 0 && (
            <div className="pv__actions">
              {selected.links.map((l) => (
                <a key={l.href} className="btn btn--go" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          )}
          <button
            type="button"
            className="pv__back"
            onClick={() => {
              document.getElementById('files-title')?.scrollIntoView();
              rows.current[selectedId]?.focus({ preventScroll: true });
            }}
          >
            Back to files
          </button>
        </section>
      </main>

      <form className="cmd" onSubmit={runCommand}>
        <label className="cmd__path" htmlFor="cmd">
          {path}
        </label>
        <input
          id="cmd"
          className="cmd__input"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') e.currentTarget.blur();
          }}
          placeholder="_"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-describedby="cmd-reply"
        />
        <output className="cmd__reply" id="cmd-reply">
          {reply}
        </output>
      </form>

      <nav className="keys" aria-label="About and links">
        <button type="button" className="btn key" aria-current={panel === 'about' ? 'true' : undefined} onClick={() => { showPanel('about'); scrollToPreview(); }}>
          <i>1</i>About
        </button>
        <a className="btn key" href={GITHUB} target="_blank" rel="noreferrer">
          <i>2</i>GitHub
        </a>
        <a className="btn key" href={LINKEDIN} target="_blank" rel="noreferrer">
          <i>3</i>LinkedIn
        </a>
      </nav>

      <dialog
        className="viewer"
        ref={dialogRef}
        aria-labelledby="viewer-title"
        onClose={() => setZoomed(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setZoomed(false);
        }}
      >
        <div className="viewer__bar">
          <h2 id="viewer-title">{selected.file}</h2>
          <button type="button" className="btn viewer__close" onClick={() => setZoomed(false)}>
            Close
          </button>
        </div>
        {zoomed && selected.shot && <img src={selected.shot.src} alt={selected.shot.alt} />}
      </dialog>
    </div>
  );
}

export default App;
