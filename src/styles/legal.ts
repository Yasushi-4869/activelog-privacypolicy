/** 法務ページ共通スタイル定数 */
export const legalStyles = {
  h1: 'text-2xl font-semibold text-gray-900 mb-1',
  date: 'text-sm text-gray-400 mb-10 block',
  section: 'mb-10',
  h2: 'text-sm font-semibold text-gray-800 mb-3 pl-3 border-l-2 border-blue-400/70',
  h3: 'text-sm font-semibold text-gray-700 mb-2',
  p: 'text-sm text-gray-600 leading-relaxed',
  ul: 'text-sm text-gray-600 space-y-1.5 list-disc list-inside',
  ol: 'text-sm text-gray-600 space-y-1.5 list-decimal list-inside',
  link: 'text-blue-500 underline underline-offset-2 hover:text-blue-600 transition-colors',
  table: 'rounded-[12px] border border-black/[0.06] overflow-hidden',
  thead: 'bg-gray-50/80',
  th: 'px-4 py-2.5 text-left font-medium text-gray-500',
  td: 'px-4 py-2.5 text-gray-600',
  tr: 'border-t border-black/[0.04]',
} as const
