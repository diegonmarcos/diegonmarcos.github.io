import { el } from '../shell/dom';

export interface Column {
  key: string;
  label: string;
  numeric?: boolean;
  format?: (v: unknown, row: Record<string, unknown>) => string;
  signed?: boolean;
}

export interface DataTableOptions {
  columns: Column[];
  rows: Array<Record<string, unknown>>;
  sort?: { key: string; dir: 'asc' | 'desc' };
}

export function renderDataTable(opts: DataTableOptions): HTMLElement {
  const sorted = sortRows(opts.rows, opts.sort);
  const thead = el('thead', {}, [headerRow(opts.columns, opts.sort)]);
  const tbody = el('tbody', {});
  for (const row of sorted) tbody.appendChild(bodyRow(opts.columns, row));
  return el('table', { class: 'data-table' }, [thead, tbody]);
}

function headerRow(cols: Column[], sort?: DataTableOptions['sort']): HTMLElement {
  const tr = el('tr');
  for (const c of cols) {
    const isSorted = sort?.key === c.key;
    const arrow = isSorted ? (sort!.dir === 'asc' ? '▲' : '▼') : '';
    const th = el('th', {
      class: `is-sortable${c.numeric ? ' numeric' : ''}`,
      'data-key': c.key,
    }, [
      c.label,
      ...(arrow ? [el('span', { class: 'data-table__sort' }, [arrow])] : []),
    ]);
    tr.appendChild(th);
  }
  return tr;
}

function bodyRow(cols: Column[], row: Record<string, unknown>): HTMLElement {
  const tr = el('tr');
  for (const c of cols) {
    const raw = row[c.key];
    const formatted = c.format ? c.format(raw, row) : defaultFormat(raw, c);
    const numClass = c.numeric ? ' numeric' : '';
    let signClass = '';
    if (c.signed && typeof raw === 'number') signClass = raw >= 0 ? ' t-pos' : ' t-neg';
    tr.appendChild(el('td', { class: `${numClass}${signClass}`.trim() }, [formatted]));
  }
  return tr;
}

function defaultFormat(v: unknown, c: Column): string {
  if (v === null || v === undefined) return '—';
  if (typeof v === 'number' && c.numeric) {
    return v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
  }
  return String(v);
}

function sortRows(rows: Array<Record<string, unknown>>, sort?: DataTableOptions['sort']): Array<Record<string, unknown>> {
  if (!sort) return rows;
  const out = [...rows];
  out.sort((a, b) => {
    const av = a[sort.key], bv = b[sort.key];
    if (typeof av === 'number' && typeof bv === 'number') return sort.dir === 'asc' ? av - bv : bv - av;
    const as = String(av ?? ''), bs = String(bv ?? '');
    return sort.dir === 'asc' ? as.localeCompare(bs) : bs.localeCompare(as);
  });
  return out;
}
