import React from 'react';

const ListaUsuarios = ({ usuarios}) => {
    return ( 
        <table className="table">
             <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((book,index) => (
                    <tr key={index}>
                        <td>{book.nombre}</td>
                        <td>{book.email}</td>
                        <td>{book.telefono}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default ListaUsuarios;