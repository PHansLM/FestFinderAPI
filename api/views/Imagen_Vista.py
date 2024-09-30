from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import Imagen
from ..serializers import ImagenSerializer

class ImagenDetailView(APIView):
    def get(self, request, imagen_id, *args, **kwargs):
        try:
            # Recuperar la imagen por su ID
            imagen = Imagen.objects.get(id=imagen_id)
            serializer = ImagenSerializer(imagen)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Imagen.DoesNotExist:
            return Response({"detail": "Imagen no encontrada"}, status=status.HTTP_404_NOT_FOUND)
