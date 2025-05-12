import FormuleLayout from '@/app/components/layout/FormuleLayout';
import React from 'react';
import {data as coursData} from '@/app/data/coursData';

type Props = {
  params: Promise<{ slug: string }>;
};

 const FormuleDeSixieme = async ({ params }: Props) => {
  const { slug } = await params;
  const currData = coursData.coursSixieme.find((el) => el.id === slug);

  //gestion des erreurs
  if (!currData) {
    return <div>Aucun cours à ce sujet</div>;
  } ;

  //préparation du component
  const renderData = {
    ...currData,
    exercices : currData.exercices
  }


  return (
    <div>
      <FormuleLayout data={renderData}/>
    </div>
  );
};

export default FormuleDeSixieme;