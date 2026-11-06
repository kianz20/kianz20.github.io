import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import { FILES } from './data';

beforeAll(() => {
  window.matchMedia = ((query: string) => ({ matches: false, media: query, addEventListener() {}, removeEventListener() {} })) as any;
  window.HTMLElement.prototype.scrollTo = () => {};
  window.HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute('open', '');
  };
  window.HTMLDialogElement.prototype.close = function () {
    this.removeAttribute('open');
  };
});

beforeEach(() => {
  window.location.hash = '';
});

test('lists every project as a file', () => {
  render(<App />);
  FILES.forEach((f) => expect(screen.getByRole('button', { name: new RegExp(f.file.replace('.', '\\.')) })).toBeInTheDocument());
});

test('arrow keys move the selection and update the preview', () => {
  render(<App />);
  fireEvent.keyDown(window, { key: 'ArrowDown' });
  expect(screen.getByRole('heading', { level: 3, name: 'Car Finder' })).toBeInTheDocument();
  expect(window.location.hash).toBe('#carfinder');
  fireEvent.keyDown(window, { key: 'ArrowUp' });
  fireEvent.keyDown(window, { key: 'ArrowUp' });
  expect(screen.getByRole('heading', { level: 3, name: 'Sharesies API' })).toBeInTheDocument();
});

test('the keys are About, GitHub and LinkedIn', () => {
  render(<App />);
  fireEvent.keyDown(window, { key: '1' });
  expect(screen.getByRole('heading', { name: "Hi! I'm Kian." })).toBeInTheDocument();
  const keys = Array.from(screen.getByRole('navigation').children).map((k) => k.textContent);
  expect(keys).toEqual(['1About', '2GitHub', '3LinkedIn']);
});

test('the command line runs commands and reports bad ones', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  const send = (value: string) => {
    fireEvent.change(input, { target: { value } });
    fireEvent.submit(input);
  };
  send('cd games');
  expect(screen.getByRole('heading', { level: 3, name: 'PangoRankr' })).toBeInTheDocument();
  send('gs3');
  expect(screen.getByRole('heading', { level: 3, name: 'GS3' })).toBeInTheDocument();
  send('format c:');
  expect(screen.getByRole('status')).toHaveTextContent(/bad command/i);
  send('gs3');
  send('pcbuilds');
  expect(screen.getByRole('status')).toHaveTextContent(/bad command/i);
});

test('only public or verified links are offered', () => {
  render(<App />);
  fireEvent.keyDown(window, { key: 'ArrowDown' });
  fireEvent.keyDown(window, { key: 'ArrowDown' });
  fireEvent.keyDown(window, { key: 'ArrowDown' });
  const panel = screen.getByRole('region', { name: 'ECPL.HTM' });
  expect(within(panel).getByRole('heading', { level: 3, name: 'ECPL' })).toBeInTheDocument();
  expect(within(panel).queryByRole('link')).toBeNull();
});

test.each([
  ['guessr', 'GUESSR.EXE', 'https://github.com/kianz20/PangoGuessr'],
  ['yahoo', 'YAHOOEN.JS', 'https://github.com/kianz20/yahoo-auctions-en'],
])('%s links to its public source', (id, file, href) => {
  window.location.hash = `#${id}`;
  render(<App />);
  const panel = screen.getByRole('region', { name: file });
  expect(within(panel).getByRole('link', { name: 'Source on GitHub' })).toHaveAttribute('href', href);
  expect(within(panel).getByText('Source: Public')).toBeInTheDocument();
});
