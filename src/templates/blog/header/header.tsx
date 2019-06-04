import * as React from 'react';
import './styles.scss';

interface Props {
  title: string;
  subtitle?: string;
  author: string;
  date: Date;
}

export const Header = ({ title, author, date, subtitle }: Props) => (
  <section className="hero is-primary is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          { title }
        </h1>
        <h2 className="subtitle">
          { subtitle ? subtitle : '' }
        </h2>
        <h3 className="subtitle">{ date } - { author }</h3>
      </div>
    </div>
  </section>
);
