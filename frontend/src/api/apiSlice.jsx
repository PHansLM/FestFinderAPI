import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', // Nombre de la ruta del reducer en el estado global
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }), // Configura la URL base de la API
  endpoints: (builder) => ({
    subirImagen: builder.mutation({
      query: (formData) => ({
        url: 'subir-imagen/', // Endpoint para subir imágenes
        method: 'POST',
        body: formData,
        headers: {
          // RTK Query automáticamente maneja multipart/form-data si le pasas un FormData
        },
      }),
    }),
  }),
});

export const { useSubirImagenMutation } = apiSlice;
