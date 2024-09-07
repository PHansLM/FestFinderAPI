import React, { useState } from 'react';
import { useSubirImagenMutation } from '../api/apiSlice'; // Ajusta la ruta según tu estructura de proyecto

const SubirImagen = () => {
  const [imagen, setImagen] = useState(null);
  const [subirImagen, { isLoading, isError, data, error }] = useSubirImagenMutation();

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imagen', imagen);

    try {
      // Realiza la mutación para subir la imagen
      await subirImagen(formData).unwrap(); // unwrap() lanza cualquier error que ocurra
      console.log('Imagen subida exitosamente');
    } catch (err) {
      console.error('Error subiendo la imagen:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Subiendo...' : 'Subir Imagen'}
      </button>
      {isError && <p>Error subiendo la imagen: {error.message}</p>}
      {data && <p>Imagen subida: {JSON.stringify(data)}</p>}
    </form>
  );
};

export default SubirImagen;
