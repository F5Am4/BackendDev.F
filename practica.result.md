- Crear una tabla
CREATE TABLE proveedor (
    nombre VARCHAR(50) NOT NULL,
	direccion TEXT,
	provincia TEXT,
	piezas INT,
	piezaSerie INT,
	fecha DATE,
	id_proveedor SERIAL,
	id_piezaSerie SERIAL,
	PRIMARY KEY (id_proveedor),
	FOREIGN KEY (id_piezaSerie) REFERENCES proveedor(id_proveedor)
);

-- Inserta un dato en la tabla
INSERT INTO proveedor(nombre, direccion, provincia, piezas, piezaSerie, fecha)
    VALUES (
	'MegaBodega',
	'20 de Noviembre #2520',
	'Chihuahua',
	75,
	75909910,
	'23-5-2023'
);

ALTER TABLE proveedor
ADD FOREIGN KEY (id_piezaSerie) REFERENCES proveedor(id_proveedor);

CREATE TABLE piezaSerie (
    id_piezaSerie INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
	fecha DATE,
	NombreProveedor TEXT,
    id_proveedor INT,
    PRIMARY KEY (id_proveedor),
    FOREIGN KEY (id_piezaSerie) REFERENCES proveedor(id_proveedor)
);


INSERT INTO piezaSerie (nombre, fecha, Nombreproveedor, id_proveedor)
    VALUES (
	75909910,
	'Refacciones',
	'23-5-2023',
	'MegaBodega',
	1
);
	
-- Selecciona todo de una tabla
-- Siempre debo correr este comando para visualizar los datos insertados
SELECT * FROM proveedor;
SELECT * FROM piezaSerie;


-- Elimina un dato de una tabla
DROP TABLE proveedor;
DROP TABLE piezaSerie;

-- Elimina un dato de una tabla
DELETE FROM proveedor WHERE id_proveedor = 1 
// clase 16/08/2023 