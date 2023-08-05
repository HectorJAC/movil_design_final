## Flex Box en React Native  

Flexbox esta diseñado para proveer un layout consistente para diferentes tamaños de pantallas. Normalmente se utiliza una combinacion de `flexDirection`, `alignItems` y `justifyContent` para lograr el layout deseado.  

**Flex**  
Es la propiedad que define la capacidad de un componente para alterar su tamaño para llenar el espacio disponible en el layout.  

**Flex Direction**  
Es la propiedad que define la direccion en la que los componentes se acomodan en el layout.  
* `row`: Los componentes se acomodan de izquierda a derecha.
* `column`: Los componentes se acomodan de arriba hacia abajo.
* `column-reverse`: Los componentes se acomodan de abajo hacia arriba.
* `reverse-row`: Los componentes se acomodan de derecha a izquierda.  

**Layout Direction**  
Es la propiedad que define la direccion en la que los componentes se acomodan en el layout.  
* `ltr`: Los componentes se acomodan de izquierda a derecha.
* `rtl`: Los componentes se acomodan de derecha a izquierda.  

**Justify Content**  
Es la propiedad que define la alineacion de los componentes en el eje principal.  
* `flex-start`: Los componentes se acomodan al inicio del eje principal.  
* `flex-end`: Los componentes se acomodan al final del eje principal.  
* `center`: Los componentes se acomodan en el centro del eje principal.  
* `space-between`: Los componentes se acomodan con un espacio entre ellos.  
* `space-around`: Los componentes se acomodan con un espacio alrededor de ellos.  
* `space-evenly`: Los componentes se acomodan con un espacio igual entre ellos.  

**Align Items**  
Es la propiedad que define la alineacion de los componentes en el eje secundario.  
* `flex-start`: Los componentes se acomodan al inicio del eje secundario.  
* `flex-end`: Los componentes se acomodan al final del eje secundario.  
* `center`: Los componentes se acomodan en el centro del eje secundario.  
* `stretch`: Los componentes se estiran para llenar el eje secundario.  
* `baseline`: Los componentes se acomodan en la linea base del eje secundario.  

**Align Self**  
Es la propiedad que define la alineacion de un componente en el eje secundario.

**Align Content**  
Es la propiedad que define la alineacion de los componentes en el eje secundario cuando hay mas de una linea de componentes.  
* `flex-start`: Los componentes se acomodan al inicio del eje secundario.  
* `flex-end`: Los componentes se acomodan al final del eje secundario.  
* `center`: Los componentes se acomodan en el centro del eje secundario.  
* `stretch`: Los componentes se estiran para llenar el eje secundario.  
* `space-between`: Los componentes se acomodan con un espacio entre ellos.  
* `space-around`: Los componentes se acomodan con un espacio alrededor de ellos.  

**Flex Wrap**  
Es la propiedad que define si los componentes se acomodan en una sola linea o en varias lineas.  

**Flex Basis, Grow and Shrink**  

* `flex-basis`: Es la propiedad que define el tamaño inicial de un componente.  
* `flex-grow`: Es la propiedad que define la capacidad de un componente para crecer.  
* `flex-shrink`: Es la propiedad que define la capacidad de un componente para encogerse.  

**Row Gap, Column Gap and Gap**  

* `row-gap`: Es la propiedad que define el espacio entre los componentes en el eje secundario cuando el `flex-direction` es `row`.  
* `column-gap`: Es la propiedad que define el espacio entre los componentes en el eje secundario cuando el `flex-direction` es `column`.  
* `gap`: Es la propiedad que define el espacio entre los componentes en el eje secundario.  

**Width and Height**  

* `width`: Es la propiedad que define el ancho de un componente.
* `height`: Es la propiedad que define el alto de un componente.

**Absolute and Relative Layout**  
La propiedad `position` define si un componente se posiciona de forma absoluta o relativa.  

* `absolute`: El componente se posiciona de forma absoluta.
* `relative`: El componente se posiciona de forma relativa.