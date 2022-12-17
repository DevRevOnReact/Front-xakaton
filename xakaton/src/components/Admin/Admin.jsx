import React from 'react';
import {NavLink} from "react-router-dom";
import Header from "../Header/Header";
import  "./admin.css"

const Admin = () => {
    return (
        <>
           <Header />

            <table className="admin-catalogs">
                <tbody>

                <tr style={{borderBottom: "1px solid black"}}>
                    <td  ><h2></h2></td>
                    <td colSpan="2" ><h2>название</h2></td>
                    <td><h2>тип</h2></td>
                    <td><h2>доступ</h2></td>
                    <td><h2>добавлено</h2></td>
                </tr>

                <tr className='admin-catalogs-list-item' >
                    <td ><input type="checkbox" name="" id=""/></td>
                    <td colSpan="2" >Школьная программа за 9 класс</td>
                    <td>docx</td>
                    <td>Индивидуальный</td>
                    <td>15 дек. 2022 г., 19:11</td>
                </tr>
                <tr className='admin-catalogs-list-item'>
                    <td ><input type="checkbox" name="" id=""/></td>
                    <td colSpan="2">Школьная программа за 9 класс</td>
                    <td>docx</td>
                    <td>Индивидуальный</td>
                    <td>15 дек. 2022 г., 19:11</td>
                </tr>
                <tr className='admin-catalogs-list-item'>
                    <td ><input type="checkbox" name="" id=""/></td>
                    <td colSpan="2">Школьная программа за 9 класс</td>
                    <td>docx</td>
                    <td>Индивидуальный</td>
                    <td>15 дек. 2022 г., 19:11</td>
                </tr>
                </tbody>
            </table>
        </>
    );
};

export default Admin;
