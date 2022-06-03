import Head from 'next/head';
import Image from 'next/image';
import { Filter } from '../components/Filter';
import { FilterContainer } from '../components/FilterContainer';
import { Header } from '../components/Header';
import styles from '../styles/Home.module.css';

const categories = [
  {
    id: 1,
    name: 'Hombre',
  },
  {
    id: 2,
    name: 'Mujer',
  },
  {
    id: 3,
    name: 'Niños',
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <FilterContainer categories={categories} />
    </>
  );
}
