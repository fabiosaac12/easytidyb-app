import { useQuery, DocumentNode, useMutation } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../components/Auth';
import { useLoader } from '../components/Loader';

type Section = 'sales' | 'clients' | 'products' | 'orders' | 'suppliers';
type GraphQL = {
  getQuery: DocumentNode;
  addQuery: DocumentNode;
};

export const useSection = <T, U>(
  section: Section,
  { addQuery, getQuery }: GraphQL,
) => {
  const loadingMutation = useRef(false);

  const [sectionData, setSectionData] = useState<U[]>();

  const { user } = useAuth();
  const loader = useLoader();

  const queryGet = useQuery(getQuery, {
    variables: { userId: user?._id },
  });

  const [add, mutationAdd] = useMutation<
    {
      addSupplier: U;
    },
    { userId: string } & T
  >(addQuery);

  useEffect(() => {
    queryGet.loading ? loader.handleShow() : loader.handleHide();
  }, [queryGet.loading]);

  useEffect(() => {
    if (mutationAdd.loading) {
      loadingMutation.current = true;
      loader.handleShow();
    }

    if (!mutationAdd.loading && loadingMutation.current === true) {
      loadingMutation.current = false;
      loader.handleHide();
    }
  }, [mutationAdd.loading]);

  useEffect(() => {
    const data = mutationAdd?.data?.addSupplier;

    if (data) {
      setSectionData((sectionData) => [...(sectionData || []), data]);
    }
  }, [mutationAdd.data]);

  useEffect(() => {
    queryGet.data && setSectionData(queryGet.data[section]);
  }, [queryGet.data]);

  return {
    data: sectionData,
    setData: setSectionData,
    add,
  };
};
