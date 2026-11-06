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

test('number keys open About and PC builds', () => {
  render(<App />);
  fireEvent.keyDown(window, { key: '1' });
  expect(screen.getByRole('heading', { name: "Hi! I'm Kian." })).toBeInTheDocument();
  fireEvent.keyDown(window, { key: '2' });
  expect(screen.getByRole('heading', { name: 'PC builds' })).toBeInTheDocument();
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
