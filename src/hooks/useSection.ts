import { useQuery, DocumentNode } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useAuth } from '../components/Auth';
import { useLoader } from '../components/Loader';

type Section = 'sales' | 'clients' | 'products' | 'orders' | 'suppliers';

export const useSection = <T>(
  section: Section,
  query: DocumentNode,
): [T[] | undefined, React.Dispatch<T[]>] => {
  const [sectionData, setSectionData] = useState<T[]>();

  const { user } = useAuth();
  const loader = useLoader();

  const { data, loading, error } = useQuery(query, {
    variables: { userId: user?._id },
  });

  useEffect(() => {
    loading ? loader.handleShow() : loader.handleHide();
  }, [loading]);

  useEffect(() => {
    data && setSectionData(data[section]);
  }, [data]);

  return [sectionData, setSectionData];
};
