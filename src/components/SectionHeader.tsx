interface SectionHeaderProps {
  number: string
  label: string
  title?: string
  dark?: boolean
}

export function SectionHeader({ number, label, title, dark = false }: SectionHeaderProps) {
  const route = label.toLowerCase().replace(/\s+/g, '-')

  return (
    <header className={`section-header${dark ? ' section-header--dark' : ''}`}>
      <p><span>{number}</span> marc://portfolio/{route}</p>
      {title && <h2>{title}</h2>}
    </header>
  )
}
