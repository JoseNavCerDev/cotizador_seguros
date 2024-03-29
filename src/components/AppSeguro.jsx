import Formulario from './Formulario';
import useCotizador from '../hooks/useCotizador';

import Spinner from '../components/Spinner';
import Resultado from './Resultado';
import { useState } from 'react';

const AppSeguro = (props) => {

  const {cargando, firstTime } = useCotizador();

  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl
            font-black">Cotizador de seguros de Auto</h1>
        </header>
        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow
        rounded-lg p-10">
            <Formulario/>
        </main>
        {cargando ? <Spinner/> : firstTime && <Resultado/>}
    </>
  )
}

export default AppSeguro