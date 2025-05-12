import React from 'react';
import { data as coursData } from '@/app/data/coursData';
import FormuleLayout from '@/app/components/layout/FormuleLayout';

type Props = {
  params: Promise<{ slug: string }>;
};

const FormuleDeSeconde = async ({ params }: Props) => {
  const { slug } = await params;
  const currData = coursData.coursSeconde.find((el) => el.id === slug);

  //gestion des erreurs
  if (!currData) {
    return <div>Aucun cours à ce sujet</div>;
  }



  return (
    <div>
      <FormuleLayout data={currData} />
    </div>
  );
};

export default FormuleDeSeconde;
