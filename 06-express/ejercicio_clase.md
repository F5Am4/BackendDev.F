Ejercicio realizado en clase

``

-- Crear una tabla
CREATE TABLE users (
    nombre VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE,
	edad INT,
	id_usuario SERIAL,
	PRIMARY KEY (id_usuario)
);

-- Inserta un dato en la tabla
INSERT INTO users(nombre, edad)
    VALUES (
	'Juanita',
	22
);
	
-- Selecciona todo de una tabla
-- Siempre debo correr este comando para visualizar los datos insertados
SELECT * FROM users;


-- Elimina un dato de una tabla
DROP TABLE users;

-- Elimina un dato de una tabla
DELETE FROM users WHERE id_usuario = 0 
//aqui se especifica (en la tabla) cual usuario quieres eliminar eligiendolo por el ID (1, 2, 3, 4, etc.)


``