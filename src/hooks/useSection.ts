import { useQuery, DocumentNode, useMutation } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../components/Auth';
import { useLoader } from '../components/Loader';

type Section = 'sales' | 'clients' | 'products' | 'orders' | 'suppliers';
type GraphQL = {
  getQuery: DocumentNode;
  addQuery: DocumentNode;
  updateQuery: DocumentNode;
  deleteQuery: DocumentNode;
};

export const useSection = <Element, ElementToAdd, ElementToUpdate>(
  section: Section,
  { addQuery, getQuery, updateQuery, deleteQuery }: GraphQL,
) => {
  const loadingMutation = useRef(false);

  const [sectionData, setSectionData] =
    useState<({ _id: string } & Element)[]>();

  const { user } = useAuth();
  const loader = useLoader();

  const queryGet = useQuery(getQuery, {
    variables: { userId: user?._id },
  });

  const [add, mutationAdd] = useMutation<
    {
      addSupplier: { _id: string } & Element;
    },
    { userId: string } & ElementToAdd
  >(addQuery, { onCompleted: () => queryGet.refetch() });

  const [update, mutationUpdate] = useMutation<
    {
      updateSupplier: { _id: string } & Element;
    },
    ElementToUpdate
  >(updateQuery, { onCompleted: () => queryGet.refetch() });

  const [delete_, mutationDelete] = useMutation<
    {
      deleteSupplier: { _id: string } & Element;
    },
    { _id: string }
  >(deleteQuery, { onCompleted: () => queryGet.refetch() });

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
    if (mutationDelete.loading) {
      loadingMutation.current = true;
      loader.handleShow();
    }

    if (!mutationDelete.loading && loadingMutation.current === true) {
      loadingMutation.current = false;
      loader.handleHide();
    }
  }, [mutationDelete.loading]);

  useEffect(() => {
    queryGet.data && setSectionData(queryGet.data[section]);
  }, [queryGet.data]);

  return {
    data: sectionData,
    setData: setSectionData,
    add,
    update,
    delete_,
  };
};
