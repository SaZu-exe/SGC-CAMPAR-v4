# CAMPAR SGC Digital v0.4

Versión de prototipo posterior a la primera presentación a Dirección. Incorpora las observaciones operativas y el nuevo criterio visual aprobado.

## Cambios principales
- Rediseño visual transversal: interfaz más formal, ejecutiva y homogénea en todos los módulos.
- Nombres operativos de aserraderos:
  - **Cosme = MX-1361**
  - **Duma = MX-1071**
- Etapas productivas unificadas en toda la app:
  1. En corte
  2. En armado
  3. En estufado
  4. Limpios
- `Limpios` habilita la acción **Inspeccionar lote**.
- `Limpios` no significa producto liberado; el estado de calidad se gestiona por separado.
- Inventario centrado en producto:
  - cantidad del producto en Cosme;
  - cantidad del producto en Duma;
  - concentrado total;
  - desglose por etapa;
  - lotes Limpios con acción directa a inspección.
- Producción separada por Cosme y Duma y por las cuatro etapas.
- Inspección conectada desde lotes Limpios con cálculo automático de tamaño de muestra.
- Flujo de liberación, NC, retrabajo, reinspección y entrega preservado para demostración.
- Persistencia local mediante `localStorage`.

## Publicación en GitHub Pages
Conserva la estructura de carpetas y sube **el contenido de esta carpeta** a la raíz del repositorio:

- `index.html`
- `styles.css`
- `app.js`
- `assets/`
- `docs/`

En GitHub Pages usa: **Settings → Pages → Deploy from a branch → main → /(root)**.

## Datos
La versión v0.4 usa una nueva clave de almacenamiento local (`campar-sgc-v0.4-state`) para evitar conflictos con la estructura de datos de v0.3.

## Importante
Es un prototipo estático de presentación y piloto. No existe todavía un backend multiusuario. Los documentos del SGC permanecen sujetos a su estado documental y aprobación formal.
