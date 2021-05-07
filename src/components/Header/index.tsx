import Switch from 'react-switch';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';
import { useContext } from 'react';
import { ThemeContextLD } from '../../contexts/ThemeContext';

export function Header() {
  const {toggleTheme, theme} = useContext(ThemeContextLD)

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>

      <Switch
        onChange={toggleTheme}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={theme.colors.gray4}
      />
    </header>
  );
}