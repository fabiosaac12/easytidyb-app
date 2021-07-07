import { useQuery, DocumentNode, useMutation } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../components/Auth';
import { useLoader } from '../components/Loader';

type Section = 'sales' | 'clients' | 'products' | 'orders' | 'suppliers';
type GraphQL = {
  getQuery: DocumentNode;
  addQuery: DocumentNode;
  updateQuery: DocumentNode;
};

export const useSection = <T, U>(
  section: Section,
  { addQuery, getQuery, updateQuery }: GraphQL,
) => {
  const loadingMutation = useRef(false);

  const [sectionData, setSectionData] = useState<({ _id: string } & U)[]>();

  const { user } = useAuth();
  const loader = useLoader();

  const queryGet = useQuery(getQuery, {
    variables: { userId: user?._id },
  });

  const [add, mutationAdd] = useMutation<
    {
      addSupplier: { _id: string } & U;
    },
    { userId: string } & T
  >(addQuery);

  const [update, mutationUpdate] = useMutation<
    {
      updateSupplier: { _id: string } & U;
    },
    T
  >(updateQuery);

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
    if (mutationUpdate.loading) {
      loadingMutation.current = true;
      loader.handleShow();
    }

    if (!mutationUpdate.loading && loadingMutation.current === true) {
      loadingMutation.current = false;
      loader.handleHide();
    }
  }, [mutationUpdate.loading]);

  useEffect(() => {
    const data = mutationAdd?.data?.addSupplier;

    if (data) {
      setSectionData((sectionData) => [...(sectionData || []), data]);
    }
  }, [mutationAdd.data]);

  useEffect(() => {
    const data = mutationUpdate?.data?.updateSupplier;

    if (data) {
      setSectionData((sectionData) =>
        sectionData?.map((element) =>
          element._id === data._id ? data : element,
        ),
      );
    }
  }, [mutationUpdate.data]);

  useEffect(() => {
    queryGet.data && setSectionData(queryGet.data[section]);
  }, [queryGet.data]);

  return {
    data: sectionData,
    setData: setSectionData,
    add,
    update,
  };
};
