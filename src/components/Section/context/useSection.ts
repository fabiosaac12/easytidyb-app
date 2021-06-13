import { useContext } from 'react';
import { SectionContext } from './SectionContext';

export const useSection = () => useContext(SectionContext);
