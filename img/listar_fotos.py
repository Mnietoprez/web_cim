import os
import sys

# Extensiones válidas para imágenes
EXTENSIONES_VALIDAS = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.tiff'}

def es_imagen(nombre_archivo):
    _, extension = os.path.splitext(nombre_archivo.lower())
    return extension in EXTENSIONES_VALIDAS

def obtener_rutas_imagenes(subdirectorio):
    rutas = []
    ruta_completa = os.path.join('.', subdirectorio)

    for raiz, _, archivos in os.walk(ruta_completa):
        for archivo in archivos:
            if es_imagen(archivo):
                ruta_relativa = os.path.relpath(os.path.join(raiz, archivo), start='.')
                ruta_relativa = ruta_relativa.replace('\\', '/')  # Compatibilidad con Windows
                rutas.append(f"img/{ruta_relativa}")
    return rutas

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Uso: python script.py 'ruta/al/subdirectorio'")
        sys.exit(1)

    subdirectorio = sys.argv[1]
    imagenes = obtener_rutas_imagenes(subdirectorio)

    print("fotos: [")
    for img in imagenes:
        print(f'  "{img}",')
    print("]")