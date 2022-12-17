import React from 'react';
import Header from "../Header/Header";
import HeaderStaff from "../Header/HeaderStaff";

const StaffCatalogs = () => {
    return (
<>
    <HeaderStaff />
    <table className="staff-catalogs">
        <tbody>
        <tr>
            <td colSpan="2"className='staff-catalogs-item' ><h2>название</h2></td>
            <td><h2 className='staff-catalogs-item'>тип</h2></td>

            <td><h2 className='staff-catalogs-item'>добавлено</h2></td>
        </tr>

        <tr>
            <td colSpan="2" className='admin-catalogs-list-item'>Школьная программа за 9 класс</td>
            <td  className='staff-catalogs-list-item'>docx</td>

            <td>15 дек. 2022 г., 19:11</td>
        </tr>
        <tr>
            <td colSpan="2">Школьная программа за 9 класс</td>
            <td>docx</td>

            <td>15 дек. 2022 г., 19:11</td>
        </tr>
        <tr>
            <td colSpan="2">Школьная программа за 9 класс</td>
            <td>docx</td>

            <td>15 дек. 2022 г., 19:11</td>
        </tr>
        </tbody>
    </table>
</>

    );
};

export default StaffCatalogs;
